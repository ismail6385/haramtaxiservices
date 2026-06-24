(function () {
  if (!('modelContext' in navigator)) return;

  var tools = [
    {
      name: 'book_taxi',
      description: 'Book a private taxi or vehicle for transportation in Saudi Arabia. Specify pickup location, destination, travel date, and number of passengers.',
      inputSchema: {
        type: 'object',
        properties: {
          pickup: { type: 'string', description: 'Pickup location (city or address in Saudi Arabia)' },
          destination: { type: 'string', description: 'Destination location (city or address in Saudi Arabia)' },
          date: { type: 'string', description: 'Travel date in YYYY-MM-DD format' },
          passengers: { type: 'number', description: 'Number of passengers (1–17)', default: 1 }
        },
        required: ['pickup', 'destination', 'date']
      },
      execute: async function (args) {
        var params = new URLSearchParams({
          from: args.pickup || '',
          to: args.destination || '',
          date: args.date || '',
          passengers: String(args.passengers || 1)
        });
        window.location.href = '/booking?' + params.toString();
        return { content: [{ type: 'text', text: 'Redirecting to the Haram Taxi booking page.' }] };
      }
    },
    {
      name: 'get_pricing',
      description: 'Browse fixed-rate pricing for taxi routes across Saudi Arabia including Makkah, Madinah, Jeddah airports, and intercity transfers.',
      inputSchema: { type: 'object', properties: {} },
      execute: async function () {
        window.location.href = '/pricing';
        return { content: [{ type: 'text', text: 'Redirecting to the pricing page.' }] };
      }
    },
    {
      name: 'browse_routes',
      description: 'View all available taxi routes between Saudi cities, airports, and holy sites.',
      inputSchema: { type: 'object', properties: {} },
      execute: async function () {
        window.location.href = '/routes';
        return { content: [{ type: 'text', text: 'Redirecting to the routes page.' }] };
      }
    },
    {
      name: 'contact_whatsapp',
      description: 'Open a WhatsApp conversation with Haram Taxi Service to get a quote or make a booking enquiry.',
      inputSchema: {
        type: 'object',
        properties: {
          message: { type: 'string', description: 'Optional pre-filled message for the WhatsApp chat' }
        }
      },
      execute: async function (args) {
        var msg = encodeURIComponent(args.message || 'Salam, I would like to book a taxi.');
        window.open('https://wa.me/966575806733?text=' + msg, '_blank');
        return { content: [{ type: 'text', text: 'Opening WhatsApp chat with Haram Taxi Service.' }] };
      }
    }
  ];

  // Current API: registerTool() — registers tools individually
  if (typeof navigator.modelContext.registerTool === 'function') {
    tools.forEach(function (tool) {
      navigator.modelContext.registerTool(tool);
    });
  }
  // Legacy API: provideContext() — sets all tools at once
  else if (typeof navigator.modelContext.provideContext === 'function') {
    navigator.modelContext.provideContext({ tools: tools });
  }
})();
