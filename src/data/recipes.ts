export const recipes = [
    {
        id: "1",
        name: "Spaghetti Bolognese",
        image: "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/easy_spaghetti_bolognese_93639_16x9.jpg",
        prepTime: "35 min",
        difficulty: "Fácil",
        portions: 4,
        ingredients: [
            "400 g de pasta",
            "300 g de carne molida",
            "1 cebolla",
            "Salsa de tomate"
        ],
        steps: [
            "Cocinar la pasta.",
            "Preparar la salsa.",
            "Mezclar con la pasta.",
            "Servir caliente."
        ],
        createdAt: new Date()
    },

    {
        id: "2",
        name: "Chicken Caesar Salad",
        image: "https://www.hauteandhealthyliving.com/wp-content/uploads/2024/02/healthy-chicken-caesar-salad-12-1.jpg",
        prepTime: "20 min",
        difficulty: "Fácil",
        portions: 2,
        ingredients: [
            "Lechuga romana",
            "Pollo",
            "Queso parmesano",
            "Crutones"
        ],
        steps: [
            "Asar el pollo.",
            "Lavar la lechuga.",
            "Mezclar ingredientes.",
            "Agregar aderezo."
        ],
        createdAt: new Date()
    },

    {
        id: "3",
        name: "Beef Tacos",
        image: "https://thehungrywaitress.com/wp-content/uploads/2024/02/shredded-beef-thumbnail.jpg",
        prepTime: "25 min",
        difficulty: "Media",
        portions: 4,
        ingredients: [
            "Tortillas",
            "Carne molida",
            "Tomate",
            "Queso"
        ],
        steps: [
            "Cocinar la carne.",
            "Calentar tortillas.",
            "Armar tacos.",
            "Servir."
        ],
        createdAt: new Date()
    },

    {
        id: "4",
        name: "Vegetable Stir Fry",
        image: "https://lifemadesimplebakes.com/wp-content/uploads/2021/07/Vegetable-Stir-Fry-square-1200.jpg",
        prepTime: "18 min",
        difficulty: "Fácil",
        portions: 3,
        ingredients: [
            "Brócoli",
            "Zanahoria",
            "Pimentón",
            "Salsa de soya"
        ],
        steps: [
            "Cortar verduras.",
            "Saltear.",
            "Agregar salsa.",
            "Servir."
        ],
        createdAt: new Date()
    },

    {
        id: "5",
        name: "Chocolate Brownies",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVd0hdia1oJJ8cYnSUJPwYYYny01NHNH2T5g&s",
        prepTime: "45 min",
        difficulty: "Media",
        portions: 8,
        ingredients: [
            "Chocolate",
            "Harina",
            "Huevos",
            "Azúcar"
        ],
        steps: [
            "Mezclar ingredientes.",
            "Hornear.",
            "Dejar enfriar.",
            "Cortar."
        ],
        createdAt: new Date()
    },

    {
        id: "6",
        name: "Margherita Pizza",
        image: "https://www.heart.org/-/media/AHA/Recipe/Recipe-Images/Classic-Margherita-Pizza-with-Whole-Wheat-Pizza-Crust.jpg?h=922&w=1200&sc_lang=en&hash=BC11D7BCD33CFAD57790BB8779E746CF",
        prepTime: "40 min",
        difficulty: "Media",
        portions: 4,
        ingredients: [
            "Masa para pizza",
            "Salsa de tomate",
            "Mozzarella",
            "Albahaca"
        ],
        steps: [
            "Extender la masa.",
            "Agregar salsa y queso.",
            "Hornear.",
            "Decorar con albahaca."
        ],
        createdAt: new Date()
    },

    {
        id: "7",
        name: "Pancakes",
        image: "https://www.recipetineats.com/tachyon/2017/06/Pancakes-SQ.jpg",
        prepTime: "20 min",
        difficulty: "Fácil",
        portions: 4,
        ingredients: [
            "Harina",
            "Leche",
            "Huevos",
            "Polvo para hornear"
        ],
        steps: [
            "Preparar la mezcla.",
            "Calentar la sartén.",
            "Cocinar ambos lados.",
            "Servir con miel."
        ],
        createdAt: new Date()
    },

    {
        id: "8",
        name: "Grilled Salmon",
        image: "https://www.foodiecrush.com/wp-content/uploads/2019/05/Grilled-Salmon-foodiecrush.com-023.jpg",
        prepTime: "30 min",
        difficulty: "Media",
        portions: 2,
        ingredients: [
            "Salmón",
            "Limón",
            "Aceite de oliva",
            "Pimienta"
        ],
        steps: [
            "Sazonar el salmón.",
            "Calentar la parrilla.",
            "Cocinar por ambos lados.",
            "Servir con limón."
        ],
        createdAt: new Date()
    },

    {
        id: "9",
        name: "Creamy Mushroom Soup",
        image: "https://thecozyapron.com/wp-content/uploads/2019/08/cream-of-mushoom-soup_thecozyapron_1.jpg",
        prepTime: "35 min",
        difficulty: "Fácil",
        portions: 4,
        ingredients: [
            "Champiñones",
            "Crema de leche",
            "Cebolla",
            "Caldo de verduras"
        ],
        steps: [
            "Sofreír la cebolla.",
            "Agregar champiñones.",
            "Incorporar el caldo.",
            "Licuar y servir."
        ],
        createdAt: new Date()
    },

    {
        id: "10",
        name: "Classic Cheeseburger",
        image: "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/vmbwklef/67cf416d-f2e8-4c48-a6cf-ea92c92febb6.jpg",
        prepTime: "25 min",
        difficulty: "Fácil",
        portions: 2,
        ingredients: [
            "Pan para hamburguesa",
            "Carne de res",
            "Queso cheddar",
            "Lechuga y tomate"
        ],
        steps: [
            "Cocinar la carne.",
            "Derretir el queso.",
            "Armar la hamburguesa.",
            "Servir con papas fritas."
        ],
        createdAt: new Date()
    },

    {
        id: "11",
        name: "Lasagña",
        image: "https://static01.nyt.com/images/2023/08/31/multimedia/RS-Lasagna-hkjl/RS-Lasagna-hkjl-facebookJumbo.jpg",
        prepTime: "1 h 15 min",
        difficulty: "Media",
        portions: 6,
        ingredients: [
            "Láminas de lasaña",
            "Carne molida",
            "Salsa bechamel",
            "Queso mozzarella"
        ],
        steps: [
            "Preparar la carne.",
            "Armar las capas de la lasaña.",
            "Cubrir con queso.",
            "Hornear durante 45 minutos."
        ],
        createdAt: new Date()
    },

    {
        id: "12",
        name: "Sushi Rolls",
        image: "https://tatyanaseverydayfood.com/wp-content/uploads/2014/04/Spicy-Salmon-Sushi-Roll.jpg",
        prepTime: "50 min",
        difficulty: "Difícil",
        portions: 4,
        ingredients: [
            "Arroz para sushi",
            "Alga nori",
            "Salmón",
            "Aguacate"
        ],
        steps: [
            "Preparar el arroz.",
            "Extender el arroz sobre el alga.",
            "Agregar el relleno.",
            "Enrollar y cortar."
        ],
        createdAt: new Date()
    },

    {
        id: "13",
        name: "Ramen",
        image: "https://www.tasteofhome.com/wp-content/uploads/2026/02/EXPS_TOHcom26_280985_MD_P2_01_16_10756.jpg",
        prepTime: "55 min",
        difficulty: "Media",
        portions: 2,
        ingredients: [
            "Fideos ramen",
            "Caldo",
            "Cerdo",
            "Huevo"
        ],
        steps: [
            "Preparar el caldo.",
            "Cocinar los fideos.",
            "Agregar carne y huevo.",
            "Servir caliente."
        ],
        createdAt: new Date()
    },

    {
        id: "14",
        name: "Paella Valenciana",
        image: "https://www.factorgastronomic.com/wp-content/uploads/2024/10/paella-valenciana-1.jpg",
        prepTime: "1 h",
        difficulty: "Difícil",
        portions: 6,
        ingredients: [
            "Arroz",
            "Pollo",
            "Mariscos",
            "Azafrán"
        ],
        steps: [
            "Preparar el sofrito.",
            "Agregar el arroz.",
            "Incorporar el caldo.",
            "Cocinar hasta que el arroz esté listo."
        ],
        createdAt: new Date()
    },

    {
        id: "15",
        name: "Ceviche Peruano",
        image: "https://www.elespectador.com/resizer/tyGJPN_YmWpagQFeXq_YYOxAKjY=/arc-anglerfish-arc2-prod-elespectador/public/2AVD5Z6Y2ZFWHETPQGCPLMNK4A.jpg",
        prepTime: "25 min",
        difficulty: "Media",
        portions: 4,
        ingredients: [
            "Pescado blanco",
            "Limón",
            "Cebolla morada",
            "Cilantro"
        ],
        steps: [
            "Cortar el pescado.",
            "Marinar con limón.",
            "Agregar cebolla y cilantro.",
            "Servir frío."
        ],
        createdAt: new Date()
    },

    {
        id: "16",
        name: "Club Sandwich",
        image: "https://www.tasteofhome.com/wp-content/uploads/2025/04/Turkey-Club-Sandwich_FT25_278726_EC_0408_5.jpg?fit=700,1024",
        prepTime: "15 min",
        difficulty: "Fácil",
        portions: 2,
        ingredients: [
            "Pan tajado",
            "Jamón",
            "Queso",
            "Tomate"
        ],
        steps: [
            "Tostar el pan.",
            "Agregar los ingredientes.",
            "Cortar en triángulos.",
            "Servir."
        ],
        createdAt: new Date()
    },

    {
        id: "17",
        name: "Greek Salad",
        image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Dad-s-Greek-Salad_EXPS_TOHAM25_189184_P2_MD_03_01_7b-e1724861544942.jpg",
        prepTime: "15 min",
        difficulty: "Fácil",
        portions: 3,
        ingredients: [
            "Tomate",
            "Pepino",
            "Queso feta",
            "Aceitunas"
        ],
        steps: [
            "Lavar las verduras.",
            "Cortarlas.",
            "Agregar queso y aceitunas.",
            "Aliñar con aceite de oliva."
        ],
        createdAt: new Date()
    },

    {
        id: "18",
        name: "Butter Chicken",
        image: "https://www.giallozafferano.es/images/286-28604/butter-chicken_1200x800.jpg",
        prepTime: "45 min",
        difficulty: "Media",
        portions: 4,
        ingredients: [
            "Pollo",
            "Crema",
            "Tomate",
            "Garam masala"
        ],
        steps: [
            "Marinar el pollo.",
            "Preparar la salsa.",
            "Cocinar el pollo.",
            "Servir con arroz."
        ],
        createdAt: new Date()
    },

    {
        id: "19",
        name: "Fish and Chips",
        image: "https://static.toiimg.com/thumb/59736398.cms?imgsize=446280&width=800&height=800",
        prepTime: "35 min",
        difficulty: "Media",
        portions: 2,
        ingredients: [
            "Pescado",
            "Papas",
            "Harina",
            "Aceite"
        ],
        steps: [
            "Empanizar el pescado.",
            "Freír el pescado.",
            "Freír las papas.",
            "Servir caliente."
        ],
        createdAt: new Date()
    },

    {
        id: "20",
        name: "Apple Pie",
        image: "https://ohsweetbasil.com/wp-content/uploads/classic-apple-pie-recipe-10-1.jpg",
        prepTime: "1 h",
        difficulty: "Media",
        portions: 8,
        ingredients: [
            "Manzanas",
            "Harina",
            "Mantequilla",
            "Canela"
        ],
        steps: [
            "Preparar la masa.",
            "Cortar las manzanas.",
            "Armar el pie.",
            "Hornear durante 45 minutos."
        ],
        createdAt: new Date()
    },

    {
        id: "21",
        name: "Bandeja Paisa",
        image: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/7ZLBIEXDAFEUFB2MXROVEX2DHI.jpg",
        prepTime: "1 h 20 min",
        difficulty: "Media",
        portions: 2,
        ingredients: [
            "Frijoles",
            "Arroz",
            "Carne molida",
            "Chicharrón"
        ],
        steps: [
            "Cocinar los frijoles.",
            "Preparar el arroz.",
            "Freír el chicharrón.",
            "Servir todos los ingredientes juntos."
        ],
        createdAt: new Date()
    },

    {
        id: "22",
        name: "Ajiaco Colombiano",
        image: "https://comedera.com/wp-content/uploads/sites/9/2021/09/ajiaco-colombiano.jpg",
        prepTime: "1 h 30 min",
        difficulty: "Media",
        portions: 6,
        ingredients: [
            "Pollo",
            "Papa criolla",
            "Mazorca",
            "Guascas"
        ],
        steps: [
            "Cocinar el pollo.",
            "Agregar las papas.",
            "Añadir las guascas.",
            "Servir con crema y alcaparras."
        ],
        createdAt: new Date()
    },

    {
        id: "23",
        name: "Arepas con Queso",
        image: "https://www.laylita.com/recetas/wp-content/uploads/2022/08/Arepas-colombianas-de-queso.jpg",
        prepTime: "25 min",
        difficulty: "Fácil",
        portions: 4,
        ingredients: [
            "Harina de maíz",
            "Agua",
            "Queso mozzarella",
            "Mantequilla"
        ],
        steps: [
            "Preparar la masa.",
            "Formar las arepas.",
            "Asarlas.",
            "Agregar queso y servir."
        ],
        createdAt: new Date()
    },

    {
        id: "24",
        name: "Tacos al Pastor",
        image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85",
        prepTime: "40 min",
        difficulty: "Media",
        portions: 4,
        ingredients: [
            "Tortillas",
            "Carne de cerdo",
            "Piña",
            "Cilantro"
        ],
        steps: [
            "Marinar la carne.",
            "Cocinar la carne.",
            "Calentar las tortillas.",
            "Servir con piña y cilantro."
        ],
        createdAt: new Date()
    },

    {
        id: "25",
        name: "Pad Thai",
        image: "https://images.getrecipekit.com/20240402143830-pad-20thai-1.jpg?aspect_ratio=16:9&quality=90&",
        prepTime: "35 min",
        difficulty: "Media",
        portions: 3,
        ingredients: [
            "Fideos de arroz",
            "Camarones",
            "Maní",
            "Salsa Pad Thai"
        ],
        steps: [
            "Cocinar los fideos.",
            "Saltear los camarones.",
            "Agregar la salsa.",
            "Servir con maní."
        ],
        createdAt: new Date()
    },

    {
        id: "26",
        name: "Risotto de Champiñones",
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371",
        prepTime: "45 min",
        difficulty: "Difícil",
        portions: 4,
        ingredients: [
            "Arroz arborio",
            "Champiñones",
            "Caldo",
            "Queso parmesano"
        ],
        steps: [
            "Sofreír los champiñones.",
            "Agregar el arroz.",
            "Añadir el caldo poco a poco.",
            "Incorporar el queso."
        ],
        createdAt: new Date()
    },

    {
        id: "27",
        name: "Bibimbap",
        image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9",
        prepTime: "50 min",
        difficulty: "Media",
        portions: 2,
        ingredients: [
            "Arroz",
            "Carne de res",
            "Zanahoria",
            "Huevo"
        ],
        steps: [
            "Preparar el arroz.",
            "Saltear las verduras.",
            "Cocinar la carne.",
            "Servir con huevo encima."
        ],
        createdAt: new Date()
    },

    {
        id: "28",
        name: "Shawarma de Pollo",
        image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783",
        prepTime: "40 min",
        difficulty: "Media",
        portions: 4,
        ingredients: [
            "Pan pita",
            "Pollo",
            "Lechuga",
            "Salsa de ajo"
        ],
        steps: [
            "Marinar el pollo.",
            "Cocinar el pollo.",
            "Rellenar el pan pita.",
            "Servir con salsa."
        ],
        createdAt: new Date()
    },

    {
        id: "29",
        name: "Empanadas Argentinas",
        image: "https://images.unsplash.com/photo-1608039755401-742074f0548d",
        prepTime: "50 min",
        difficulty: "Media",
        portions: 6,
        ingredients: [
            "Masa para empanadas",
            "Carne molida",
            "Cebolla",
            "Huevo cocido"
        ],
        steps: [
            "Preparar el relleno.",
            "Rellenar las empanadas.",
            "Cerrar los bordes.",
            "Hornear hasta dorar."
        ],
        createdAt: new Date()
    },

    {
        id: "30",
        name: "Pho Vietnamita",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246",
        prepTime: "1 h 40 min",
        difficulty: "Difícil",
        portions: 4,
        ingredients: [
            "Caldo de res",
            "Fideos de arroz",
            "Carne",
            "Hierbas frescas"
        ],
        steps: [
            "Preparar el caldo.",
            "Cocinar los fideos.",
            "Agregar la carne.",
            "Servir con hierbas frescas."
        ],
        createdAt: new Date()
    },

    {
        id: "31",
        name: "French Toast",
        image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929",
        prepTime: "20 min",
        difficulty: "Fácil",
        portions: 2,
        ingredients: [
            "Pan tajado",
            "Huevos",
            "Leche",
            "Canela"
        ],
        steps: [
            "Batir huevos con leche.",
            "Remojar el pan.",
            "Dorar en mantequilla.",
            "Servir con miel."
        ],
        createdAt: new Date()
    },

    {
        id: "32",
        name: "Avocado Toast",
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d",
        prepTime: "10 min",
        difficulty: "Fácil",
        portions: 2,
        ingredients: [
            "Pan integral",
            "Aguacate",
            "Sal",
            "Pimienta"
        ],
        steps: [
            "Tostar el pan.",
            "Triturar el aguacate.",
            "Untar sobre el pan.",
            "Agregar sal y pimienta."
        ],
        createdAt: new Date()
    },

    {
        id: "33",
        name: "Omelette de Queso",
        image: "https://images.unsplash.com/photo-1510693206972-df098062cb71",
        prepTime: "15 min",
        difficulty: "Fácil",
        portions: 1,
        ingredients: [
            "Huevos",
            "Queso mozzarella",
            "Mantequilla",
            "Sal"
        ],
        steps: [
            "Batir los huevos.",
            "Calentar la sartén.",
            "Agregar el queso.",
            "Doblar el omelette."
        ],
        createdAt: new Date()
    },

    {
        id: "34",
        name: "Mojito",
        image: "https://images.unsplash.com/photo-1551751299-1b51cab2694c",
        prepTime: "10 min",
        difficulty: "Fácil",
        portions: 1,
        ingredients: [
            "Hierbabuena",
            "Limón",
            "Azúcar",
            "Agua con gas"
        ],
        steps: [
            "Machacar la hierbabuena.",
            "Agregar limón.",
            "Añadir azúcar.",
            "Completar con agua con gas."
        ],
        createdAt: new Date()
    },

    {
        id: "35",
        name: "Strawberry Smoothie",
        image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc",
        prepTime: "8 min",
        difficulty: "Fácil",
        portions: 2,
        ingredients: [
            "Fresas",
            "Leche",
            "Yogur",
            "Miel"
        ],
        steps: [
            "Agregar ingredientes a la licuadora.",
            "Licuar.",
            "Servir frío.",
            "Decorar con fresas."
        ],
        createdAt: new Date()
    },

    {
        id: "36",
        name: "Tiramisu",
        image: "https://www.micheldumas.com/wp-content/uploads/2025/05/tiramisu1-ezgif.com-jpg-to-webp-converter-1-1.webp",
        prepTime: "35 min",
        difficulty: "Media",
        portions: 4,
        ingredients: [
            "Pasta fettuccine",
            "Pollo",
            "Crema de leche",
            "Queso parmesano"
        ],
        steps: [
            "Cocinar la pasta.",
            "Preparar la salsa Alfredo.",
            "Cocinar el pollo.",
            "Mezclar y servir."
        ],
        createdAt: new Date()
    },

    {
        id: "37",
        name: "BBQ Ribs",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947",
        prepTime: "2 h",
        difficulty: "Difícil",
        portions: 4,
        ingredients: [
            "Costillas de cerdo",
            "Salsa BBQ",
            "Sal",
            "Pimienta"
        ],
        steps: [
            "Sazonar las costillas.",
            "Hornear lentamente.",
            "Agregar salsa BBQ.",
            "Gratinar antes de servir."
        ],
        createdAt: new Date()
    },

    {
        id: "38",
        name: "Chicken Curry",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
        prepTime: "40 min",
        difficulty: "Media",
        portions: 4,
        ingredients: [
            "Pollo",
            "Leche de coco",
            "Curry",
            "Cebolla"
        ],
        steps: [
            "Sofreír la cebolla.",
            "Agregar el pollo.",
            "Añadir curry y leche de coco.",
            "Servir con arroz."
        ],
        createdAt: new Date()
    },

    {
        id: "39",
        name: "Falafel",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
        prepTime: "45 min",
        difficulty: "Media",
        portions: 4,
        ingredients: [
            "Garbanzos",
            "Ajo",
            "Perejil",
            "Comino"
        ],
        steps: [
            "Procesar los ingredientes.",
            "Formar bolitas.",
            "Freír.",
            "Servir con salsa de yogur."
        ],
        createdAt: new Date()
    },

    {
        id: "40",
        name: "Mac and Cheese",
        image: "https://www.yummytummyaarthi.com/wp-content/uploads/2024/01/mac-and-cheese-1.jpg",
        prepTime: "30 min",
        difficulty: "Fácil",
        portions: 4,
        ingredients: [
            "Pasta",
            "Queso cheddar",
            "Leche",
            "Mantequilla"
        ],
        steps: [
            "Cocinar la pasta.",
            "Preparar la salsa de queso.",
            "Mezclar.",
            "Servir caliente."
        ],
        createdAt: new Date()
    },

    {
        id: "41",
        name: "Donuts Glaseadas",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
        prepTime: "1 h",
        difficulty: "Media",
        portions: 12,
        ingredients: [
            "Harina",
            "Levadura",
            "Azúcar",
            "Glaseado"
        ],
        steps: [
            "Preparar la masa.",
            "Dejar reposar.",
            "Freír.",
            "Cubrir con glaseado."
        ],
        createdAt: new Date()
    },

    {
        id: "42",
        name: "Red Velvet Cake",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
        prepTime: "1 h 20 min",
        difficulty: "Difícil",
        portions: 10,
        ingredients: [
            "Harina",
            "Cacao",
            "Colorante rojo",
            "Queso crema"
        ],
        steps: [
            "Preparar la mezcla.",
            "Hornear.",
            "Preparar el frosting.",
            "Decorar."
        ],
        createdAt: new Date()
    },

    {
        id: "43",
        name: "Chocolate Milkshake",
        image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc",
        prepTime: "5 min",
        difficulty: "Fácil",
        portions: 2,
        ingredients: [
            "Helado de chocolate",
            "Leche",
            "Crema batida",
            "Chocolate"
        ],
        steps: [
            "Licuar el helado con leche.",
            "Servir.",
            "Agregar crema.",
            "Decorar con chocolate."
        ],
        createdAt: new Date()
    },

    {
        id: "44",
        name: "Banana Bread",
        image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec",
        prepTime: "1 h",
        difficulty: "Media",
        portions: 8,
        ingredients: [
            "Bananos",
            "Harina",
            "Huevos",
            "Mantequilla"
        ],
        steps: [
            "Mezclar ingredientes.",
            "Verter en molde.",
            "Hornear.",
            "Dejar enfriar."
        ],
        createdAt: new Date()
    },

    {
        id: "45",
        name: "Mushroom Pizza",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
        prepTime: "35 min",
        difficulty: "Media",
        portions: 4,
        ingredients: [
            "Masa para pizza",
            "Champiñones",
            "Mozzarella",
            "Salsa de tomate"
        ],
        steps: [
            "Preparar la masa.",
            "Agregar ingredientes.",
            "Hornear.",
            "Servir."
        ],
        createdAt: new Date()
    },

    {
        id: "46",
        name: "S'Mores",
        image: "https://i.blogs.es/c6f09d/como-hacer-malteada-chocolate-cremosa-receta-facil-mundo/840_560.jpg",
        prepTime: "15 min",
        difficulty: "Fácil",
        portions: 2,
        ingredients: [
            "Pan para hot dog",
            "Salchicha",
            "Salsa de tomate",
            "Mostaza"
        ],
        steps: [
            "Cocinar la salchicha.",
            "Calentar el pan.",
            "Armar el hot dog.",
            "Agregar salsas."
        ],
        createdAt: new Date()
    },

    {
        id: "47",
        name: "Greek Yogurt Parfait",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
        prepTime: "8 min",
        difficulty: "Fácil",
        portions: 1,
        ingredients: [
            "Yogur griego",
            "Granola",
            "Fresas",
            "Miel"
        ],
        steps: [
            "Agregar yogur al vaso.",
            "Añadir granola.",
            "Agregar frutas.",
            "Servir."
        ],
        createdAt: new Date()
    },

    {
        id: "48",
        name: "Caprese Salad",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
        prepTime: "12 min",
        difficulty: "Fácil",
        portions: 2,
        ingredients: [
            "Tomate",
            "Mozzarella",
            "Albahaca",
            "Aceite de oliva"
        ],
        steps: [
            "Cortar tomate y queso.",
            "Acomodar en un plato.",
            "Agregar albahaca.",
            "Aliñar con aceite."
        ],
        createdAt: new Date()
    },

    {
        id: "49",
        name: "Blueberry Muffins",
        image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa",
        prepTime: "35 min",
        difficulty: "Media",
        portions: 12,
        ingredients: [
            "Harina",
            "Arándanos",
            "Huevos",
            "Azúcar"
        ],
        steps: [
            "Preparar la mezcla.",
            "Agregar arándanos.",
            "Hornear.",
            "Dejar enfriar."
        ],
        createdAt: new Date()
    },

    {
        id: "50",
        name: "Tiramisu",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9",
        prepTime: "50 min",
        difficulty: "Media",
        portions: 8,
        ingredients: [
            "Queso mascarpone",
            "Bizcochos",
            "Café",
            "Cacao en polvo"
        ],
        steps: [
            "Preparar la crema.",
            "Remojar los bizcochos.",
            "Armar por capas.",
            "Refrigerar antes de servir."
        ],
        createdAt: new Date()
    },
];