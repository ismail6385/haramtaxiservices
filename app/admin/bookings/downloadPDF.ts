export async function downloadPDF(element: HTMLElement, filename: string): Promise<void> {
    const html2canvas = (await import('html2canvas')).default
    const jsPDF = (await import('jspdf')).default

    const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
    })

    const imgData = canvas.toDataURL('image/jpeg', 0.95)
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })

    const pageW = pdf.internal.pageSize.getWidth()   // 210
    const pageH = pdf.internal.pageSize.getHeight()  // 297
    const imgH = (canvas.height * pageW) / canvas.width

    let remaining = imgH
    let offset = 0

    pdf.addImage(imgData, 'JPEG', 0, offset, pageW, imgH)
    remaining -= pageH

    while (remaining > 0) {
        offset -= pageH
        pdf.addPage()
        pdf.addImage(imgData, 'JPEG', 0, offset, pageW, imgH)
        remaining -= pageH
    }

    pdf.save(filename)
}
