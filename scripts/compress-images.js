const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');

async function compressImages() {
    const files = fs.readdirSync(publicDir).filter(f => /\.(png|jpg|jpeg)$/i.test(f));

    let totalBefore = 0;
    let totalAfter = 0;

    for (const file of files) {
        const filePath = path.join(publicDir, file);
        const statBefore = fs.statSync(filePath).size;
        totalBefore += statBefore;

        const tmpPath = filePath + '.tmp';
        const ext = path.extname(file).toLowerCase();

        try {
            if (ext === '.png') {
                await sharp(filePath)
                    .png({ quality: 85, compressionLevel: 9, effort: 10 })
                    .toFile(tmpPath);
            } else {
                await sharp(filePath)
                    .jpeg({ quality: 82, mozjpeg: true })
                    .toFile(tmpPath);
            }

            const statAfter = fs.statSync(tmpPath).size;

            if (statAfter < statBefore) {
                fs.renameSync(tmpPath, filePath);
                const saved = ((statBefore - statAfter) / statBefore * 100).toFixed(1);
                totalAfter += statAfter;
                console.log(`✓ ${file}: ${(statBefore/1024).toFixed(0)}KB → ${(statAfter/1024).toFixed(0)}KB (-${saved}%)`);
            } else {
                fs.unlinkSync(tmpPath);
                totalAfter += statBefore;
                console.log(`= ${file}: ${(statBefore/1024).toFixed(0)}KB (already optimal)`);
            }
        } catch (err) {
            if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
            totalAfter += statBefore;
            console.error(`✗ ${file}: ${err.message}`);
        }
    }

    const totalSaved = totalBefore - totalAfter;
    console.log(`\nTotal: ${(totalBefore/1024/1024).toFixed(2)}MB → ${(totalAfter/1024/1024).toFixed(2)}MB (saved ${(totalSaved/1024).toFixed(0)}KB)`);
}

compressImages().catch(console.error);
