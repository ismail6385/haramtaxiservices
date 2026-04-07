const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../lib/blogData.ts');
let content = fs.readFileSync(filePath, 'utf8');

const genericFaqs = [
    {
        question: "Are there any hidden charges like tolls or parking?",
        answer: "No, our prices are completely all-inclusive. This covers fuel, tolls (including the Makkah road fees), parking, and VAT."
    },
    {
        question: "Do you provide child car seats for families?",
        answer: "Yes, we offer complimentary child seats upon request. Please specify the number and age of children during your booking."
    },
    {
        question: "Is the booking price per person or per vehicle?",
        answer: "All our rates are per vehicle, not per person. This makes our private transfers highly cost-effective for families and groups."
    },
    {
        question: "Can I change my pickup time or date after booking?",
        answer: "Yes, you can modify your booking free of charge up to 24 hours before the scheduled pickup time."
    },
    {
        question: "Are the chauffeurs bilingual and professional?",
        answer: "Absolutely. All our drivers are professionally trained, experienced on Saudi highways, and speak both Arabic and English."
    },
    {
        question: "How will I find my driver at the airport?",
        answer: "Your chauffeur will wait at the arrivals hall exit with a personalized name board. We also share the driver's contact details via WhatsApp 2 hours before arrival."
    },
    {
        question: "What happens if my flight is delayed?",
        answer: "We track all flights in real-time. If your flight is delayed, your pickup time is automatically adjusted at no extra cost to you."
    },
    {
        question: "Where is the meeting point at Jeddah Airport?",
        answer: "The meet and greet point is specifically at the International Arrivals exit gate, near the information desk."
    },
    {
        question: "Why is pre-booking transport in KSA important?",
        answer: "Pre-booking guarantees a fixed rate, a professional driver waiting for you at arrivals, and eliminates the stress of negotiating with local taxis after a long flight."
    },
    {
        question: "Do you offer flight tracking for airport pickups?",
        answer: "Yes, our dispatch team actively monitors your flight status. If your flight is delayed, we automatically adjust your driver's arrival time at no extra cost."
    }
];

let updatedCount = 0;

let updatedContent = content.replace(/faqs:\s*\[([\s\S]*?)\]/g, (match, faqsInner) => {
    // Count existing questions
    const existingCount = (faqsInner.match(/question:/g) || []).length;
    
    if (existingCount > 0 && existingCount < 10) {
        let toAdd = 10 - existingCount;
        
        let faqsInnerTrimmed = faqsInner.trimEnd();
        // Remove trailing commas if present
        if (faqsInnerTrimmed.endsWith(',')) {
             faqsInnerTrimmed = faqsInnerTrimmed.slice(0, -1);
        }
        // Also remove trailing whitespace around the last brace
        faqsInnerTrimmed = faqsInnerTrimmed.replace(/\s*$/, '');
        
        // Find which generic FAQs to add avoiding duplicates
        let additions = [];
        for (let i = 0; i < genericFaqs.length && additions.length < toAdd; i++) {
            if (!faqsInner.includes(genericFaqs[i].question)) {
                additions.push(`            {
                question: "${genericFaqs[i].question}",
                answer: "${genericFaqs[i].answer}"
            }`);
            }
        }
        
        updatedCount++;
        return `faqs: [
${faqsInnerTrimmed},
${additions.join(',\n')}
        ]`;
    }
    
    // If it has 0, we can add all 10
    if (existingCount === 0) {
        let additions = genericFaqs.map(faq => `            {
                question: "${faq.question}",
                answer: "${faq.answer}"
            }`);
        updatedCount++;
        return `faqs: [
${additions.join(',\n')}
        ]`;
    }
    
    return match; // return as is if 10 or more
});

// Extra step to fix any potential syntax errors created such as double commas
updatedContent = updatedContent.replace(/\},\s*,\s*\{/g, '},\n            {');

fs.writeFileSync(filePath, updatedContent);
console.log(`Successfully updated ${updatedCount} blogs with missing FAQs to make them 10 each.`);
