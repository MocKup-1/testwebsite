
// Categories data
const categories = [
    { id: 'electronics', name: 'Computer, Phones and Electronics', image: 'electronics.jpeg' },
    { id: 'fashion', name: 'Fashion,Health and Beauty', image: 'health.jpeg' },
    { id: 'home', name: 'Home & Kitchen', image: 'home.jpeg' },
    { id: 'beauty', name: 'Bedroom Accessories', image: 'bed.jpeg' },
    { id: 'sports', name: 'Car accessories', image: 'car.jpeg' },
    { id: 'toys', name: 'kids & Games', image: 'kids.jpeg' }
];









// Products data
const products = [
    
    
    
    
    
    
    
    
    
   {
        id: 'p1',
        name: 'Electric Lunch Box',
        description: 'electric lunch box for carry your lunch.',
        price: 70000,
        originalPrice: 100000,
        category: 'electronics',
        images: ['lunch1.jpeg', 'lunch box2.jpeg', 'lunch box3.jpeg'],
        specifications: [
            { name: 'Screen Sizecolor', value: 'blue, green, orange'},
            { name: 'Material', value: 'plastic outside with stainless steel inserts'},
           
        ]
    },
    {
        id: 'p2',
        name: 'folding travel kettle',
        description: 'Folding kettle for travel.',
        price: 65000,
        originalPrice: 85000,
        category: 'electronics',
        images: [ 'foldk2.jpg', 'foldk3.jpg'],
        specifications: [
            { name: 'color', value: 'blue, greeen, orange, white'},
            { name: 'material', value: 'Heat resistant silicon food grade material'},
        ]
    },
    {
        id: 'p3',
        name: 'gas level indicator',
        description: 'Sticker indicator to indicate gas in the cylinger do not run out of gas.',
        price: 15000,
        originalPrice: 20000,
        category: 'fashion',
        images: [ 'gas2.jpg'],
        specifications: [
            { name: 'Material', value: 'magnetic sticker'},
        ]
    },
    {
        id: 'p4',
        name: 'camping lamp',
        description: 'rechargeable camping lamp, with nob for increasing or reducing light intensity, has hook for easy holding or hanging.',
        price: 45000,
        originalPrice: 65000,
        category: 'home',
        images: ['lamp1.jfif', 'lamp2.jpg', 'lamp3.jpeg'],
        specifications: [
            { name: 'colors', value: 'red, black, grey'},
        ]
    },
    {
        id: 'p5',
        name: 'cold hot fan',
        description: 'electric cold hot fan used for keeping a room cold or hot depending on requirement. you can set it to blow cold or hot air.',
        price: 175000,
        originalPrice: 200000,
        category: 'electronics',
        images: ['warm1.jpeg', 'warm2.jpeg', 'warm3.jpeg'],
        specifications: [
            { name: 'Capacity', value: '2000w'},
        ]
    },
    {
        id: 'p6',
        name: 'laced duvet, bedcover',
        description: '6pc laced duvet set, set contains; 1 duvet, 1 bedsheet, 4 pillowcovers, beautiful, warm and comfortable.',
        price: 165000,
        originalPrice: 200000,
        category: 'beauty',
        images: ['lace1.jpeg', 'lace2.jpeg', 'lace3.jpeg', 'lace4.jpeg'],
        specifications: [
            { name: 'Material', value: 'polycotton'},
            { name: 'colors', value: 'maroon, yellow, green, brown, grey'},
            { name: 'Weight', value: 'heavy type'},
        ]
    },
    {
        id: 'p7',
        name: 'Bag, belts, ties, bras holders',
        description: 'bag holders for help in keeping bags, belts and ties well organized and kept. Available in various colors.',
        price: 6000,
        originalPrice: 10000,
        category: 'home',
        images: ['hang1.jpg', 'hang2.jfif', 'hang3.jfif'],
        specifications: [
            { name: 'colors', value: 'white, grey, blue, yellow, black'},
            { name: 'material', value: 'plastic'},
        ]
    },
    {
        id: 'p8',
        name: 'bathroom antislip mat, piece of 30x30cm',
        description: 'antislip bathroom mat to guard against slipping in bathroom, comes in 30x30cm pieces that can be joined together to cover large areas, strong and durable.',
        price: 10000,
        originalPrice: 15000,
        category: 'home',
        images: ['bmat1.jpeg', 'bmat2.jfif', 'bmat3.jfif', 'bmat4.jfif'],
        specifications: [
            { name: 'colors', value: 'white, black, grey, blue, green, pink' },
        ]
    },
    {
        id: 'p9',
        name: 'Fiber pillows, 01 pair',
        description: 'pair of fiber pillows, soft and comfortable.',
        price: 45000,
        originalPrice: 65000,
        category: 'beauty',
        images: ['fp1.jpeg', 'fp2.jfif', 'fp3.jfif'],
        specifications: [
            { name: 'material', value: 'fiber'},
        ]
    },
    {
        id: 'p10',
        name: 'Back massager, in various colors',
        description: 'Back massager for keeping your back healthy, soothes your back for better feeling, can be used in bed, sofa or car.',
        price: 75000,
        originalPrice: 100000,
        category: 'sports',
        images: ['back1.jpeg', 'back2.jpeg', 'back3.jfif'],
        specifications: [
            { name: 'colors', value: 'blue, pink, purple, green'},
        ]
    },
    {
        id: 'p11',
        name: 'Throw blankets in various colors',
        description: 'Knitted throw blanet for use in sofa, bed, car suitable for women, men, kids, very strong and comfortable.',
        price: 85000,
        originalPrice: 110000,
        category: 'sports',
        images: ['throw1.jpeg', 'throw2.jpeg', 'throw3.jpeg','throw4.jpeg','throw5.jpeg','throw6.jpeg'],
        specifications: [
            { name: 'size', value: '50x60 inch'},
            { name: 'colors', value: 'yellow, pink,white, biege, blue'},
        ]
    },
    {
        id: 'p12',
        name: 'Velvet duvet set, 5x6ft, 6x6ft, 4pc',
        description: '4pc velvet duvet set, set contains; 1 duvet, 1 bedsheet, 2 pillowcases.',
        price: 165000,
        originalPrice: 200000,
        category: 'beauty',
        images: ['velvet2.jpeg', 'velvet3.jpeg','velvet4.jpeg', 'velvet5.jpeg', 'velvet6.jpeg', 'velvet7.jpeg', 'velvet8.jpeg'],
        specifications: [
            { name: 'Size', value: '5x6ft, 6x6ft'},
            { name: 'material', value: 'velvet'},
            { name: 'colors', value: 'maroon, green, yellow, grey, white, purple, pink, brown'},
        ]
    },
    {
        id: 'p13',
        name: 'Electric boil and keep warm kettle, 600ml',
        description: 'Electric kettle that keeps hot after boiling. Saves power and time since there is no reboiling.',
        price: 65000,
        originalPrice: 95000,
        category: 'home',
        images: ['flask1.jpg', 'flask2.jpg', 'flask3.jpg'],
        specifications: [
            { name: 'capacity', value: '600ml'},
            { name: 'colors', value: 'red, black, green'},
            { name: 'make', value: 'kettle, flask'},
        ]
    },
    {
        id: 'p14',
        name: 'Dome ceilling mosquito net',
        description: 'Ceiling hang mosquito net in various colors for bed sizes; 4x6ft, 5x6ft, 6x6ft, strong durable and beautiful.',
        price: 85000,
        originalPrice: 100000,
        category: 'beauty',
        images: ['mosnet1.jfif','mosnet21.jpg', 'mosnet3.jpg', 'mosnet41.jpeg'],
        specifications: [
            { name: 'Bed Size', value: '4x6ft, 5x6ft, 6x6ft'},
            { name: 'colors', value: 'purple, pink, cream, white'},
        ]
    },
    {
        id: 'p15',
        name: 'Pineaple corer, peeler',
        description: 'Manual pineaple peeler, corer for quick and smart peeling of pineaple.',
        price: 20000,
        originalPrice: 25000,
        category: 'home',
        images: ['pine1.jpg', 'pine2.jpg'],
        specifications: [
            { name: 'Material', value: 'stainless steel blades, plastic handle'},
        ]
    },
    {
        id: 'p16',
        name: 'Rail Mosquito net, 2 stand for bedsize 5x6ft, 6x6ft',
        description: 'Cream 2 stand rail mosquito net for 5x6, 6x6ft beds.convenient to use, easy to install, strong, durable and beautiful.',
        price: 200000,
        originalPrice: 250000,
        category: 'beauty',
        images: ['2 stand-mosquito net-cream.jpeg'],
        specifications: [
            { name: 'Material', value: 'stainless steel frame'},
            { name: 'bed size', value: '5x6ft, 6x6ft'},
            { name: 'colors', value: 'Cream'},
        ]
    },
    {
        id: 'p17',
        name: 'Waterproof shoe covers, 01 pair',
        description: 'A pair of waterproof shoe covers to protect your shoes and trousers from water.',
        price: 45000,
        originalPrice: 55000,
        category: 'beauty',
        images: ['wp1.jpg', 'wp2.jpg', 'wp3.jpg'],
        specifications: [
            { name: 'material', value: 'nylon'},
            { name: 'color', value: 'black'},
            { name: 'size', value: 'size 36 - 42'},
        ]
    },
    {
        id: 'p18',
        name: 'Clothes closet, 3 column with wooden frame',
        description: 'Portable closet in valious colors, 3 column with wooden frame. Strong and durable.',
        price: 145000,
        originalPrice: 165000,
        category: 'home',
        images: ['cr1.jpg', 'cr2.jpg'],
        specifications: [
            { name: 'material', value: 'wooden frame, fabric outer cover'},
            { name: 'colors', value: 'pink, purple, maroon, grey, brown'},
            { name: 'chambers', value: 'three'},
        ]
    },
    {
        id: 'p19',
        name: 'Circle storage rack-dh',
        description: 'Circular stainless steel storage rack, strong and durable, rust free with safety hook to safely secure hang itemm, good for hanging ties, belts, caps and more.',
        price: 35000,
        originalPrice: 50000,
        category: 'home',
        images: ['cr1.jpeg', 'cr2.jpeg', 'cr3.jpeg'],
        specifications: [
            { name: 'material', value: 'Stainless steel' },
        ]
    },
    {
        id: 'p20',
        name: 'Blender 2in1, 1.5L capacity-ymh',
        description: '2in1 Hisense electric blender with detachable blades for easy cleaning, can blend smoothies and sauces and can grind coffee, beans, peanuts and more.',
        price: 125000,
        originalPrice: 150000,
        category: 'home',
        images: ['hsb1.jpeg', 'hsb2.jpeg', 'hsb3.jpeg'],
        specifications: [
            { name: 'Material', value: 'glass cup' },
            { name: 'Capacity', value: '1.5 liters' },
            { name: 'Color', value: 'White' },
            { name: 'Power', value: '500w motor' },
        ]
    },
    {
        id: 'p21',
        name: 'Blender 2in1, 1.5L capacity-ymh',
        description: '2in1 Hisense electric blender with detachable blades for easy cleaning, can blend smoothies and sauces and can grind coffee, beans, peanuts and more.',
        price: 125000,
        originalPrice: 150000,
        category: 'home',
        images: ['hsb2.jpeg', 'hsb1.jpeg', 'hsb3.jpeg'],
        specifications: [
            { name: 'Material', value: 'glass cup' },
            { name: 'Capacity', value: '1.5 liters' },
            { name: 'Color', value: 'White' },
            { name: 'Power', value: '500w motor' },
        ]
    }, 
    {
        id: 'p22',
        name: 'Travel soap holder-dh',
        description: 'Travel soap holder to securely hold bsr soap. Leak proof design with draining tray to keep the soap dry, compact and light weight making it convenient for travel, can fit in handbag.',
        price: 15000,
        originalPrice: 20000,
        category: 'home',
        images: ['tsp1.jpeg', 'tsp2.jfif', 'tsp3.jfif'],
        specifications: [
            { name: 'Material', value: 'quality plastic' },
            { name: 'Color', value: 'blue, green, grey, white' },
        ]
    }, 
    {
        id: 'p23',
        name: 'Silicone kitchen utensils with cup holder-chp',
        description: 'Set of silicone kitchen utensils with natural wood handles, set contains essential cooking tools such as slotted turners, ladles, stapulas and many more, cooking tools are nontoxic, durable and gentle.',
        price: 65000,
        originalPrice: 85000,
        category: 'home',
        images: ['sil1.jfif', 'sil2.jfif', 'sil3.jpeg'],
        specifications: [
            { name: 'Material', value: 'food grade silicone and natural wood handles' },
            { name: 'Color', value: 'White, black, green, red, purple, yellow' },
        ]
    }, 
    {
        id: 'p24',
        name: 'Wooden multipurpose hanger, 1pc-dh',
        description: 'Wooden multihook multipurpose hanger for saving space and more organized, can hold ties, belts, vests, bras and many more, made of durable wood.',
        price: 25000,
        originalPrice: 35000,
        category: 'home',
        images: ['hkh2.jfif', 'hkh3.jfif', 'hkh4.jfif'],
        specifications: [
            { name: 'Material', value: 'stainless steel hooks' },
        ]
    }, 
    {
        id: 'p25',
        name: 'Kids tablet, Telzeal P103 10 inch-cpl',
        description: '10 inch Telzeal kid tablet for children education and entertainment. 4GB RAM 128GB storage, 5G dual simcard, Wifi conectivity. Comes pre-loaded with educational and entertainment materials.',
        price: 350000,
        originalPrice: 400000,
        category: 'toys',
        images: ['tz1.jpeg', 'tz2.jpeg'],
        specifications: [
            { name: 'Size', value: '10 inch' },
            { name: 'Capacity', value: '4GB Ram, 128GB storage' },
            { name: 'Color', value: 'pink, blue' },
            { name: 'Other attributes', value: '5G, dual sim, wifi connectivity' },
        ]
    }, 
    {
        id: 'p26',
        name: 'Bath towel, size: 40x70cm',
        description: 'Cotton bath towel size 40x70cm, strong and durable.',
        price: 65000,
        originalPrice: 85000,
        category: 'beauty',
        images: ['te11.jfif', 'te1.jpeg', 'te2.jpeg'],
        specifications: [
            { name: 'Material', value: 'cotton' },
            { name: 'Size', value: '40x70cm' },
            { name: 'Color', value: 'White, blue, green, maroon, brown, purple' },
        ]
    }, 
    {
        id: 'p27',
        name: 'Bath towel, size: 40x70cm',
        description: 'Cotton bath towel size 40x70cm, strong and durable.',
        price: 65000,
        originalPrice: 85000,
        category: 'beauty',
        images: ['twl1.jpeg', 'twl2.jpeg'],
        specifications: [
            { name: 'Material', value: 'cotton' },
            { name: 'Size', value: '40x70cm' },
            { name: 'Color', value: 'White, blue, green, maroon, brown, purple' },
        ]
    },
    {
        id: 'p28',
        name: 'Bath towel, size: 40x70cm',
        description: 'Cotton bath towel size 40x70cm, strong and durable.',
        price: 65000,
        originalPrice: 85000,
        category: 'beauty',
        images: ['tws1.jpeg', 'tws2.jpeg', 'tws3.jpeg', 'tws4.jpeg'],
        specifications: [
            { name: 'Material', value: 'cotton' },
            { name: 'Size', value: '40x70cm' },
            { name: 'Color', value: 'White, blue, green, maroon, brown, purple' },
        ]
    }, 
    {
        id: 'p29',
        name: 'Bath towel, size: 40x70cm White',
        description: 'White Cotton bath towel size 40x70cm, Good for hotels, hospitals and more. strong and durable.',
        price: 65000,
        originalPrice: 85000,
        category: 'beauty',
        images: ['tw1.jfif', 'tw2.jfif'],
        specifications: [
            { name: 'Material', value: 'cotton' },
            { name: 'Size', value: '40x70cm' },
            { name: 'Color', value: 'White'},
        ]
    }, 
   {
        id: 'p30',
        name: 'Long handle back sponge',
        description: 'Long handle back sponge for easy scrabing of the back. No need for anyones assistance to scrab the back, strong and comfortable.',
        price: 25000,
        originalPrice: 35000,
        category: 'beauty',
        images: ['bsp1.jpg', 'bsp2.jfif', 'bsp3.jfif', 'bsp4.jfif', 'bsp5.jfif'],
        specifications: [
            { name: 'Material', value: 'plastic handle, mesh material head' },
            { name: 'Color', value: 'cream, green, pink'},
        ]
    }, 
    {
        id: 'p31',
        name: 'Wooden hangers, 01 dozen-dh',
        description: 'Dozen of wooden hangers for hanging clothes. Strong and durable.',
        price: 75000,
        originalPrice: 85000,
        category: 'beauty',
        images: ['bbh1.jpeg', 'bbh2.jfif'],
        specifications: [
            { name: 'Material', value: 'natural wood' },
        ]
    },
    {
        id: 'p32',
        name: 'Driving glasses-mz',
        description: 'Driving glasses in golden color. Controls impact of car lights when driving at night, can be worn over prescription glasses, smart design.',
        price: 20000,
        originalPrice: 25000,
        category: 'sports',
        images: ['dr1.jpg', 'dr2.jpg', 'dr3.jpg'],
        specifications: [
        ]
    },
    {
        id: 'p33',
        name: 'Ironing protector mesh',
        description: 'Special designed mesh cloth for protecting clothes from burnig or creasing while ironing.',
        price: 10000,
        originalPrice: 15000,
        category: 'home',
        images: ['ipc1.jpg', 'ipc2.jpg', 'ipc3.jpg'],
        specifications: [
            { name: 'Material', value: 'special heat resistant mesh cloth' },
            { name: 'Size', value: '30x40cm' },
            { name: 'Color', value: 'White'},
        ]
    },
    {
        id: 'p34',
        name: 'Ladder, 4 step-dh',
        description: '4 step ladder for both domestic and commercial use, sound construction and safe.',
        price: 200000,
        originalPrice: 245000,
        category: 'home',
        images: ['ld1.jpeg', 'ld2.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p35',
        name: 'Potato chipper',
        description: 'Stainless steel potato chipping machine, rust-free, easy to use, easy to clean. cuts chips in even proffessional sizes, strong and durabe.',
        price: 55000,
        originalPrice: 75000,
        category: 'home',
        images: ['pc1.jpeg', 'pc2.jpg'],
        specifications: [
            { name: 'Material', value: 'stainless steel blades' },
        ]
    },
    {
        id: 'p36',
        name: 'Filter deep frying spoon',
        description: 'Filter spoon with grip handle, good for deep frying. Made of stainless steel, strong and durable.',
        price: 20000,
        originalPrice: 25000,
        category: 'home',
        images: ['spn1.jpg', 'spn2.jpg', 'spn3.jpg','spn4.jpg'],
        specifications: [
            { name: 'Material', value: 'stainless steel' },
        ]
    },
    {
        id: 'p37',
        name: 'Sink strainer',
        description: 'Heat resistant silicone material sink strainer used to prevent impurities and clogging drain pipes. Has strong botton suckers to enable it stick in position, Can be used in kitchen sinks, bathrooms and many more, 01 pair.',
        price: 10000,
        originalPrice: 15000,
        category: 'home',
        images: ['sst1.jpeg', 'sst2.jpg', 'sst3.jpg','sst4.jpg'],
        specifications: [
            { name: 'Material', value: 'heat resistant silicone material' },
            { name: 'Color', value: 'White, blue, green, pink, red'},
        ]
    },
    {
        id: 'p38',
        name: 'Phone wall bracket-stk',
        description: 'Double phone wall bracket, can be used for safe placement of phones, remote controls and many more, comes with sticker glue for sticking it to the wall, no drilling, easy to stick, easy to remove.',
        price: 20000,
        originalPrice: 30000,
        category: 'home',
        images: ['wbd1.jfif', 'wbd2.jfif', 'wbd3.jfif'],
        specifications: [
            { name: 'Material', value: 'heavy plastic ' },
            { name: 'Color', value: 'White, green, cream, yellow, maroon, blue, brown, orange'},
        ]
    },
    {
        id: 'p39',
        name: 'Phone wall bracket-stk',
        description: 'Single phone wall bracket with side hooks for extra hanging, can be used for safe placement of phones, remote controls and many more, comes with sticker glue for sticking it to the wall, no drilling, easy to stick, easy to remove.',
        price: 15000,
        originalPrice: 20000,
        category: 'home',
        images: ['wbs1.jfif', 'wbs2.jpg', 'wbs3.jfif'],
        specifications: [
            { name: 'Material', value: 'heavy plastic ' },
            { name: 'Color', value: 'White, green, cream, yellow, maroon, blue, brown, orange'},
        ]
    },
    {
        id: 'p40',
        name: 'Trouser hanger-dh',
        description: 'Special designed trouser hanger, made of rust free aluminium material, light and strong, good for maximizing storage space and keeping crease free trousers after ironing.',
        price: 20000,
        originalPrice: 25000,
        category: 'home',
        images: ['trh1.jpeg', 'trh2.jpeg', 'trh3.jfif'],
        specifications: [
            { name: 'Material', value: 'rust-free aluminum material' },
        ]
    },
    {
        id: 'p41',
        name: 'Swimming pool, above ground, 12ft x 31.5 inch-mrf',
        description: 'Round steel frame above ground swimming pool, easy to set up and disassemble, made of strong steel material and re-enforced PVC material to guard it from puncture and or sunshine burn, good for backyard use.',
        price: 600000,
        originalPrice: 750000,
        category: 'fashion',
        images: ['sp1.jfif', 'sp2.jpeg', 'sp3.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel frame and re-enforced pvc body' },
            { name: 'Size', value: '12ft x 31.5 inch' },
            { name: 'Color', value: 'Blue'},
        ]
    },
    {
        id: 'p42',
        name: 'Vacuum flask, 3 liters-fti',
        description: '3 liters vacuum flask, can keep warm for 12 hours. strong and durable, good for home, business or travel.',
        price: 110000,
        originalPrice: 130000,
        category: 'home',
        images: ['flsk1.jpg', 'flsk2.jpg', 'flsk3.jpeg'],
        specifications: [
            { name: 'Material', value: 'Stainless steel inside' },
            { name: 'Capacity', value: '3 liters' },
            { name: 'Color', value: 'Green, Black'},
        ]
    },
    {
        id: 'p43',
        name: 'Vacuum flask, 4 liters-fti',
        description: '4 liters vacuum flask, can keep warm for 12 hours. strong and durable, good for home, business or travel.',
        price: 125000,
        originalPrice: 150000,
        category: 'home',
        images: ['flsk3.jpeg', 'flsk2.jpg', 'flsk1.jpg'],
        specifications: [
            { name: 'Material', value: 'Stainless steel inside' },
            { name: 'Capacity', value: '4 liters' },
            { name: 'Color', value: 'Green, Black'},
        ]
    },
    {
        id: 'p44',
        name: 'Lemon squeezer-fti',
        description: 'Manual Stainless steel lemon squeezer, easy to use and clean, strong and durable.',
        price: 35000,
        originalPrice: 45000,
        category: 'home',
        images: ['lsz1.jpeg', 'lsz2.jpeg', 'lsz3.jpeg'],
        specifications: [
            { name: 'Material', value: 'Stainless steel' },
        ]
    },
    {
        id: 'p45',
        name: 'Foldable table, Wood color-mrf',
        description: 'Wood color Foldable multi purpose table, can be used for laptop, bedside, gardens and many more, foldable for easy storage when not in use, strong, durable and beautiful.',
        price: 75000,
        originalPrice: 100000,
        category: 'home',
        images: ['ft1.jpeg', 'ft2.jpg', 'ft3.jpg','ft4.jpg'],
        specifications: [
            { name: 'Material', value: 'Steel legs, wooden top' },
            { name: 'Color', value: 'Wood'},
        ]
    },
    {
        id: 'p46',
        name: 'Foldable table, Black-mrf',
        description: 'Black Foldable multi purpose table, can be used for laptop, bedside, gardens and many more, foldable for easy storage when not in use, strong, durable and beautiful.',
        price: 75000,
        originalPrice: 100000,
        category: 'home',
        images: ['ft2.jpg', 'ft4.jpg', 'ft3.jpg','ft1.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel legs, wooden top' },
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p47',
        name: 'Foldable table, Pink-mrf',
        description: 'Pink Foldable multi purpose table, can be used for laptop, bedside, gardens and many more, foldable for easy storage when not in use, strong, durable and beautiful.',
        price: 75000,
        originalPrice: 100000,
        category: 'home',
        images: ['ft3.jpg', 'ft4.jpg', 'ft2.jpg','ft1.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel legs, wooden top' },
            { name: 'Color', value: 'Pink'},
        ]
    },
    {
        id: 'p48',
        name: 'Foldable table, Blue-mrf',
        description: 'Blue Foldable multi purpose table, can be used for laptop, bedside, gardens and many more, foldable for easy storage when not in use, strong, durable and beautiful.',
        price: 75000,
        originalPrice: 100000,
        category: 'home',
        images: ['ft4.jpg', 'ft2.jpg', 'ft3.jpg','ft1.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel legs, wooden top' },
            { name: 'Color', value: 'Blue'},
        ]
    },
    {
        id: 'p49',
        name: 'Fridge stand, mobile-ymh',
        description: 'Mobile fridge stand for shifting fridge from one position to the other especially during cleaning, has 360 degrees rotating wheels that can be locked when is stable position, stand can be adjusted to fit different fridge sizes, strong and durable.',
        price: 95000,
        originalPrice: 120000,
        category: 'home',
        images: ['mfs1.jpeg', 'mfs2.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p50',
        name: 'Mini self squeeze mop-stk',
        description: 'Mini retractable self squeezing mop, can be used for gleaning window glasses, wall tiles, kitched tables and many more, simple and convenient to use, saves cleaning time, can be retracted for storage when not in use.',
        price: 20000,
        originalPrice: 30000,
        category: 'home',
        images: ['mm1.jpg', 'mm2.jpg', 'mm3.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p51',
        name: 'Waterproof mattress protector,4x6ft, 5x6ft, 6x6ft-zn',
        description: 'Mattress protector made of waterproof material, available in sizes; 4x6ft, 5x6ft, 6x6ft. Strong and durable.',
        price: 100000,
        originalPrice: 120000,
        category: 'beauty',
        images: ['mp1.jpeg', 'mp2.jfif', 'mp3.jfif'],
        specifications: [
            { name: 'Material', value: 'Waterproof fabric' },
            { name: 'Color', value: 'White, Blue, Pink, Grey, Cream, Green'},
        ]
    },
    {
        id: 'p52',
        name: 'Four stand mosquito net, Pink-zn',
        description: '4 stand mosquito net for protecting yourself from mosquito bites, easy to install and uninstall for washing, beautiful design, strong and durable.',
        price: 85000,
        originalPrice: 100000,
        category: 'beauty',
        images: ['nt1.jpg', 'nt2.jpg', 'nt3.jpg','nt4.jpg','nt5.jpg'],
        specifications: [
            { name: 'Material', value: 'Stainless steellegs, mesh fabric top' },
            { name: 'Color', value: 'Pink'},
        ]
    },
    {
        id: 'p53',
        name: 'Four stand mosquito net, Purple-zn',
        description: '4 stand mosquito net for protecting yourself from mosquito bites, easy to install and uninstall for washing, beautiful design, strong and durable.',
        price: 85000,
        originalPrice: 100000,
        category: 'beauty',
        images: ['nt2.jpg', 'nt4.jpg', 'nt3.jpg','nt1.jpg','nt5.jpg'],
        specifications: [
            { name: 'Material', value: 'Stainless steellegs, mesh fabric top' },
            { name: 'Color', value: 'Purple'},
        ]
    },
    {
        id: 'p54',
        name: 'Four stand mosquito net, Cream-zn',
        description: '4 stand mosquito net for protecting yourself from mosquito bites, easy to install and uninstall for washing, beautiful design, strong and durable.',
        price: 85000,
        originalPrice: 100000,
        category: 'beauty',
        images: ['nt3.jpg', 'nt2.jpg', 'nt1.jpg','nt4.jpg','nt5.jpg'],
        specifications: [
            { name: 'Material', value: 'Stainless steellegs, mesh fabric top' },
            { name: 'Color', value: 'Cream'},
        ]
    },
    {
        id: 'p55',
        name: 'Four stand mosquito net, White-zn',
        description: '4 stand mosquito net for protecting yourself from mosquito bites, easy to install and uninstall for washing, beautiful design, strong and durable.',
        price: 85000,
        originalPrice: 100000,
        category: 'beauty',
        images: ['nt4.jpg', 'nt2.jpg', 'nt3.jpg','nt5.jpg','nt1.jpg'],
        specifications: [
            { name: 'Material', value: 'Stainless steellegs, mesh fabric top' },
            { name: 'Color', value: 'White'},
        ]
    },
    {
        id: 'p56',
        name: 'Remote control stand',
        description: 'Tabletop remote control stand, organizer to keep your remote controls orginzed.',
        price: 35000,
        originalPrice: 45000,
        category: 'home',
        images: ['rmt1.jpeg', 'rmt2.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p57',
        name: 'Mattress cover with bedliner bottom finish, Maroon-mdn',
        description: 'Mattress cover cum bedliner for 5x6ft, 6x6ft & 7x6ft bed. Beautiful design, strong and durable.',
        price: 155000,
        originalPrice: 180000,
        category: 'beauty',
        images: ['w1.jpeg', 'w2.jpeg', 'w3.jpeg','w4.jpeg','w5.jpeg','w6.jpeg','w7.jpeg','w8.jpeg','w9.jpeg'],
        specifications: [
            { name: 'Color', value: 'Maroon'},
        ]
    },
    {
        id: 'p58',
        name: 'Mattress cover with bedliner bottom finish, Red-mdn',
        description: 'Mattress cover cum bedliner for 5x6ft, 6x6ft & 7x6ft bed. Beautiful design, strong and durable.',
        price: 155000,
        originalPrice: 180000,
        category: 'beauty',
        images: ['w2.jpeg', 'w3.jpeg', 'w1.jpeg','w4.jpeg','w5.jpeg','w6.jpeg','w7.jpeg','w8.jpeg','w9.jpeg'],
        specifications: [
            { name: 'Color', value: 'Red'},
        ]
    },
    {
        id: 'p59',
        name: 'Mattress cover with bedliner bottom finish, Peach-mdn',
        description: 'Mattress cover cum bedliner for 5x6ft, 6x6ft & 7x6ft bed. Beautiful design, strong and durable.',
        price: 155000,
        originalPrice: 180000,
        category: 'beauty',
        images: ['w3.jpeg', 'w2.jpeg', 'w1.jpeg','w4.jpeg','w9.jpeg','w6.jpeg','w7.jpeg','w8.jpeg','w5.jpeg'],
        specifications: [
            { name: 'Color', value: 'Peach'},
        ]
    },
    {
        id: 'p60',
        name: 'Mattress cover with bedliner bottom finish, Grey-mdn',
        description: 'Mattress cover cum bedliner for 5x6ft, 6x6ft & 7x6ft bed. Beautiful design, strong and durable.',
        price: 155000,
        originalPrice: 180000,
        category: 'beauty',
        images: ['w4.jpeg', 'w2.jpeg', 'w3.jpeg','w1.jpeg','w5.jpeg','w6.jpeg','w7.jpeg','w8.jpeg','w9.jpeg'],
        specifications: [
            { name: 'Color', value: 'Grey'},
        ]
    },
    {
        id: 'p61',
        name: 'Mattress cover with bedliner bottom finish, Green-mdn',
        description: 'Mattress cover cum bedliner for 5x6ft, 6x6ft & 7x6ft bed. Beautiful design, strong and durable.',
        price: 155000,
        originalPrice: 180000,
        category: 'beauty',
        images: ['w5.jpeg', 'w2.jpeg', 'w3.jpeg','w4.jpeg','w1.jpeg','w6.jpeg','w7.jpeg','w8.jpeg','w9.jpeg'],
        specifications: [
            { name: 'Color', value: 'Green'},
        ]
    },
    {
        id: 'p62',
        name: 'Mattress cover with bedliner bottom finish, Purple-mdn',
        description: 'Mattress cover cum bedliner for 5x6ft, 6x6ft & 7x6ft bed. Beautiful design, strong and durable.',
        price: 155000,
        originalPrice: 180000,
        category: 'beauty',
        images: ['w6.jpeg', 'w2.jpeg', 'w3.jpeg','w4.jpeg','w5.jpeg','w1.jpeg','w7.jpeg','w8.jpeg','w9.jpeg'],
        specifications: [
            { name: 'Color', value: 'Purple'},
        ]
    },
    {
        id: 'p63',
        name: 'Mattress cover with bedliner bottom finish, Blue-mdn',
        description: 'Mattress cover cum bedliner for 5x6ft, 6x6ft & 7x6ft bed. Beautiful design, strong and durable.',
        price: 155000,
        originalPrice: 180000,
        category: 'beauty',
        images: ['w7.jpeg', 'w2.jpeg', 'w3.jpeg','w4.jpeg','w5.jpeg','w6.jpeg','w1.jpeg','w8.jpeg','w9.jpeg'],
        specifications: [
            { name: 'Color', value: 'Blue'},
        ]
    },
    {
        id: 'p64',
        name: 'Mattress cover with bedliner bottom finish, Cream-mdn',
        description: 'Mattress cover cum bedliner for 5x6ft, 6x6ft & 7x6ft bed. Beautiful design, strong and durable.',
        price: 155000,
        originalPrice: 180000,
        category: 'beauty',
        images: ['w8.jpeg', 'w2.jpeg', 'w3.jpeg','w4.jpeg','w5.jpeg','w6.jpeg','w7.jpeg','w1.jpeg','w9.jpeg'],
        specifications: [
            { name: 'Color', value: 'Cream'},
        ]
    },
    {
        id: 'p65',
        name: 'Mattress cover with bedliner bottom finish, Pink-mdn',
        description: 'Mattress cover cum bedliner for 5x6ft, 6x6ft & 7x6ft bed. Beautiful design, strong and durable.',
        price: 155000,
        originalPrice: 180000,
        category: 'beauty',
        images: ['w9.jpeg', 'w2.jpeg', 'w3.jpeg','w7.jpeg','w5.jpeg','w6.jpeg','w4.jpeg','w8.jpeg','w1.jpeg'],
        specifications: [
            { name: 'Color', value: 'Pink'},
        ]
    },
    {
        id: 'p66',
        name: 'Bamboo chopping board, 3pc set-fti',
        description: 'Bamboo wood chopping board for kitchen use, 3pc set, sizes; 20cm x 30cm, 22cm x 32cm, 24cm x 34cm, strong and durable.',
        price: 45000,
        originalPrice: 60000,
        category: 'home',
        images: ['bamboo-chopping-board-1.jfif', 'bamboo-chopping-board-2.jfif'],
        specifications: [
            { name: 'Material', value: 'Bamboo wood'},
            { name: 'Size', value: '20cm x 30cm, 22cm x 32cm, 24cm x 34cm'},
        ]
    },
    {
        id: 'p67',
        name: 'Bamboo chopping board, 3pc set-fti',
        description: 'Bamboo wood chopping board for kitchen use, 3pc set, sizes; 26cm x 36cm, 28cm x 38cm, 30cm x 40cm, strong and durable.',
        price: 65000,
        originalPrice: 80000,
        category: 'home',
        images: ['bamboo-chopping-board-2.jfif', 'bamboo-chopping-board-1.jfif'],
        specifications: [
            { name: 'Material', value: 'Bamboo wood'},
            { name: 'Size', value: '26cm x 36cm, 28cm x 38cm, 30cm x 40cm'},
        ]
    },
    {
        id: 'p68',
        name: 'Marble texture bamboo wood tray, 3pc set-fti',
        description: '3in1 marble texture Bamboo wood tray set for serving use, strong and durable.',
        price: 100000,
        originalPrice: 125000,
        category: 'home',
        images: ['marble texture-bamboo-serving-tray-1.jpeg', 'marble texture-bamboo-serving-tray-2.jpeg','marble-bamboo tray-1.jpeg'],
        specifications: [
            { name: 'Material', value: 'Bamboo wood, marble'},
        ]
    },
    {
        id: 'p69',
        name: 'Marble texture round bamboo wood trays, 3pc set-fti',
        description: '3in1 marble texture round Bamboo wood tray set for serving use, strong and durable.',
        price: 100000,
        originalPrice: 125000,
        category: 'home',
        images: ['marble texture-bamboo-round-tray-2.jpeg', 'marble texture-bamboo-round-tray-1.jfif','marble texture-bamboo-round-tray-3.jpeg'],
        specifications: [
            { name: 'Material', value: 'Bamboo wood, marble'},
        ]
    },
    {
        id: 'p70',
        name: 'Marble texture bamboo trays, 3pc set-fti',
        description: '3in1 marble texture Bamboo tray set for serving use, strong and durable.',
        price: 100000,
        originalPrice: 125000,
        category: 'home',
        images: ['marble texture-bamboo-tray-1.jfif', 'marble texture-bamboo-tray-2.jpeg'],
        specifications: [
            { name: 'Material', value: 'Bamboo wood, marble'},
        ]
    },
    {
        id: 'p71',
        name: 'Marble mortar and pestle set-fti',
        description: 'Natural marble mortar and pestie set for kitchen use,can be used to manualy grind nuts, spices, herbs and many more, strong and durable.',
        price: 65000,
        originalPrice: 80000,
        category: 'home',
        images: ['marble-spice-mortar-1.jpeg'],
        specifications: [
            { name: 'Material', value: 'Natural marble'},
        ]
    },
    {
        id: 'p72',
        name: 'Ceramic butter dish with bamboo lid-fti',
        description: 'Ceramic butter dish with bamboo wood dish and with butter dispensing knife, beautiful, strong and durable.',
        price: 35000,
        originalPrice: 45000,
        category: 'home',
        images: ['ceramic-butter-bucket-1.jpeg','ceramic-butter-bucket-2.jpeg','ceramic-butter-bucket-3.jpeg'],
        specifications: [
            { name: 'Material', value: 'ceramic, bamboo wood, stainless steel knife'},
        ]
    },
    {
        id: 'p73',
        name: 'Stainless steel mortar and pestle set-fti',
        description: 'manual stainless steel mortar and pestle set for kitchen use,can be used to manualy grind nuts, spices, herbs and many more, strong and durable.',
        price: 55000,
        originalPrice: 65000,
        category: 'home',
        images: ['stainless steel-mortar-1.jfif','stainless steel-mortar-2.jfif','stainless steel-mortar-3.jpeg'],
        specifications: [
            { name: 'Material', value: 'stainless steel'},
        ]
    },
    {
        id: 'p74',
        name: 'Electric rechargeable feet massager-mz',
        description: 'Electric rechargeable feet massager for relaxing your feet, feel healty all the time, strong and durable.',
        price: 55000,
        originalPrice: 65000,
        category: 'fashion',
        images: ['electric-feet-massager-1.jpeg','electric-feet-massager-2.jfif','electric-feet-massager-3.jfif'],
        specifications: [
        ]
    },
    {
        id: 'p75',
        name: 'Electric, batteries powered feet massager-mz',
        description: 'Electric, battries powered feet massager for relaxing your feet, feel healty all the time, strong and durable.',
        price: 55000,
        originalPrice: 65000,
        category: 'fashion',
        images: ['electric-feet-massager-1.jpeg','electric-feet-massager-2.jfif','electric-feet-massager-3.jfif'],
        specifications: [
        ]
    },
    {
        id: 'p76',
        name: 'Ceramic 24pc dinner set-geo',
        description: '24 pieces ceramic dinner set, beautiful, strong and durable.',
        price: 135000,
        originalPrice: 150000,
        category: 'home',
        images: ['dinner set-24pc-ceramic-kitchenware-1.jpeg','dinner set-24pc-ceramic-kitchenware-2.jpeg','dinner set-24pc-ceramic-kitchenware-3.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p77',
        name: 'Cast iron frying pan, 24cm-fti',
        description: '24cm cast iron frying pan, beautiful, strong and durable.',
        price: 45000,
        originalPrice: 55000,
        category: 'home',
        images: ['frying pan-24cm-cast iron-1.jfif','frying pan-24cm-cast iron-2.jfif'],
        specifications: [
            { name: 'Material', value: 'cast iron'},
            { name: 'Size', value: '24cm diameter'},
        ]
    },
    {
        id: 'p78',
        name: 'Cast iron frying pan, 26cm-fti',
        description: '26cm cast iron frying pan, beautiful, strong and durable.',
        price: 65000,
        originalPrice: 85000,
        category: 'home',
        images: ['frying pan-26cm-cast iron-1.jfif','frying pan-26cm-cast iron-2.jpeg'],
        specifications: [
            { name: 'Material', value: 'cast iron'},
            { name: 'Size', value: '26cm diameter'},
        ]
    },
    {
        id: 'p79',
        name: 'Digital food thermometer-fti',
        description: 'digital food thermometer for measuring tempertaure of various foods as necessary, strong and durable.',
        price: 35000,
        originalPrice: 55000,
        category: 'home',
        images: ['food-thermometer-1.jpeg','food-thermometer-2.jfif'],
        specifications: [
        ]
    },
    {
        id: 'p80',
        name: 'Utensils washing gloves, 01 pair-fti',
        description: 'Utensils washing gloves, beautiful, strong and durable.',
        price: 25000,
        originalPrice: 35000,
        category: 'home',
        images: ['utensils-washing-gloves-1.jpeg','utensils-washing-gloves-2.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p81',
        name: 'Vacuum tea flask, 1.5 liters-fti',
        description: '1.5 liters vacuum tea flask in colors; black, red, white, silver, beautiful, strong and durable.',
        price: 60000,
        originalPrice: 75000,
        category: 'home',
        images: ['vacuum-tea flask-1500ml-3.jpeg'],
        specifications: [
            { name: 'Material', value: 'steel'},
            { name: 'Volume', value: '1.5 liters'},
        ]
    },
    {
        id: 'p82',
        name: 'Vacuum tea flask, 02 liters-fti',
        description: '02 liters vacuum tea flask in colors; black, red, white, silver, beautiful, strong and durable.',
        price: 70000,
        originalPrice: 85000,
        category: 'home',
        images: ['vacuum-tea flask-2000ml-4.jpeg'],
        specifications: [
            { name: 'Material', value: 'steel'},
            { name: 'Volume', value: '02 liters'},
        ]
    },
    {
        id: 'p83',
        name: 'Vacuum tea flask, 1.5 liters-fti',
        description: '1.5 liters vacuum tea flask in colors; green, red, white, pink, beautiful, strong and durable.',
        price: 80000,
        originalPrice: 100000,
        category: 'home',
        images: ['vacuum-tea-flask-1500ml-1.jpeg','vacuum-tea flask-1500ml-2.jpeg'],
        specifications: [
            { name: 'Material', value: 'steel'},
            { name: 'Volume', value: '1.5 liters'},
        ]
    },
    {
        id: 'p84',
        name: 'Vacuum tea flask, 02 liters-fti',
        description: '02 liters vacuum tea flask in colors; green, red, white, pink, beautiful, strong and durable.',
        price: 90000,
        originalPrice: 120000,
        category: 'home',
        images: ['vacuum-tea-flask-2000ml-1.jpeg','vacuum-tea flask-2000ml-2.jpeg'],
        specifications: [
            { name: 'Material', value: 'steel'},
            { name: 'Volume', value: '02 liters'},
        ]
    },
    {
        id: 'p85',
        name: 'Vacuum tea flask, 02 liters, Green-fti',
        description: '1.5 liters vacuum tea flask in green color, beautiful, strong and durable.',
        price: 90000,
        originalPrice: 120000,
        category: 'home',
        images: ['vacuum-tea-flask-2000ml-11.jpeg','vacuum-tea-flask-2000ml-22.jpeg'],
        specifications: [
            { name: 'Material', value: 'steel'},
            { name: 'Volume', value: '02 liters'},
            { name: 'Color', value: 'Green'},
        ]
    },
    {
        id: 'p86',
        name: 'Vacuum tea flask, 02 liters, Red-fti',
        description: '02 liters vacuum tea flask in red color, beautiful, strong and durable.',
        price: 90000,
        originalPrice: 120000,
        category: 'home',
        images: ['vacuum-tea-flask-2000ml-22.jpeg','vacuum-tea-flask-2000ml-11.jpeg'],
        specifications: [
            { name: 'Material', value: 'steel'},
            { name: 'Volume', value: '02 liters'},
            { name: 'Color', value: 'Red'},
        ]
    },
    {
        id: 'p87',
        name: 'Vacuum tea flask, 1.5 liters, Pink-fti',
        description: '1.5 liters vacuum tea flask in pink color, beautiful, strong and durable.',
        price: 80000,
        originalPrice: 100000,
        category: 'home',
        images: ['vacuum-tea-flask-1500ml-11.jpeg','vacuum-tea-flask-1500ml-22.jpeg'],
        specifications: [
            { name: 'Material', value: 'steel'},
            { name: 'Volume', value: '1.5 liters'},
            { name: 'Color', value: 'Pink'},
        ]
    },
    {
        id: 'p88',
        name: 'Vacuum tea flask, 1.5 liters, White-fti',
        description: '1.5 liters vacuum tea flask in white color, beautiful, strong and durable.',
        price: 80000,
        originalPrice: 100000,
        category: 'home',
        images: ['vacuum-tea-flask-1500ml-22.jpeg','vacuum-tea-flask-1500ml-11.jpeg'],
        specifications: [
            { name: 'Material', value: 'steel'},
            { name: 'Volume', value: '1.5 liters'},
            { name: 'Color', value: 'White'},
        ]
    },
    {
        id: 'p89',
        name: 'Rail Mosquito net, 2 stand for bedsize; 5x6ft, 6x6ft, White-zn',
        description: 'White 2 stand rail mosquito net for 5x6, 6x6ft beds.convenient to use, easy to install, strong, durable and beautiful.',
        price: 200000,
        originalPrice: 250000,
        category: 'beauty',
        images: ['2 stand-mosquito net-white.jpeg'],
        specifications: [
            { name: 'Material', value: 'stainless steel frame'},
            { name: 'bed size', value: '5x6ft, 6x6ft'},
            { name: 'colors', value: 'White'},
        ]
    },
    {
        id: 'p90',
        name: 'Rail Mosquito net, 2 stand for bedsize; 5x6ft, 6x6ft, Pink-zn',
        description: 'Pink 2 stand rail mosquito net for 5x6, 6x6ft beds.convenient to use, easy to install, strong, durable and beautiful.',
        price: 200000,
        originalPrice: 250000,
        category: 'beauty',
        images: ['2 stand-mosquito net-pink.jpeg'],
        specifications: [
            { name: 'Material', value: 'stainless steel frame'},
            { name: 'bed size', value: '5x6ft, 6x6ft'},
            { name: 'colors', value: 'Pink'},
        ]
    },
    {
        id: 'p91',
        name: 'Rail Mosquito net, 2 stand for bedsize; 5x6ft, 6x6ft ,Purple-zn',
        description: 'Purple 2 stand rail mosquito net for 5x6, 6x6ft beds.convenient to use, easy to install, strong, durable and beautiful.',
        price: 200000,
        originalPrice: 250000,
        category: 'beauty',
        images: ['2 stand-mosquito net-purple.jpg'],
        specifications: [
            { name: 'Material', value: 'stainless steel frame'},
            { name: 'bed size', value: '5x6ft, 6x6ft'},
            { name: 'colors', value: 'Purple'},
        ]
    },
    {
        id: 'p92',
        name: 'Electric clothes drying machine-btz',
        description: 'Electric clothes drying machine, good for home or travel.convenient to use, easy to install, strong, durable and beautiful.',
        price: 155000,
        originalPrice: 175000,
        category: 'beauty',
        images: ['electric-clothes-drying-machine-1.jpg','electric-clothes-drying-machine-2.jpg','electric-clothes-drying-machine-3.jpg'],
        specifications: [
        ]
    },
    {
        id: 'p93',
        name: 'Folding shoe rack, 6 tier-geo',
        description: 'Bamboo wood 6 tier folding shoe rack.convenient to use, foldable for storage when not in use, easy to install, strong, durable and beautiful.',
        price: 155000,
        originalPrice: 175000,
        category: 'beauty',
        images: ['foldable-shoe rack-6 layer-bamboo-1.jpeg','foldable-shoe rack-6 layer-bamboo-2.jpeg'],
        specifications: [
            { name: 'Material', value: 'Bamboo wood'},
        ]
    },
    {
        id: 'p94',
        name: 'Finger print padlock, rechargeable, 01 piece-btz',
        description: 'Smart rechargeable finger print padlock.convenient to use,safe and secure all the time, no theft due to stolen or duplicated keys, no lost keys, strong and durable.',
        price: 65000,
        originalPrice: 85000,
        category: 'home',
        images: ['smart padlock-fingerprint-1.jpeg','smart padlock-fingerprint-3.jfif'],
        specifications: [
        ]
    },
    {
        id: 'p95',
        name: 'Mattress cover, 3pc set, for 5x6ft, 6x6ft bed, Green-zn',
        description: 'Mattress cover, 3 piece set for 5x6ft & 6x6ft bed.washable, set contains; 1 mattress cover, 2 pillowcovers,convenient to use, easy to install, strong, durable and beautiful.',
        price: 100000,
        originalPrice: 125000,
        category: 'beauty',
        images: ['green-mattress cover-set-1.jpeg'],
        specifications: [
            { name: 'Material', value: 'velvet fabric'},
        ]
    },
    {
        id: 'p96',
        name: 'Mattress cover, 3pc set, for 5x6ft, 6x6ft bed, Maroon-zn',
        description: 'Mattress cover, 3 piece set for 5x6ft & 6x6ft bed.washable, set contains; 1 mattress cover, 2 pillowcovers,convenient to use, easy to install, strong, durable and beautiful.',
        price: 100000,
        originalPrice: 125000,
        category: 'beauty',
        images: ['maroon-mattress cover-set-2.jpeg'],
        specifications: [
            { name: 'Material', value: 'velvet fabric'},
        ]
    },
    {
        id: 'p97',
        name: 'Mattress cover, 3pc set, for 5x6ft, 6x6ft bed, Grey-zn',
        description: 'Mattress cover, 3 piece set for 5x6ft & 6x6ft bed.washable, set contains; 1 mattress cover, 2 pillowcovers,convenient to use, easy to install, strong, durable and beautiful.',
        price: 100000,
        originalPrice: 125000,
        category: 'beauty',
        images: ['grey-mattress-cover-set-3.jpeg'],
        specifications: [
            { name: 'Material', value: 'velvet fabric'},
        ]
    },
    {
        id: 'p98',
        name: 'Vacuum food flask, 03 liters-fti',
        description: '03 liters vacuum food flask with stainless steel inserts,keeps hot for a very long time, beautiful, strong and durable.',
        price: 155000,
        originalPrice: 170000,
        category: 'home',
        images: ['vacuum-food-flask-1.jpeg','vacuum-food-flask-2.jpeg'],
        specifications: [
            { name: 'Material', value: 'stainless steel inserts'},
            { name: 'Volume', value: '03 liters'},
            { name: 'Color', value: 'maroon'},
        ]
    },
    {
        id: 'p99',
        name: 'Kid toilet trainer-geo',
        description: 'Kid toilet trainer for training kids to use adult toilets without difficulty,do away with potty, convenient to use, beautiful, strong and durable.',
        price: 85000,
        originalPrice: 100000,
        category: 'toys',
        images: ['kid-toilet-trainer-potty-1.jpeg','kid-toilet-trainer-potty-2.jpg','kid-toilet-trainer-potty-3.jpg'],
        specifications: [
            { name: 'Material', value: 'plastic'},
        ]
    },
    {
        id: 'p100',
        name: 'Self draining soap dish, Green-dh',
        description: 'Self draining soap dish, green. water drains from the soap and soap dish immediately thus keeping the soap and soap dish dry all the time. No more soggy soap, no soap wastage, convenient to use, beautiful, strong and durable.',
        price: 35000,
        originalPrice: 45000,
        category: 'beauty',
        images: ['self-draining-soap-dish-1.jpeg'],
        specifications: [
            { name: 'Material', value: 'plastic'},
            { name: 'Color', value: 'Green'},
        ]
    },
    {
        id: 'p101',
        name: 'Self draining soap dish, Brown-dh',
        description: 'Self draining soap dish, brown. water drains from the soap and soap dish immediately thus keeping the soap and soap dish dry all the time. No more soggy soap, no soap wastage, convenient to use, beautiful, strong and durable.',
        price: 35000,
        originalPrice: 45000,
        category: 'beauty',
        images: ['self-draining-soap-dish-2.jpeg'],
        specifications: [
            { name: 'Material', value: 'plastic'},
            { name: 'Color', value: 'Brown'},
        ]
    },
    {
        id: 'p102',
        name: 'Baby head guard, fall impact protector-bdy',
        description: 'Baby wearable fall impact guard protector to protect the baby from any head damages incase of  fall. available in various colors, convenient to use, beautiful, strong and durable.',
        price: 55000,
        originalPrice: 65000,
        category: 'toys',
        images: ['baby-fall-impact-guard-protector-1.jpeg','baby-fall-impact-guard-protector-2.jpeg','baby-fall-impact-guard-protector-3.jpeg','baby-fall-impact-guard-protector-41.jpeg'],
        specifications: [
            { name: 'Material', value: 'cushioned velvet fabric'},
            { name: 'Color', value: 'Pink, blue, yellow, red'},
        ]
    },
    {
        id: 'p103',
        name: 'Kid toilet trainer, potty, 3in1-bdy',
        description: 'Kid 3in1 toilet trainer, cum potty, can be used through the different stanges of the baby growth or as needed, convenient to use, beautiful, strong and durable.',
        price: 120000,
        originalPrice: 145000,
        category: 'toys',
        images: ['kid-toilet-trainer-3in1-1.jpeg','kid-toilet-trainer-3in1-2.jpeg','kid-toilet-trainer-3in1-3.jpeg'],
        specifications: [
            { name: 'Material', value: 'Plastic and special foam materials'},
            { name: 'Color', value: 'Pink, blue, yellow, grey, red'},
        ]
    },
    {
        id: 'p104',
        name: 'Hammock swing chair-mz',
        description: 'Hammock swing chair for maximum comfort and relaxation, can be used indoors or outdoors, convenient to use, easy to install, beautiful, strong and durable.',
        price: 300000,
        originalPrice: 350000,
        category: 'home',
        images: ['hammock-swing-chair-1.jpeg','hammock-swing-chair-2.jpeg','hammock-swing-chair-3.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p105',
        name: 'Multipurpose stool, bedside, sofaside-btz',
        description: 'Bedside, sofaside multipurpose stool with pedestral base, executive finish, convenient to use, strong and durable.',
        price: 200000,
        originalPrice: 230000,
        category: 'home',
        images: ['bedside-stool-table-1.jpeg','bedside-stool-table-2.jpeg'],
        specifications: [
            { name: 'Material', value: 'metallic, wood'},
            { name: 'Size', value: '15.7x20.28x15.75 inch'},
        ]
    },
    {
        id: 'p106',
        name: 'Multipurpose side table-btz',
        description: 'Multipurpose side table with wheels, can be used bedside, sofaside or computer table executive finish, convenient to use, strong and durable.',
        price: 200000,
        originalPrice: 230000,
        category: 'home',
        images: ['side table-computer table-1.jpeg','side table-computer table-2.jpeg','side table-computer table-3.jpeg'],
        specifications: [
            { name: 'Material', value: 'stainless steel frame, wooden top'},
            { name: 'Color', value: 'mahogany'},
        ]
    },
    {
        id: 'p107',
        name: 'Kid tricycle, 1-4 years, Blue-bdy',
        description: 'Kid tricycle for ages 1-4 years, manual, executive finish, safe to use, strong and durable.',
        price: 200000,
        originalPrice: 230000,
        category: 'toys',
        images: ['kid-tricycle-bicycle-blue.jpeg','kid-tricycle-bicycle-green.jpeg','kid-tricycle-bicycle-biege.jpeg','kid-tricycle-bicycle-grey.jpeg'],
        specifications: [
            { name: 'Color', value: 'Blue'},
        ]
    },
    {
        id: 'p108',
        name: 'Kid tricycle, 1-4 years, Green-bdy',
        description: 'Kid tricycle for ages 1-4 years, manual, executive finish, safe to use, strong and durable.',
        price: 200000,
        originalPrice: 230000,
        category: 'toys',
        images: ['kid-tricycle-bicycle-green.jpeg','kid-tricycle-bicycle-blue.jpeg','kid-tricycle-bicycle-biege.jpeg','kid-tricycle-bicycle-grey.jpeg'],
        specifications: [
            { name: 'Color', value: 'Green'},
        ]
    },
    {
        id: 'p109',
        name: 'Kid tricycle, 1-4 years, Biege-bdy',
        description: 'Kid tricycle for ages 1-4 years, manual, executive finish, safe to use, strong and durable.',
        price: 200000,
        originalPrice: 230000,
        category: 'toys',
        images: ['kid-tricycle-bicycle-biege.jpeg','kid-tricycle-bicycle-blue.jpeg','kid-tricycle-bicycle-green.jpeg','kid-tricycle-bicycle-grey.jpeg'],
        specifications: [
            { name: 'Color', value: 'Biege'},
        ]
    },
    {
        id: 'p110',
        name: 'Kid tricycle, 1-4 years, Grey-bdy',
        description: 'Kid tricycle for ages 1-4 years, manual, executive finish, safe to use, strong and durable.',
        price: 200000,
        originalPrice: 230000,
        category: 'toys',
        images: ['kid-tricycle-bicycle-grey.jpeg','kid-tricycle-bicycle-blue.jpeg','kid-tricycle-bicycle-green.jpeg','kid-tricycle-bicycle-biege.jpeg'],
        specifications: [
            { name: 'Color', value: 'grey'},
        ]
    },
    {
        id: 'p111',
        name: 'Dish drying rack, 3 tier-geo',
        description: '3 tier dish drying rack, has extra accessory hanging points, has bottom drain water tray to guard against spillover, executive finish, safe to use, strong and durable.',
        price: 125000,
        originalPrice: 150000,
        category: 'home',
        images: ['dish-drying-rack-3 tier-1.jpeg','dish-drying-rack-3 tier-2.jpeg','dish-drying-rack-3 tier-3.jpeg'],
        specifications: [
            { name: 'Color', value: 'black'},
        ]
    },
    {
        id: 'p112',
        name: 'Kitchen multifunctional storage rack-btz',
        description: 'Multifunctional storage rack, can be used in the kitchen, livingroom and many more, wide storage area, executive finish,strong and durable.',
        price: 240000,
        originalPrice: 260000,
        category: 'home',
        images: ['multipurpose-kitchen-rack-1.jpeg','multipurpose-kitchen-rack-2.jpeg','multipurpose-kitchen-rack-3.jpeg'],
        specifications: [
            { name: 'Color', value: 'Aluminium, black'},
        ]
    },
    {
        id: 'p113',
        name: 'Body posture corrector, posture support brace-dh',
        description: 'Posture support brace, posture corrector, effective, strong and durable.',
        price: 55000,
        originalPrice: 75000,
        category: 'fashion',
        images: ['posture-corrector-brace-shaper-1.jpeg','posture-corrector-brace-shaper-2.jpeg','posture-corrector-brace-shaper-3.jpeg'],
        specifications: [
            { name: 'Color', value: 'black'},
        ]
    },
    {
        id: 'p114',
        name: 'Portable air cooler, fan, AC,6 liter Midea-ymh',
        description: 'Midea portable air cooler, 6L capacity with 3 speed control nob,good to keep your home or office cool all the time, strong and durable.',
        price: 350000,
        originalPrice: 400000,
        category: 'home',
        images: ['air-cooler-ac-fan-midea-1.jpeg','air-cooler-ac-fan-midea-2.jpeg','air-cooler-ac-fan-midea-3.jpeg','air-cooler-ac-fan-midea-3.jpeg'],
        specifications: [
            { name: 'Color', value: 'White'},
            { name: 'Capacity', value: '6 liter'},
            { name: 'Power', value: '50w, 220-240v'},
        ]
    },
    {
        id: 'p115',
        name: 'Cotton bedspread, bedcover, 4pc set for 6x6ft, 6x7ft & 7x7ft bed-mdn',
        description: 'Cotton bedspread, bedcover set for bed sizes 6x6ft, 6x7ft, 7x7ft, set contains 1 bedcover, 1 bedsheet, 2 pillowcovers, warm, beautiful, strong and durable.',
        price: 155000,
        originalPrice: 180000,
        category: 'beauty',
        images: ['cotton-bedspread-bedcover-2.jpeg'],
        specifications: [
            { name: 'Material', value: 'Cotton'},
            { name: 'Size', value: '6x6ft, 6x7ft, 7x7ft'},
        ]
    },
    {
        id: 'p116',
        name: 'Cotton bedspread, bedcover, 4pc set for 6x6ft, 6x7ft & 7x7ft bed-mdn',
        description: 'Cotton bedspread, bedcover set for bed sizes 6x6ft, 6x7ft, 7x7ft, set contains 1 bedcover, 1 bedsheet, 2 pillowcovers, warm, beautiful, strong and durable.',
        price: 155000,
        originalPrice: 180000,
        category: 'beauty',
        images: ['cotton-bedspread-bedcover-3.jpeg'],
        specifications: [
            { name: 'Material', value: 'Cotton'},
            { name: 'Size', value: '6x6ft, 6x7ft, 7x7ft'},
        ]
    },
    {
        id: 'p117',
        name: 'Cotton bedspread, bedcover, 4pc set for 6x6ft, 6x7ft & 7x7ft bed-mdn',
        description: 'Cotton bedspread, bedcover set for bed sizes 6x6ft, 6x7ft, 7x7ft, set contains 1 bedcover, 1 bedsheet, 2 pillowcovers, warm, beautiful, strong and durable.',
        price: 155000,
        originalPrice: 180000,
        category: 'beauty',
        images: ['cotton-bedspread-bedcover-4.jpeg'],
        specifications: [
            { name: 'Material', value: 'Cotton'},
            { name: 'Size', value: '6x6ft, 6x7ft, 7x7ft'},
        ]
    },
    {
        id: 'p118',
        name: 'Cotton bedspread, bedcover, 4pc set for 6x6ft, 6x7ft & 7x7ft bed-mdn',
        description: 'Cotton bedspread, bedcover set for bed sizes 6x6ft, 6x7ft, 7x7ft, set contains 1 bedcover, 1 bedsheet, 2 pillowcovers, warm, beautiful, strong and durable.',
        price: 155000,
        originalPrice: 180000,
        category: 'beauty',
        images: ['cotton-bedspread-bedcover-5.jpeg'],
        specifications: [
            { name: 'Material', value: 'Cotton'},
            { name: 'Size', value: '6x6ft, 6x7ft, 7x7ft'},
        ]
    },
    {
        id: 'p119',
        name: 'Cotton bedspread, bedcover, 4pc set for 6x6ft, 6x7ft & 7x7ft bed-mdn',
        description: 'Cotton bedspread, bedcover set for bed sizes 6x6ft, 6x7ft, 7x7ft, set contains 1 bedcover, 1 bedsheet, 2 pillowcovers, warm, beautiful, strong and durable.',
        price: 155000,
        originalPrice: 180000,
        category: 'beauty',
        images: ['cotton-bedspread-bedcover-6.jpeg'],
        specifications: [
            { name: 'Material', value: 'Cotton'},
            { name: 'Size', value: '6x6ft, 6x7ft, 7x7ft'},
        ]
    },
    {
        id: 'p120',
        name: 'Cotton bedspread, bedcover, 4pc set for 6x6ft, 6x7ft & 7x7ft bed-mdn',
        description: 'Cotton bedspread, bedcover set for bed sizes 6x6ft, 6x7ft, 7x7ft, set contains 1 bedcover, 1 bedsheet, 2 pillowcovers, warm, beautiful, strong and durable.',
        price: 155000,
        originalPrice: 180000,
        category: 'beauty',
        images: ['cotton-bedspread-bedcover-7.jpeg'],
        specifications: [
            { name: 'Material', value: 'Cotton'},
            { name: 'Size', value: '6x6ft, 6x7ft, 7x7ft'},
        ]
    },
    {
        id: 'p121',
        name: 'Cotton bedspread, bedcover, 4pc set for 6x6ft, 6x7ft & 7x7ft bed-mdn',
        description: 'Cotton bedspread, bedcover set for bed sizes 6x6ft, 6x7ft, 7x7ft, set contains 1 bedcover, 1 bedsheet, 2 pillowcovers, warm, beautiful, strong and durable.',
        price: 155000,
        originalPrice: 180000,
        category: 'beauty',
        images: ['cotton-bedspread-bedcover-8.jpeg'],
        specifications: [
            { name: 'Material', value: 'Cotton'},
            { name: 'Size', value: '6x6ft, 6x7ft, 7x7ft'},
        ]
    },
    {
        id: 'p122',
        name: 'Cotton bedspread, bedcover, 4pc set for 6x6ft, 6x7ft & 7x7ft bed-mdn',
        description: 'Cotton bedspread, bedcover set for bed sizes 6x6ft, 6x7ft, 7x7ft, set contains 1 bedcover, 1 bedsheet, 2 pillowcovers, warm, beautiful, strong and durable.',
        price: 155000,
        originalPrice: 180000,
        category: 'beauty',
        images: ['cotton-bedspread-bedcover-9.jpeg'],
        specifications: [
            { name: 'Material', value: 'Cotton'},
            { name: 'Size', value: '6x6ft, 6x7ft, 7x7ft'},
        ]
    },
    {
        id: 'p123',
        name: 'Cotton bedspread, bedcover, 4pc set for 6x6ft, 6x7ft & 7x7ft bed-mdn',
        description: 'Cotton bedspread, bedcover set for bed sizes 6x6ft, 6x7ft, 7x7ft, set contains 1 bedcover, 1 bedsheet, 2 pillowcovers, warm, beautiful, strong and durable.',
        price: 155000,
        originalPrice: 180000,
        category: 'beauty',
        images: ['cotton-bedspread-bedcover-10.jpeg'],
        specifications: [
            { name: 'Material', value: 'Cotton'},
            { name: 'Size', value: '6x6ft, 6x7ft, 7x7ft'},
        ]
    },
    {
        id: 'p124',
        name: 'Rabbit fur duvet, bedcover, 10pc set for 5x6ft, 6x6ft bed, Cream-mdn',
        description: 'Rabbit fur 10pc bedspread, bedcover set for bed sizes 5x6ft, 6x6ft beds, set contains 1 duvet, 1 bedsheet, 4 pillowcovers, 2 cushions and 2 pairs of sandals, warm, comfortable, beautiful, strong and durable.',
        price: 320000,
        originalPrice: 350000,
        category: 'beauty',
        images: ['rabbit fur-duvet-bedcover-cream.jpeg'],
        specifications: [
            { name: 'Material', value: 'Rabbit fur'},
            { name: 'Size', value: '5x6ft, 6x6ft'},
            { name: 'Color', value: 'Cream'},
        ]
    },
    {
        id: 'p125',
        name: 'Rabbit fur duvet, bedcover, 10pc set for 5x6ft, 6x6ft bed, Grey-mdn',
        description: 'Rabbit fur 10pc bedspread, bedcover set for bed sizes 5x6ft, 6x6ft beds, set contains 1 duvet, 1 bedsheet, 4 pillowcovers, 2 cushions and 2 pairs of sandals, warm, comfortable, beautiful, strong and durable.',
        price: 320000,
        originalPrice: 350000,
        category: 'beauty',
        images: ['rabbit fur-duvet-bedcover-grey.jpeg'],
        specifications: [
            { name: 'Material', value: 'Rabbit fur'},
            { name: 'Size', value: '5x6ft, 6x6ft'},
            { name: 'Color', value: 'Grey'},
        ]
    },
    {
        id: 'p126',
        name: 'Rabbit fur duvet, bedcover, 10pc set for 5x6ft, 6x6ft bed, Pink-mdn',
        description: '09pc cotton duvet, bedcover set for 8x8ft bed, set contains 1 duvet, 1 bedsheet, 4 pillowcovers, 2 cushions and 2 pairs of slippers, warm, comfortable, beautiful, strong and durable.',
        price: 320000,
        originalPrice: 350000,
        category: 'beauty',
        images: ['rabbit fur-duvet-bedcover-pink.jpeg'],
        specifications: [
            { name: 'Material', value: 'Rabbit fur'},
            { name: 'Size', value: '5x6ft, 6x6ft'},
            { name: 'Color', value: 'Pink'},
        ]
    },
    {
        id: 'p127',
        name: 'Portable closet, with integrated shoe storage-mrf',
        description: 'Portable plastic closet with integrated shoe storage,4 column, 10 cubes and 2 doors, light weight but strong, dustproof, waterproof, made of strong PP plastic panels and steel frame',
        price: 235000,
        originalPrice: 260000,
        category: 'beauty',
        images: ['portable-closet-7.jpeg','portable-closet-8.jpeg','portable-closet-9.jpeg','portable-closet-10.jpeg','portable-closet-11.jpeg','portable-closet-12.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel frame, pp plastic outer material'},
        ]
    },
    {
        id: 'p128',
        name: 'Juice dispenser, 4.5 liters-mrf',
        description: '4.5 liters juice dispenser with a tap, beautiful, strong and durable.',
        price: 75000,
        originalPrice: 85000,
        category: 'home',
        images: ['juice-dispenser-sp-1.jpeg','juice-dispenser-sp-2.jpeg','juice-dispenser-sp-3.jpeg'],
        specifications: [
            { name: 'Material', value: 'Plastic'},
            { name: 'Capacity', value: '4.5 liters'},
        ]
    },
    {
        id: 'p129',
        name: 'Waterproof apron, 01 piece-mrf',
        description: 'Waterproof apron for use in kitchen and other areas involving liquids to protect your clothing from getting wet, beautiful, strong and durable.',
        price: 20000,
        originalPrice: 25000,
        category: 'home',
        images: ['waterproof-apron.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p130',
        name: 'Rainbow teddy bear-bdy',
        description: 'Soft, huggable rainbow color teddy bear, can be used by kids, babbies and adults, beautiful, strong and durable.',
        price: 55000,
        originalPrice: 75000,
        category: 'beauty',
        images: ['pink-teddy bear.jpeg','blue-teddy bear.jpeg','green-teddy bear.jpeg'],
        specifications: [
            { name: 'Material', value: 'Cotton'},
            { name: 'Size', value: '8x8ft'},
        ]
    },
    {
        id: 'p131',
        name: 'Spark electronic gas lighter-chp',
        description: 'Long nozzle electronic spark gas lighter, its long nozzle makes it easier and safe to use, strong and durable.',
        price: 35000,
        originalPrice: 50000,
        category: 'home',
        images: ['spark-gas-lighter-1.jpeg','spark-gas-lighter-2.jpeg'],
        specifications: [
            { name: 'Material', value: 'soft huggable material'},
        ]
    },
    {
        id: 'p132',
        name: 'Electric kettle, 5L-ymh',
        description: '5 liters cordless electric kettle, Winning star, its cordless detachable design allows easy pouring and serving, beautiful, strong and durable.',
        price: 100000,
        originalPrice: 120000,
        category: 'home',
        images: ['electric-kettle-1.jpeg','electric-kettle-2.jpeg'],
        specifications: [
            { name: 'Material', value: 'Stainless steel'},
            { name: 'Capacity', value: '5 liters'},
        ]
    },
    {
        id: 'p133',
        name: 'Over the sink dish drying rack-geo',
        description: 'Sinktop dish drying rack. its multi-tieredbstorage is designed to maximize kitchen counter space, its rust free, plate holders and various other storage accessories, has openeble and closeable dust cover, beautiful, strong and durable.',
        price: 220000,
        originalPrice: 250000,
        category: 'home',
        images: ['sinktop-dish-drying-rack-1.jpeg','sinktop-dish-drying-rack-2.jpeg','sinktop-dish-drying-rack-3.jpeg'],
        specifications: [
            { name: 'Material', value: 'Coated steel'},
        ]
    },
    {
        id: 'p134',
        name: 'Baby 2in1 high height adjustable feeding chair-bdy',
        description: 'Baby high feeding chair, height adjustable, beautiful, strong, comfortable and durable.',
        price: 220000,
        originalPrice: 250000,
        category: 'home',
        images: ['kid-feeding-table--chair-1.jpeg','kid-feeding-table--chair-2.jpeg','kid-feeding-table--chair-3.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p135',
        name: 'Glass cooking pot with wooden handles, 3.5 liters-mrf',
        description: '3.5 liters Borosilicate heat resistant glass cooking pot, clear glass renders easy cooking monitoring, strong and durable.',
        price: 120000,
        originalPrice: 150000,
        category: 'beauty',
        images: ['glass-cooking pot-1.jpeg','glass-cooking pot-2.jpeg','glass-cooking pot-3.jpeg'],
        specifications: [
            { name: 'Material', value: 'heat resistant glass'},
            { name: 'Capacity', value: '3.5 liters'},
        ]
    },
    {
        id: 'p136',
        name: 'Mini portable sewing machine-fti',
        description: 'Portable mini sewing machine with 12 built-in stitch patterns, offering versatality for various sewing projects, double thread, double stich and with led sewing lights, strong and durable.',
        price: 150000,
        originalPrice: 200000,
        category: 'home',
        images: ['mini-sewing machine-new-1.jpeg','mini-sewing machine-new-2.jpeg','mini-sewing machine-new-3.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p137',
        name: 'Rotating 3 pieces glass juice dispenser, 5.5L, golden color-fti',
        description: 'Rotaing 3pc glass juice dispenser with wooden stand, has 3 compartments totaling 5.5 liters capacity and each compartment with its own tap to allow dispensing various beverages. its design; slim and compact saves space, beautiful, strong and durable.',
        price: 185000,
        originalPrice: 220000,
        category: 'home',
        images: ['beverage-dispenser-3in1-1.jpeg','beverage-dispenser-3in1-2.jpeg','beverage-dispenser-3in1-3.jpeg'],
        specifications: [
            { name: 'Material', value: 'mettallic frame, glass cups, wooden stand'},
            { name: 'Capacity', value: '5.5 liters'},
        ]
    },
    {
        id: 'p138',
        name: 'Nonstick aluminum cooking pot set, black colour-geo',
        description: 'Black nonstick aluminium cooking pots set with a frying pan. Due to various sizes of the pots, it makes the set for various cooking needs, beautiful, strong and durable.',
        price: 220000,
        originalPrice: 250000,
        category: 'home',
        images: ['nonstick-aluminum-cooking pots-1.jpeg','nonstick-aluminum-cooking pots-2.jpeg'],
        specifications: [
            { name: 'Material', value: 'Aluminum, nonstick'},
        ]
    },
    {
        id: 'p139',
        name: 'Garlic crusher-mrf',
        description: 'Manual stainelss steel garlic crushing machine, easy to use, rust free, designed to use minimal energy during use, can crush garlic, onions and many more strong and durable.',
        price: 45000,
        originalPrice: 50000,
        category: 'home',
        images: ['garlic-crusher-1.jpeg','garlic-crusher-2.jpeg','garlic-crusher-3.jpeg'],
        specifications: [
            { name: 'Material', value: 'Stainless steel'},
        ]
    },
    {
        id: 'p140',
        name: 'Watermelon slicer-mrf',
        description: 'Manual stainelss steel watermelon slicing machine, easy to use, cuts professional equal size slices, rust free, designed to use minimal energy during use, strong and durable.',
        price: 45000,
        originalPrice: 50000,
        category: 'home',
        images: ['watermelon-slicer-3.jfif','watermelon-slicer-2.jfif'],
        specifications: [
            { name: 'Material', value: 'Stainless steel blades, plastic handles'},
        ]
    },
    {
        id: 'p141',
        name: 'Electric toothbrush-mrf',
        description: 'Electric toothbrush, easy to use, fast and effective, strong and durable.',
        price: 45000,
        originalPrice: 50000,
        category: 'fashion',
        images: ['electric-toothbrush-1.jpg','electric-toothbrush-2.jfif','electric-toothbrush-3.jfif','electric-toothbrush-4.jfif'],
        specifications: [
        ]
    },
    {
        id: 'p142',
        name: 'Electric toothbrush-mrf',
        description: 'Electric toothbrush, easy to use, fast and effective, strong and durable.',
        price: 45000,
        originalPrice: 50000,
        category: 'home',
        images: ['electric-toothbrush-3.jfif','electric-toothbrush-2.jfif','electric-toothbrush-1.jpg','electric-toothbrush-4.jfif'],
        specifications: [
        ]
    },
    {
        id: 'p143',
        name: 'Mini portable sewing machine-fti',
        description: 'Portable mini sewing machine for light urgent home sewing work, strong and durable.',
        price: 65000,
        originalPrice: 85000,
        category: 'home',
        images: ['mini-sewing machine-1.jpeg','mini-sewing machine-2.jpeg','mini-sewing machine-3.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p144',
        name: 'Baby 2in1 high height adjustable feeding chair-bdy',
        description: 'Baby high feeding chair, height adjustable, beautiful, strong, comfortable and durable.',
        price: 220000,
        originalPrice: 250000,
        category: 'toys',
        images: ['kid-feeding-table--chair-1.jpeg','kid-feeding-table--chair-2.jpeg','kid-feeding-table--chair-3.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p145',
        name: 'Electric kettle, 5L-ymh',
        description: '5 liters cordless electric kettle, its cordless detachable design allows easy pouring and serving, beautiful, strong and durable.',
        price: 100000,
        originalPrice: 120000,
        category: 'home',
        images: ['electric-kettle-3.jpeg','electric-kettle-4.jpeg','electric-kettle-5.jpeg'],
        specifications: [
            { name: 'Material', value: 'Stainless steel'},
            { name: 'Capacity', value: '5 liters'},
            ]
    },
    {
        id: 'p146',
        name: 'Rainbow teddy bear-bdy',
        description: 'Soft, huggable rainbow color teddy bear, can be used by kids, babbies and adults, beautiful, strong and durable.',
        price: 55000,
        originalPrice: 75000,
        category: 'toys',
        images: ['pink-teddy bear.jpeg','blue-teddy bear.jpeg','green-teddy bear.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p147',
        name: 'Rainbow teddy bear-bdy',
        description: 'Soft, huggable rainbow color teddy bear, can be used by kids, babbies and adults, beautiful, strong and durable.',
        price: 55000,
        originalPrice: 75000,
        category: 'toys',
        images: ['green-teddy bear.jpeg','blue-teddy bear.jpeg','pink-teddy bear.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p148',
        name: 'Rainbow teddy bear-bdy',
        description: 'Soft, huggable rainbow color teddy bear, can be used by kids, babbies and adults, beautiful, strong and durable.',
        price: 55000,
        originalPrice: 75000,
        category: 'beauty',
        images: ['green-teddy bear.jpeg','blue-teddy bear.jpeg','pink-teddy bear.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p149',
        name: 'Rainbow teddy bear-bdy',
        description: 'Soft, huggable rainbow color teddy bear, can be used by kids, babbies and adults, beautiful, strong and durable.',
        price: 55000,
        originalPrice: 75000,
        category: 'beauty',
        images: ['blue-teddy bear.jpeg','green-teddy bear.jpeg','pink-teddy bear.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p150',
        name: 'Rainbow teddy bear-bdy',
        description: 'Soft, huggable rainbow color teddy bear, can be used by kids, babbies and adults, beautiful, strong and durable.',
        price: 55000,
        originalPrice: 75000,
        category: 'toys',
        images: ['blue-teddy bear.jpeg','green-teddy bear.jpeg','pink-teddy bear.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p151',
        name: 'Waterproof apron, 01 piece-mrf',
        description: 'Waterproof apron for use in kitchen and other areas involving liquids to protect your clothing from getting wet, beautiful, strong and durable.',
        price: 20000,
        originalPrice: 25000,
        category: 'toys',
        images: ['waterproof-apron.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p152',
        name: 'Portable closet, with integrated shoe storage-mrf',
        description: 'Portable plastic closet with integrated shoe storage,4 column, 10 cubes and 2 doors, light weight but strong, dustproof, waterproof, made of strong PP plastic panels and steel frame',
        price: 235000,
        originalPrice: 260000,
        category: 'beauty',
        images: ['portable-closet-8.jpeg','portable-closet-7.jpeg','portable-closet-9.jpeg','portable-closet-10.jpeg','portable-closet-11.jpeg','portable-closet-12.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel frame, pp plastic outer material'},
        ]
    },
    {
        id: 'p153',
        name: 'Portable closet, with integrated shoe storage-mrf',
        description: 'Portable plastic closet with integrated shoe storage,4 column, 10 cubes and 2 doors, light weight but strong, dustproof, waterproof, made of strong PP plastic panels and steel frame',
        price: 235000,
        originalPrice: 260000,
        category: 'beauty',
        images: ['portable-closet-9.jpeg','portable-closet-7.jpeg','portable-closet-8.jpeg','portable-closet-10.jpeg','portable-closet-11.jpeg','portable-closet-12.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel frame, pp plastic outer material'},
        ]
    },
    {
        id: 'p154',
        name: 'Portable closet, with integrated shoe storage-mrf',
        description: 'Portable plastic closet with integrated shoe storage,4 column, 10 cubes and 2 doors, light weight but strong, dustproof, waterproof, made of strong PP plastic panels and steel frame',
        price: 235000,
        originalPrice: 260000,
        category: 'beauty',
        images: ['portable-closet-10.jpeg','portable-closet-7.jpeg','portable-closet-8.jpeg','portable-closet-9.jpeg','portable-closet-11.jpeg','portable-closet-12.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel frame, pp plastic outer material'},
        ]
    },
    {
        id: 'p155',
        name: 'Portable closet, with integrated shoe storage-mrf',
        description: 'Portable plastic closet with integrated shoe storage,4 column, 10 cubes and 2 doors, light weight but strong, dustproof, waterproof, made of strong PP plastic panels and steel frame',
        price: 235000,
        originalPrice: 260000,
        category: 'beauty',
        images: ['portable-closet-11.jpeg','portable-closet-7.jpeg','portable-closet-8.jpeg','portable-closet-9.jpeg','portable-closet-10.jpeg','portable-closet-12.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel frame, pp plastic outer material'},
        ]
    },
    {
        id: 'p156',
        name: 'Portable closet, with integrated shoe storage-mrf',
        description: 'Portable plastic closet with integrated shoe storage,4 column, 10 cubes and 2 doors, light weight but strong, dustproof, waterproof, made of strong PP plastic panels and steel frame',
        price: 235000,
        originalPrice: 260000,
        category: 'beauty',
        images: ['portable-closet-12.jpeg','portable-closet-7.jpeg','portable-closet-8.jpeg','portable-closet-9.jpeg','portable-closet-10.jpeg','portable-closet-11.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel frame, pp plastic outer material'},
        ]
    },
    {
        id: 'p157',
        name: 'Mini square frying basket, medium-fti',
        description: 'Stainless steel square frying basket, size; 125mmL x 89mmW x 84mmh, commonly used for serving or deep frying chips, ring onions or chicken fingers and many more. made in food grade materials, rust free and with long handle for extra safety during use. strong and durable.',
        price: 35000,
        originalPrice: 45000,
        category: 'home',
        images: ['mini-frying-basket-1.jpeg','mini-frying-basket-2.jpeg'],
        specifications: [
            { name: 'Material', value: 'Stainless steel'},
            { name: 'Size', value: '125mmL x 89mmW x 84mmH'},
        ]
    },
    {
        id: 'p158',
        name: 'Mini square frying basket, small-fti',
        description: 'Stainless steel square frying basket, size; 102mmL x 67mmW x 74mmh, commonly used for serving or deep frying chips, ring onions or chicken fingers and many more. made in food grade materials, rust free and with long handle for extra safety during use. strong and durable.',
        price: 25000,
        originalPrice: 35000,
        category: 'home',
        images: ['mini-frying-basket-11.jpeg','mini-frying-basket-22.jpeg'],
        specifications: [
            { name: 'Material', value: 'Stainless steel'},
            { name: 'Size', value: '102mmL x 67mmW x 74mmH'},
        ]
    },
    {
        id: 'p159',
        name: 'Portable electric garlic, vegetable chopper, 300ml-fti',
        description: 'Mini 300ml, electric chopper for chopping garlic and various other types of vegetable, safe , fast and convenient to use. strong and durable.',
        price: 45000,
        originalPrice: 55000,
        category: 'home',
        images: ['electric-garlic-vegetable-chopper-1.jpeg','electric-garlic-vegetable-chopper-2.jpeg','electric-garlic-vegetable-chopper-3.jpeg'],
        specifications: [
            { name: 'Material', value: 'Stainless steel blades, plastic outer cup'},
        ]
    },
    {
        id: 'p160',
        name: 'Fruit vegetable chopper, slicer-fti',
        description: 'Manual fruit vegetable chopper slicer for slicing apples, pears and various other fruits and vegetables, safe , fast and convenient to use. strong and durable.',
        price: 35000,
        originalPrice: 45000,
        category: 'home',
        images: ['mini-fruit-vegetable-chopper-slicer-1.jpeg','mini-fruit-vegetable-chopper-slicer-2.jpeg'],
        specifications: [
            { name: 'Material', value: 'Stainless steel'},
        ]
    },
    {
        id: 'p161',
        name: 'Silicone trivet heat mat-fti',
        description: 'Expandable silicone trivet heat mat, pad used to protect kitchen surfaces from hot pans and pots, built in 100% food grade silicone material and can withstand temperatures upto 446 degrees fernheit, safe , easy to clean and convenient to use. strong and durable.',
        price: 15000,
        originalPrice: 30000,
        category: 'home',
        images: ['silicone-heat-pad-1.jpeg','silicone-heat-pad-2.jpeg'],
        specifications: [
            { name: 'Material', value: 'food grade silicone'},
        ]
    },
    {
        id: 'p162',
        name: 'Gas stand cooker, 60x60cm, 3 gas, 1 electric-cpl',
        description: 'Stand gas cooker, Hisense, 60x60cm, 3 gas, 1 electric. Also has electric oven, timer, grill and rosterie,  safe , easy to clean and convenient to use. strong and durable.',
        price: 1100000,
        originalPrice: 1250000,
        category: 'home',
        images: ['gas-cooker-60x60-hisense-1.jpeg','gas-cooker-60x60-hisense-2.jpeg'],
        specifications: [
            { name: 'Material', value: 'steel'},
            { name: 'Size', value: '60x60cm'},
        ]
    },
    {
        id: 'p163',
        name: 'Food warmer, food hot pot, casserole 3pc set, Maroon-fti',
        description: 'Maroon, 3pc food hot pot, casserole set to keep food warm for extended periods. Double walled with stainless interior, made in food grade materials,  safe , easy to clean and convenient to use. strong and durable.',
        price: 300000,
        originalPrice: 350000,
        category: 'home',
        images: ['insulated-food-warmer-pot-1.jpeg','insulated-food-warmer-pot-2.jpeg','insulated-food-warmer-pot-3'],
        specifications: [
            { name: 'Material', value: 'stainless steel interior'},
            { name: 'Color', value: 'Maroon'},
        ]
    },
    {
        id: 'p164',
        name: 'Food warmer, food hot pot, casserole 3pc set, Grey-fti',
        description: 'Grey 3pc food hot pot, casserole set to keep food warm for extended periods. Double walled with stainless interior, made in food grade materials,  safe , easy to clean and convenient to use. strong and durable.',
        price: 300000,
        originalPrice: 350000,
        category: 'home',
        images: ['insulated-food-warmer-pot-2.jpeg','insulated-food-warmer-pot-1.jpeg','insulated-food-warmer-pot-3.jpeg'],
        specifications: [
            { name: 'Material', value: 'stainless steel interior'},
            { name: 'Color', value: 'Grey'},
        ]
    },
    {
        id: 'p165',
        name: 'Food warmer, food hot pot, casserole 3pc set, White-fti',
        description: 'White 3pc food hot pot, casserole set to keep food warm for extended periods. Double walled with stainless interior, made in food grade materials,  safe , easy to clean and convenient to use. strong and durable.',
        price: 300000,
        originalPrice: 350000,
        category: 'home',
        images: ['insulated-food-warmer-pot-3.jpeg','insulated-food-warmer-pot-1.jpeg','insulated-food-warmer-pot-2.jpeg'],
        specifications: [
            { name: 'Material', value: 'stainless steel interior'},
            { name: 'Color', value: 'White'},
        ]
    },
    {
        id: 'p166',
        name: 'Food warmer, food hot pot, casserole 3pc set, White-fti',
        description: 'White 3pc food hot pot, casserole set to keep food warm for extended periods. Double walled with stainless interior, made in food grade materials,  safe , easy to clean and convenient to use. strong and durable.',
        price: 300000,
        originalPrice: 350000,
        category: 'home',
        images: ['insulated-food-warmer-pot-4.jpeg','insulated-food-warmer-pot-5.jpeg','insulated-food-warmer-pot-6.jpeg'],
        specifications: [
            { name: 'Material', value: 'stainless steel interior'},
            { name: 'Color', value: 'White'},
        ]
    },
    {
        id: 'p167',
        name: 'Food warmer, food hot pot, casserole 3pc set, Black-fti',
        description: 'Black 3pc food hot pot, casserole set to keep food warm for extended periods. Double walled with stainless interior, made in food grade materials,  safe , easy to clean and convenient to use. strong and durable.',
        price: 300000,
        originalPrice: 350000,
        category: 'home',
        images: ['insulated-food-warmer-pot-5.jpeg','insulated-food-warmer-pot-4.jpeg','insulated-food-warmer-pot-6.jpeg'],
        specifications: [
            { name: 'Material', value: 'stainless steel interior'},
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p168',
        name: 'Food warmer, food hot pot, casserole 3pc set, Grey-fti',
        description: 'Grey 3pc food hot pot, casserole set to keep food warm for extended periods. Double walled with stainless interior, made in food grade materials,  safe , easy to clean and convenient to use. strong and durable.',
        price: 300000,
        originalPrice: 350000,
        category: 'home',
        images: ['insulated-food-warmer-pot-6.jpeg','insulated-food-warmer-pot-4.jpeg','insulated-food-warmer-pot-5.jpeg'],
        specifications: [
            { name: 'Material', value: 'stainless steel interior'},
            { name: 'Color', value: 'Grey'},
        ]
    },
    {
        id: 'p169',
        name: 'Food warmer, food hot pot, casserole 3pc set, Black-fti',
        description: 'Black 3pc food hot pot, casserole set to keep food warm for extended periods. Double walled with stainless interior, made in food grade materials,  safe , easy to clean and convenient to use. strong and durable.',
        price: 260000,
        originalPrice: 300000,
        category: 'home',
        images: ['insulated-food-warmer-pot-7.jpeg','insulated-food-warmer-pot-8.jpeg'],
        specifications: [
            { name: 'Material', value: 'stainless steel interior'},
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p170',
        name: 'Food warmer, food hot pot, casserole 3pc set, White-fti',
        description: 'White 3pc food hot pot, casserole set to keep food warm for extended periods. Double walled with stainless interior, made in food grade materials,  safe , easy to clean and convenient to use. strong and durable.',
        price: 260000,
        originalPrice: 300000,
        category: 'home',
        images: ['insulated-food-warmer-pot-8.jpeg','insulated-food-warmer-pot-7.jpeg'],
        specifications: [
            { name: 'Material', value: 'stainless steel interior'},
            { name: 'Color', value: 'White'},
        ]
    },
    {
        id: 'p171',
        name: 'Food warmer, food hot pot, casserole 3pc set, Black-fti',
        description: 'Black 3pc food hot pot, casserole set to keep food warm for extended periods. Double walled with stainless interior, made in food grade materials,  safe , easy to clean and convenient to use. strong and durable.',
        price: 185000,
        originalPrice: 210000,
        category: 'home',
        images: ['insulated-food-warmer-pot-9.jpeg','insulated-food-warmer-pot-10.jpeg'],
        specifications: [
            { name: 'Material', value: 'stainless steel interior'},
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p172',
        name: 'Food warmer, food hot pot, casserole 3pc set, White-fti',
        description: 'White 3pc food hot pot, casserole set to keep food warm for extended periods. Double walled with stainless interior, made in food grade materials,  safe , easy to clean and convenient to use. strong and durable.',
        price: 185000,
        originalPrice: 210000,
        category: 'home',
        images: ['insulated-food-warmer-pot-10.jpeg','insulated-food-warmer-pot-9.jpeg'],
        specifications: [
            { name: 'Material', value: 'stainless steel interior'},
            { name: 'Color', value: 'White'},
        ]
    },
    {
        id: 'p173',
        name: 'Food warmer, food hot pot, casserole 3pc set, Golden-fti',
        description: 'Golden 3pc food hot pot, casserole set to keep food warm for extended periods. Double walled with stainless interior, made in food grade materials,  safe , easy to clean and convenient to use. strong and durable.',
        price: 230000,
        originalPrice: 250000,
        category: 'home',
        images: ['insulated-food-warmer-pot-11.jpeg','insulated-food-warmer-pot-12.jpeg','insulated-food-warmer-pot-13.jpeg'],
        specifications: [
            { name: 'Material', value: 'stainless steel interior'},
            { name: 'Color', value: 'Golden'},
        ]
    },
    {
        id: 'p174',
        name: 'Portable closet, with integrated shoe storage-mrf',
        description: 'Portable plastic closet with integrated shoe storage,2 column, 5 cubes and 1 doors, light weight but strong, dustproof, waterproof, made of strong PP plastic panels and steel frame',
        price: 160000,
        originalPrice: 200000,
        category: 'beauty',
        images: ['portable-closet-1.jpeg','portable-closet-2.jpeg','portable-closet-3.jpeg','portable-closet-4.jpeg','portable-closet-5.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel frame, pp plastic outer material'},
        ]
    },
    {
        id: 'p175',
        name: 'Portable closet, with integrated shoe storage-mrfb',
        description: 'Portable plastic closet with integrated shoe storage,2 column, 5 cubes and 1 doors, light weight but strong, dustproof, waterproof, made of strong PP plastic panels and steel frame',
        price: 160000,
        originalPrice: 200000,
        category: 'beauty',
        images: ['portable-closet-2.jpeg','portable-closet-1.jpeg','portable-closet-3.jpeg','portable-closet-4.jpeg','portable-closet-5.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel frame, pp plastic outer material'},
        ]
    },
    {
        id: 'p176',
        name: 'Portable closet, with integrated shoe storage-mrfb',
        description: 'Portable plastic closet with integrated shoe storage,2 column, 5 cubes and 1 doors, light weight but strong, dustproof, waterproof, made of strong PP plastic panels and steel frame',
        price: 160000,
        originalPrice: 200000,
        category: 'beauty',
        images: ['portable-closet-3.jpeg','portable-closet-1.jpeg','portable-closet-2.jpeg','portable-closet-4.jpeg','portable-closet-5.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel frame, pp plastic outer material'},
        ]
    },
    {
        id: 'p177',
        name: 'Portable closet, with integrated shoe storage-mrfb',
        description: 'Portable plastic closet with integrated shoe storage,2 column, 5 cubes and 1 doors, light weight but strong, dustproof, waterproof, made of strong PP plastic panels and steel frame',
        price: 160000,
        originalPrice: 200000,
        category: 'beauty',
        images: ['portable-closet-4.jpeg','portable-closet-1.jpeg','portable-closet-2.jpeg','portable-closet-3.jpeg','portable-closet-5.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel frame, pp plastic outer material'},
        ]
    },
    {
        id: 'p178',
        name: 'Portable closet, with integrated shoe storage-mrfb',
        description: 'Portable plastic closet with integrated shoe storage,2 column, 5 cubes and 1 doors, light weight but strong, dustproof, waterproof, made of strong PP plastic panels and steel frame',
        price: 160000,
        originalPrice: 200000,
        category: 'beauty',
        images: ['portable-closet-5.jpeg','portable-closet-1.jpeg','portable-closet-2.jpeg','portable-closet-3.jpeg','portable-closet-4.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel frame, pp plastic outer material'},
        ]
    },
    {
        id: 'p179',
        name: 'Portable closet, with integrated shoe storage-mrfb',
        description: 'Portable plastic closet with integrated shoe storage,2 column, 5 cubes and 1 doors, light weight but strong, dustproof, waterproof, made of strong PP plastic panels and steel frame',
        price: 160000,
        originalPrice: 200000,
        category: 'home',
        images: ['portable-closet-4.jpeg','portable-closet-2.jpeg','portable-closet-3.jpeg','portable-closet-1.jpeg','portable-closet-5.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel frame, pp plastic outer material'},
        ]
    },
    {
        id: 'p180',
        name: 'Portable closet, with integrated shoe storage, White-mrfb',
        description: 'Portable plastic closet with integrated shoe storage, white color, light weight but strong, dustproof, waterproof, made of strong PP plastic panels and steel frame',
        price: 190000,
        originalPrice: 220000,
        category: 'beauty',
        images: ['portable-closet--13.jpeg','portable-closet--14.jpeg','portable-closet--15.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel frame, pp plastic outer material'},
        ]
    },
    {
        id: 'p181',
        name: 'Portable closet, with integrated shoe storage, Blue-mrfb',
        description: 'Portable plastic closet with integrated shoe storage, Blue color, light weight but strong, dustproof, waterproof, made of strong PP plastic panels and steel frame',
        price: 190000,
        originalPrice: 220000,
        category: 'beauty',
        images: ['portable-closet--14.jpeg','portable-closet--13.jpeg','portable-closet--15.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel frame, pp plastic outer material'},
        ]
    },
    {
        id: 'p182',
        name: 'Portable closet, with integrated shoe storage, Pink-mrfb',
        description: 'Portable plastic closet with integrated shoe storage, Pink color, light weight but strong, dustproof, waterproof, made of strong PP plastic panels and steel frame',
        price: 190000,
        originalPrice: 220000,
        category: 'beauty',
        images: ['portable-closet--15.jpeg','portable-closet--13.jpeg','portable-closet--14.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel frame, pp plastic outer material'},
        ]
    },
    {
        id: 'p183',
        name: 'Voltage protector-cpl',
        description: 'Onida Tv, Fridge voltage protector, guard for both undervoltage (below 185v) or overvoltage (above 260v), 220v rating with inbuilt 90 secondsbstartup delay to protect against frequent power flactuations',
        price: 35000,
        originalPrice: 50000,
        category: 'electronics',
        images: ['voltage-protector-guard-1.jpeg'],
        specifications: [
            { name: 'Capacity', value: '220v'},
        ]
    },
    {
        id: 'p184',
        name: 'Voltage protector-cpl',
        description: 'Onida Tv, Fridge voltage protector, guard for both undervoltage (below 185v) or overvoltage (above 260v), 220v rating with inbuilt 90 secondsbstartup delay to protect against frequent power flactuations',
        price: 35000,
        originalPrice: 50000,
        category: 'home',
        images: ['voltage-protector-guard-1.jpeg'],
        specifications: [
            { name: 'Capacity', value: '220v'},
        ]
    },
    {
        id: 'p185',
        name: 'Metal bell alarm clock, Red-rdd',
        description: 'Metal bell alarm table clock with night light. can be used by both kids and adults. strong and durable',
        price: 65000,
        originalPrice: 85000,
        category: 'home',
        images: ['alarm-clock-table-bell-1.jpeg','alarm-clock-table-bell-2.jpeg','alarm-clock-table-bell-3.jpeg','alarm-clock-table-bell-4.jpeg','alarm-clock-table-bell-5.jpeg'],
        specifications: [
         { name: 'Color', value: 'Red'},   
        ]
    },
    {
        id: 'p186',
        name: 'Metal bell alarm clock, Blue-rdd',
        description: 'Metal bell alarm table clock with night light. can be used by both kids and adults. strong and durable',
        price: 65000,
        originalPrice: 85000,
        category: 'home',
        images: ['alarm-clock-table-bell-2.jpeg','alarm-clock-table-bell-1.jpeg','alarm-clock-table-bell-3.jpeg','alarm-clock-table-bell-4.jpeg','alarm-clock-table-bell-5.jpeg'],
        specifications: [
         { name: 'Color', value: 'Blue'},   
        ]
    },
    {
        id: 'p187',
        name: 'Metal bell alarm clock, Pink-rdd',
        description: 'Metal bell alarm table clock with night light. can be used by both kids and adults. strong and durable',
        price: 65000,
        originalPrice: 85000,
        category: 'home',
        images: ['alarm-clock-table-bell-3.jpeg','alarm-clock-table-bell-1.jpeg','alarm-clock-table-bell-2.jpeg','alarm-clock-table-bell-4.jpeg','alarm-clock-table-bell-5.jpeg'],
        specifications: [
         { name: 'Color', value: 'Pink'},   
        ]
    },
    {
        id: 'p189',
        name: 'Metal bell alarm clock, Black-rdd',
        description: 'Metal bell alarm table clock with night light. can be used by both kids and adults. strong and durable',
        price: 65000,
        originalPrice: 85000,
        category: 'home',
        images: ['alarm-clock-table-bell-4.jpeg','alarm-clock-table-bell-1.jpeg','alarm-clock-table-bell-2.jpeg','alarm-clock-table-bell-3.jpeg','alarm-clock-table-bell-5.jpeg'],
        specifications: [
         { name: 'Color', value: 'Black'},   
        ]
    },
    {
        id: 'p190',
        name: 'Metal bell alarm clock, White-rdd',
        description: 'Metal bell alarm table clock with night light. can be used by both kids and adults. strong and durable',
        price: 65000,
        originalPrice: 85000,
        category: 'home',
        images: ['alarm-clock-table-bell-5.jpeg','alarm-clock-table-bell-1.jpeg','alarm-clock-table-bell-2.jpeg','alarm-clock-table-bell-3.jpeg','alarm-clock-table-bell-4.jpeg'],
        specifications: [
         { name: 'Color', value: 'White'},   
        ]
    },
    {
        id: 'p191',
        name: 'Metal bell alarm clock, Red-rdd',
        description: 'Metal bell alarm table clock with night light. can be used by both kids and adults. strong and durable',
        price: 65000,
        originalPrice: 85000,
        category: 'toys',
        images: ['alarm-clock-table-bell-1.jpeg','alarm-clock-table-bell-2.jpeg','alarm-clock-table-bell-3.jpeg','alarm-clock-table-bell-4.jpeg','alarm-clock-table-bell-5.jpeg'],
        specifications: [
         { name: 'Color', value: 'Red'},   
        ]
    },
    {
        id: 'p192',
        name: 'Metal bell alarm clock, Blue-rdd',
        description: 'Metal bell alarm table clock with night light. can be used by both kids and adults. strong and durable',
        price: 65000,
        originalPrice: 85000,
        category: 'toys',
        images: ['alarm-clock-table-bell-2.jpeg','alarm-clock-table-bell-1.jpeg','alarm-clock-table-bell-3.jpeg','alarm-clock-table-bell-4.jpeg','alarm-clock-table-bell-5.jpeg'],
        specifications: [
         { name: 'Color', value: 'Blue'},   
        ]
    },
    {
        id: 'p193',
        name: 'Metal bell alarm clock, Pink-rdd',
        description: 'Metal bell alarm table clock with night light. can be used by both kids and adults. strong and durable',
        price: 65000,
        originalPrice: 85000,
        category: 'toys',
        images: ['alarm-clock-table-bell-3.jpeg','alarm-clock-table-bell-1.jpeg','alarm-clock-table-bell-2.jpeg','alarm-clock-table-bell-4.jpeg','alarm-clock-table-bell-5.jpeg'],
        specifications: [
         { name: 'Color', value: 'Pink'},   
        ]
    },
    {
        id: 'p194',
        name: 'Metal bell alarm clock, Black-rdd',
        description: 'Metal bell alarm table clock with night light. can be used by both kids and adults. strong and durable',
        price: 65000,
        originalPrice: 85000,
        category: 'toys',
        images: ['alarm-clock-table-bell-4.jpeg','alarm-clock-table-bell-1.jpeg','alarm-clock-table-bell-2.jpeg','alarm-clock-table-bell-3.jpeg','alarm-clock-table-bell-5.jpeg'],
        specifications: [
         { name: 'Color', value: 'Black'},   
        ]
    },
    {
        id: 'p195',
        name: 'Metal bell alarm clock, White-rdd',
        description: 'Metal bell alarm table clock with night light. can be used by both kids and adults. strong and durable',
        price: 65000,
        originalPrice: 85000,
        category: 'toys',
        images: ['alarm-clock-table-bell-5.jpeg','alarm-clock-table-bell-1.jpeg','alarm-clock-table-bell-2.jpeg','alarm-clock-table-bell-3.jpeg','alarm-clock-table-bell-4.jpeg'],
        specifications: [
         { name: 'Color', value: 'White'},   
        ]
    },
    {
        id: 'p196',
        name: 'Hardside spinner 3pc travel suitcase set, Grey-rdd',
        description: '3pc hardside spinner lightweight travel suitcase set. made in 100% impact resistant polycarbonate material, has 4 multi directional spinner wheels and telescopic handle. specious with organizational straps and mesh seperators inside. beautiful, strong and durable',
        price: 360000,
        originalPrice: 400000,
        category: 'home',
        images: ['travel-suitcase-1.jpeg','travel-suitcase-2.jpeg'],
        specifications: [
         { name: 'Color', value: 'Grey'},   
        ]
    },
    {
        id: 'p197',
        name: 'Hardside spinner 3pc travel suitcase set, Pink-rdd',
        description: '3pc hardside spinner lightweight travel suitcase set. made in 100% impact resistant polycarbonate material, has 4 multi directional spinner wheels and telescopic handle. specious with organizational straps and mesh seperators inside. beautiful, strong and durable',
        price: 360000,
        originalPrice: 400000,
        category: 'home',
        images: ['travel-suitcase-2.jpeg','travel-suitcase-1.jpeg'],
        specifications: [
         { name: 'Color', value: 'Pink'},   
        ]
    },
    {
        id: 'p198',
        name: 'Hardside spinner 3pc travel suitcase set, Pink-rdd',
        description: '3pc hardside spinner lightweight travel suitcase set. made in 100% impact resistant polycarbonate material, has 4 multi directional spinner wheels and telescopic handle. specious with organizational straps and mesh seperators inside. beautiful, strong and durable',
        price: 360000,
        originalPrice: 400000,
        category: 'home',
        images: ['travel-suitcase-3.jpeg','travel-suitcase-4.jpeg'],
        specifications: [
         { name: 'Color', value: 'Pink'},   
        ]
    },
    {
        id: 'p199',
        name: 'Hardside spinner 3pc travel suitcase set, Cream-rdd',
        description: '3pc hardside spinner lightweight travel suitcase set. made in 100% impact resistant polycarbonate material, has 4 multi directional spinner wheels and telescopic handle. specious with organizational straps and mesh seperators inside. beautiful, strong and durable',
        price: 360000,
        originalPrice: 400000,
        category: 'home',
        images: ['travel-suitcase-4.jpeg','travel-suitcase-3.jpeg'],
        specifications: [
         { name: 'Color', value: 'Cream'},   
        ]
    },
    {
        id: 'p200',
        name: 'Hardside spinner 3pc travel suitcase set, Purple-rdd',
        description: '3pc hardside spinner lightweight travel suitcase set. made in 100% impact resistant light plastic material, has 4 multi directional spinner wheels and telescopic handle. specious with organizational straps and mesh seperators inside. beautiful, strong and durable',
        price: 280000,
        originalPrice: 300000,
        category: 'home',
        images: ['travel-suitcase-5.jpeg'],
        specifications: [
         { name: 'Color', value: 'Purple'},   
        ]
    },
    {
        id: 'p201',
        name: 'Camping sleeping bag, single size: 210cm length x 38cm width, Red-mrf',
        description: 'Camping sleeping bag, single. thick, warm, ultra light with carriage bag',
        price: 85000,
        originalPrice: 100000,
        category: 'home',
        images: ['camping-sleeping-bag-1.jpeg','camping-sleeping-bag-2.jpeg','camping-sleeping-bag-3.jpeg','camping-sleeping-bag-4.jpeg'],
        specifications: [
         { name: 'Size', value: '210cm Length x 38cm Width'}, 
         { name: 'Color', value: 'Red'},   
        ]
    },
    {
        id: 'p202',
        name: 'Camping sleeping bag, single size: 210cm length x 38cm width, Green-mrf',
        description: 'Camping sleeping bag, single. thick, warm, ultra light with carriage bag',
        price: 85000,
        originalPrice: 100000,
        category: 'home',
        images: ['camping-sleeping-bag-2.jpeg','camping-sleeping-bag-1.jpeg','camping-sleeping-bag-3.jpeg','camping-sleeping-bag-4.jpeg'],
        specifications: [
         { name: 'Size', value: '210cm Length x 38cm Width'}, 
         { name: 'Color', value: 'Green'},   
        ]
    },
    {
        id: 'p203',
        name: 'Camping sleeping bag, single size: 210cm length x 38cm width, Blue-mrf',
        description: 'Camping sleeping bag, single. thick, warm, ultra light with carriage bag',
        price: 85000,
        originalPrice: 100000,
        category: 'home',
        images: ['camping-sleeping-bag-3.jpeg','camping-sleeping-bag-1.jpeg','camping-sleeping-bag-2.jpeg','camping-sleeping-bag-4.jpeg'],
        specifications: [
         { name: 'Size', value: '210cm Length x 38cm Width'}, 
         { name: 'Color', value: 'Blue'},   
        ]
    },
    {
        id: 'p204',
        name: 'Camping sleeping bag, single size: 210cm length x 38cm width, Black-mrf',
        description: 'Camping sleeping bag, single. thick, warm, ultra light with carriage bag',
        price: 85000,
        originalPrice: 100000,
        category: 'home',
        images: ['camping-sleeping-bag-4.jpeg','camping-sleeping-bag-1.jpeg','camping-sleeping-bag-2.jpeg','camping-sleeping-bag-3.jpeg'],
        specifications: [
         { name: 'Size', value: '210cm Length x 38cm Width'}, 
         { name: 'Color', value: 'Black'},   
        ]
    },
    {
        id: 'p205',
        name: 'Camping sleeping bag, single size: 210cm length x 38cm width, Red-mrf',
        description: 'Camping sleeping bag, single. thick, warm, ultra light with carriage bag',
        price: 85000,
        originalPrice: 100000,
        category: 'fashion',
        images: ['camping-sleeping-bag-1.jpeg','camping-sleeping-bag-2.jpeg','camping-sleeping-bag-3.jpeg','camping-sleeping-bag-4.jpeg'],
        specifications: [
         { name: 'Size', value: '210cm Length x 38cm Width'}, 
         { name: 'Color', value: 'Red'},   
        ]
    },
    {
        id: 'p206',
        name: 'Camping sleeping bag, single size: 210cm length x 38cm width, Green-mrf',
        description: 'Camping sleeping bag, single. thick, warm, ultra light with carriage bag',
        price: 85000,
        originalPrice: 100000,
        category: 'fashion',
        images: ['camping-sleeping-bag-2.jpeg','camping-sleeping-bag-1.jpeg','camping-sleeping-bag-3.jpeg','camping-sleeping-bag-4.jpeg'],
        specifications: [
         { name: 'Size', value: '210cm Length x 38cm Width'}, 
         { name: 'Color', value: 'Green'},   
        ]
    },
    {
        id: 'p207',
        name: 'Camping sleeping bag, single size: 210cm length x 38cm width, Blue-mrf',
        description: 'Camping sleeping bag, single. thick, warm, ultra light with carriage bag',
        price: 85000,
        originalPrice: 100000,
        category: 'fashion',
        images: ['camping-sleeping-bag-3.jpeg','camping-sleeping-bag-1.jpeg','camping-sleeping-bag-2.jpeg','camping-sleeping-bag-4.jpeg'],
        specifications: [
         { name: 'Size', value: '210cm Length x 38cm Width'}, 
         { name: 'Color', value: 'Blue'},   
        ]
    },
    {
        id: 'p208',
        name: 'Camping sleeping bag, single size: 210cm length x 38cm width, Black-mrf',
        description: 'Camping sleeping bag, single. thick, warm, ultra light with carriage bag',
        price: 85000,
        originalPrice: 100000,
        category: 'fashion',
        images: ['camping-sleeping-bag-4.jpeg','camping-sleeping-bag-1.jpeg','camping-sleeping-bag-2.jpeg','camping-sleeping-bag-3.jpeg'],
        specifications: [
         { name: 'Size', value: '210cm Length x 38cm Width'}, 
         { name: 'Color', value: 'Black'},   
        ]
    },
    {
        id: 'p209',
        name: 'Foot massage slippers-mrf',
        description: 'Accupressure foot massage slippers, unisex, strong, effective and durable',
        price: 65000,
        originalPrice: 90000,
        category: 'fashion',
        images: ['foot-massage-slippers-accupressure-1.jpeg','foot-massage-slippers-accupressure-2.jpeg','foot-massage-slippers-accupressure-3.jpeg'],
        specifications: [
         { name: 'Size', value: '35-41 adult size'}, 
         { name: 'Color', value: 'Black'},   
        ]
    },
    {
        id: 'p210',
        name: 'Foot massage slippers-mrf',
        description: 'Accupressure foot massage slippers, unisex, strong, effective and durable',
        price: 65000,
        originalPrice: 90000,
        category: 'home',
        images: ['foot-massage-slippers-accupressure-2.jpeg','foot-massage-slippers-accupressure-3.jpeg','foot-massage-slippers-accupressure-1.jpeg'],
        specifications: [
         { name: 'Size', value: '35-41 adult size'}, 
         { name: 'Color', value: 'Black'},   
        ]
    },
    {
        id: 'p211',
        name: 'Electric engraving pen-btz',
        description: 'Mini battery operated engraving, carving pen, engraves on wood, glass, plastic, metal, leather and many more, user friendly, compact, light weight, strong, effective and durable',
        price: 75000,
        originalPrice: 90000,
        category: 'home',
        images: ['electric-engraving-pen-1.jpeg','electric-engraving-pen-2.jpeg'],
        specifications: [
         { name: 'Color', value: 'Blue'},   
        ]
    },
    {
        id: 'p212',
        name: 'Electric engraving pen-btz',
        description: 'Mini battery operated engraving, carving pen, engraves on wood, glass, plastic, metal, leather and many more, user friendly, compact, light weight, strong, effective and durable',
        price: 75000,
        originalPrice: 90000,
        category: 'electronics',
        images: ['electric-engraving-pen-2.jpeg','electric-engraving-pen-1.jpeg'],
        specifications: [
         { name: 'Color', value: 'Blue'},   
        ]
    },
    {
        id: 'p213',
        name: 'Hardside spinner 3pc travel suitcase set, Grey-rdd',
        description: '3pc hardside spinner lightweight travel suitcase set. made in 100% impact resistant polycarbonate material, has 4 multi directional spinner wheels and telescopic handle. specious with organizational straps and mesh seperators inside. beautiful, strong and durable',
        price: 360000,
        originalPrice: 400000,
        category: 'beauty',
        images: ['travel-suitcase-1.jpeg','travel-suitcase-2.jpeg'],
        specifications: [
         { name: 'Color', value: 'Grey'},   
        ]
    },
    {
        id: 'p214',
        name: 'Hardside spinner 3pc travel suitcase set, Pink-rdd',
        description: '3pc hardside spinner lightweight travel suitcase set. made in 100% impact resistant polycarbonate material, has 4 multi directional spinner wheels and telescopic handle. specious with organizational straps and mesh seperators inside. beautiful, strong and durable',
        price: 360000,
        originalPrice: 400000,
        category: 'beauty',
        images: ['travel-suitcase-2.jpeg','travel-suitcase-1.jpeg'],
        specifications: [
         { name: 'Color', value: 'Pink'},   
        ]
    },
    {
        id: 'p215',
        name: 'Hardside spinner 3pc travel suitcase set, Pink-rdd',
        description: '3pc hardside spinner lightweight travel suitcase set. made in 100% impact resistant polycarbonate material, has 4 multi directional spinner wheels and telescopic handle. specious with organizational straps and mesh seperators inside. beautiful, strong and durable',
        price: 360000,
        originalPrice: 400000,
        category: 'beauty',
        images: ['travel-suitcase-3.jpeg','travel-suitcase-4.jpeg'],
        specifications: [
         { name: 'Color', value: 'Pink'},   
        ]
    },
    {
        id: 'p216',
        name: 'Hardside spinner 3pc travel suitcase set, Cream-rdd',
        description: '3pc hardside spinner lightweight travel suitcase set. made in 100% impact resistant polycarbonate material, has 4 multi directional spinner wheels and telescopic handle. specious with organizational straps and mesh seperators inside. beautiful, strong and durable',
        price: 360000,
        originalPrice: 400000,
        category: 'beauty',
        images: ['travel-suitcase-4.jpeg','travel-suitcase-3.jpeg'],
        specifications: [
         { name: 'Color', value: 'Cream'},   
        ]
    },
    {
        id: 'p217',
        name: 'Hardside spinner 3pc travel suitcase set, Purple-rdd',
        description: '3pc hardside spinner lightweight travel suitcase set. made in 100% impact resistant light plastic material, has 4 multi directional spinner wheels and telescopic handle. specious with organizational straps and mesh seperators inside. beautiful, strong and durable',
        price: 280000,
        originalPrice: 300000,
        category: 'beauty',
        images: ['travel-suitcase-5.jpeg'],
        specifications: [
         { name: 'Color', value: 'Purple'},   
        ]
    },
    {
        id: 'p218',
        name: 'Portable 4 burner gas stove-ymhL',
        description: '4 burner Winning star gas stove with pulse igniter and split frame for enhanced heat resistance. Its made up of stainless steel, enamel and cold rolled plates for durability, strong and durable',
        price: 360000,
        originalPrice: 400000,
        category: 'home',
        images: ['portable-gas-stove-cooker-11.jpeg','portable-gas-stove-cooker-22.jpeg'],
        specifications: [
         { name: 'Material', value: 'Steel, enamel'},   
        ]
    },
    {
        id: 'p219',
        name: 'Portable 4 burner gas stove-ymhL',
        description: '4 burner Winning star gas stove with pulse igniter and split frame for enhanced heat resistance. Its made up of stainless steel, enamel and cold rolled plates for durability, strong and durable',
        price: 360000,
        originalPrice: 400000,
        category: 'electronics',
        images: ['portable-gas-stove-cooker-11.jpeg','portable-gas-stove-cooker-22.jpeg'],
        specifications: [
         { name: 'Material', value: 'Steel, enamel'},   
        ]
    },
    {
        id: 'p220',
        name: 'Children, kids, silicone toothbrush-mrf',
        description: 'U shapped kid, children silicone toothbrush that allows cleaning all teeth at once to save time and achieve brushing effectiveness, strong and durable',
        price: 10000,
        originalPrice: 15000,
        category: 'home',
        images: ['kid-children-ushaped-silicone-toothbrush-11.jpeg','kid-children-ushaped-silicone-toothbrush-22.jpeg','kid-children-ushaped-silicone-toothbrush-33.jpeg'],
        specifications: [
         { name: 'Material', value: 'Silicone'},   
        ]
    },
    {
        id: 'p221',
        name: 'Children, kids, silicone toothbrush-mrf',
        description: 'U shapped kid, children silicone toothbrush that allows cleaning all teeth at once to save time and achieve brushing effectiveness, strong and durable',
        price: 10000,
        originalPrice: 15000,
        category: 'toys',
        images: ['kid-children-ushaped-silicone-toothbrush-22.jpeg','kid-children-ushaped-silicone-toothbrush-11.jpeg','kid-children-ushaped-silicone-toothbrush-33.jpeg'],
        specifications: [
         { name: 'Material', value: 'Silicone'},   
        ]
    },
    {
        id: 'p222',
        name: 'Portable, foldable stainless steel clothes drying rack-mrf',
        description: 'Portable steel clothes drying rack for drying various types of clothes. Has adjustable, expandable wings for versatile drying options. can be used both indoors and outdoors, foldable for safe storage when not in use, strong and durable',
        price: 85000,
        originalPrice: 110000,
        category: 'home',
        images: ['clothes-drying-rack-11.jpeg','clothes-drying-rack-22.jpeg','clothes-drying-rack-33.jpeg'],
        specifications: [
         { name: 'Material', value: 'Stainless steel, hard plastic interlockers'},   
        ]
    },
    {
        id: 'p223',
        name: 'Portable, foldable color coated steel clothes drying rack-mrf',
        description: 'Portable color coated steel clothes drying rack for drying various types of clothes. Has adjustable, expandable wings for versatile drying options. can be used both indoors and outdoors, foldable for safe storage when not in use, strong and durable',
        price: 75000,
        originalPrice: 100000,
        category: 'home',
        images: ['clothes-drying-rack-44.jpeg','clothes-drying-rack-55.jpeg'],
        specifications: [
         { name: 'Material', value: 'color coated steel, hard plastic interlockers'},   
        ]
    },
    {
        id: 'p224',
        name: 'Air sofa, inflatable sofa with stool-mrf',
        description: 'Portable inflatable air sofa with stool for feetrest. Comes with pump for inflating the sofa and stool, deflated for safe storage when not in use or for travel,  luxurious, beautiful, comfortable, strong and durable',
        price: 165000,
        originalPrice: 200000,
        category: 'home',
        images: ['air-sofa-inflatable-1.jpeg','air-sofa-inflatable-2.jpeg','air-sofa-inflatable-3.jpeg'],
        specifications: [
         { name: 'Material', value: 'rubber'},   
        ]
    },
    {
        id: 'p225',
        name: 'Air sofa, inflatable sofa with stool-mrf',
        description: 'Portable inflatable air sofa with stool for feetrest. Comes with pump for inflating the sofa and stool, deflated for safe storage when not in use or for travel,  luxurious, beautiful, comfortable, strong and durable',
        price: 165000,
        originalPrice: 200000,
        category: 'fashion',
        images: ['air-sofa-inflatable-2.jpeg','air-sofa-inflatable-1.jpeg','air-sofa-inflatable-3.jpeg'],
        specifications: [
         { name: 'Material', value: 'rubber'},   
        ]
    },
    {
        id: 'p226',
        name: 'Silicone cleaning gloves, 01 pair-mrf',
        description: 'Silicone cleaning gloves with inbuilt silicone scrabbers on the palms and fingers to eliminate need for seperate sponges and brushes, suitable for various cleaning tasks like cleaning fruits, vegetables, washing utensils, cars, bathrooms and mant more, made in safe human contact silicone material, non slip and heat resistant, beautiful, comfortable, strong and durable',
        price: 25000,
        originalPrice: 30000,
        category: 'home',
        images: ['silicone-cleaning-gloves-1.jpeg','silicone-cleaning-gloves-2.jpeg','silicone-cleaning-gloves-3.jpeg'],
        specifications: [
         { name: 'Material', value: 'Silicone'},   
        ]
    },
    {
        id: 'p227',
        name: 'Silicone cleaning gloves, 01 pair-mrf',
        description: 'Silicone cleaning gloves with inbuilt silicone scrabbers on the palms and fingers to eliminate need for seperate sponges and brushes, suitable for various cleaning tasks like cleaning fruits, vegetables, washing utensils, cars, bathrooms and mant more, made in safe human contact silicone material, non slip and heat resistant, beautiful, comfortable, strong and durable',
        price: 25000,
        originalPrice: 30000,
        category: 'electronics',
        images: ['silicone-cleaning-gloves-2.jpeg','silicone-cleaning-gloves-1.jpeg','silicone-cleaning-gloves-3.jpeg'],
        specifications: [
         { name: 'Material', value: 'Silicone'},   
        ]
    },
    {
        id: 'p228',
        name: 'Silicone cleaning gloves, 01 pair-mrf',
        description: 'Silicone cleaning gloves with inbuilt silicone scrabbers on the palms and fingers to eliminate need for seperate sponges and brushes, suitable for various cleaning tasks like cleaning fruits, vegetables, washing utensils, cars, bathrooms and mant more, made in safe human contact silicone material, non slip and heat resistant, beautiful, comfortable, strong and durable',
        price: 25000,
        originalPrice: 30000,
        category: 'beauty',
        images: ['silicone-cleaning-gloves-2.jpeg','silicone-cleaning-gloves-1.jpeg','silicone-cleaning-gloves-3.jpeg'],
        specifications: [
         { name: 'Material', value: 'Silicone'},   
        ]
    },
    {
        id: 'p229',
        name: 'Electric pressure cooker, 14in1, 6L-mrf',
        description: 'Hoffmans electric pressure cooker, 14in1, 6 liters, multifunctional cooker designed for fast and easy cooking, digital display with timer and a touch control panel, has automatic shutt off and overheating protection functions, strong and durable',
        price: 275000,
        originalPrice: 300000,
        category: 'home',
        images: ['electric-pressure-cooker-hm718-1.jpeg','electric-pressure-cooker-hm718-2.jpeg','electric-pressure-cooker-hm718-3.jpeg'],
        specifications: [
         { name: 'Capacity', value: '6 Liters'},   
        ]
    },
    {
        id: 'p230',
        name: 'Electric pressure cooker, 14in1, 6L-mrf',
        description: 'Hoffmans electric pressure cooker, 14in1, 6 liters, multifunctional cooker designed for fast and easy cooking, digital display with timer and a touch control panel, has automatic shutt off and overheating protection functions, strong and durable',
        price: 275000,
        originalPrice: 300000,
        category: 'electronics',
        images: ['electric-pressure-cooker-hm718-2.jpeg','electric-pressure-cooker-hm718-1.jpeg','electric-pressure-cooker-hm718-3.jpeg'],
        specifications: [
         { name: 'Capacity', value: '6 Liters'},   
        ]
    },
    {
        id: 'p231',
        name: 'Powerbank, 80000maH capacity-btz',
        description: '80000maH powerbank. High capacity, fast charging, led light, full interface and with convenient hold handle, strong and durable',
        price: 145000,
        originalPrice: 170000,
        category: 'electronics',
        images: ['powerbank-80000mah-1.jpeg','powerbank-80000mah-2.jpeg','powerbank-80000mah-3.jpeg'],
        specifications: [
         { name: 'Capacity', value: '80000maH'}, 
         { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p232',
        name: 'Powerbank, 80000maH capacity-btz',
        description: '80000maH powerbank. High capacity, fast charging, led light, full interface and with convenient hold handle, strong and durable',
        price: 145000,
        originalPrice: 170000,
        category: 'home',
        images: ['powerbank-80000mah-2.jpeg','powerbank-80000mah-1.jpeg','powerbank-80000mah-3.jpeg'],
        specifications: [
         { name: 'Capacity', value: '80000maH'}, 
         { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p233',
        name: 'Powerbank, 80000maH capacity-btz',
        description: '80000maH powerbank. High capacity, fast charging, led light, full interface and with convenient hold handle, strong and durable',
        price: 165000,
        originalPrice: 175000,
        category: 'Sports',
        images: ['powerbank-80000mah-3.jpeg','powerbank-80000mah-1.jpeg','powerbank-80000mah-2.jpeg'],
        specifications: [
         { name: 'Capacity', value: '80000maH'}, 
         { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p234',
        name: 'Exercise stepper machine-btz',
        description: 'Health and fitness 2in1 total body exercise stepper machine, targets, glutes, quads, hamstrings, calves, biceps, triceps and many more, also has an integrated arm resistance bands, features a digital monitor to track metrics like excercise time, calories burned, steps per minute and many more, workout intensity can be customised by adjusting the hydraulic step height and the resistance bands, has a quiet hydraulic system, non slip pedals and a sturdy frame, strong and durable',
        price: 250000,
        originalPrice: 285000,
        category: 'fashion',
        images: ['exercise-fitness-stepper machine-1.jpeg','exercise-fitness-stepper machine-2.jpeg','exercise-fitness-stepper machine-3.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p235',
        name: 'Exercise stepper machine-btz',
        description: 'Health and fitness 2in1 total body exercise stepper machine, targets, glutes, quads, hamstrings, calves, biceps, triceps and many more, also has an integrated arm resistance bands, features a digital monitor to track metrics like excercise time, calories burned, steps per minute and many more, workout intensity can be customised by adjusting the hydraulic step height and the resistance bands, has a quiet hydraulic system, non slip pedals and a sturdy frame, strong and durable',
        price: 250000,
        originalPrice: 295000,
        category: 'home',
        images: ['exercise-fitness-stepper machine-2.jpeg','exercise-fitness-stepper machine-1.jpeg','exercise-fitness-stepper machine-3.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p236',
        name: 'Electric Swallow Ugali,Posho, fufu, kawunga making machine, 5.8L-ymh',
        description: 'Electric 5.8L swallow ugali, posho, fufu, kawunga making machine. Its installed with a strong 1000w motor for efficient cooking and steering, made of food grade materials; stainless steel and heat resistant plastic outer cover, one touch operation, strong and durable',
        price: 320000,
        originalPrice: 350000,
        category: 'home',
        images: ['ugali-kawunga-maker-machine-1.jpeg','ugali-kawunga-maker-machine-2.jpeg','ugali-kawunga-maker-machine-3.jpeg'],
        specifications: [
            { name: 'Capacity', value: '5.8 liters'}, 
            { name: 'Power', value: '1000w'},
        ]
    },
    {
        id: 'p237',
        name: 'Electric Swallow Ugali,Posho, fufu, kawunga making machine, 5.8L-ymh',
        description: 'Electric 5.8L swallow ugali, posho, fufu, kawunga making machine. Its installed with a strong 1000w motor for efficient cooking and steering, made of food grade materials; stainless steel and heat resistant plastic outer cover, one touch operation, strong and durable',
        price: 310000,
        originalPrice: 350000,
        category: 'electronics',
        images: ['ugali-kawunga-maker-machine-2.jpeg','ugali-kawunga-maker-machine-1.jpeg','ugali-kawunga-maker-machine-3.jpeg'],
        specifications: [
            { name: 'Capacity', value: '5.8 liters'}, 
            { name: 'Power', value: '1000w'},
        ]
    },
    {
        id: 'p238',
        name: 'Electric Electric coffee maker, 1.5L-mrf',
        description: 'Electric 1.5L glass carafe Sokany drip coffee maker machine. Can brew 12 cups of coffee at a time, has easy grip handle for comfortable handling, easy to use design,  strong and durable',
        price: 120000,
        originalPrice: 135000,
        category: 'electronics',
        images: ['electric-coffee-maker-1.jpeg','electric-coffee-maker-2.jpeg','electric-coffee-maker-3.jpeg'],
        specifications: [
            { name: 'Capacity', value: '1.5 liters'}, 
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p239',
        name: 'Electric Electric coffee maker, 1.5L-mrf',
        description: 'Electric 1.5L glass carafe Sokany drip coffee maker machine. Can brew 12 cups of coffee at a time, has easy grip handle for comfortable handling, easy to use design,  strong and durable',
        price: 130000,
        originalPrice: 135000,
        category: 'home',
        images: ['electric-coffee-maker-2.jpeg','electric-coffee-maker-1.jpeg','electric-coffee-maker-3.jpeg'],
        specifications: [
            { name: 'Capacity', value: '1.5 liters'}, 
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p240',
        name: 'Vegetable chopper, cutter slicer, 14in1, mandolin-mrf',
        description: '14in1 Multifunctional vegetable chopper slicer with multiple interchangeable stainless steel blades for cutting various styles like dicing, slicing, shredding and many more, has large 1.2L  transparent food container to all monitoring, has nonslip base and handle for stable operation,  strong and durable',
        price: 55000,
        originalPrice: 75000,
        category: 'home',
        images: ['vegetable-cutter-chopper-1.jpeg','vegetable-cutter-chopper-2.jpeg','vegetable-cutter-chopper-3.jpeg'],
        specifications: [
            { name: 'Capacity', value: '1.2 liters'}, 
            { name: 'Material', value: 'Stainless steel, food grade plastic'},
        ]
    },
    {
        id: 'p241',
        name: 'Mandolin Vegetable chopper, cutter slicer, 14in1-mrf',
        description: '14in1 mandolin Multifunctional vegetable chopper slicer with multiple interchangeable stainless steel blades for cutting various styles like dicing, slicing, shredding and many more, has large 1.2L  transparent food container to all monitoring, has nonslip base and handle for stable operation,  strong and durable',
        price: 60000,
        originalPrice: 75000,
        category: 'home',
        images: ['vegetable-cutter-chopper-2.jpeg','vegetable-cutter-chopper-1.jpeg','vegetable-cutter-chopper-3.jpeg'],
        specifications: [
            { name: 'Capacity', value: '1.2 liters'}, 
            { name: 'Material', value: 'Stainless steel, food grade plastic'},
        ]
    },
    {
        id: 'p242',
        name: 'Mandolin 14in1 Vegetable cutter chopper, slicer-mrf',
        description: '14in1 mandolin Multifunctional vegetable chopper slicer with multiple interchangeable stainless steel blades for cutting various styles like dicing, slicing, shredding and many more, has large 1.2L  transparent food container to all monitoring, has nonslip base and handle for stable operation,  strong and durable',
        price: 50000,
        originalPrice: 65000,
        category: 'home',
        images: ['vegetable-cutter-chopper-3.jpeg','vegetable-cutter-chopper-1.jpeg','vegetable-cutter-chopper-2.jpeg'],
        specifications: [
            { name: 'Capacity', value: '1.2 liters'}, 
            { name: 'Material', value: 'Stainless steel, food grade plastic'},
        ]
    },
    {
        id: 'p243',
        name: 'Wall mounted bathroom rack-mrf',
        description: 'Multifunctional bathroom shelf rack for holding variety of items such as folded towels, brushes, sponges, toiletaries and many more, it is made of high quality aluminum material, waterproof, moistureproof and rust resistant, maximizes wall space, beautiful color, strong and durable',
        price: 120000,
        originalPrice: 145000,
        category: 'home',
        images: ['wall mounted-bathroom-rack-1.jpeg','wall mounted-bathroom-rack-2.jpeg','wall mounted-bathroom-rack-3.jpeg'],
        specifications: [
            { name: 'Color', value: 'Aluminum brown natural'}, 
            { name: 'Material', value: 'Heavy duty aluminum'},
        ]
    },
    {
        id: 'p244',
        name: 'Wall mounted aluminum bathroom rack-mrf',
        description: 'Multifunctional bathroom shelf rack for holding variety of items such as folded towels, brushes, sponges, toiletaries and many more, it is made of high quality aluminum material, waterproof, moistureproof and rust resistant, maximizes wall space, beautiful color, strong and durable',
        price: 110000,
        originalPrice: 145000,
        category: 'home',
        images: ['wall mounted-bathroom-rack-2.jpeg','wall mounted-bathroom-rack-1.jpeg','wall mounted-bathroom-rack-3.jpeg'],
        specifications: [
            { name: 'Color', value: 'Aluminum brown natural'}, 
            { name: 'Material', value: 'Heavy duty aluminum'},
        ]
    },
    {
        id: 'p245',
        name: 'Bathroom Aluminum Wall mounted rack-mrf',
        description: 'Multifunctional bathroom shelf rack for holding variety of items such as folded towels, brushes, sponges, toiletaries and many more, it is made of high quality aluminum material, waterproof, moistureproof and rust resistant, maximizes wall space, beautiful color, strong and durable',
        price: 105000,
        originalPrice: 125000,
        category: 'home',
        images: ['wall mounted-bathroom-rack-3.jpeg','wall mounted-bathroom-rack-1.jpeg','wall mounted-bathroom-rack-2.jpeg'],
        specifications: [
            { name: 'Color', value: 'Aluminum brown natural'}, 
            { name: 'Material', value: 'Heavy duty aluminum'},
        ]
    },
    {
        id: 'p246',
        name: 'Wooden paper towel holder-mrf',
        description: 'Wooden paper towel holder for kitchen, easy to use, strong and durable',
        price: 35000,
        originalPrice: 45000,
        category: 'home',
        images: ['wooden-paper-towel-holder-1.jpeg','wooden-paper-towel-holder-2.jpeg','wooden-paper-towel-holder-3.jpeg'],
        specifications: [
            { name: 'Color', value: 'brown mahogany'}, 
            { name: 'Material', value: 'Wood'},
        ]
    },
    {
        id: 'p247',
        name: 'Wooden paper towel stand holder-mrf',
        description: 'Wooden paper towel stand, holder for kitchen, easy to use, strong and durable',
        price: 40000,
        originalPrice: 50000,
        category: 'home',
        images: ['wooden-paper-towel-holder-2.jpeg','wooden-paper-towel-holder-1.jpeg','wooden-paper-towel-holder-3.jpeg'],
        specifications: [
            { name: 'Color', value: 'brown mahogany'}, 
            { name: 'Material', value: 'Wood'},
        ]
    },
    {
        id: 'p248',
        name: 'Portable shoe closet, 48 pairs capacity clr1-mrfb',
        description: 'Portable shoe closet with 48 pair storage capacity, light weight but strong, dustproof, waterproof, made of strong PP plastic panels and steel frame',
        price: 210000,
        originalPrice: 230000,
        category: 'beauty',
        images: ['portable-shoe rack-closet--24.jpeg','portable-shoe rack-closet--25.jpeg','portable-shoe rack-closet--26.jpeg','portable-shoe rack-closet--27.jpeg','portable-shoe rack-closet--28.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel frame, pp plastic outer material'},
        ]
    },
    {
        id: 'p249',
        name: 'Portable shoe closet, 48 pairs capacity clr2-mrfb',
        description: 'Portable shoe closet with 48 pair storage capacity, light weight but strong, dustproof, waterproof, made of strong PP plastic panels and steel frame',
        price: 210000,
        originalPrice: 230000,
        category: 'beauty',
        images: ['portable-shoe rack-closet--24.jpeg','portable-shoe rack-closet--25.jpeg','portable-shoe rack-closet--26.jpeg','portable-shoe rack-closet--27.jpeg','portable-shoe rack-closet--28.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel frame, pp plastic outer material'},
        ]
    },
    {
        id: 'p250',
        name: 'Portable shoe closet, 48 pairs capacity clr3-mrfb',
        description: 'Portable shoe closet with 48 pair storage capacity, light weight but strong, dustproof, waterproof, made of strong PP plastic panels and steel frame',
        price: 210000,
        originalPrice: 230000,
        category: 'beauty',
        images: ['portable-shoe rack-closet--24.jpeg','portable-shoe rack-closet--25.jpeg','portable-shoe rack-closet--26.jpeg','portable-shoe rack-closet--27.jpeg','portable-shoe rack-closet--28.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel frame, pp plastic outer material'},
        ]
    },
    {
        id: 'p251',
        name: 'Portable shoe closet, 48 pairs capacity clr4-mrfb',
        description: 'Portable shoe closet with 48 pair storage capacity, light weight but strong, dustproof, waterproof, made of strong PP plastic panels and steel frame',
        price: 210000,
        originalPrice: 230000,
        category: 'beauty',
        images: ['portable-shoe rack-closet--24.jpeg','portable-shoe rack-closet--25.jpeg','portable-shoe rack-closet--26.jpeg','portable-shoe rack-closet--27.jpeg','portable-shoe rack-closet--28.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel frame, pp plastic outer material'},
        ]
    },
    {
        id: 'p252',
        name: 'Portable shoe closet, 48 pairs capacity clr5-mrfb',
        description: 'Portable shoe closet with 48 pair storage capacity, light weight but strong, dustproof, waterproof, made of strong PP plastic panels and steel frame',
        price: 210000,
        originalPrice: 230000,
        category: 'beauty',
        images: ['portable-shoe rack-closet--24.jpeg','portable-shoe rack-closet--25.jpeg','portable-shoe rack-closet--26.jpeg','portable-shoe rack-closet--27.jpeg','portable-shoe rack-closet--28.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel frame, pp plastic outer material'},
        ]
    },
    {
        id: 'p253',
        name: 'Portable shoe closet, 48 pairs capacity clr1-mrfb',
        description: 'Portable shoe closet with 48 pair storage capacity, light weight but strong, dustproof, waterproof, made of strong PP plastic panels and steel frame',
        price: 210000,
        originalPrice: 230000,
        category: 'home',
        images: ['portable-shoe rack-closet--24.jpeg','portable-shoe rack-closet--25.jpeg','portable-shoe rack-closet--26.jpeg','portable-shoe rack-closet--27.jpeg','portable-shoe rack-closet--28.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel frame, pp plastic outer material'},
        ]
    },
    {
        id: 'p254',
        name: 'Portable shoe closet, 48 pairs capacity clr2-mrfb',
        description: 'Portable shoe closet with 48 pair storage capacity, light weight but strong, dustproof, waterproof, made of strong PP plastic panels and steel frame',
        price: 210000,
        originalPrice: 230000,
        category: 'home',
        images: ['portable-shoe rack-closet--24.jpeg','portable-shoe rack-closet--25.jpeg','portable-shoe rack-closet--26.jpeg','portable-shoe rack-closet--27.jpeg','portable-shoe rack-closet--28.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel frame, pp plastic outer material'},
        ]
    },
    {
        id: 'p255',
        name: 'Portable shoe closet, 48 pairs capacity clr3-mrfb',
        description: 'Portable shoe closet with 48 pair storage capacity, light weight but strong, dustproof, waterproof, made of strong PP plastic panels and steel frame',
        price: 210000,
        originalPrice: 230000,
        category: 'home',
        images: ['portable-shoe rack-closet--24.jpeg','portable-shoe rack-closet--25.jpeg','portable-shoe rack-closet--26.jpeg','portable-shoe rack-closet--27.jpeg','portable-shoe rack-closet--28.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel frame, pp plastic outer material'},
        ]
    },
    {
        id: 'p256',
        name: 'Portable shoe closet, 48 pairs capacity clr4-mrfb',
        description: 'Portable shoe closet with 48 pair storage capacity, light weight but strong, dustproof, waterproof, made of strong PP plastic panels and steel frame',
        price: 210000,
        originalPrice: 230000,
        category: 'home',
        images: ['portable-shoe rack-closet--24.jpeg','portable-shoe rack-closet--25.jpeg','portable-shoe rack-closet--26.jpeg','portable-shoe rack-closet--27.jpeg','portable-shoe rack-closet--28.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel frame, pp plastic outer material'},
        ]
    },
    {
        id: 'p257',
        name: 'Portable shoe closet, 48 pairs capacity clr5-mrfb',
        description: 'Portable shoe closet with 48 pair storage capacity, light weight but strong, dustproof, waterproof, made of strong PP plastic panels and steel frame',
        price: 210000,
        originalPrice: 230000,
        category: 'home',
        images: ['portable-shoe rack-closet--24.jpeg','portable-shoe rack-closet--25.jpeg','portable-shoe rack-closet--26.jpeg','portable-shoe rack-closet--27.jpeg','portable-shoe rack-closet--28.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel frame, pp plastic outer material'},
        ]
    },
    {
        id: 'p258',
        name: 'Adjustable laptop table, work station, side table, Black-mrf',
        description: 'Portable adjustable table with lockable wheels and storage shelves,size; 60cm length x 40cm width, height adjustable 69-85cm can be used as laptop table, bedside, sofaside or work station table. Convenient to use, strong and durable',
        price: 155000,
        originalPrice: 180000,
        category: 'home',
        images: ['laptop-table-black.jpeg','laptop-table-cream.jpeg','laptop-table-brown.jpeg','laptop-table-white.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel frame, wood top'},
            { name: 'Size', value: '60cm Length, 40cm width,height adjustable 69-85cm'},
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p259',
        name: 'Adjustable laptop table, work station, side table, Cream-mrf',
        description: 'Portable adjustable table with lockable wheels and storage shelves,size; 60cm length x 40cm width, height adjustable 69-85cm can be used as laptop table, bedside, sofaside or work station table. Convenient to use, strong and durable',
        price: 155000,
        originalPrice: 180000,
        category: 'home',
        images: ['laptop-table-cream.jpeg','laptop-table-black.jpeg','laptop-table-brown.jpeg','laptop-table-white.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel frame, wood top'},
            { name: 'Size', value: '60cm Length, 40cm width,height adjustable 69-85cm'},
            { name: 'Color', value: 'Cream'},
        ]
    },
    {
        id: 'p260',
        name: 'Adjustable laptop table, work station, side table, Brown-mrf',
        description: 'Portable adjustable table with lockable wheels and storage shelves,size; 60cm length x 40cm width, height adjustable 69-85cm can be used as laptop table, bedside, sofaside or work station table. Convenient to use, strong and durable',
        price: 155000,
        originalPrice: 180000,
        category: 'home',
        images: ['laptop-table-brown.jpeg','laptop-table-black.jpeg','laptop-table-cream.jpeg','laptop-table-white.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel frame, wood top'},
            { name: 'Size', value: '60cm Length, 40cm width,height adjustable 69-85cm'},
            { name: 'Color', value: 'Brown'},
        ]
    },
    {
        id: 'p261',
        name: 'Adjustable laptop table, work station, side table, White-mrf',
        description: 'Portable adjustable table with lockable wheels and storage shelves,size; 60cm length x 40cm width, height adjustable 69-85cm can be used as laptop table, bedside, sofaside or work station table. Convenient to use, strong and durable',
        price: 155000,
        originalPrice: 180000,
        category: 'home',
        images: ['laptop-table-white.jpeg','laptop-table-black.jpeg','laptop-table-cream.jpeg','laptop-table-brown.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel frame, wood top'},
            { name: 'Size', value: '60cm Length, 40cm width,height adjustable 69-85cm'},
            { name: 'Color', value: 'White'},
        ]
    },
    {
        id: 'p262',
        name: 'Folding camping bed-btz',
        description: 'Folding camping bed for use during camping or travel. Convenient to use, strong and durable',
        price: 365000,
        originalPrice: 400000,
        category: 'home',
        images: ['folding-camping-bed-1.jpeg','folding-camping-bed-2.jpeg','folding-camping-bed-3.jpeg'],
        specifications: [
            { name: 'Color', value: 'Grey'},
        ]
    },
    {
        id: 'p263',
        name: 'Inflatable feet pedal-btz',
        description: 'PVC material inflatable feet pedal for body exercise. Convenient to use, deflatable for storage when not in use or for travel, strong and durable',
        price: 75000,
        originalPrice: 90000,
        category: 'home',
        images: ['inflatable-feet-pedal-1.jpeg','inflatable-feet-pedal-2.jpeg','inflatable-feet-pedal-3.jpeg'],
        specifications: [
            { name: 'Material', value: 'PVC'},
        ]
    },
    {
        id: 'p264',
        name: 'Baby car seat, carry cot, crib, birth-18 months, Black-bdy',
        description: 'Baby car seat cum carry cot serves as both secure car seat and convenient carry cot offering portability and safety, suitable for babies from birth-18 months, it has a re-enforced inner padding and padded head rest for comfort, its light weight and has adjustable handle for easy carrying, strong and durable',
        price: 285000,
        originalPrice: 300000,
        category: 'home',
        images: ['baby-car-seat-carry-cot-black2.jpg','baby-car-seat-carry-cot-cream1.jpg','baby-car-seat-carry-cot-grey.jpeg','baby-car-seat-carry-cot-green.jpeg'],
        specifications: [
            { name: 'Material', value: 'Padded cotton, polyester'},
            { name: 'Application', value: 'birth-18 months, 13kg'},
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p265',
        name: 'Baby car seat, carry cot, crib, birth-18 months, Cream-bdy',
        description: 'Baby car seat cum carry cot serves as both secure car seat and convenient carry cot offering portability and safety, suitable for babies from birth-18 months, it has a re-enforced inner padding and padded head rest for comfort, its light weight and has adjustable handle for easy carrying, strong and durable',
        price: 285000,
        originalPrice: 300000,
        category: 'home',
        images: ['baby-car-seat-carry-cot-cream1.jpg','baby-car-seat-carry-cot-black2.jpg','baby-car-seat-carry-cot-grey.jpeg','baby-car-seat-carry-cot-green.jpeg'],
        specifications: [
            { name: 'Material', value: 'Padded cotton, polyester'},
            { name: 'Application', value: 'birth-18 months, 13kg'},
            { name: 'Color', value: 'Cream'},
        ]
    },
    {
        id: 'p266',
        name: 'Baby car seat, carry cot, crib, birth-18 months, Grey-bdy',
        description: 'Baby car seat cum carry cot serves as both secure car seat and convenient carry cot offering portability and safety, suitable for babies from birth-18 months, it has a re-enforced inner padding and padded head rest for comfort, its light weight and has adjustable handle for easy carrying, strong and durable',
        price: 285000,
        originalPrice: 300000,
        category: 'home',
        images: ['baby-car-seat-carry-cot-grey.jpeg','baby-car-seat-carry-cot-green.jpeg'],
        specifications: [
            { name: 'Material', value: 'Padded cotton, polyester'},
            { name: 'Application', value: 'birth-18 months, 13kg'},
            { name: 'Color', value: 'Grey'},
        ]
    },
    {
        id: 'p267',
        name: 'Baby car seat, carry cot, crib, birth-18 months, Green-bdy',
        description: 'Baby car seat cum carry cot serves as both secure car seat and convenient carry cot offering portability and safety, suitable for babies from birth-18 months, it has a re-enforced inner padding and padded head rest for comfort, its light weight and has adjustable handle for easy carrying, strong and durable',
        price: 285000,
        originalPrice: 300000,
        category: 'home',
        images: ['baby-car-seat-carry-cot-green.jpeg','baby-car-seat-carry-cot-grey.jpeg'],
        specifications: [
            { name: 'Material', value: 'Padded cotton, polyester'},
            { name: 'Application', value: 'birth-18 months, 13kg'},
            { name: 'Color', value: 'Green'},
        ]
    },
    {
        id: 'p268',
        name: 'Steel folding ladder, 6 step-pus',
        description: '6 step light weight steel folding ladder, 187cm tall when fully extended, 140cm top platform height, 100x46cm base measurement, suitable for both domestic and commercial use, strong and durable',
        price: 320000,
        originalPrice: 350000,
        category: 'home',
        images: ['steel-6 step-ladder-1.jpeg','steel-6 step-ladder-2.jpeg'],
        specifications: [
            { name: 'Material', value: 'Light weight steel'},
            { name: 'Size', value: '6 step, 189cm height'},
            { name: 'Color', value: 'Red'},
        ]
    },
    {
        id: 'p269',
        name: 'Kid character themed carpet, rug, 1-mdn',
        description: 'Kid themed character carpets, 1.6 x 2.3 meters, suitable for child bedrooms, playrooms and more, made of soft comfortable polyester material and with a nonslip backing,strong and durable',
        price: 150000,
        originalPrice: 180000,
        category: 'home',
        images: ['character-carpet-rug-1.jpeg','character-carpet-rug-2.jpeg','character-carpet-rug-3.jpeg','character-carpet-rug-4.jpeg','character-carpet-rug-5.jpeg'],
        specifications: [
            { name: 'Material', value: 'Polyester'},
            { name: 'Size', value: '1.6m meters Width, 2.3 meters Length'},
        ]
    },
    {
        id: 'p270',
        name: 'Kid character themed carpet, rug, 2-mdn',
        description: 'Kid themed character carpets, 1.6 x 2.3 meters, suitable for child bedrooms, playrooms and more, made of soft comfortable polyester material and with a nonslip backing,strong and durable',
        price: 150000,
        originalPrice: 180000,
        category: 'home',
        images: ['character-carpet-rug-2.jpeg','character-carpet-rug-1.jpeg','character-carpet-rug-3.jpeg','character-carpet-rug-4.jpeg','character-carpet-rug-5.jpeg'],
        specifications: [
            { name: 'Material', value: 'Polyester'},
            { name: 'Size', value: '1.6m meters Width, 2.3 meters Length'},
        ]
    },
    {
        id: 'p271',
        name: 'Kid character themed carpet, rug, 4-mdn',
        description: 'Kid themed character carpets, 1.6 x 2.3 meters, suitable for child bedrooms, playrooms and more, made of soft comfortable polyester material and with a nonslip backing,strong and durable',
        price: 150000,
        originalPrice: 180000,
        category: 'home',
        images: ['character-carpet-rug-4.jpeg','character-carpet-rug-1.jpeg','character-carpet-rug-2.jpeg','character-carpet-rug-3.jpeg','character-carpet-rug-5.jpeg'],
        specifications: [
            { name: 'Material', value: 'Polyester'},
            { name: 'Size', value: '1.6m meters Width, 2.3 meters Length'},
        ]
    },
    {
        id: 'p272',
        name: 'Kid character themed carpet, rug, 5-mdn',
        description: 'Kid themed character carpets, 1.6 x 2.3 meters, suitable for child bedrooms, playrooms and more, made of soft comfortable polyester material and with a nonslip backing,strong and durable',
        price: 150000,
        originalPrice: 180000,
        category: 'home',
        images: ['character-carpet-rug-5.jpeg','character-carpet-rug-1.jpeg','character-carpet-rug-2.jpeg','character-carpet-rug-3.jpeg','character-carpet-rug-4.jpeg'],
        specifications: [
            { name: 'Material', value: 'Polyester'},
            { name: 'Size', value: '1.6m meters Width, 2.3 meters Length'},
        ]
    },
    {
        id: 'p273',
        name: 'Cotton Quilt, duvet cover set, 6pc, 6x6ft, Cream-mdn',
        description: '6pc 6x6ft quilt duvet cover set, 100% cotton material offering breathability and comfort, have embroided boarders and with central medallion. Set contains, 01 quilt, duvet cover 220x240cm, 01 fitted bedsheet 250x270cm, 04 pillowcovers 50x80cm. Beautiful with classic touch,strong and durable',
        price: 220000,
        originalPrice: 250000,
        category: 'home',
        images: ['quilt-duvet-cover-set-6pc-cream.jpeg','quilt-duvet-cover-set-6pc-grey.jpeg','quilt-duvet-cover-set-6pc-pink.jpeg','quilt-duvet-cover-set-6pc-orange.jpeg'],
        specifications: [
            { name: 'Material', value: '100% cotton'},
            { name: 'Size', value: '6x6ft'},
            { name: 'Color', value: 'Cream'},
        ]
    },
    {
        id: 'p274',
        name: 'Cotton Quilt, duvet cover set, 6pc, 6x6ft, Grey-mdn',
        description: '6pc 6x6ft quilt duvet cover set, 100% cotton material offering breathability and comfort, have embroided boarders and with central medallion. Set contains, 01 quilt, duvet cover 220x240cm, 01 fitted bedsheet 250x270cm, 04 pillowcovers 50x80cm. Beautiful with classic touch,strong and durable',
        price: 220000,
        originalPrice: 250000,
        category: 'home',
        images: ['quilt-duvet-cover-set-6pc-grey.jpeg','quilt-duvet-cover-set-6pc-cream.jpeg','quilt-duvet-cover-set-6pc-pink.jpeg','quilt-duvet-cover-set-6pc-orange.jpeg'],
        specifications: [
            { name: 'Material', value: '100% cotton'},
            { name: 'Size', value: '6x6ft'},
            { name: 'Color', value: 'Grey'},
        ]
    },
    {
        id: 'p275',
        name: 'Cotton Quilt, duvet cover set, 6pc, 6x6ft, Pink-mdn',
        description: '6pc 6x6ft quilt duvet cover set, 100% cotton material offering breathability and comfort, have embroided boarders and with central medallion. Set contains, 01 quilt, duvet cover 220x240cm, 01 fitted bedsheet 250x270cm, 04 pillowcovers 50x80cm. Beautiful with classic touch,strong and durable',
        price: 220000,
        originalPrice: 250000,
        category: 'home',
        images: ['quilt-duvet-cover-set-6pc-pink.jpeg','quilt-duvet-cover-set-6pc-cream.jpeg','quilt-duvet-cover-set-6pc-grey.jpeg','quilt-duvet-cover-set-6pc-orange.jpeg'],
        specifications: [
            { name: 'Material', value: '100% cotton'},
            { name: 'Size', value: '6x6ft'},
            { name: 'Color', value: 'Pink'},
        ]
    },
    {
        id: 'p276',
        name: 'Cotton Quilt, duvet cover set, 6pc, 6x6ft, Orange-mdn',
        description: '6pc 6x6ft quilt duvet cover set, 100% cotton material offering breathability and comfort, have embroided boarders and with central medallion. Set contains, 01 quilt, duvet cover 220x240cm, 01 fitted bedsheet 250x270cm, 04 pillowcovers 50x80cm. Beautiful with classic touch,strong and durable',
        price: 220000,
        originalPrice: 250000,
        category: 'home',
        images: ['quilt-duvet-cover-set-6pc-orange.jpeg','quilt-duvet-cover-set-6pc-cream.jpeg','quilt-duvet-cover-set-6pc-grey.jpeg','quilt-duvet-cover-set-6pc-pink.jpeg'],
        specifications: [
            { name: 'Material', value: '100% cotton'},
            { name: 'Size', value: '6x6ft'},
            { name: 'Color', value: 'Orange'},
        ]
    },
    {
        id: 'p277',
        name: 'Black leather clutchbag-rdd',
        description: 'Men black leather clutchbag, good for travel or common use for carrying your keys, phones and many more,strong and durable',
        price: 55000,
        originalPrice: 75000,
        category: 'home',
        images: ['black-men-leather-clutchbag-1.jpeg','black-men-leather-clutchbag-2.jpeg','black-men-leather-clutchbag-3.jpeg'],
        specifications: [
            { name: 'Material', value: 'Leather'},
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p278',
        name: 'Brown leather clutchbag-rdd',
        description: 'Men black leather clutchbag, good for travel or common use for carrying your keys, phones and many more,strong and durable',
        price: 55000,
        originalPrice: 75000,
        category: 'home',
        images: ['brown-men-leather-clutchbag-1.jpeg','brown-men-leather-clutchbag-2.jpeg','brown-men-leather-clutchbag-3.jpeg'],
        specifications: [
            { name: 'Material', value: 'Leather'},
            { name: 'Color', value: 'Brown'},
        ]
    },
    {
        id: 'p279',
        name: 'Adjustable laptop table, work station, side table, Black-mrf',
        description: 'Portable adjustable table with lockable wheels and storage shelves,size; 60cm length x 40cm width, height adjustable 69-85cm can be used as laptop table, bedside, sofaside or work station table. Convenient to use, strong and durable',
        price: 155000,
        originalPrice: 180000,
        category: 'beauty',
        images: ['laptop-table-black.jpeg','laptop-table-cream.jpeg','laptop-table-brown.jpeg','laptop-table-white.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel frame, wood top'},
            { name: 'Size', value: '60cm Length, 40cm width,height adjustable 69-85cm'},
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p280',
        name: 'Adjustable laptop table, work station, side table, Cream-mrf',
        description: 'Portable adjustable table with lockable wheels and storage shelves,size; 60cm length x 40cm width, height adjustable 69-85cm can be used as laptop table, bedside, sofaside or work station table. Convenient to use, strong and durable',
        price: 155000,
        originalPrice: 180000,
        category: 'beauty',
        images: ['laptop-table-cream.jpeg','laptop-table-black.jpeg','laptop-table-brown.jpeg','laptop-table-white.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel frame, wood top'},
            { name: 'Size', value: '60cm Length, 40cm width,height adjustable 69-85cm'},
            { name: 'Color', value: 'Cream'},
        ]
    },
    {
        id: 'p281',
        name: 'Adjustable laptop table, work station, side table, Brown-mrf',
        description: 'Portable adjustable table with lockable wheels and storage shelves,size; 60cm length x 40cm width, height adjustable 69-85cm can be used as laptop table, bedside, sofaside or work station table. Convenient to use, strong and durable',
        price: 155000,
        originalPrice: 180000,
        category: 'beauty',
        images: ['laptop-table-brown.jpeg','laptop-table-black.jpeg','laptop-table-cream.jpeg','laptop-table-white.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel frame, wood top'},
            { name: 'Size', value: '60cm Length, 40cm width,height adjustable 69-85cm'},
            { name: 'Color', value: 'Brown'},
        ]
    },
    {
        id: 'p282',
        name: 'Adjustable laptop table, work station, side table, White-mrf',
        description: 'Portable adjustable table with lockable wheels and storage shelves,size; 60cm length x 40cm width, height adjustable 69-85cm can be used as laptop table, bedside, sofaside or work station table. Convenient to use, strong and durable',
        price: 155000,
        originalPrice: 180000,
        category: 'beauty',
        images: ['laptop-table-white.jpeg','laptop-table-black.jpeg','laptop-table-cream.jpeg','laptop-table-brown.jpeg'],
        specifications: [
            { name: 'Material', value: 'Steel frame, wood top'},
            { name: 'Size', value: '60cm Length, 40cm width,height adjustable 69-85cm'},
            { name: 'Color', value: 'White'},
        ]
    },
    {
        id: 'p283',
        name: 'Folding camping bed-btz',
        description: 'Folding camping bed for use during camping or travel. Convenient to use, strong and durable',
        price: 365000,
        originalPrice: 400000,
        category: 'home',
        images: ['folding-camping-bed-1.jpeg','folding-camping-bed-2.jpeg','folding-camping-bed-3.jpeg'],
        specifications: [
            { name: 'Color', value: 'Grey'},
        ]
    },
    {
        id: 'p284',
        name: 'Inflatable feet pedal-btz',
        description: 'PVC material inflatable feet pedal for body exercise. Convenient to use, deflatable for storage when not in use or for travel, strong and durable',
        price: 75000,
        originalPrice: 90000,
        category: 'fashion',
        images: ['inflatable-feet-pedal-1.jpeg','inflatable-feet-pedal-2.jpeg','inflatable-feet-pedal-3.jpeg'],
        specifications: [
            { name: 'Material', value: 'PVC'},
        ]
    },
    {
        id: 'p285',
        name: 'Baby car seat, carry cot, crib, birth-18 months, Black-bdy',
        description: 'Baby car seat cum carry cot serves as both secure car seat and convenient carry cot offering portability and safety, suitable for babies from birth-18 months, it has a re-enforced inner padding and padded head rest for comfort, its light weight and has adjustable handle for easy carrying, strong and durable',
        price: 285000,
        originalPrice: 300000,
        category: 'toys',
        images: ['baby-car-seat-carry-cot-black2.jpg','baby-car-seat-carry-cot-cream1.jpg','baby-car-seat-carry-cot-grey.jpeg','baby-car-seat-carry-cot-green.jpeg'],
        specifications: [
            { name: 'Material', value: 'Padded cotton, polyester'},
            { name: 'Application', value: 'birth-18 months, 13kg'},
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p286',
        name: 'Baby car seat, carry cot, crib, birth-18 months, Cream-bdy',
        description: 'Baby car seat cum carry cot serves as both secure car seat and convenient carry cot offering portability and safety, suitable for babies from birth-18 months, it has a re-enforced inner padding and padded head rest for comfort, its light weight and has adjustable handle for easy carrying, strong and durable',
        price: 285000,
        originalPrice: 300000,
        category: 'toys',
        images: ['baby-car-seat-carry-cot-cream1.jpg','baby-car-seat-carry-cot-black2.jpg','baby-car-seat-carry-cot-grey.jpeg','baby-car-seat-carry-cot-green.jpeg'],
        specifications: [
            { name: 'Material', value: 'Padded cotton, polyester'},
            { name: 'Application', value: 'birth-18 months, 13kg'},
            { name: 'Color', value: 'Cream'},
        ]
    },
    {
        id: 'p287',
        name: 'Baby car seat, carry cot, crib, birth-18 months, Grey-bdy',
        description: 'Baby car seat cum carry cot serves as both secure car seat and convenient carry cot offering portability and safety, suitable for babies from birth-18 months, it has a re-enforced inner padding and padded head rest for comfort, its light weight and has adjustable handle for easy carrying, strong and durable',
        price: 285000,
        originalPrice: 300000,
        category: 'toys',
        images: ['baby-car-seat-carry-cot-grey.jpeg','baby-car-seat-carry-cot-black2.jpg','baby-car-seat-carry-cot-cream1.jpg','baby-car-seat-carry-cot-green.jpeg'],
        specifications: [
            { name: 'Material', value: 'Padded cotton, polyester'},
            { name: 'Application', value: 'birth-18 months, 13kg'},
            { name: 'Color', value: 'Grey'},
        ]
    },
    {
        id: 'p288',
        name: 'Baby car seat, carry cot, crib, birth-18 months, Green-bdy',
        description: 'Baby car seat cum carry cot serves as both secure car seat and convenient carry cot offering portability and safety, suitable for babies from birth-18 months, it has a re-enforced inner padding and padded head rest for comfort, its light weight and has adjustable handle for easy carrying, strong and durable',
        price: 285000,
        originalPrice: 300000,
        category: 'toys',
        images: ['baby-car-seat-carry-cot-green.jpeg','baby-car-seat-carry-cot-black2.jpg','baby-car-seat-carry-cot-cream1.jpg','baby-car-seat-carry-cot-grey.jpeg'],
        specifications: [
            { name: 'Material', value: 'Padded cotton, polyester'},
            { name: 'Application', value: 'birth-18 months, 13kg'},
            { name: 'Color', value: 'Green'},
        ]
    },
    {
        id: 'p289',
        name: 'Steel folding ladder, 6 step-pus',
        description: '6 step light weight steel folding ladder, 187cm tall when fully extended, 140cm top platform height, 100x46cm base measurement, suitable for both domestic and commercial use, strong and durable',
        price: 320000,
        originalPrice: 350000,
        category: 'fashion',
        images: ['steel-6 step-ladder-1.jpeg','steel-6 step-ladder-2.jpeg'],
        specifications: [
            { name: 'Material', value: 'Light weight steel'},
            { name: 'Size', value: '6 step, 189cm height'},
            { name: 'Color', value: 'Red'},
        ]
    },
    {
        id: 'p290',
        name: 'Kid character themed carpet, rug, 1-mdn',
        description: 'Kid themed character carpets, 1.6 x 2.3 meters, suitable for child bedrooms, playrooms and more, made of soft comfortable polyester material and with a nonslip backing,strong and durable',
        price: 150000,
        originalPrice: 180000,
        category: 'toys',
        images: ['character-carpet-rug-1.jpeg','character-carpet-rug-2.jpeg','character-carpet-rug-3.jpeg','character-carpet-rug-4.jpeg','character-carpet-rug-5.jpeg'],
        specifications: [
            { name: 'Material', value: 'Polyester'},
            { name: 'Size', value: '1.6m meters Width, 2.3 meters Length'},
        ]
    },
    {
        id: 'p291',
        name: 'Kid character themed carpet, rug, 2-mdn',
        description: 'Kid themed character carpets, 1.6 x 2.3 meters, suitable for child bedrooms, playrooms and more, made of soft comfortable polyester material and with a nonslip backing,strong and durable',
        price: 150000,
        originalPrice: 180000,
        category: 'toys',
        images: ['character-carpet-rug-2.jpeg','character-carpet-rug-1.jpeg','character-carpet-rug-3.jpeg','character-carpet-rug-4.jpeg','character-carpet-rug-5.jpeg'],
        specifications: [
            { name: 'Material', value: 'Polyester'},
            { name: 'Size', value: '1.6m meters Width, 2.3 meters Length'},
        ]
    },
    {
        id: 'p292',
        name: 'Kid character themed carpet, rug, 4-mdn',
        description: 'Kid themed character carpets, 1.6 x 2.3 meters, suitable for child bedrooms, playrooms and more, made of soft comfortable polyester material and with a nonslip backing,strong and durable',
        price: 150000,
        originalPrice: 180000,
        category: 'toys',
        images: ['character-carpet-rug-4.jpeg','character-carpet-rug-1.jpeg','character-carpet-rug-2.jpeg','character-carpet-rug-3.jpeg','character-carpet-rug-5.jpeg'],
        specifications: [
            { name: 'Material', value: 'Polyester'},
            { name: 'Size', value: '1.6m meters Width, 2.3 meters Length'},
        ]
    },
    {
        id: 'p293',
        name: 'Kid character themed carpet, rug, 5-mdn',
        description: 'Kid themed character carpets, 1.6 x 2.3 meters, suitable for child bedrooms, playrooms and more, made of soft comfortable polyester material and with a nonslip backing,strong and durable',
        price: 150000,
        originalPrice: 180000,
        category: 'toys',
        images: ['character-carpet-rug-5.jpeg','character-carpet-rug-1.jpeg','character-carpet-rug-2.jpeg','character-carpet-rug-3.jpeg','character-carpet-rug-4.jpeg'],
        specifications: [
            { name: 'Material', value: 'Polyester'},
            { name: 'Size', value: '1.6m meters Width, 2.3 meters Length'},
        ]
    },
    {
        id: 'p294',
        name: 'Cotton Quilt, duvet cover set, 6pc, 6x6ft, Cream-mdn',
        description: '6pc 6x6ft quilt duvet cover set, 100% cotton material offering breathability and comfort, have embroided boarders and with central medallion. Set contains, 01 quilt, duvet cover 220x240cm, 01 fitted bedsheet 250x270cm, 04 pillowcovers 50x80cm. Beautiful with classic touch,strong and durable',
        price: 220000,
        originalPrice: 250000,
        category: 'beauty',
        images: ['quilt-duvet-cover-set-6pc-cream.jpeg','quilt-duvet-cover-set-6pc-grey.jpeg','quilt-duvet-cover-set-6pc-pink.jpeg','quilt-duvet-cover-set-6pc-orange.jpeg'],
        specifications: [
            { name: 'Material', value: '100% cotton'},
            { name: 'Size', value: '6x6ft'},
            { name: 'Color', value: 'Cream'},
        ]
    },
    {
        id: 'p295',
        name: 'Cotton Quilt, duvet cover set, 6pc, 6x6ft, Grey-mdn',
        description: '6pc 6x6ft quilt duvet cover set, 100% cotton material offering breathability and comfort, have embroided boarders and with central medallion. Set contains, 01 quilt, duvet cover 220x240cm, 01 fitted bedsheet 250x270cm, 04 pillowcovers 50x80cm. Beautiful with classic touch,strong and durable',
        price: 220000,
        originalPrice: 250000,
        category: 'beauty',
        images: ['quilt-duvet-cover-set-6pc-grey.jpeg','quilt-duvet-cover-set-6pc-cream.jpeg','quilt-duvet-cover-set-6pc-pink.jpeg','quilt-duvet-cover-set-6pc-orange.jpeg'],
        specifications: [
            { name: 'Material', value: '100% cotton'},
            { name: 'Size', value: '6x6ft'},
            { name: 'Color', value: 'Grey'},
        ]
    },
    {
        id: 'p296',
        name: 'Cotton Quilt, duvet cover set, 6pc, 6x6ft, Pink-mdn',
        description: '6pc 6x6ft quilt duvet cover set, 100% cotton material offering breathability and comfort, have embroided boarders and with central medallion. Set contains, 01 quilt, duvet cover 220x240cm, 01 fitted bedsheet 250x270cm, 04 pillowcovers 50x80cm. Beautiful with classic touch,strong and durable',
        price: 220000,
        originalPrice: 250000,
        category: 'beauty',
        images: ['quilt-duvet-cover-set-6pc-pink.jpeg','quilt-duvet-cover-set-6pc-cream.jpeg','quilt-duvet-cover-set-6pc-grey.jpeg','quilt-duvet-cover-set-6pc-orange.jpeg'],
        specifications: [
            { name: 'Material', value: '100% cotton'},
            { name: 'Size', value: '6x6ft'},
            { name: 'Color', value: 'Pink'},
        ]
    },
    {
        id: 'p297',
        name: 'Cotton Quilt, duvet cover set, 6pc, 6x6ft, Orange-mdn',
        description: '6pc 6x6ft quilt duvet cover set, 100% cotton material offering breathability and comfort, have embroided boarders and with central medallion. Set contains, 01 quilt, duvet cover 220x240cm, 01 fitted bedsheet 250x270cm, 04 pillowcovers 50x80cm. Beautiful with classic touch,strong and durable',
        price: 220000,
        originalPrice: 250000,
        category: 'beauty',
        images: ['quilt-duvet-cover-set-6pc-orange.jpeg','quilt-duvet-cover-set-6pc-cream.jpeg','quilt-duvet-cover-set-6pc-grey.jpeg','quilt-duvet-cover-set-6pc-pink.jpeg'],
        specifications: [
            { name: 'Material', value: '100% cotton'},
            { name: 'Size', value: '6x6ft'},
            { name: 'Color', value: 'Orange'},
        ]
    },
    {
        id: 'p298',
        name: 'Black leather clutchbag-rdd',
        description: 'Men black leather clutchbag, good for travel or common use for carrying your keys, phones and many more,strong and durable',
        price: 55000,
        originalPrice: 75000,
        category: 'fashion',
        images: ['black-men-leather-clutchbag-1.jpeg','black-men-leather-clutchbag-2.jpeg','black-men-leather-clutchbag-3.jpeg'],
        specifications: [
            { name: 'Material', value: 'Leather'},
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p299',
        name: 'Brown leather clutchbag-rdd',
        description: 'Men black leather clutchbag, good for travel or common use for carrying your keys, phones and many more,strong and durable',
        price: 55000,
        originalPrice: 75000,
        category: 'fashion',
        images: ['brown-men-leather-clutchbag-1.jpeg','brown-men-leather-clutchbag-2.jpeg','brown-men-leather-clutchbag-3.jpeg'],
        specifications: [
            { name: 'Material', value: 'Leather'},
            { name: 'Color', value: 'Brown'},
        ]
    },
    {
        id: 'p300',
        name: 'Television set, TCL 50 inch Smart 4k Android-cpl',
        description: 'TCL brand television set, 50 inch Smart 4K, Android, displays very clear pictures, strong and durable',
        price: 1200000,
        originalPrice: 1350000,
        category: 'home',
        images: ['tcl-tv-50 inch-smart-4k.jpeg','tcl-tv-gen1.jpeg','tcl-tv-gen2.jpeg'],
        specifications: [
            { name: 'Size', value: '50 inch'},
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p301',
        name: 'Television set, TCL 50 inch Smart Qled, Android-cpl',
        description: 'TCL brand television set, 50 inch Smart Qled, Android, displays very clear pictures, strong and durable',
        price: 1400000,
        originalPrice: 1550000,
        category: 'home',
        images: ['tcl-tv-50 inch-smart-Qled.jpeg','tcl-tv-gen1.jpeg','tcl-tv-gen2.jpeg'],
        specifications: [
            { name: 'Size', value: '50 inch'},
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p302',
        name: 'Television set, TCL 50 inch Smart Qled, Android-cpl',
        description: 'TCL brand television set, 50 inch Smart Qled, Android, displays very clear pictures, strong and durable',
        price: 1400000,
        originalPrice: 1550000,
        category: 'home',
        images: ['tcl-tv-50 inch-smart-Qled.jpeg','tcl-tv-gen1.jpeg','tcl-tv-gen2.jpeg'],
        specifications: [
            { name: 'Size', value: '50 inch'},
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p303',
        name: 'Television set, TCL 43 inch Smart, Android-cpl',
        description: 'TCL brand television set, 43 inch Smart, Android, displays very clear pictures, strong and durable',
        price: 750000,
        originalPrice: 950000,
        category: 'home',
        images: ['tcl-tv-43 inch-smart-android.jpeg','tcl-tv-gen1.jpeg','tcl-tv-gen2.jpeg'],
        specifications: [
            { name: 'Size', value: '43 inch'},
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p304',
        name: 'Television set, TCL 32 inch digital, frameless, LED, HDR-cpl',
        description: 'TCL brand television set, 32 inch digital, HDR, frameless, LED, displays very clear pictures, strong and durable',
        price: 360000,
        originalPrice: 400000,
        category: 'home',
        images: ['tcl-tv-32 inch-digital.jpeg','tcl-tv-gen1.jpeg','tcl-tv-gen2.jpeg'],
        specifications: [
            { name: 'Size', value: '32 inch'},
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p305',
        name: 'Car dash cam, 1080p Full HD WDR-btz',
        description: 'Car dash cam, 1080p, Full HD WDR for view and recording views through car front windscreen, rear and interior, 1080p full HD recording, wide dynamic range, good for providing evidence in case of accidents, reckless driving, vandalism and many more and potentially assisting with insurance claims, displays very clear pictures, strong and durable',
        price: 160000,
        originalPrice: 200000,
        category: 'home',
        images: ['car-camera-dashboard-1.jpeg','car-camera-dashboard-2.jpeg','car-camera-dashboard-3.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p306',
        name: 'Acrylic food container set, 3pc-mrf',
        description: 'Acrylic 3pc food container set with air tight lids, clear glass for proper monitoring, airtight, leakproof to keep food items fresh and prevent spills. Good for storage of various food items like fruits, vegetables, snacks, dry foods and many more. made in durableBPA free acrylic material and can be used in fridge, freezer and pantry, strong and durable',
        price: 60000,
        originalPrice: 80000,
        category: 'home',
        images: ['food-container-set-1.jpeg','food-container-set-2.jpeg','food-container-set-3.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p307',
        name: 'Baby seat trainer, Pink-bdy',
        description: 'Baby seat trainer designed to help infants learn to sit independently and provide comfortable support during play times, feeding or relaxation, made of plush material which makes it comfortable and safe, versatile, can be used at  home or in car, strong and durable',
        price: 85000,
        originalPrice: 100000,
        category: 'home',
        images: ['baby-sit-trainer-pink.jpeg','baby-sit-trainer-green.jpeg','baby-sit-trainer-grey.jpeg','baby-sit-trainer-blue.jpeg','baby-sit-trainer-all.jpeg'],
        specifications: [
            { name: 'Color', value: 'Pink'},
            { name: 'Material', value: 'Plush polyester'},
        ]
    },
     {
        id: 'p308',
        name: 'Baby seat trainer, Green-bdy',
        description: 'Baby seat trainer designed to help infants learn to sit independently and provide comfortable support during play times, feeding or relaxation, made of plush material which makes it comfortable and safe, versatile, can be used at  home or in car, strong and durable',
        price: 85000,
        originalPrice: 100000,
        category: 'home',
        images: ['baby-sit-trainer-green.jpeg','baby-sit-trainer-pink.jpeg','baby-sit-trainer-grey.jpeg','baby-sit-trainer-blue.jpeg','baby-sit-trainer-all.jpeg'],
        specifications: [
            { name: 'Color', value: 'Green'},
            { name: 'Material', value: 'Plush polyester'},
        ]
    },
    {
        id: 'p309',
        name: 'Baby seat trainer, Grey-bdy',
        description: 'Baby seat trainer designed to help infants learn to sit independently and provide comfortable support during play times, feeding or relaxation, made of plush material which makes it comfortable and safe, versatile, can be used at  home or in car, strong and durable',
        price: 85000,
        originalPrice: 100000,
        category: 'home',
        images: ['baby-sit-trainer-grey.jpeg','baby-sit-trainer-pink.jpeg','baby-sit-trainer-green.jpeg','baby-sit-trainer-blue.jpeg','baby-sit-trainer-all.jpeg'],
        specifications: [
            { name: 'Color', value: 'Grey'},
            { name: 'Material', value: 'Plush polyester'},
        ]
    },
    {
        id: 'p310',
        name: 'Baby seat trainer, Blue-bdy',
        description: 'Baby seat trainer designed to help infants learn to sit independently and provide comfortable support during play times, feeding or relaxation, made of plush material which makes it comfortable and safe, versatile, can be used at  home or in car, strong and durable',
        price: 85000,
        originalPrice: 100000,
        category: 'home',
        images: ['baby-sit-trainer-blue.jpeg','baby-sit-trainer-pink.jpeg','baby-sit-trainer-green.jpeg','baby-sit-trainer-grey.jpeg','baby-sit-trainer-all.jpeg'],
        specifications: [
            { name: 'Color', value: 'Blue'},
            { name: 'Material', value: 'Plush polyester'},
        ]
    },
    {
        id: 'p311',
        name: 'Multifunctional daiper bag, Maroon-bdy',
        description: 'Multifunctional daiper bag that converts into a baby changing station and portable crib, extra large, waterproof and with insulated pockets, built in crib with mosquito net, multiple components, easy to clean, strong and durable',
        price: 120000,
        originalPrice: 140000,
        category: 'home',
        images: ['baby-daiper-bag-maroon.jpeg','baby-daiper-bag-blue.jpeg','baby-daiper-bag-green.jpeg','baby-daiper-bag-grey.jpeg','baby-daiper-bag-all.jpeg'],
        specifications: [
            { name: 'Color', value: 'Maroon'},
            { name: 'Material', value: 'Cotton, polyester'},
        ]
    },
    {
        id: 'p312',
        name: 'Multifunctional daiper bag, Blue-bdy',
        description: 'Multifunctional daiper bag that converts into a baby changing station and portable crib, extra large, waterproof and with insulated pockets, built in crib with mosquito net, multiple components, easy to clean, strong and durable',
        price: 120000,
        originalPrice: 140000,
        category: 'home',
        images: ['baby-daiper-bag-blue.jpeg','baby-daiper-bag-maroon.jpeg','baby-daiper-bag-green.jpeg','baby-daiper-bag-grey.jpeg','baby-daiper-bag-all.jpeg'],
        specifications: [
            { name: 'Color', value: 'Blue'},
            { name: 'Material', value: 'Cotton, polyester'},
        ]
    },
    {
        id: 'p313',
        name: 'Multifunctional daiper bag, Green-bdy',
        description: 'Multifunctional daiper bag that converts into a baby changing station and portable crib, extra large, waterproof and with insulated pockets, built in crib with mosquito net, multiple components, easy to clean, strong and durable',
        price: 120000,
        originalPrice: 140000,
        category: 'home',
        images: ['baby-daiper-bag-green.jpeg','baby-daiper-bag-maroon.jpeg','baby-daiper-bag-blue.jpeg','baby-daiper-bag-grey.jpeg','baby-daiper-bag-all.jpeg'],
        specifications: [
            { name: 'Color', value: 'Green'},
            { name: 'Material', value: 'Cotton, polyester'},
        ]
    },
    {
        id: 'p314',
        name: 'Multifunctional daiper bag, Grey-bdy',
        description: 'Multifunctional daiper bag that converts into a baby changing station and portable crib, extra large, waterproof and with insulated pockets, built in crib with mosquito net, multiple components, easy to clean, strong and durable',
        price: 120000,
        originalPrice: 140000,
        category: 'home',
        images: ['baby-daiper-bag-grey.jpeg','baby-daiper-bag-maroon.jpeg','baby-daiper-bag-blue.jpeg','baby-daiper-bag-green.jpeg','baby-daiper-bag-all.jpeg'],
        specifications: [
            { name: 'Color', value: 'Grey'},
            { name: 'Material', value: 'Cotton, polyester'},
        ]
    },
    {
        id: 'p315',
        name: 'Kid tricycle, 1-5 years, Yellow-bdy',
        description: 'Kid tricycle with a parental control handle and storage basket, suitable for kids 1-5 years, has seat belt and seat cushions for better safety, sturdy frame, strong and durable',
        price: 175000,
        originalPrice: 200000,
        category: 'home',
        images: ['kid-tricycle-handle-yellow.jpeg','kid-tricycle-handle-red.jpeg','kid-tricycle-handle-blue.jpeg'],
        specifications: [
            { name: 'Color', value: 'Yellow'},
            { name: 'Material', value: 'Steel, plastic'},
        ]
    },
    {
        id: 'p316',
        name: 'Kid tricycle, 1-5 years, Red-bdy',
        description: 'Kid tricycle with a parental control handle and storage basket, suitable for kids 1-5 years, has seat belt and seat cushions for better safety, sturdy frame, strong and durable',
        price: 175000,
        originalPrice: 200000,
        category: 'home',
        images: ['kid-tricycle-handle-red.jpeg','kid-tricycle-handle-yellow.jpeg','kid-tricycle-handle-blue.jpeg'],
        specifications: [
            { name: 'Color', value: 'Red'},
            { name: 'Material', value: 'Steel, plastic'},
        ]
    },
    {
        id: 'p317',
        name: 'Kid tricycle, 1-5 years, Blue-bdy',
        description: 'Kid tricycle with a parental control handle and storage basket, suitable for kids 1-5 years, has seat belt and seat cushions for better safety, sturdy frame, strong and durable',
        price: 175000,
        originalPrice: 200000,
        category: 'home',
        images: ['kid-tricycle-handle-blue.jpeg','kid-tricycle-handle-yellow.jpeg','kid-tricycle-handle-red.jpeg'],
        specifications: [
            { name: 'Color', value: 'Blue'},
            { name: 'Material', value: 'Steel, plastic'},
        ]
    },
    {
        id: 'p318',
        name: 'Smart watch, 1-cpl',
        description: 'Quality waterproof smart watch, strong and durable',
        price: 100000,
        originalPrice: 125000,
        category: 'home',
        images: ['smart-watch-1.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p319',
        name: 'Smart watch, 2-cpl',
        description: 'Quality waterproof smart watch, strong and durable',
        price: 80000,
        originalPrice: 100000,
        category: 'home',
        images: ['smart-watch-2.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p320',
        name: 'Smart watch, 3-cpl',
        description: 'Quality waterproof smart watch, strong and durable',
        price: 120000,
        originalPrice: 155000,
        category: 'home',
        images: ['smart-watch-3.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p321',
        name: 'Smart watch, 4-cpl',
        description: 'Quality waterproof smart watch, strong and durable',
        price: 120000,
        originalPrice: 155000,
        category: 'home',
        images: ['smart-watch-4.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p322',
        name: 'Smart watch, 5-cpl',
        description: 'Quality waterproof smart watch, strong and durable',
        price: 80000,
        originalPrice: 100000,
        category: 'home',
        images: ['smart-watch-5.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p323',
        name: 'Smart watch, 6-cpl',
        description: 'Quality waterproof smart watch, strong and durable',
        price: 120000,
        originalPrice: 155000,
        category: 'home',
        images: ['smart-watch-6.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p324',
        name: 'Smart watch, 7-cpl',
        description: 'Quality waterproof smart watch, strong and durable',
        price: 100000,
        originalPrice: 125000,
        category: 'home',
        images: ['smart-watch-7.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p325',
        name: 'Insulated 4pc set lunchbox with holder bag-chp',
        description: 'Insulated 4pc set lunchbox, keeps food safe and at temperature, leakproof with snap lid, 4pc set allowing different food seperation, insulated bag holder to keep temperature, strong and durable',
        price: 65000,
        originalPrice: 85000,
        category: 'home',
        images: ['insulated-lunchbox-1.jpeg','insulated-lunchbox-2.jpeg','insulated-lunchbox-3.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p326',
        name: 'Tiki cocktail glass set, 01 dozen-fti',
        description: 'Tiki cocktail glass set, 12 pieces. Suitable for cocktails, spirits, juices, water and many others, strong and durable',
        price: 85000,
        originalPrice: 100000,
        category: 'home',
        images: ['tiki-cocktail-glass-1.jpeg','tiki-cocktail-glass-2.jpeg','tiki-cocktail-glass-3.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p327',
        name: 'Television set, TCL 50 inch Smart 4k Android-cpl',
        description: 'TCL brand television set, 50 inch Smart 4K, Android, displays very clear pictures, strong and durable',
        price: 1200000,
        originalPrice: 1350000,
        category: 'electronics',
        images: ['tcl-tv-50 inch-smart-4k.jpeg','tcl-tv-gen1.jpeg','tcl-tv-gen2.jpeg'],
        specifications: [
            { name: 'Size', value: '50 inch'},
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p328',
        name: 'Television set, TCL 50 inch Smart Qled, Android-cpl',
        description: 'TCL brand television set, 50 inch Smart Qled, Android, displays very clear pictures, strong and durable',
        price: 1400000,
        originalPrice: 1550000,
        category: 'electronics',
        images: ['tcl-tv-50 inch-smart-Qled.jpeg','tcl-tv-gen1.jpeg','tcl-tv-gen2.jpeg'],
        specifications: [
            { name: 'Size', value: '50 inch'},
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p329',
        name: 'Television set, TCL 50 inch Smart Qled, Android-cpl',
        description: 'TCL brand television set, 50 inch Smart Qled, Android, displays very clear pictures, strong and durable',
        price: 1400000,
        originalPrice: 1550000,
        category: 'electronics',
        images: ['tcl-tv-50 inch-smart-Qled.jpeg','tcl-tv-gen1.jpeg','tcl-tv-gen2.jpeg'],
        specifications: [
            { name: 'Size', value: '50 inch'},
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p330',
        name: 'Television set, TCL 43 inch Smart, Android-cpl',
        description: 'TCL brand television set, 43 inch Smart, Android, displays very clear pictures, strong and durable',
        price: 750000,
        originalPrice: 950000,
        category: 'electronics',
        images: ['tcl-tv-43 inch-smart-android.jpeg','tcl-tv-gen1.jpeg','tcl-tv-gen2.jpeg'],
        specifications: [
            { name: 'Size', value: '43 inch'},
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p331',
        name: 'Television set, TCL 32 inch digital, frameless, LED, HDR-cpl',
        description: 'TCL brand television set, 32 inch digital, HDR, frameless, LED, displays very clear pictures, strong and durable',
        price: 360000,
        originalPrice: 400000,
        category: 'electronics',
        images: ['tcl-tv-32 inch-digital.jpeg','tcl-tv-gen1.jpeg','tcl-tv-gen2.jpeg'],
        specifications: [
            { name: 'Size', value: '32 inch'},
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p332',
        name: 'Car dash cam, 1080p Full HD WDR-btz',
        description: 'Car dash cam, 1080p, Full HD WDR for view and recording views through car front windscreen, rear and interior, 1080p full HD recording, wide dynamic range, good for providing evidence in case of accidents, reckless driving, vandalism and many more and potentially assisting with insurance claims, displays very clear pictures, strong and durable',
        price: 160000,
        originalPrice: 200000,
        category: 'sports',
        images: ['car-camera-dashboard-1.jpeg','car-camera-dashboard-2.jpeg','car-camera-dashboard-3.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p333',
        name: 'Acrylic food container set, 3pc-mrf',
        description: 'Acrylic 3pc food container set with air tight lids, clear glass for proper monitoring, airtight, leakproof to keep food items fresh and prevent spills. Good for storage of various food items like fruits, vegetables, snacks, dry foods and many more. made in durableBPA free acrylic material and can be used in fridge, freezer and pantry, strong and durable',
        price: 60000,
        originalPrice: 80000,
        category: 'home',
        images: ['food-container-set-1.jpeg','food-container-set-2.jpeg','food-container-set-3.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p334',
        name: 'Baby seat trainer, Pink-bdy',
        description: 'Baby seat trainer designed to help infants learn to sit independently and provide comfortable support during play times, feeding or relaxation, made of plush material which makes it comfortable and safe, versatile, can be used at  home or in car, strong and durable',
        price: 80000,
        originalPrice: 100000,
        category: 'home',
        images: ['baby-sit-trainer-pink.jpeg','baby-sit-trainer-green.jpeg','baby-sit-trainer-grey.jpeg','baby-sit-trainer-blue.jpeg','baby-sit-trainer-all.jpeg'],
        specifications: [
            { name: 'Color', value: 'Pink'},
            { name: 'Material', value: 'Plush polyester'},
        ]
    },
     {
        id: 'p335',
        name: 'Baby seat trainer, Green-bdy',
        description: 'Baby seat trainer designed to help infants learn to sit independently and provide comfortable support during play times, feeding or relaxation, made of plush material which makes it comfortable and safe, versatile, can be used at  home or in car, strong and durable',
        price: 85000,
        originalPrice: 100000,
        category: 'toys',
        images: ['baby-sit-trainer-green.jpeg','baby-sit-trainer-pink.jpeg','baby-sit-trainer-grey.jpeg','baby-sit-trainer-blue.jpeg','baby-sit-trainer-all.jpeg'],
        specifications: [
            { name: 'Color', value: 'Green'},
            { name: 'Material', value: 'Plush polyester'},
        ]
    },
    {
        id: 'p336',
        name: 'Baby seat trainer, Grey-bdy',
        description: 'Baby seat trainer designed to help infants learn to sit independently and provide comfortable support during play times, feeding or relaxation, made of plush material which makes it comfortable and safe, versatile, can be used at  home or in car, strong and durable',
        price: 85000,
        originalPrice: 100000,
        category: 'toys',
        images: ['baby-sit-trainer-grey.jpeg','baby-sit-trainer-pink.jpeg','baby-sit-trainer-green.jpeg','baby-sit-trainer-blue.jpeg','baby-sit-trainer-all.jpeg'],
        specifications: [
            { name: 'Color', value: 'Grey'},
            { name: 'Material', value: 'Plush polyester'},
        ]
    },
    {
        id: 'p337',
        name: 'Baby seat trainer, Blue-bdy',
        description: 'Baby seat trainer designed to help infants learn to sit independently and provide comfortable support during play times, feeding or relaxation, made of plush material which makes it comfortable and safe, versatile, can be used at  home or in car, strong and durable',
        price: 85000,
        originalPrice: 100000,
        category: 'toys',
        images: ['baby-sit-trainer-blue.jpeg','baby-sit-trainer-pink.jpeg','baby-sit-trainer-green.jpeg','baby-sit-trainer-grey.jpeg','baby-sit-trainer-all.jpeg'],
        specifications: [
            { name: 'Color', value: 'Blue'},
            { name: 'Material', value: 'Plush polyester'},
        ]
    },
    {
        id: 'p338',
        name: 'Multifunctional daiper bag, Maroon-bdy',
        description: 'Multifunctional daiper bag that converts into a baby changing station and portable crib, extra large, waterproof and with insulated pockets, built in crib with mosquito net, multiple components, easy to clean, strong and durable',
        price: 120000,
        originalPrice: 140000,
        category: 'toys',
        images: ['baby-daiper-bag-maroon.jpeg','baby-daiper-bag-blue.jpeg','baby-daiper-bag-green.jpeg','baby-daiper-bag-grey.jpeg','baby-daiper-bag-all.jpeg'],
        specifications: [
            { name: 'Color', value: 'Maroon'},
            { name: 'Material', value: 'Cotton, polyester'},
        ]
    },
    {
        id: 'p339',
        name: 'Multifunctional daiper bag, Blue-bdy',
        description: 'Multifunctional daiper bag that converts into a baby changing station and portable crib, extra large, waterproof and with insulated pockets, built in crib with mosquito net, multiple components, easy to clean, strong and durable',
        price: 120000,
        originalPrice: 140000,
        category: 'toys',
        images: ['baby-daiper-bag-blue.jpeg','baby-daiper-bag-maroon.jpeg','baby-daiper-bag-green.jpeg','baby-daiper-bag-grey.jpeg','baby-daiper-bag-all.jpeg'],
        specifications: [
            { name: 'Color', value: 'Blue'},
            { name: 'Material', value: 'Cotton, polyester'},
        ]
    },
    {
        id: 'p340',
        name: 'Multifunctional daiper bag, Green-bdy',
        description: 'Multifunctional daiper bag that converts into a baby changing station and portable crib, extra large, waterproof and with insulated pockets, built in crib with mosquito net, multiple components, easy to clean, strong and durable',
        price: 120000,
        originalPrice: 140000,
        category: 'toys',
        images: ['baby-daiper-bag-green.jpeg','baby-daiper-bag-maroon.jpeg','baby-daiper-bag-blue.jpeg','baby-daiper-bag-grey.jpeg','baby-daiper-bag-all.jpeg'],
        specifications: [
            { name: 'Color', value: 'Green'},
            { name: 'Material', value: 'Cotton, polyester'},
        ]
    },
    {
        id: 'p341',
        name: 'Multifunctional daiper bag, Grey-bdy',
        description: 'Multifunctional daiper bag that converts into a baby changing station and portable crib, extra large, waterproof and with insulated pockets, built in crib with mosquito net, multiple components, easy to clean, strong and durable',
        price: 120000,
        originalPrice: 140000,
        category: 'toys',
        images: ['baby-daiper-bag-grey.jpeg','baby-daiper-bag-maroon.jpeg','baby-daiper-bag-blue.jpeg','baby-daiper-bag-green.jpeg','baby-daiper-bag-all.jpeg'],
        specifications: [
            { name: 'Color', value: 'Grey'},
            { name: 'Material', value: 'Cotton, polyester'},
        ]
    },
    {
        id: 'p342',
        name: 'Kid tricycle, 1-5 years, Yellow-bdy',
        description: 'Kid tricycle with a parental control handle and storage basket, suitable for kids 1-5 years, has seat belt and seat cushions for better safety, sturdy frame, strong and durable',
        price: 175000,
        originalPrice: 200000,
        category: 'toys',
        images: ['kid-tricycle-handle-yellow.jpeg','kid-tricycle-handle-red.jpeg','kid-tricycle-handle-blue.jpeg'],
        specifications: [
            { name: 'Color', value: 'Yellow'},
            { name: 'Material', value: 'Steel, plastic'},
        ]
    },
    {
        id: 'p343',
        name: 'Kid tricycle, 1-5 years, Red-bdy',
        description: 'Kid tricycle with a parental control handle and storage basket, suitable for kids 1-5 years, has seat belt and seat cushions for better safety, sturdy frame, strong and durable',
        price: 175000,
        originalPrice: 200000,
        category: 'toys',
        images: ['kid-tricycle-handle-red.jpeg','kid-tricycle-handle-yellow.jpeg','kid-tricycle-handle-blue.jpeg'],
        specifications: [
            { name: 'Color', value: 'Red'},
            { name: 'Material', value: 'Steel, plastic'},
        ]
    },
    {
        id: 'p344',
        name: 'Kid tricycle, 1-5 years, Blue-bdy',
        description: 'Kid tricycle with a parental control handle and storage basket, suitable for kids 1-5 years, has seat belt and seat cushions for better safety, sturdy frame, strong and durable',
        price: 175000,
        originalPrice: 200000,
        category: 'toys',
        images: ['kid-tricycle-handle-blue.jpeg','kid-tricycle-handle-yellow.jpeg','kid-tricycle-handle-red.jpeg'],
        specifications: [
            { name: 'Color', value: 'Blue'},
            { name: 'Material', value: 'Steel, plastic'},
        ]
    },
    {
        id: 'p345',
        name: 'Smart watch, 1-cpl',
        description: 'Quality waterproof smart watch, strong and durable',
        price: 100000,
        originalPrice: 125000,
        category: 'fashion',
        images: ['smart-watch-1.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p346',
        name: 'Smart watch, 2-cpl',
        description: 'Quality waterproof smart watch, strong and durable',
        price: 80000,
        originalPrice: 100000,
        category: 'fashion',
        images: ['smart-watch-2.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p347',
        name: 'Smart watch, 3-cpl',
        description: 'Quality waterproof smart watch, strong and durable',
        price: 120000,
        originalPrice: 155000,
        category: 'fashion',
        images: ['smart-watch-3.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p348',
        name: 'Smart watch, 4-cpl',
        description: 'Quality waterproof smart watch, strong and durable',
        price: 120000,
        originalPrice: 155000,
        category: 'fashion',
        images: ['smart-watch-4.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p349',
        name: 'Smart watch, 5-cpl',
        description: 'Quality waterproof smart watch, strong and durable',
        price: 80000,
        originalPrice: 100000,
        category: 'fashion',
        images: ['smart-watch-5.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p350',
        name: 'Smart watch, 6-cpl',
        description: 'Quality waterproof smart watch, strong and durable',
        price: 120000,
        originalPrice: 155000,
        category: 'fashion',
        images: ['smart-watch-6.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p351',
        name: 'Smart watch, 7-cpl',
        description: 'Quality waterproof smart watch, strong and durable',
        price: 100000,
        originalPrice: 125000,
        category: 'fashion',
        images: ['smart-watch-7.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p352',
        name: 'Insulated 4pc set lunchbox with holder bag-chp',
        description: 'Insulated 4pc set lunchbox, keeps food safe and at temperature, leakproof with snap lid, 4pc set allowing different food seperation, insulated bag holder to keep temperature, strong and durable',
        price: 70000,
        originalPrice: 85000,
        category: 'home',
        images: ['insulated-lunchbox-1.jpeg','insulated-lunchbox-2.jpeg','insulated-lunchbox-3.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p353',
        name: 'Tiki cocktail glass set, 01 dozen-fti',
        description: 'Tiki cocktail glass set, 12 pieces. Suitable for cocktails, spirits, juices, water and many others, strong and durable',
        price: 80000,
        originalPrice: 100000,
        category: 'home',
        images: ['tiki-cocktail-glass-1.jpeg','tiki-cocktail-glass-2.jpeg','tiki-cocktail-glass-3.jpeg'],
        specifications: [
        ]
    },
    {
        id: 'p354',
        name: 'Cotton bedspread, bedcover, 4pc set for 6x6ft, 6x7ft & 7x7ft bed-mdn',
        description: 'Cotton bedspread, bedcover set for bed sizes 6x6ft, 6x7ft, 7x7ft, set contains 1 bedcover, 1 bedsheet, 2 pillowcovers, warm, beautiful, strong and durable.',
        price: 155000,
        originalPrice: 180000,
        category: 'beauty',
        images: ['cotton-bedspread-bedcover-1.jpeg'],
        specifications: [
            { name: 'Material', value: 'Cotton'},
            { name: 'Size', value: '6x6ft, 6x7ft, 7x7ft'},
        ]
    },
    {
        id: 'p355',
        name: 'Double frying pan, grill pan, 36cm-mrf',
        description: 'Dessini double frying pan, designed to cook food in a sealed environment which helps retain moisture and nutrients. Made from super conductive die cast aluminum for even heat distribution. has insulated anti scald handle and silicone sealing ring to prevent leaks and smoke during cooking for better user safety. Suitable for grilling meats, fish, poultry and various other dishes, strong and durable.',
        price: 120000,
        originalPrice: 150000,
        category: 'home',
        images: ['double-grill-frypan-1.jpeg','double-grill-frypan-2.jpeg','double-grill-frypan-3.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Die cast aluminum'},
            { name: 'Size', value: '36cm'},
        ]
    },
    {
        id: 'p356',
        name: 'Double frying pan, grill pan, 34cm-mrf',
        description: 'Dessini double frying pan, designed to cook food in a sealed environment which helps retain moisture and nutrients. Made from super conductive die cast aluminum for even heat distribution. has insulated anti scald handle and silicone sealing ring to prevent leaks and smoke during cooking for better user safety. Suitable for grilling meats, fish, poultry and various other dishes, strong and durable.',
        price: 110000,
        originalPrice: 135000,
        category: 'home',
        images: ['double-grill-frypan-1.jpeg','double-grill-frypan-2.jpeg','double-grill-frypan-3.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Die cast aluminum'},
            { name: 'Size', value: '34cm'},
        ]
    },
    {
        id: 'p357',
        name: 'Multi port super hub-cpl',
        description: 'Porodo brand multi port super hub for home and office simulteneous multiple device charging. It features 6 AC sockets, 4 Usb-C ports and 2 Usb-A ports (24w quick charge. Has 3000w for Ac devices and 60w for Usb charging, 2m length cable, strong and durable.',
        price: 175000,
        originalPrice: 200000,
        category: 'home',
        images: ['multiport-super-hub-1.jpeg','multiport-super-hub-2.jpeg','multiport-super-hub-3.jpeg'], 
        specifications: [
            { name: 'Length', value: '2 meters'},
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p358',
        name: 'Multi port super hub-cpl',
        description: 'Porodo brand multi port super hub for home and office simulteneous multiple device charging. It features 6 AC sockets, 4 Usb-C ports and 2 Usb-A ports (24w quick charge. Has 3000w for Ac devices and 60w for Usb charging, 2m length cable, strong and durable.',
        price: 175000,
        originalPrice: 200000,
        category: 'electronics',
        images: ['multiport-super-hub-2.jpeg','multiport-super-hub-1.jpeg','multiport-super-hub-3.jpeg'], 
        specifications: [
            { name: 'Length', value: '2 meters'},
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p359',
        name: 'Portable foldable wardrobe closet 4 column Grey-chp',
        description: 'Portable wardrobe designed for easy assembly and disassembly. Has ample shelves for folded clothes and a hanging rod for long garments and also space for shoes. its made in non wooven fabric cover with tubular metal frame. Has roll-up doors for easy access, space saving, strong and durable.',
        price: 135000,
        originalPrice: 160000,
        category: 'home',
        images: ['foldable-closet-4column-wardrobe-1.jpeg','foldable-closet-4column-wardrobe-2.jpeg','foldable-closet-4column-wardrobe-3.jpeg','foldable-closet-4column-wardrobe-4.jpeg','foldable-closet-4column-wardrobe-5.jpeg'], 
        specifications: [
            { name: 'Material', value: 'non wooven fabric outer cover, tubular steel frame'},
            { name: 'Color', value: 'Grey'},
        ]
    },
    {
        id: 'p360',
        name: 'Portable foldable wardrobe closet 4 column Blue-chp',
        description: 'Portable wardrobe designed for easy assembly and disassembly. Has ample shelves for folded clothes and a hanging rod for long garments and also space for shoes. its made in non wooven fabric cover with tubular metal frame. Has roll-up doors for easy access, space saving, strong and durable.',
        price: 135000,
        originalPrice: 160000,
        category: 'home',
        images: ['foldable-closet-4column-wardrobe-2.jpeg','foldable-closet-4column-wardrobe-1.jpeg','foldable-closet-4column-wardrobe-3.jpeg','foldable-closet-4column-wardrobe-4.jpeg','foldable-closet-4column-wardrobe-5.jpeg'], 
        specifications: [
            { name: 'Material', value: 'non wooven fabric outer cover, tubular steel frame'},
            { name: 'Color', value: 'Blue'},
        ]
    },
    {
        id: 'p361',
        name: 'Portable foldable wardrobe closet 4 column Maroon-chp',
        description: 'Portable wardrobe designed for easy assembly and disassembly. Has ample shelves for folded clothes and a hanging rod for long garments and also space for shoes. its made in non wooven fabric cover with tubular metal frame. Has roll-up doors for easy access, space saving, strong and durable.',
        price: 135000,
        originalPrice: 160000,
        category: 'home',
        images: ['foldable-closet-4column-wardrobe-3.jpeg','foldable-closet-4column-wardrobe-1.jpeg','foldable-closet-4column-wardrobe-2.jpeg','foldable-closet-4column-wardrobe-4.jpeg','foldable-closet-4column-wardrobe-5.jpeg'], 
        specifications: [
            { name: 'Material', value: 'non wooven fabric outer cover, tubular steel frame'},
            { name: 'Color', value: 'Maroon'},
        ]
    },
    {
        id: 'p362',
        name: 'Portable foldable wardrobe closet 4 column Purple-chp',
        description: 'Portable wardrobe designed for easy assembly and disassembly. Has ample shelves for folded clothes and a hanging rod for long garments and also space for shoes. its made in non wooven fabric cover with tubular metal frame. Has roll-up doors for easy access, space saving, strong and durable.',
        price: 135000,
        originalPrice: 160000,
        category: 'home',
        images: ['foldable-closet-4column-wardrobe-4.jpeg','foldable-closet-4column-wardrobe-1.jpeg','foldable-closet-4column-wardrobe-2.jpeg','foldable-closet-4column-wardrobe-3.jpeg','foldable-closet-4column-wardrobe-5.jpeg'], 
        specifications: [
            { name: 'Material', value: 'non wooven fabric outer cover, tubular steel frame'},
            { name: 'Color', value: 'Purple'},
        ]
    },
    {
        id: 'p363',
        name: 'Portable foldable wardrobe closet 4 column Brown-chp',
        description: 'Portable wardrobe designed for easy assembly and disassembly. Has ample shelves for folded clothes and a hanging rod for long garments and also space for shoes. its made in non wooven fabric cover with tubular metal frame. Has roll-up doors for easy access, space saving, strong and durable.',
        price: 135000,
        originalPrice: 160000,
        category: 'home',
        images: ['foldable-closet-4column-wardrobe-5.jpeg','foldable-closet-4column-wardrobe-1.jpeg','foldable-closet-4column-wardrobe-2.jpeg','foldable-closet-4column-wardrobe-3.jpeg','foldable-closet-4column-wardrobe-4.jpeg'], 
        specifications: [
            { name: 'Material', value: 'non wooven fabric outer cover, tubular steel frame'},
            { name: 'Color', value: 'Brown'},
        ]
    },
    {
        id: 'p364',
        name: 'Electric rice cooker, 3 liters-ymh',
        description: 'Saachi 3L electric rice cooker with steaming basket. Can cook up to 10 cups. Cooks and keeps warm. Steaming basket allows for steaming vegetables, meats, poultry and many more. Has non stick inner port, tempered glass lid with steam vent and is a one touch operation which makes it easy and safe to use, strong and durable.',
        price: 150000,
        originalPrice: 185000,
        category: 'home',
        images: ['electric-rice-cooker-saachi-3L-1.jpeg','electric-rice-cooker-saachi-3L-2.jpeg','electric-rice-cooker-saachi-3L-3.jpeg'], 
        specifications: [
            { name: 'Capacity', value: '3 liters'},
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p365',
        name: 'Electric rice cooker, 3 liters-ymh',
        description: 'Saachi 3L electric rice cooker with steaming basket. Can cook up to 10 cups. Cooks and keeps warm. Steaming basket allows for steaming vegetables, meats, poultry and many more. Has non stick inner port, tempered glass lid with steam vent and is a one touch operation which makes it easy and safe to use, strong and durable.',
        price: 150000,
        originalPrice: 185000,
        category: 'electronics',
        images: ['electric-rice-cooker-saachi-3L-1.jpeg','electric-rice-cooker-saachi-3L-2.jpeg','electric-rice-cooker-saachi-3L-3.jpeg'], 
        specifications: [
            { name: 'Capacity', value: '3 liters'},
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p366',
        name: 'Stand mixer, 3L-chp',
        description: 'Hoffmans 3L stand mixer with mixing bowl, 1000W motor, 5 speed control, flat beater and dough hook. Easy and safe to use, strong and durable.',
        price: 120000,
        originalPrice: 150000,
        category: 'electronics',
        images: ['stand-mixer-3L-hoffmans-1.jpeg','stand-mixer-3L-hoffmans-2.jpeg','stand-mixer-3L-hoffmans-3.jpeg'], 
        specifications: [
            { name: 'Capacity', value: '3 liters'},
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p367',
        name: 'Stand mixer, 3L-chp',
        description: 'Hoffmans 3L stand mixer with mixing bowl, 1000W motor, 5 speed control, flat beater and dough hook. Easy and safe to use, strong and durable.',
        price: 120000,
        originalPrice: 150000,
        category: 'home',
        images: ['stand-mixer-3L-hoffmans-1.jpeg','stand-mixer-3L-hoffmans-2.jpeg','stand-mixer-3L-hoffmans-3.jpeg'], 
        specifications: [
            { name: 'Capacity', value: '3 liters'},
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p368',
        name: 'Twin tub washing machine, 5 liters-cpl',
        description: 'Onida 5kg twin tub washing machine suitable for small washing activities, top loading for easy use and twin tub that allows simulteneous washing and spin drying, made in durable rust free plastic body, powerful motor and with user friendly controls with adjustable spin times. Easy and safe to use, strong and durable.',
        price: 475000,
        originalPrice: 500000,
        category: 'home',
        images: ['twin-tub-onida-5kg-washing-machine-1.jpeg','twin-tub-onida-5kg-washing-machine-2.jpeg','twin-tub-onida-5kg-washing-machine-3.jpeg'], 
        specifications: [
            { name: 'Capacity', value: '5 kg'},
            { name: 'Color', value: 'White'},
        ]
    },
    {
        id: 'p369',
        name: 'Twin tub washing machine, 5 liters-cpl',
        description: 'Onida 5kg twin tub washing machine suitable for small washing activities, top loading for easy use and twin tub that allows simulteneous washing and spin drying, made in durable rust free plastic body, powerful motor and with user friendly controls with adjustable spin times. Easy and safe to use, strong and durable.',
        price: 475000,
        originalPrice: 500000,
        category: 'electronics',
        images: ['twin-tub-onida-5kg-washing-machine-1.jpeg','twin-tub-onida-5kg-washing-machine-2.jpeg','twin-tub-onida-5kg-washing-machine-3.jpeg'], 
        specifications: [
            { name: 'Capacity', value: '5 kg'},
            { name: 'Color', value: 'White'},
        ]
    },
    {
        id: 'p370',
        name: 'Bathroom corner storage cabinet-mrf',
        description: 'Bathroom corner storage cabinet designed to fit in the corner of the bathroom to save space. Easy and safe to use, strong, sturdy and durable.',
        price: 85000,
        originalPrice: 100000,
        category: 'home',
        images: ['bathroom-corner-storage-cabinet-1.jpeg','bathroom-corner-storage-cabinet-2.jpeg','bathroom-corner-storage-cabinet-3.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Plastic'},
            { name: 'Color', value: 'White'},
        ]
    },
    {
        id: 'p371',
        name: 'Bathroom corner storage cabinet-mrf',
        description: 'Bathroom corner storage cabinet designed to fit in the corner of the bathroom to save space. Easy and safe to use, strong, sturdy and durable.',
        price: 85000,
        originalPrice: 100000,
        category: 'beauty',
        images: ['bathroom-corner-storage-cabinet-1.jpeg','bathroom-corner-storage-cabinet-2.jpeg','bathroom-corner-storage-cabinet-3.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Plastic'},
            { name: 'Color', value: 'White'},
        ]
    },
    {
        id: 'p372',
        name: 'Multipurpose foldable chef basket, deep fry basket, collapsible cooking basket-mrf',
        description: 'Foldable deep frying basket designed for multipurpose use such as boiling, steaming, deep frying, rinsing and many more, made of rustfree food grade stainless steel material, foldable for easy storage, its handles are designed to stay cool to touch even when basket is in boiling oil or water. Easy and safe to use, strong and durable.',
        price: 25000,
        originalPrice: 35000,
        category: 'home',
        images: ['multipurpose-chef-deep fry-basket-1.jpeg','multipurpose-chef-deep fry-basket-2.jpeg','multipurpose-chef-deep fry-basket-3.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Stainless steel'},
        ]
    },
    {
        id: 'p373',
        name: 'Electric food steamer, food steaming machine, 3 tier, 12L-mrf',
        description: 'RAF 3 tier electric food steamer, 12 L capacity with powerful 1200w heating element for fast steaming. Designed for cooking various foods such as fish, vegetables, meat, poultry and many more. Steaming is a healthy cooking method as it requires no oil and retains nutrients andvitamins. The machine features rapid steam release, large water volume capacity, 1300ml and designed to prevent flavor mixing between tiers. Easy and safe to use, strong and durable.',
        price: 165000,
        originalPrice: 195000,
        category: 'home',
        images: ['electric-food-steamer-raf-1.jpeg','electric-food-steamer-raf-2.jpeg'], 
        specifications: [
            { name: 'Capacity', value: '12L'},
            { name: 'Color', value: 'White'},
        ]
    },
    {
        id: 'p374',
        name: 'Electric food steamer, food steaming machine, 3 tier, 12L-mrf',
        description: 'RAF 3 tier electric food steamer, 12 L capacity with powerful 1200w heating element for fast steaming. Designed for cooking various foods such as fish, vegetables, meat, poultry and many more. Steaming is a healthy cooking method as it requires no oil and retains nutrients andvitamins. The machine features rapid steam release, large water volume capacity, 1300ml and designed to prevent flavor mixing between tiers. Easy and safe to use, strong and durable.',
        price: 165000,
        originalPrice: 195000,
        category: 'electronics',
        images: ['electric-food-steamer-raf-1.jpeg','electric-food-steamer-raf-2.jpeg'], 
        specifications: [
            { name: 'Capacity', value: '12L'},
            { name: 'Color', value: 'White'},
        ]
    },
    {
        id: 'p375',
        name: 'Food steamer, electric, food steaming machine, 3 tier, 12L-chp',
        description: 'Ackiliss 3 tier electric food steamer, 12 L capacity with powerful 1200w heating element for fast steaming. Designed for cooking various foods such as fish, vegetables, meat, poultry and many more. Steaming is a healthy cooking method as it requires no oil and retains nutrients andvitamins. The machine features rapid steam release, large water volume capacity, 1300ml and designed to prevent flavor mixing between tiers. Easy and safe to use, strong and durable.',
        price: 155000,
        originalPrice: 185000,
        category: 'electronics',
        images: ['electric-food-steamer-ackiliss-chp-1.jfif','electric-food-steamer-ackiliss-chp-2.jpeg'], 
        specifications: [
            { name: 'Capacity', value: '12L'},
            { name: 'Color', value: 'White'},
        ]
    },
    {
        id: 'p376',
        name: 'Food steamer, electric, food steaming machine, 3 tier, 12L-chp',
        description: 'Ackiliss 3 tier electric food steamer, 12 L capacity with powerful 1200w heating element for fast steaming. Designed for cooking various foods such as fish, vegetables, meat, poultry and many more. Steaming is a healthy cooking method as it requires no oil and retains nutrients andvitamins. The machine features rapid steam release, large water volume capacity, 1300ml and designed to prevent flavor mixing between tiers. Easy and safe to use, strong and durable.',
        price: 155000,
        originalPrice: 185000,
        category: 'home',
        images: ['electric-food-steamer-ackiliss-chp-1.jfif','electric-food-steamer-ackiliss-chp-2.jpeg'], 
        specifications: [
            { name: 'Capacity', value: '12L'},
            { name: 'Color', value: 'White'},
        ]
    },
    {
        id: 'p377',
        name: 'Manual food processor, multifunction kitchen manual food processor, vegetable chopper, meat grinder-mrf',
        description: 'Multifunction food processor designed for manually chopping vegetables, grinding meat, mixing ingredients and many more, it has durable and rust free stainless steel blades and compact for convenient storage. Has bottom suckers to ensure stability when during operation. Easy and safe to use, strong and durable.',
        price: 55000,
        originalPrice: 80000,
        category: 'home',
        images: ['manual-food-processor-vegetable-chopper-blender-1.jpeg','manual-food-processor-vegetable-chopper-blender-2.jpeg','manual-food-processor-vegetable-chopper-blender-3.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Plastic body, stainless steel blades'},
            { name: 'Color', value: 'Red'},
        ]
    },
    {
        id: 'p378',
        name: 'Ceramic Square dinner ware 18pc set-geo',
        description: '18pc square diner ware set, white. Set includes; 6 dinner plates, 6 salad plates and 6 bowls, strong and durable.',
        price: 150000,
        originalPrice: 180000,
        category: 'home',
        images: ['square-dinerware-18pc-set-1.jpeg','square-dinerware-18pc-set-2.jpeg','square-dinerware-18pc-set-3.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Ceramic'},
            { name: 'Color', value: 'White'},
        ]
    },
    {
        id: 'p379',
        name: 'Health and fitness stair stepper with handle bar-btz',
        description: 'Health and fitness stepper machine with handlebar that allows stability, support and balance during workouts, adjustable step height allows for customerzation of workout intensity. Has LCD monitor that displays metrics such as calories burned, , step count and time. It features a Hydraulic system ensures smooth and quiet operation, safe and easy to use, strong and durable.',
        price: 260000,
        originalPrice: 300000,
        category: 'home',
        images: ['handle-stair-exercise-stepper-22.jpg','handle-stair-exercise-stepper-3.jpeg','handle-stair-exercise-stepper-1.jpeg','handle-stair-exercise-stepper-11.jpg'], 
        specifications: [
            { name: 'Material', value: 'Metal and rubber'},
            { name: 'Color', value: 'Black, White'},
        ]
    },
    {
        id: 'p380',
        name: 'Health and fitness stair stepper with handle bar-btz',
        description: 'Health and fitness stepper machine with handlebar that allows stability, support and balance during workouts, adjustable step height allows for customerzation of workout intensity. Has LCD monitor that displays metrics such as calories burned, , step count and time. It features a Hydraulic system ensures smooth and quiet operation, safe and easy to use, strong and durable.',
        price: 260000,
        originalPrice: 300000,
        category: 'electronics',
        images: ['handle-stair-exercise-stepper-3.jpeg','handle-stair-exercise-stepper-1.jpeg','handle-stair-exercise-stepper-22.jpg','handle-stair-exercise-stepper-11.jpg'], 
        specifications: [
            { name: 'Material', value: 'Metal and rubber'},
            { name: 'Color', value: 'Black, White'},
        ]
    },
    {
        id: 'p381',
        name: 'Health and fitness stair stepper with handle bar-btz',
        description: 'Health and fitness stepper machine with handlebar that allows stability, support and balance during workouts, adjustable step height allows for customerzation of workout intensity. Has LCD monitor that displays metrics such as calories burned, , step count and time. It features a Hydraulic system ensures smooth and quiet operation, safe and easy to use, strong and durable.',
        price: 255000,
        originalPrice: 280000,
        category: 'fashion',
        images: ['handle-stair-exercise-stepper-1.jpeg','handle-stair-exercise-stepper-3.jpeg','handle-stair-exercise-stepper-22.jpg','handle-stair-exercise-stepper-11.jpg'], 
        specifications: [
            { name: 'Material', value: 'Metal and rubber'},
            { name: 'Color', value: 'Black, White'},
        ]
    },
    {
        id: 'p382',
        name: 'Ceramic dinner ware 18pc square set-geo',
        description: '18pc square diner ware set, white. Set includes; 6 dinner plates, 6 salad plates and 6 bowls, strong and durable.',
        price: 155000,
        originalPrice: 180000,
        category: 'home',
        images: ['square-dinerware-18pc-set-2.jpeg','square-dinerware-18pc-set-1.jpeg','square-dinerware-18pc-set-3.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Ceramic'},
            { name: 'Color', value: 'White'},
        ]
    },
    {
        id: 'p383',
        name: 'Electric glass kettle, transparent kettle 2.2L-chp',
        description: 'Hoffmans 2.2 liters glass kettle 2000w power. Has features like cool touch handle, boil dry protection, automatic shut-off, 360 degrees cordless power base and water level indicator. The transparent pot helps monitor the boiling. Beautiful,strong and durable.',
        price: 65000,
        originalPrice: 85000,
        category: 'home',
        images: ['electric-glass-kettle-hoffmans-2.2L-1.jpeg','electric-glass-kettle-hoffmans-2.2L-2.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Glass pot, Plastic handle'},
            { name: 'Capacity', value: '2.2 Liters'},
        ]
    },
    {
        id: 'p384',
        name: 'Electric glass kettle, transparent kettle 2.2L-chp',
        description: 'Hoffmans 2.2 liters glass kettle 2000w power. Has features like cool touch handle, boil dry protection, automatic shut-off, 360 degrees cordless power base and water level indicator. The transparent pot helps monitor the boiling. Beautiful,strong and durable.',
        price: 65000,
        originalPrice: 85000,
        category: 'electronics',
        images: ['electric-glass-kettle-hoffmans-2.2L-1.jpeg','electric-glass-kettle-hoffmans-2.2L-2.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Glass pot, Plastic handle'},
            { name: 'Capacity', value: '2.2 Liters'},
        ]
    },
    {
        id: 'p385',
        name: 'Electric glass kettle, transparent kettle 2.2L-chp',
        description: 'Hoffmans 2.2 liters glass kettle 2000w power. Has features like cool touch handle, boil dry protection, automatic shut-off, 360 degrees cordless power base and water level indicator. The transparent pot helps monitor the boiling. Beautiful,strong and durable.',
        price: 85000,
        originalPrice: 100000,
        category: 'electronics',
        images: ['electric-glass-kettle-hoffmans-2.2L-1.jpeg','electric-glass-kettle-hoffmans-2.2L-2.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Glass pot, Plastic handle'},
            { name: 'Capacity', value: '2.2 Liters'},
        ]
    },
    {
        id: 'p386',
        name: 'Electric single hotplate-chp',
        description: 'Sokany electric single hotplate with adjustable temperature control and power indicator. It also features; overheat protection and built-in thermal cutt-off function for safety. Beautiful,strong and durable.',
        price: 45000,
        originalPrice: 60000,
        category: 'electronics',
        images: ['electric-single-hotplate-sokany-1.jpeg','electric-single-hotplate-sokany-2.jpeg'], 
        specifications: [
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p387',
        name: 'Electric single hotplate-chp',
        description: 'Sokany electric single hotplate with adjustable temperature control and power indicator. It also features; overheat protection and built-in thermal cutt-off function for safety. Beautiful,strong and durable.',
        price: 45000,
        originalPrice: 60000,
        category: 'home',
        images: ['electric-single-hotplate-sokany-2.jpeg','electric-single-hotplate-sokany-1.jpeg'], 
        specifications: [
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p388',
        name: 'Posture corrector, unisex-mrf',
        description: 'Body posture corrector. Can be used by both male and female. Comfortable,strong and durable.',
        price: 45000,
        originalPrice: 60000,
        category: 'home',
        images: ['posture-corrector-unisex-1.jpeg','posture-corrector-unisex-2.jpeg','posture-corrector-unisex-3.jpeg'], 
        specifications: [
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p389',
        name: 'Posture corrector, unisex-mrf',
        description: 'Body posture corrector. Can be used by both male and female. Comfortable,strong and durable.',
        price: 45000,
        originalPrice: 60000,
        category: 'fashion',
        images: ['posture-corrector-unisex-2.jpeg','posture-corrector-unisex-1.jpeg','posture-corrector-unisex-3.jpeg'], 
        specifications: [
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p390',
        name: 'Posture corrector, unisex-mrf',
        description: 'Body posture corrector. Can be used by both male and female. Comfortable,strong and durable.',
        price: 50000,
        originalPrice: 60000,
        category: 'fashion',
        images: ['posture-corrector-unisex-3.jpeg','posture-corrector-unisex-1.jpeg','posture-corrector-unisex-2.jpeg'], 
        specifications: [
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p391',
        name: 'Elephant fluffy baby support pillow, Large size, Blue color-bdy',
        description: 'Elephant design fluffy baby support pillow. Soothes the baby and protects the baby from falling and heavy knocking. Beautiful, comfortable,strong and durable.',
        price: 110000,
        originalPrice: 135000,
        category: 'toys',
        images: ['elephant-baby-support-pillow-1.jpeg','elephant-baby-support-pillow-2.jpeg','elephant-baby-support-pillow-3.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Fluffy fabric'},
            { name: 'Color', value: 'Blue'},
        ]
    },
    {
        id: 'p392',
        name: 'Elephant fluffy baby support pillow, Large size, Yellow color-bdy',
        description: 'Elephant design fluffy baby support pillow. Soothes the baby and protects the baby from falling and heavy knocking. Beautiful, comfortable,strong and durable.',
        price: 110000,
        originalPrice: 135000,
        category: 'toys',
        images: ['elephant-baby-support-pillow-2.jpeg','elephant-baby-support-pillow-1.jpeg','elephant-baby-support-pillow-3.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Fluffy fabric'},
            { name: 'Color', value: 'Yellow'},
        ]
    },
    {
        id: 'p393',
        name: 'Elephant fluffy baby support pillow, Large size, Grey color-bdy',
        description: 'Elephant design fluffy baby support pillow. Soothes the baby and protects the baby from falling and heavy knocking. Beautiful, comfortable,strong and durable.',
        price: 110000,
        originalPrice: 135000,
        category: 'toys',
        images: ['elephant-baby-support-pillow-3.jpeg','elephant-baby-support-pillow-1.jpeg','elephant-baby-support-pillow-2.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Fluffy fabric'},
            { name: 'Color', value: 'Grey'},
        ]
    },
    {
        id: 'p394',
        name: 'Elephant fluffy baby support pillow, Large size, Blue color-bdy',
        description: 'Elephant design fluffy baby support pillow. Soothes the baby and protects the baby from falling and heavy knocking. Beautiful, comfortable,strong and durable.',
        price: 105000,
        originalPrice: 135000,
        category: 'home',
        images: ['elephant-baby-support-pillow-1.jpeg','elephant-baby-support-pillow-2.jpeg','elephant-baby-support-pillow-3.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Fluffy fabric'},
            { name: 'Color', value: 'Blue'},
        ]
    },
    {
        id: 'p395',
        name: 'Elephant fluffy baby support pillow, Large size, Yellow color-bdy',
        description: 'Elephant design fluffy baby support pillow. Soothes the baby and protects the baby from falling and heavy knocking. Beautiful, comfortable,strong and durable.',
        price: 105000,
        originalPrice: 135000,
        category: 'home',
        images: ['elephant-baby-support-pillow-2.jpeg','elephant-baby-support-pillow-1.jpeg','elephant-baby-support-pillow-3.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Fluffy fabric'},
            { name: 'Color', value: 'Yellow'},
        ]
    },
    {
        id: 'p396',
        name: 'Elephant fluffy baby support pillow, Large size, Grey color-bdy',
        description: 'Elephant design fluffy baby support pillow. Soothes the baby and protects the baby from falling and heavy knocking. Beautiful, comfortable,strong and durable.',
        price: 120000,
        originalPrice: 135000,
        category: 'home',
        images: ['elephant-baby-support-pillow-3.jpeg','elephant-baby-support-pillow-1.jpeg','elephant-baby-support-pillow-2.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Fluffy fabric'},
            { name: 'Color', value: 'Grey'},
        ]
    },
    {
        id: 'p397',
        name: 'Automatic Usb charging electric water pump dispenser, White color-fti',
        description: 'Automatic Usb charging pump for dispensing water and other liquids fro large bottles, It features; one button operation, rechargeable, button on and off switch. Its made in safe food grade materials, BPA free, can be used for home, office or travel. Beautiful, strong and durable.',
        price: 35000,
        originalPrice: 50000,
        category: 'home',
        images: ['water-bottle-dispenser-pump-1.jpeg','water-bottle-dispenser-pump-2.jpeg','water-bottle-dispenser-pump-3.jpeg'], 
        specifications: [
        ]
    },
    {
        id: 'p398',
        name: 'Automatic Usb charging electric water pump dispenser, Black color-fti',
        description: 'Automatic Usb charging pump for dispensing water and other liquids fro large bottles, It features; one button operation, rechargeable, button on and off switch. Its made in safe food grade materials, BPA free, can be used for home, office or travel. Beautiful, strong and durable.',
        price: 35000,
        originalPrice: 50000,
        category: 'home',
        images: ['water-bottle-dispenser-pump-1.jpg','water-bottle-dispenser-pump-2.jpg'], 
        specifications: [
        ]
    },
    {
        id: 'p399',
        name: 'Automatic Usb charging electric water pump dispenser, White color-fti',
        description: 'Automatic Usb charging pump for dispensing water and other liquids fro large bottles, It features; one button operation, rechargeable, button on and off switch. Its made in safe food grade materials, BPA free, can be used for home, office or travel. Beautiful, strong and durable.',
        price: 35000,
        originalPrice: 50000,
        category: 'home',
        images: ['water-bottle-dispenser-pump-3.jpg','water-bottle-dispenser-pump-4.jpg'], 
        specifications: [
        ]
    },
    {
        id: 'p400',
        name: 'Automatic Usb charging electric water pump dispenser, White color-fti',
        description: 'Automatic Usb charging pump for dispensing water and other liquids fro large bottles, It features; one button operation, rechargeable, button on and off switch. Its made in safe food grade materials, BPA free, can be used for home, office or travel. Beautiful, strong and durable.',
        price: 35000,
        originalPrice: 50000,
        category: 'home',
        images: ['water-bottle-dispenser-pump-5.jpg','water-bottle-dispenser-pump-6.jpeg','water-bottle-dispenser-pump-7.jpeg'], 
        specifications: [
        ]
    },
    {
        id: 'p401',
        name: 'Automatic Usb charging electric water pump dispenser, White color-fti-401',
        description: 'Automatic Usb charging pump for dispensing water and other liquids fro large bottles, It features; one button operation, rechargeable, button on and off switch. Its made in safe food grade materials, BPA free, can be used for home, office or travel. Beautiful, strong and durable.',
        price: 40000,
        originalPrice: 50000,
        category: 'home',
        images: ['water-bottle-dispenser-pump-2.jpeg','water-bottle-dispenser-pump-1.jpeg','water-bottle-dispenser-pump-3.jpeg'], 
        specifications: [
        ]
    },
    {
        id: 'p402',
        name: 'Automatic Usb charging electric water pump dispenser, Black color-fti-402',
        description: 'Automatic Usb charging pump for dispensing water and other liquids fro large bottles, It features; one button operation, rechargeable, button on and off switch. Its made in safe food grade materials, BPA free, can be used for home, office or travel. Beautiful, strong and durable.',
        price: 45000,
        originalPrice: 55000,
        category: 'home',
        images: ['water-bottle-dispenser-pump-2.jpg','water-bottle-dispenser-pump-1.jpg'], 
        specifications: [
        ]
    },
    {
        id: 'p403',
        name: 'Automatic Usb charging electric water pump dispenser, White color-fti-403',
        description: 'Automatic Usb charging pump for dispensing water and other liquids fro large bottles, It features; one button operation, rechargeable, button on and off switch. Its made in safe food grade materials, BPA free, can be used for home, office or travel. Beautiful, strong and durable.',
        price: 40000,
        originalPrice: 55000,
        category: 'home',
        images: ['water-bottle-dispenser-pump-4.jpg','water-bottle-dispenser-pump-3.jpg'], 
        specifications: [
        ]
    },
    {
        id: 'p404',
        name: 'Automatic Usb charging electric water pump dispenser, White color-fti-404',
        description: 'Automatic Usb charging pump for dispensing water and other liquids fro large bottles, It features; one button operation, rechargeable, button on and off switch. Its made in safe food grade materials, BPA free, can be used for home, office or travel. Beautiful, strong and durable.',
        price: 45000,
        originalPrice: 60000,
        category: 'home',
        images: ['water-bottle-dispenser-pump-7.jpeg','water-bottle-dispenser-pump-6.jpeg','water-bottle-dispenser-pump-5.jpg'], 
        specifications: [
        ]
    },
    {
        id: 'p405',
        name: 'Stackable stainless steel food storage containers, Bento box, 3 Layer-fti-405',
        description: 'Gold colored floral design stainless steel food storage containers. Different compartments allows different foods seperation, suitable for use for both adults and children in various settings such as school, woork or outdoor activities. Beautiful, strong and durable.',
        price: 150000,
        originalPrice: 180000,
        category: 'home',
        images: ['food-storage-containers-stackable-bento-box-1.jpeg','food-storage-containers-stackable-bento-box-2.jpeg','food-storage-containers-stackable-bento-box-3.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Stainless steel'},
            { name: 'Color', value: 'Golden'},
        ]
    },
    {
        id: 'p406',
        name: 'Stackable stainless steel food storage containers, Bento box, 4 Layer-fti-406',
        description: 'Gold colored floral design stainless steel food storage containers. Different compartments allows different foods seperation, suitable for use for both adults and children in various settings such as school, woork or outdoor activities. Beautiful, strong and durable.',
        price: 190000,
        originalPrice: 210000,
        category: 'home',
        images: ['food-storage-containers-stackable-bento-box-2.jpeg','food-storage-containers-stackable-bento-box-1.jpeg','food-storage-containers-stackable-bento-box-3.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Stainless steel'},
            { name: 'Color', value: 'Golden'},
        ]
    },
    {
        id: 'p407',
        name: 'Stackable stainless steel food storage containers, Bento box, 5 Layer-fti-407',
        description: 'Gold colored floral design stainless steel food storage containers. Different compartments allows different foods seperation, suitable for use for both adults and children in various settings such as school, woork or outdoor activities. Beautiful, strong and durable.',
        price: 220000,
        originalPrice: 250000,
        category: 'home',
        images: ['food-storage-containers-stackable-bento-box-3.jpeg','food-storage-containers-stackable-bento-box-1.jpeg','food-storage-containers-stackable-bento-box-2.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Stainless steel'},
            { name: 'Color', value: 'Golden'},
        ]
    },
    {
        id: 'p408',
        name: 'Stackable stainless steel food storage containers, Bento box, 3 Layer-fti-408',
        description: 'Gold colored floral design stainless steel food storage containers. Different compartments allows different foods seperation, suitable for use for both adults and children in various settings such as school, woork or outdoor activities. Beautiful, strong and durable.',
        price: 155000,
        originalPrice: 180000,
        category: 'home',
        images: ['food-storage-containers-stackable-bento-box-3.jpeg','food-storage-containers-stackable-bento-box-2.jpeg','food-storage-containers-stackable-bento-box-1.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Stainless steel'},
            { name: 'Color', value: 'Golden'},
        ]
    },
    {
        id: 'p409',
        name: 'Stackable stainless steel food storage containers, Bento box, 4 Layer-fti-409',
        description: 'Gold colored floral design stainless steel food storage containers. Different compartments allows different foods seperation, suitable for use for both adults and children in various settings such as school, woork or outdoor activities. Beautiful, strong and durable.',
        price: 185000,
        originalPrice: 210000,
        category: 'home',
        images: ['food-storage-containers-stackable-bento-box-1.jpeg','food-storage-containers-stackable-bento-box-3.jpeg','food-storage-containers-stackable-bento-box-2.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Stainless steel'},
            { name: 'Color', value: 'Golden'},
        ]
    },
    {
        id: 'p411',
        name: 'Woolen duvet bedcover set, 3pc, 5x6ft-mdn-411',
        description: '3pc woolen duvet set for 5x6ft bed. Set contains; 1 duvet, 2 pillowcases. Beautiful, warm, strong and durable.',
        price: 135000,
        originalPrice: 150000,
        category: 'beauty',
        images: ['woolen-duvet-3pc-11.jpeg','woolen-duvet-3pc-2.jpeg','woolen-duvet-3pc-3.jpeg','woolen-duvet-3pc-4.jpeg','woolen-duvet-3pc-5.jpeg','woolen-duvet-3pc-6.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Wool'},
            { name: 'Size', value: '5x6ft'},
        ]
    },
    {
        id: 'p412',
        name: 'Woolen duvet bedcover set, 3pc, 5x6ft-mdn-412',
        description: '3pc woolen duvet set for 5x6ft bed. Set contains; 1 duvet, 2 pillowcases. Beautiful, warm, strong and durable.',
        price: 135000,
        originalPrice: 150000,
        category: 'beauty',
        images: ['woolen-duvet-3pc-2.jpeg','woolen-duvet-3pc-11.jpeg','woolen-duvet-3pc-3.jpeg','woolen-duvet-3pc-4.jpeg','woolen-duvet-3pc-5.jpeg','woolen-duvet-3pc-6.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Wool'},
            { name: 'Size', value: '5x6ft'},
        ]
    },
    {
        id: 'p413',
        name: 'Woolen duvet bedcover set, 3pc, 5x6ft-mdn-413',
        description: '3pc woolen duvet set for 5x6ft bed. Set contains; 1 duvet, 2 pillowcases. Beautiful, warm, strong and durable.',
        price: 135000,
        originalPrice: 150000,
        category: 'beauty',
        images: ['woolen-duvet-3pc-3.jpeg','woolen-duvet-3pc-11.jpeg','woolen-duvet-3pc-2.jpeg','woolen-duvet-3pc-4.jpeg','woolen-duvet-3pc-5.jpeg','woolen-duvet-3pc-6.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Wool'},
            { name: 'Size', value: '5x6ft'},
        ]
    },
    {
        id: 'p414',
        name: 'Woolen duvet bedcover set, 3pc, 5x6ft-mdn-414',
        description: '3pc woolen duvet set for 5x6ft bed. Set contains; 1 duvet, 2 pillowcases. Beautiful, warm, strong and durable.',
        price: 135000,
        originalPrice: 150000,
        category: 'beauty',
        images: ['woolen-duvet-3pc-4.jpeg','woolen-duvet-3pc-11.jpeg','woolen-duvet-3pc-2.jpeg','woolen-duvet-3pc-3.jpeg','woolen-duvet-3pc-5.jpeg','woolen-duvet-3pc-6.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Wool'},
            { name: 'Size', value: '5x6ft'},
        ]
    },
    {
        id: 'p415',
        name: 'Woolen duvet bedcover set, 3pc, 5x6ft-mdn-415',
        description: '3pc woolen duvet set for 5x6ft bed. Set contains; 1 duvet, 2 pillowcases. Beautiful, warm, strong and durable.',
        price: 135000,
        originalPrice: 150000,
        category: 'beauty',
        images: ['woolen-duvet-3pc-5.jpeg','woolen-duvet-3pc-11.jpeg','woolen-duvet-3pc-2.jpeg','woolen-duvet-3pc-3.jpeg','woolen-duvet-3pc-4.jpeg','woolen-duvet-3pc-6.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Wool'},
            { name: 'Size', value: '5x6ft'},
        ]
    },
    {
        id: 'p416',
        name: 'Woolen duvet bedcover set, 3pc, 5x6ft-mdn-416',
        description: '3pc woolen duvet set for 5x6ft bed. Set contains; 1 duvet, 2 pillowcases. Beautiful, warm, strong and durable.',
        price: 135000,
        originalPrice: 150000,
        category: 'beauty',
        images: ['woolen-duvet-3pc-6.jpeg','woolen-duvet-3pc-11.jpeg','woolen-duvet-3pc-2.jpeg','woolen-duvet-3pc-3.jpeg','woolen-duvet-3pc-4.jpeg','woolen-duvet-3pc-5.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Wool'},
            { name: 'Size', value: '5x6ft'},
        ]
    },
    {
        id: 'p417',
        name: 'Woolen duvet bedcover set, 3pc, 6x6ft-mdn-417',
        description: '3pc woolen duvet set for 6x6ft bed. Set contains; 1 duvet, 2 pillowcases. Beautiful, warm, strong and durable.',
        price: 145000,
        originalPrice: 160000,
        category: 'beauty',
        images: ['woolen-duvet-3pc-11.jpeg','woolen-duvet-3pc-2.jpeg','woolen-duvet-3pc-3.jpeg','woolen-duvet-3pc-4.jpeg','woolen-duvet-3pc-5.jpeg','woolen-duvet-3pc-6.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Wool'},
            { name: 'Size', value: '6x6ft'},
        ]
    },
    {
        id: 'p418',
        name: 'Woolen duvet bedcover set, 3pc, 6x6ft-mdn-418',
        description: '3pc woolen duvet set for 6x6ft bed. Set contains; 1 duvet, 2 pillowcases. Beautiful, warm, strong and durable.',
        price: 145000,
        originalPrice: 160000,
        category: 'beauty',
        images: ['woolen-duvet-3pc-2.jpeg','woolen-duvet-3pc-11.jpeg','woolen-duvet-3pc-3.jpeg','woolen-duvet-3pc-4.jpeg','woolen-duvet-3pc-5.jpeg','woolen-duvet-3pc-6.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Wool'},
            { name: 'Size', value: '6x6ft'},
        ]
    },
    {
        id: 'p419',
        name: 'Woolen duvet bedcover set, 3pc, 6x6ft-mdn-419',
        description: '3pc woolen duvet set for 6x6ft bed. Set contains; 1 duvet, 2 pillowcases. Beautiful, warm, strong and durable.',
        price: 145000,
        originalPrice: 160000,
        category: 'beauty',
        images: ['woolen-duvet-3pc-3.jpeg','woolen-duvet-3pc-11.jpeg','woolen-duvet-3pc-2.jpeg','woolen-duvet-3pc-4.jpeg','woolen-duvet-3pc-5.jpeg','woolen-duvet-3pc-6.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Wool'},
            { name: 'Size', value: '6x6ft'},
        ]
    },
    {
        id: 'p420',
        name: 'Woolen duvet bedcover set, 3pc, 6x6ft-mdn-420',
        description: '3pc woolen duvet set for 6x6ft bed. Set contains; 1 duvet, 2 pillowcases. Beautiful, warm, strong and durable.',
        price: 145000,
        originalPrice: 160000,
        category: 'beauty',
        images: ['woolen-duvet-3pc-4.jpeg','woolen-duvet-3pc-11.jpeg','woolen-duvet-3pc-2.jpeg','woolen-duvet-3pc-3.jpeg','woolen-duvet-3pc-5.jpeg','woolen-duvet-3pc-6.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Wool'},
            { name: 'Size', value: '6x6ft'},
        ]
    },
    {
        id: 'p421',
        name: 'Woolen duvet bedcover set, 3pc, 6x6ft-mdn-421',
        description: '3pc woolen duvet set for 6x6ft bed. Set contains; 1 duvet, 2 pillowcases. Beautiful, warm, strong and durable.',
        price: 145000,
        originalPrice: 160000,
        category: 'beauty',
        images: ['woolen-duvet-3pc-5.jpeg','woolen-duvet-3pc-11.jpeg','woolen-duvet-3pc-2.jpeg','woolen-duvet-3pc-3.jpeg','woolen-duvet-3pc-4.jpeg','woolen-duvet-3pc-6.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Wool'},
            { name: 'Size', value: '6x6ft'},
        ]
    },
    {
        id: 'p422',
        name: 'Woolen duvet bedcover set, 3pc, 6x6ft-mdn-422',
        description: '3pc woolen duvet set for 6x6ft bed. Set contains; 1 duvet, 2 pillowcases. Beautiful, warm, strong and durable.',
        price: 145000,
        originalPrice: 160000,
        category: 'beauty',
        images: ['woolen-duvet-3pc-6.jpeg','woolen-duvet-3pc-11.jpeg','woolen-duvet-3pc-2.jpeg','woolen-duvet-3pc-3.jpeg','woolen-duvet-3pc-4.jpeg','woolen-duvet-3pc-5.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Wool'},
            { name: 'Size', value: '6x6ft'},
        ]
    },
    {
        id: 'p423',
        name: 'Electric Electric kettle, 4 liters-chp-423',
        description: 'Hoffmans 4 lter electric kettle. Features; rapid boiling technology, automatic shut-off, boil dry protection. Cordless woith 360 degrees swivel base. strong and durable.',
        price: 75000,
        originalPrice: 90000,
        category: 'home',
        images: ['electric-kettle-hoffmans-4L-1.jpeg','electric-kettle-hoffmans-4L-2.jpeg'], 
        specifications: [
            { name: 'Capacity', value: '4 liters'},
            { name: 'Color', value: 'Black, Cream'},
        ]
    },
    {
        id: 'p424',
        name: 'Electric Electric kettle, 4 liters-chp-424',
        description: 'Hoffmans 4 lter electric kettle. Features; rapid boiling technology, automatic shut-off, boil dry protection. Cordless woith 360 degrees swivel base. strong and durable.',
        price: 75000,
        originalPrice: 90000,
        category: 'electronics',
        images: ['electric-kettle-hoffmans-4L-2.jpeg','electric-kettle-hoffmans-4L-1.jpeg'], 
        specifications: [
            { name: 'Capacity', value: '4 liters'},
            { name: 'Color', value: 'Black, Cream'},
        ]
    },
    {
        id: 'p425',
        name: 'Electric Electric kettle, 4 liters-chp-425',
        description: 'Hoffmans 4 lter electric kettle. Features; rapid boiling technology, automatic shut-off, boil dry protection. Cordless woith 360 degrees swivel base. strong and durable.',
        price: 70000,
        originalPrice: 90000,
        category: 'home',
        images: ['electric-kettle-hoffmans-4L-1.jpeg','electric-kettle-hoffmans-4L-2.jpeg'], 
        specifications: [
            { name: 'Capacity', value: '4 liters'},
            { name: 'Color', value: 'Black, Cream'},
        ]
    },
    {
        id: 'p426',
        name: 'Electric Electric kettle, 4 liters-chp-426',
        description: 'Hoffmans 4 lter electric kettle. Features; rapid boiling technology, automatic shut-off, boil dry protection. Cordless woith 360 degrees swivel base. strong and durable.',
        price: 65000,
        originalPrice: 80000,
        category: 'electronics',
        images: ['electric-kettle-hoffmans-4L-2.jpeg','electric-kettle-hoffmans-4L-1.jpeg'], 
        specifications: [
            { name: 'Capacity', value: '4 liters'},
            { name: 'Color', value: 'Black, Cream'},
        ]
    },
    {
        id: 'p427',
        name: 'Multfunctional electric grinder-mrf-427',
        description: 'RAF multifunctional electric grinder, can grind; nuts, beans, coffee, masala, spices and many more, strong stainless steel blades and pot interior, compact for easy use and storage. Features a transparent lid to enhance easy monitoring during use. strong and durable.',
        price: 55000,
        originalPrice: 70000,
        category: 'electronics',
        images: ['multifunctional-electric-grinder-raf-1.jpeg','multifunctional-electric-grinder-raf-2.jpeg','multifunctional-electric-grinder-raf-3.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Stainless steel'},
        ]
    },
    {
        id: 'p428',
        name: 'Multfunctional electric grinder-mrf-428',
        description: 'RAF multifunctional electric grinder, can grind; nuts, beans, coffee, masala, spices and many more, strong stainless steel blades and pot interior, compact for easy use and storage. Features a transparent lid to enhance easy monitoring during use. strong and durable.',
        price: 55000,
        originalPrice: 70000,
        category: 'home',
        images: ['multifunctional-electric-grinder-raf-2.jpeg','multifunctional-electric-grinder-raf-1.jpeg','multifunctional-electric-grinder-raf-3.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Stainless steel'},
        ]
    },
    {
        id: 'p429',
        name: 'Multfunctional electric grinder-mrf-429',
        description: 'RAF multifunctional electric grinder, can grind; nuts, beans, coffee, masala, spices and many more, strong stainless steel blades and pot interior, compact for easy use and storage. Features a transparent lid to enhance easy monitoring during use. strong and durable.',
        price: 55000,
        originalPrice: 70000,
        category: 'home',
        images: ['multifunctional-electric-grinder-raf-3.jpeg','multifunctional-electric-grinder-raf-1.jpeg','multifunctional-electric-grinder-raf-2.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Stainless steel'},
        ]
    },
    {
        id: 'p430',
        name: 'Multfunctional electric grinder-mrf-430',
        description: 'RAF multifunctional electric grinder, can grind; nuts, beans, coffee, masala, spices and many more, strong stainless steel blades and pot interior, compact for easy use and storage. Features a transparent lid to enhance easy monitoring during use. strong and durable.',
        price: 50000,
        originalPrice: 70000,
        category: 'electronics',
        images: ['multifunctional-electric-grinder-raf-1.jpeg','multifunctional-electric-grinder-raf-2.jpeg','multifunctional-electric-grinder-raf-3.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Stainless steel'},
        ]
    },
    {
        id: 'p431',
        name: 'Multfunctional electric grinder-mrf-431',
        description: 'RAF multifunctional electric grinder, can grind; nuts, beans, coffee, masala, spices and many more, strong stainless steel blades and pot interior, compact for easy use and storage. Features a transparent lid to enhance easy monitoring during use. strong and durable.',
        price: 50000,
        originalPrice: 70000,
        category: 'home',
        images: ['multifunctional-electric-grinder-raf-2.jpeg','multifunctional-electric-grinder-raf-1.jpeg','multifunctional-electric-grinder-raf-3.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Stainless steel'},
        ]
    },
    {
        id: 'p432',
        name: 'Multfunctional electric grinder-mrf-432',
        description: 'RAF multifunctional electric grinder, can grind; nuts, beans, coffee, masala, spices and many more, strong stainless steel blades and pot interior, compact for easy use and storage. Features a transparent lid to enhance easy monitoring during use. strong and durable.',
        price: 60000,
        originalPrice: 70000,
        category: 'home',
        images: ['multifunctional-electric-grinder-raf-3.jpeg','multifunctional-electric-grinder-raf-1.jpeg','multifunctional-electric-grinder-raf-2.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Stainless steel'},
        ]
    },
    {
        id: 'p433',
        name: '2 slice electric bread toaster-cpl-433',
        description: 'Philips 2 slice electric bread toaster. Features; 8 browning settigs, 2 large variable slots to accommondate different sizes of bread toasts, reheat and defrost functions. strong and durable.',
        price: 185000,
        originalPrice: 210000,
        category: 'home',
        images: ['electric-toaster-philips-1.jpeg','electric-toaster-philips-2.jpeg','electric-toaster-philips-3.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Stainless steel'},
            { name: 'Capacity', value: '2 slice'},
            { name: 'Color', value: 'White'},
        ]
    },
    {
        id: 'p434',
        name: '2 slice electric bread toaster-cpl-434',
        description: 'Philips 2 slice electric bread toaster. Features; 8 browning settigs, 2 large variable slots to accommondate different sizes of bread toasts, reheat and defrost functions. strong and durable.',
        price: 185000,
        originalPrice: 210000,
        category: 'electronics',
        images: ['electric-toaster-philips-2.jpeg','electric-toaster-philips-1.jpeg','electric-toaster-philips-3.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Stainless steel'},
            { name: 'Capacity', value: '2 slice'},
            { name: 'Color', value: 'White'},
        ]
    },
    {
        id: 'p435',
        name: '2 slice electric bread toaster-cpl-435',
        description: 'Philips 2 slice electric bread toaster. Features; 8 browning settigs, 2 large variable slots to accommondate different sizes of bread toasts, reheat and defrost functions. strong and durable.',
        price: 180000,
        originalPrice: 210000,
        category: 'electronics',
        images: ['electric-toaster-philips-3.jpeg','electric-toaster-philips-1.jpeg','electric-toaster-philips-2.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Stainless steel'},
            { name: 'Capacity', value: '2 slice'},
            { name: 'Color', value: 'White'},
        ]
    },
    {
        id: 'p436',
        name: '2 slice electric bread toaster-cpl-436',
        description: 'Philips 2 slice electric bread toaster. Features; 8 browning settigs, 2 large variable slots to accommondate different sizes of bread toasts, reheat and defrost functions. strong and durable.',
        price: 195000,
        originalPrice: 210000,
        category: 'home',
        images: ['electric-toaster-philips-1.jpeg','electric-toaster-philips-2.jpeg','electric-toaster-philips-3.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Stainless steel'},
            { name: 'Capacity', value: '2 slice'},
            { name: 'Color', value: 'White'},
        ]
    },
    {
        id: 'p437',
        name: '2 slice electric bread toaster-cpl-437',
        description: 'Philips 2 slice electric bread toaster. Features; 8 browning settigs, 2 large variable slots to accommondate different sizes of bread toasts, reheat and defrost functions. strong and durable.',
        price: 180000,
        originalPrice: 200000,
        category: 'electronics',
        images: ['electric-toaster-philips-2.jpeg','electric-toaster-philips-1.jpeg','electric-toaster-philips-3.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Stainless steel'},
            { name: 'Capacity', value: '2 slice'},
            { name: 'Color', value: 'White'},
        ]
    },
    {
        id: 'p438',
        name: 'Electric hotplate, 2 stand-chp-438',
        description: 'Sokany 2 stand electric hotplate, features; 5 gear temperatureadjustment making it suitable for use with different cookware like, aluminum, steel. has overheat and overcurrent protection t enhance greater safety, stainless steel body which makes it easy to clean. strong and durable.',
        price: 75000,
        originalPrice: 90000,
        category: 'electronics',
        images: ['electric-hotplate-sokany-2in1-1.jpeg','electric-hotplate-sokany-2in1-2.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Stainless steel'},
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p439',
        name: 'Electric hotplate, 2 stand-chp-439',
        description: 'Sokany 2 stand electric hotplate, features; 5 gear temperatureadjustment making it suitable for use with different cookware like, aluminum, steel. has overheat and overcurrent protection t enhance greater safety, stainless steel body which makes it easy to clean. strong and durable.',
        price: 70000,
        originalPrice: 90000,
        category: 'home',
        images: ['electric-hotplate-sokany-2in1-2.jpeg','electric-hotplate-sokany-2in1-1.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Stainless steel'},
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p440',
        name: 'Sponge roller mop-geo-440',
        description: 'Super absorbent PVA sponge head mop designed to pick up dirt, dust, water and many more from floors. It features a self squeezing mechanism, adjustable handle to suit requirement. Works on various floors; tiles, marble, wood and many more. Easy to use, strong and durable.',
        price: 45000,
        originalPrice: 55000,
        category: 'home',
        images: ['sponge-mop-1.jpeg','sponge-mop-2.jpeg','sponge-mop-3.jpeg'], 
        specifications: [
        ]
    },
    {
        id: 'p441',
        name: 'Sponge roller mop-geo-441',
        description: 'Super absorbent PVA sponge head mop designed to pick up dirt, dust, water and many more from floors. It features a self squeezing mechanism, adjustable handle to suit requirement. Works on various floors; tiles, marble, wood and many more. Easy to use, strong and durable.',
        price: 50000,
        originalPrice: 55000,
        category: 'home',
        images: ['sponge-mop-2.jpeg','sponge-mop-1.jpeg','sponge-mop-3.jpeg'], 
        specifications: [
        ]
    },
    {
        id: 'p442',
        name: 'Sponge roller mop, 1 piece-geo-442',
        description: 'Super absorbent PVA sponge head mop designed to pick up dirt, dust, water and many more from floors. It features a self squeezing mechanism, adjustable handle to suit requirement. Works on various floors; tiles, marble, wood and many more. Easy to use, strong and durable.',
        price: 50000,
        originalPrice: 55000,
        category: 'home',
        images: ['sponge-mop-3.jpeg','sponge-mop-1.jpeg','sponge-mop-2.jpeg'], 
        specifications: [
        ]
    },
    {
        id: 'p443',
        name: 'Electric Roti Chapati maker, 25cm-fti-443',
        description: 'RAF electric roti chapati maker is designed to make various products such as Roti, chapati, pancakes, crepes and many other flat breads, has a 25cm cooking surface with a double side heating function for effective cooking, 1400w power for quick heating. strong and durable.',
        price: 165000,
        originalPrice: 180000,
        category: 'electronics',
        images: ['electric-roti-chapati-maker-1.jpeg','electric-roti-chapati-maker-2.jpeg','electric-roti-chapati-maker-3.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Stainless steel'},
            { name: 'Size', value: '25cm'},
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p444',
        name: 'Electric Roti Chapati maker, 25cm-fti-444',
        description: 'RAF electric roti chapati maker is designed to make various products such as Roti, chapati, pancakes, crepes and many other flat breads, has a 25cm cooking surface with a double side heating function for effective cooking, 1400w power for quick heating. strong and durable.',
        price: 165000,
        originalPrice: 180000,
        category: 'home',
        images: ['electric-roti-chapati-maker-2.jpeg','electric-roti-chapati-maker-1.jpeg','electric-roti-chapati-maker-3.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Stainless steel'},
            { name: 'Size', value: '25cm'},
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p445',
        name: 'Electric Roti Chapati maker, 25cm-fti-445',
        description: 'RAF electric roti chapati maker is designed to make various products such as Roti, chapati, pancakes, crepes and many other flat breads, has a 25cm cooking surface with a double side heating function for effective cooking, 1400w power for quick heating. strong and durable.',
        price: 160000,
        originalPrice: 180000,
        category: 'electronics',
        images: ['electric-roti-chapati-maker-3.jpeg','electric-roti-chapati-maker-1.jpeg','electric-roti-chapati-maker-2.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Stainless steel'},
            { name: 'Size', value: '25cm'},
            { name: 'Color', value: 'Black'},
        ]
    },
    {
        id: 'p446',
        name: 'Clear glass mixing bowl-fti-446',
        description: 'Clear glass mixing bowl, can be used for mixing, baking, serving and many more, fridge, oven and freezer safe, thermol shock resistant, heavy and provides stable base while in use, transparent design allows easy monitoring during use. strong and durable.',
        price: 50000,
        originalPrice: 65000,
        category: 'home',
        images: ['clear-glass-mixing-bowl-1.jpeg','clear-glass-mixing-bowl-2.jpeg','clear-glass-mixing-bowl-3.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Clear Glass'},
        ]
    },
    {
        id: 'p447',
        name: 'Clear glass mixing bowl-fti-447',
        description: 'Clear glass mixing bowl, can be used for mixing, baking, serving and many more, fridge, oven and freezer safe, thermol shock resistant, heavy and provides stable base while in use, transparent design allows easy monitoring during use. strong and durable.',
        price: 55000,
        originalPrice: 65000,
        category: 'home',
        images: ['clear-glass-mixing-bowl-2.jpeg','clear-glass-mixing-bowl-1.jpeg','clear-glass-mixing-bowl-3.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Clear Glass'},
        ]
    },
    {
        id: 'p448',
        name: 'Clear glass mixing bowl-fti-448',
        description: 'Clear glass mixing bowl, can be used for mixing, baking, serving and many more, fridge, oven and freezer safe, thermol shock resistant, heavy and provides stable base while in use, transparent design allows easy monitoring during use. strong and durable.',
        price: 55000,
        originalPrice: 65000,
        category: 'home',
        images: ['clear-glass-mixing-bowl-3.jpeg','clear-glass-mixing-bowl-1.jpeg','clear-glass-mixing-bowl-2.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Clear Glass'},
        ]
    },
    {
        id: 'p449',
        name: 'Porcelein soup handle cup with saucer, 200ml, 01 dozen-fti-449',
        description: 'Porcelein soup cup made in high quality porcelein material, has 2 handles for easy use, multipurpose, can be used for serving soups, stews, noddles, poridges and many more. Beautiful, strong and durable.',
        price: 120000,
        originalPrice: 145000,
        category: 'home',
        images: ['soup-cup-1.jpeg','soup-cup-2.jpeg','soup-cup-3.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Porcelain'},
            { name: 'Capacity', value: '200ml'},
            { name: 'Color', value: 'White'},
        ]
    },
    {
        id: 'p450',
        name: 'Porcelein soup handle cup with saucer, 200ml, 01 dozen-fti-450',
        description: 'Porcelein soup cup made in high quality porcelein material, has 2 handles for easy use, multipurpose, can be used for serving soups, stews, noddles, poridges and many more. Beautiful, strong and durable.',
        price: 140000,
        originalPrice: 160000,
        category: 'home',
        images: ['soup-cup-2.jpeg','soup-cup-1.jpeg','soup-cup-3.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Porcelain'},
            { name: 'Capacity', value: '200ml'},
            { name: 'Color', value: 'White'},
        ]
    },
    {
        id: 'p451',
        name: 'Drinking clear glass, 01 dozen-fti-451',
        description: 'Versatile clear dring glass that can be used for water, juices, bear and many more, made of tempered glass. Beautiful, strong and durable.',
        price: 120000,
        originalPrice: 135000,
        category: 'home',
        images: ['drinking-glass-2.jpeg','drinking-glass-1.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Tampered glass'},
        ]
    },
    {
        id: 'p452',
        name: 'Drinking clear glass, 01 dozen-fti-452',
        description: 'Versatile clear dring glass that can be used for water, juices, bear and many more, made of tempered glass. Beautiful, strong and durable.',
        price: 135000,
        originalPrice: 155000,
        category: 'home',
        images: ['drinking-glass-1.jpeg','drinking-glass-2.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Tampered glass'},
        ]
    },
    {
        id: 'p453',
        name: 'Tabletop leather alarm clock-fti-453',
        description: 'Leather table top alarm clock, suitable for kids and adult use. Beautiful, strong and durable.',
        price: 60000,
        originalPrice: 75000,
        category: 'home',
        images: ['table-leather-alarm-clock-1.jpeg','table-leather-alarm-clock-2.jpeg'], 
        specifications: [
        ]
    },
    {
        id: 'p454',
        name: 'Tabletop leather alarm clock-fti-454',
        description: 'Leather table top alarm clock, suitable for kids and adult use. Beautiful, strong and durable.',
        price: 55000,
        originalPrice: 75000,
        category: 'home',
        images: ['table-leather-alarm-clock-2.jpeg','table-leather-alarm-clock-1.jpeg'], 
        specifications: [
        ]
    },
    {
        id: 'p455',
        name: 'Stainless steel cooking pot set, 4 pieces-fti-455',
        description: '4pc stainless steel cooking pot set with glass lids, pots are of various sizes, made of 304 grade stainless steel and tampered glass lids with steel handles, strong and durable.',
        price: 150000,
        originalPrice: 175000,
        category: 'home',
        images: ['stainless-steel-cooking-pots-1.jpeg','stainless-steel-cooking-pots-2.jpeg'], 
        specifications: [
        ]
    },
    {
        id: 'p456',
        name: 'Stainless steel cooking pot set, 4 pieces-fti-456',
        description: '4pc stainless steel cooking pot set with glass lids, pots are of various sizes, made of 304 grade stainless steel and tampered glass lids with steel handles, strong and durable.',
        price: 145000,
        originalPrice: 175000,
        category: 'home',
        images: ['stainless-steel-cooking-pots-2.jpeg','stainless-steel-cooking-pots-1.jpeg'], 
        specifications: [
        ]
    },
    {
        id: 'p457',
        name: 'Over the toilet cistern storage rack-cte-457',
        description: 'Multi tired storage rack designed to save space by sitting on top of toilet tank utilizing otherwise unused vertical space, can store toileteries, small towels and many others, easy to install, strong and durable.',
        price: 65000,
        originalPrice: 75000,
        category: 'home',
        images: ['toilet-storage-rack-1.jpeg','toilet-storage-rack-2.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Steel'},
            { name: 'Color', value: 'White'},
        ]
    },
    {
        id: 'p458',
        name: 'Over the toilet cistern storage rack-cte-458',
        description: 'Multi tired storage rack designed to save space by sitting on top of toilet tank utilizing otherwise unused vertical space, can store toileteries, small towels and many others, easy to install, strong and durable.',
        price: 75000,
        originalPrice: 95000,
        category: 'home',
        images: ['toilet-storage-rack-2.jpeg','toilet-storage-rack-1.jpeg'], 
        specifications: [
            { name: 'Material', value: 'Steel'},
            { name: 'Color', value: 'White'},
        ]
    },
    {
        id: 'p459',
        name: 'Hand held garments steamer-ymh-459',
        description: 'Hand held garments steamer used to easily remove wrinkles from clothes and fabrics using high temperature steam, has a detachable water tank for easy refilling, good for use on all fabrics including delicate materials like silk, satin, cashmere and many more, easy to use, strong and durable.',
        price: 100000,
        originalPrice: 125000,
        category: 'home',
        images: ['handheld-garment-steamer-1.jpeg','handheld-garment-steamer-2.jpeg'], 
        specifications: [
        ]
    },
    {
        id: 'p460',
        name: 'Hand held garments steamer-ymh-460',
        description: 'Hand held garments steamer used to easily remove wrinkles from clothes and fabrics using high temperature steam, has a detachable water tank for easy refilling, good for use on all fabrics including delicate materials like silk, satin, cashmere and many more, easy to use, strong and durable.',
        price: 120000,
        originalPrice: 150000,
        category: 'home',
        images: ['handheld-garment-steamer-2.jpeg','handheld-garment-steamer-1.jpeg'], 
        specifications: [
        ]
    },
    {
        id: 'p461',
        name: 'Hand held garments steamer-ymh-461',
        description: 'Hand held garments steamer used to easily remove wrinkles from clothes and fabrics using high temperature steam, has a detachable water tank for easy refilling, good for use on all fabrics including delicate materials like silk, satin, cashmere and many more, easy to use, strong and durable.',
        price: 100000,
        originalPrice: 125000,
        category: 'electronics',
        images: ['handheld-garment-steamer-1.jpeg','handheld-garment-steamer-2.jpeg'], 
        specifications: [
        ]
    },
    {
        id: 'p462',
        name: 'Hand held garments steamer-ymh-462',
        description: 'Hand held garments steamer used to easily remove wrinkles from clothes and fabrics using high temperature steam, has a detachable water tank for easy refilling, good for use on all fabrics including delicate materials like silk, satin, cashmere and many more, easy to use, strong and durable.',
        price: 120000,
        originalPrice: 150000,
        category: 'electronics',
        images: ['handheld-garment-steamer-2.jpeg','handheld-garment-steamer-1.jpeg'], 
        specifications: [
        ]
    },
    {
        id: 'p463',
        name: 'Electric hot comb-mrf-463',
        description: 'Electric hot comb for hot hair styling, can be used for straightening or curling, has adjustable temperature setting to suit requirement, easy to use, strong and durable.',
        price: 60000,
        originalPrice: 75000,
        category: 'electronics',
        images: ['electric-hot-comb-1.jpeg','electric-hot-comb-2.jpeg','electric-hot-comb-3.jpeg'], 
        specifications: [
        ]
    },
    {
        id: 'p464',
        name: 'Electric hot comb-mrf-464',
        description: 'Electric hot comb for hot hair styling, can be used for straightening or curling, has adjustable temperature setting to suit requirement, easy to use, strong and durable.',
        price: 60000,
        originalPrice: 75000,
        category: 'electronics',
        images: ['electric-hot-comb-2.jpeg','electric-hot-comb-1.jpeg','electric-hot-comb-3.jpeg'], 
        specifications: [
        ]
    },
    {
        id: 'p465',
        name: 'Electric hot comb-mrf-465',
        description: 'Electric hot comb for hot hair styling, can be used for straightening or curling, has adjustable temperature setting to suit requirement, easy to use, strong and durable.',
        price: 60000,
        originalPrice: 75000,
        category: 'electronics',
        images: ['electric-hot-comb-3.jpeg','electric-hot-comb-1.jpeg','electric-hot-comb-2.jpeg'], 
        specifications: [
        ]
    },
    {
        id: 'p466',
        name: 'Electric hot comb-mrf-466',
        description: 'Electric hot comb for hot hair styling, can be used for straightening or curling, has adjustable temperature setting to suit requirement, easy to use, strong and durable.',
        price: 60000,
        originalPrice: 75000,
        category: 'home',
        images: ['electric-hot-comb-1.jpeg','electric-hot-comb-2.jpeg','electric-hot-comb-3.jpeg'], 
        specifications: [
        ]
    },
    {
        id: 'p467',
        name: 'Electric hot comb-mrf-467',
        description: 'Electric hot comb for hot hair styling, can be used for straightening or curling, has adjustable temperature setting to suit requirement, easy to use, strong and durable.',
        price: 60000,
        originalPrice: 75000,
        category: 'home',
        images: ['electric-hot-comb-2.jpeg','electric-hot-comb-1.jpeg','electric-hot-comb-3.jpeg'], 
        specifications: [
        ]
    },
    {
        id: 'p468',
        name: 'Electric hot comb-mrf-468',
        description: 'Electric hot comb for hot hair styling, can be used for straightening or curling, has adjustable temperature setting to suit requirement, easy to use, strong and durable.',
        price: 60000,
        originalPrice: 75000,
        category: 'home',
        images: ['electric-hot-comb-3.jpeg','electric-hot-comb-1.jpeg','electric-hot-comb-2.jpeg'], 
        specifications: [
        ]
    },
    {
        id: 'p469',
        name: 'Electric hot comb-mrf-469',
        description: 'Electric hot comb for hot hair styling, can be used for straightening or curling, has adjustable temperature setting to suit requirement, easy to use, strong and durable.',
        price: 65000,
        originalPrice: 75000,
        category: 'home',
        images: ['electric-hot-comb-2.jpeg','electric-hot-comb-1.jpeg','electric-hot-comb-3.jpeg'], 
        specifications: [
        ]
    },
    {
        id: 'p470',
        name: 'Electric hot comb-mrf-470',
        description: 'Electric hot comb for hot hair styling, can be used for straightening or curling, has adjustable temperature setting to suit requirement, easy to use, strong and durable.',
        price: 55000,
        originalPrice: 75000,
        category: 'home',
        images: ['electric-hot-comb-3.jpeg','electric-hot-comb-1.jpeg','electric-hot-comb-2.jpeg'], 
        specifications: [
        ]
    },
    ];
