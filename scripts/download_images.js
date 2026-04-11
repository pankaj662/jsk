import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, '../public/images');

const vegetables = [
  { name: "Potato", url: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Patates.jpg" },
  { name: "Onion", url: "https://upload.wikimedia.org/wikipedia/commons/2/25/Onion_on_White.JPG" },
  { name: "Cucumber", url: "https://upload.wikimedia.org/wikipedia/commons/9/96/ARS_cucumber.jpg" },
  { name: "Broccoli", url: "https://upload.wikimedia.org/wikipedia/commons/0/03/Broccoli_and_cross_section_edit.jpg" },
  { name: "Cabbage", url: "https://upload.wikimedia.org/wikipedia/commons/6/6f/GreenCabbage.jpg" },
  { name: "GreenChillies", url: "https://upload.wikimedia.org/wikipedia/commons/1/13/Green_chili_pepper.jpg" },
  { name: "Tomato", url: "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg" },
  { name: "Brinjal", url: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Eggplant_display.JPG" },
  { name: "Carrot", url: "https://upload.wikimedia.org/wikipedia/commons/a/a2/CarrotDiversitySuperFoodPeru.jpg" },
  { name: "Mango", url: "https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg" },
  { name: "Watermelon", url: "https://upload.wikimedia.org/wikipedia/commons/4/47/Taiwan_2009_Tainan_City_Fruit_and_Vegetable_Market_Watermelons_FRD_7962.jpg" },
  { name: "Grapes", url: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Table_grapes_on_vine.jpg" },
  { name: "Cantaloupe", url: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Muskmelon.jpg" },
  { name: "Chiku", url: "https://upload.wikimedia.org/wikipedia/commons/5/50/Manilkara_zapota_2.jpg" }
];

// Ensure public/images directory exists
if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirects
        download(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

async function main() {
  console.log('🚀 Starting image downloads...');
  for (const veg of vegetables) {
    const ext = path.extname(veg.url).split('?')[0] || '.jpg';
    const filename = `${veg.name.toLowerCase()}${ext.toLowerCase()}`;
    const dest = path.join(PUBLIC_DIR, filename);
    
    process.stdout.write(`Downloading ${veg.name}... `);
    try {
      await download(veg.url, dest);
      console.log('✅ Done');
    } catch (err) {
      console.log(`❌ Failed: ${err.message}`);
    }
  }
  console.log('\n✨ All downloads complete! Check your /public/images folder.');
}

main();
