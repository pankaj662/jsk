// We are using LoremFlickr to provide guaranteed, beautifully sized images for each vegetable.
// If you'd like to use your own local images, just place them in public/images/ and use "/images/potato.jpg"
import potato from "./image/fresh-organic-potato-plant-field_86639-848.avif";
import tomato from "./image/Tomato.webp";
import watermelon from "./image/Watermelon.jpg";
import onion from "./image/onion.webp";
import mango from "./image/Mango.jpg";
import greenchilis from "./image/Green chilis.jpg";
import grapes from "./image/Grapes.jpg";
import cucumber from "./image/Cucumber.jpg";
import chiku from "./image/Chiku.webp";
import carrot from "./image/Carrot.jpg";
import cantaloupe from "./image/cantaloupe.webp";
import cabbage from "./image/cabbage.webp";
import broccoli from "./image/Broccoli.jpeg";
import brinjal from "./image/Brinjal.webp";

export const vegetablesData = [
  {
    id: 1,
    name: "Potato",
    title: "King of Vegetables",
    category: "Root",
    description:
      'The Potato is one of the most versatile and widely consumed vegetables in the world. Often called the "King of Vegetables," it is a staple in many cultures due to its ability to blend with almost any flavor. They are a rich source of carbohydrates, providing quick energy.',
    gujarati:
      'બટાકાને શાકભાજીનો "રાજા" ગણવામાં આવે છે કારણ કે તે દરેક અન્ય શાકભાજી સાથે સરળતાથી ભળી જાય છે. બટાકા જમીનની અંદર ઉગતા કંદમૂળ છે.',
    image: potato,
    color: "#fef3c7",
    icon: "🥔",
  },
  {
    id: 2,
    name: "Onion",
    title: "The Fundamental Ingredient",
    category: "Root",
    description:
      'The Onion is a fundamental ingredient in kitchens worldwide. Known for its pungent aroma and sharp flavor, it serves as the base for countless savory dishes, providing depth and "umami" to everything from soups to curries. They are low in calories but high in Vitamin C, B6, and antioxidants.',
    gujarati:
      'ડુંગળી એ ભારતીય રસોઈનો એક અવિભાજ્ય હિસ્સો છે. તેને ઘણીવાર "ગરીબોની કસ્તૂરી" તરીકે પણ ઓળખવામાં આવે છે. ડુંગળી ઠંડી પ્રકૃતિની માનવામાં આવે છે.',
    image: onion,
    color: "#f3e8ff",
    icon: "🧅",
  },
  {
    id: 3,
    name: "Cucumber",
    title: "Ultimate Refreshment",
    category: "Fruit Veggie",
    description:
      "The Cucumber is the ultimate refreshing vegetable, especially during hot summer months. Known for its high water content, it is scientifically classified as a fruit but is treated as a vegetable in the culinary world.",
    gujarati:
      "કાકડી એ ઉનાળામાં શરીરને ઠંડક આપતું સર્વશ્રેષ્ઠ શાકભાજી છે. તે વેલા પર થતું ફળ છે જેનો શાકભાજી તરીકે ઉપયોગ થાય છે.",
    image: cucumber,
    color: "#dcfce7",
    icon: "🥒",
  },
  {
    id: 4,
    name: "Broccoli",
    title: "Nutritional Powerhouse",
    category: "Leafy",
    description:
      'The Broccoli is a nutritional powerhouse often referred to as a "superfood." While it looks like a miniature tree, it is actually a member of the cabbage family and is prized for its dense concentration of vitamins.',
    gujarati:
      'બ્રોકોલી એ ફ્લાવર (કોબીજ) ના પરિવારનું એક વિદેશી શાકભાજી છે, જે હવે ભારતમાં પણ ખૂબ લોકપ્રિય બન્યું છે. તેને તેની પોષક શક્તિને કારણે "સુપરફૂડ" કહેવામાં આવે છે.',
    image: broccoli,
    color: "#d1fae5",
    icon: "🥦",
  },
  {
    id: 5,
    name: "Cabbage",
    title: "Leafy Classic",
    category: "Leafy",
    description:
      "Cabbage is a popular leafy green (or purple) vegetable that belongs to the Brassica family. It is a cool-season crop that has been cultivated for thousands of years.",
    gujarati:
      "કોબીજ એ એક પાંદડાવાળું શાકભાજી છે જે તેના ગોળ આકાર અને સ્તરો માટે જાણીતું છે. ગુજરાતી રસોઈમાં તેનો ઉપયોગ ખૂબ જ પ્રમાણમાં થાય છે.",
    image: cabbage,
    color: "#ecfccb",
    icon: "🥬",
  },
  {
    id: 6,
    name: "Green Chillies",
    title: "Fiery Heart",
    category: "Spicy",
    description:
      "Green Chillies are the fiery heart of many global cuisines, especially in India. They are not just used for their spicy heat but also for the incredible depth of flavor and health benefits they provide.",
    gujarati:
      "લીલા મરચા વિના ભારતીય અને ખાસ કરીને ગુજરાતી રસોઈ અધૂરી ગણાય છે. તે માત્ર તીખાશ જ નથી આપતા, પણ સ્વાસ્થ્ય માટે પણ ખૂબ ગુણકારી છે.",
    image: greenchilis,
    color: "#bbf7d0",
    icon: "🌶️",
  },
  {
    id: 7,
    name: "Tomato",
    title: "Bright & Juicy",
    category: "Fruit Veggie",
    description:
      "The tomato is a bright red, juicy vegetable (botanically a fruit) belonging to the nightshade family. It is a staple in almost every cuisine due to its acidity and sweetness.",
    gujarati:
      "ટામેટાં વગરની ગુજરાતી રસોઈની કલ્પના કરવી અશક્ય છે. તે તેના લાલ રંગ અને ખાટા-મીઠા સ્વાદ માટે જાણીતું છે.",
    image: tomato,
    color: "#fee2e2",
    icon: "🍅",
  },
  {
    id: 8,
    name: "Brinjal",
    title: "Nightshade King",
    category: "Fruit Veggie",
    description:
      "The Brinjal (also known as Eggplant or Aubergine) is a member of the nightshade family and comes in various shapes, sizes, and colors — from deep purple and green to white.",
    gujarati:
      'ગુજરાતમાં રીંગણને શાકભાજીનો "રાજા" માનવામાં આવે છે. શિયાળો આવતા જ દરેક ગુજરાતી ઘરમાં રીંગણની બોલબાલા વધી જાય છે.',
    image: brinjal,
    color: "#fae8ff",
    icon: "🍆",
  },
  {
    id: 9,
    name: "Carrot",
    title: "Vibrant Root",
    category: "Root",
    description:
      'The Carrot is a root vegetable celebrated for its vibrant color and natural sweetness. In Gujarat, it is especially popular during the winter season when the red "Desi" varieties flood the local markets.',
    gujarati:
      "ગાજર એ જમીનની અંદર થતું કંદમૂળ છે, જે તેના સ્વાદ અને સ્વાસ્થ્યપ્રદ ગુણો માટે જાણીતું છે. ગુજરાતમાં શિયાળા દરમિયાન લાલ ચટક ગાજર ખાવાનો મહિમા વધુ છે.",
    image: carrot,
    color: "#ffedd5",
    icon: "🥕",
  },
  {
    id: 10,
    name: "Mango",
    title: "King of Fruits",
    category: "Fruity",
    description:
      'While the Mango is famously known as the "King of Fruits," in its raw (unripe) form, it is treated as a highly versatile vegetable in Indian and Gujarati kitchens.',
    gujarati:
      "ગુજરાતમાં કાચી કેરીને માત્ર ફળ નહીં, પણ રસોઈના એક મહત્વના ભાગ તરીકે જોવામાં આવે છે. ઉનાળાની શરૂઆત થતા જ દરેક ગુજરાતી ઘરમાં કાચી કેરીનું આગમન થઈ જાય છે.",
    image: mango,
    color: "#fef9c3",
    icon: "🥭",
  },
  {
    id: 11,
    name: "Watermelon",
    title: "Summer Refresher",
    category: "Fruity",
    description:
      "While Watermelon is globally celebrated as a refreshing summer fruit, it belongs to the Cucurbitaceae family, making it a botanical relative of vegetables like cucumbers, pumpkins, and squash. In many cultures, including parts of India, the rind and even the seeds are cooked and eaten as a vegetable.",
    gujarati:
      "તડબૂચ એ ઉનાળાનું સૌથી લોકપ્રિય ફળ છે, પરંતુ વનસ્પતિશાસ્ત્રની દ્રષ્ટિએ તે કાકડી અને કોળાના પરિવારનું હોવાથી તેને શાકભાજીના વર્ગમાં પણ ગણવામાં આવે છે.",
    image: watermelon,
    color: "#fecdd3",
    icon: "🍉",
  },
  {
    id: 12,
    name: "Grapes",   
    title: "Vine Berries",  
    category: "Fruity",
    description:
      "Grapes are small, round or oval berries that grow in clusters on woody vines. While they are usually eaten fresh, they are also used in cooking to enhance flavors in savory dishes and spice blends.",
    gujarati:
      "દ્રાક્ષ એ વેલા પર થતું ખૂબ જ લોકપ્રિય ફળ છે, પરંતુ રસોઈમાં તેનો ઉપયોગ સ્વાદ વધારવા માટે શાકભાજી કે મસાલા તરીકે પણ કરવામાં આવે છે.",
    image: grapes,
    color: "#ede9fe",
    icon: "🍇",
  },
  {
    id: 13,
    name: "Cantaloupe",
    title: "Sweet Muskmelon",
    category: "Fruity",
    description:
      "The Cantaloupe, commonly known as Muskmelon, is a refreshing summer staple. While it is predominantly enjoyed as a sweet fruit, it belongs to the same botanical family as cucumbers and gourds (Cucurbitaceae), making it a close relative of many common vegetables.",
    gujarati:
      "શક્કરટેટી એ ઉનાળાનું એક અત્યંત લોકપ્રિય અને સ્વાદિષ્ટ ફળ છે. તે તેના મીઠા સ્વાદ અને મનમોહક સુગંધ માટે જાણીતું છે.",
    image: cantaloupe,
    color: "#fef3c7",
    icon: "🍈",
  },
  {
    id: 14,
    name: "Chiku",
    title: "Sweet Sapodilla",
    category: "Fruity",
    description:
      "While the Chiku (Sapodilla) is primarily celebrated as a sweet, malty fruit, it belongs to the Sapotaceae family. In its raw (unripe) stage, it is hard and contains high levels of tannin, but once ripe, it becomes a favorite ingredient in desserts and shakes across Gujarat.",
    gujarati:
      "ગુજરાતમાં ચીકુ એ ખૂબ જ પ્રિય ફળ છે. ખાસ કરીને દક્ષિણ ગુજરાતના ચીકુ તેના મીઠા સ્વાદ અને ગુણવત્તા માટે વિશ્વભરમાં પ્રખ્યાત છે.",
    image: chiku,
    color: "#e8d5b7",
    icon: "",
  },
];
