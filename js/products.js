// Categories data
const categories = [
    {
        id: 'kitchen',
        name: 'Kitchen Appliances and Accessories',
        image: '1 (1).jpeg'
    },
    {
        id: 'home',
        name: 'Home and Office Accessories',
        image: '1 (2).jpeg'
    },
    {
        id: 'baby',
        name: 'Baby and Kids',
        image: '1 (3).jpeg'
    },
    {
        id: 'car',
        name: 'Car Accessories',
        image: '1 (4).jpeg'
    },
    {
        id: 'health',
        name: 'Health, Fashion and Beauty',
        image: '1 (5).jpeg'
    },
    {
        id: 'electronics',
        name: 'Computer, Phones and Electronics',
        image: '1 (6).jpeg'
    },
    {
        id: 'bedroom',
        name: 'Bedroom Accessories',
        image: '1 (7).jpeg'
    }
];

// Products data
const products = [
    // Kitchen Appliances (20 products)
    {
        id: 'k1',
        name: 'Electric ki',
        description: 'Powerful 1000W electric ki with 4 stainless steel blades for smooth blending experience.',
        price: 150000,
        originalPrice: 200000,
        category: 'kitchen',
        images: ['ki1.jpg', 'ki2.jpg', 'ki3.jpg'],
        specifications: [
            { name: 'Power', value: '1000W' },
            { name: 'Capacity', value: '1.5L' },
            { name: 'Material', value: 'Stainless steel' },
            { name: 'Warranty', value: '1 year' }
        ]
    }, 




     {
        id: 'k1',
        name: 'Electric ki',
        description: 'Powerful 1000W electric ki with 4 stainless steel blades for smooth blending experience.',
        price: 150000,
        originalPrice: 200000,
        category: 'kitchen',
        images: ['ki1.jpg', 'ki2.jpg', 'ki3.jpg'],
        specifications: [
            { name: 'Power', value: '1000W' },
            { name: 'Capacity', value: '1.5L' },
            { name: 'Material', value: 'Stainless steel' },
            { name: 'Warranty', value: '1 year' }
        ]
    },
     {
        id: 'k1',
        name: 'Electric ki',
        description: 'Powerful 1000W electric ki with 4 stainless steel blades for smooth blending experience.',
        price: 150000,
        originalPrice: 200000,
        category: 'kitchen',
        images: ['ki1.jpg', 'ki2.jpg', 'ki3.jpg'],
        specifications: [
            { name: 'Power', value: '1000W' },
            { name: 'Capacity', value: '1.5L' },
            { name: 'Material', value: 'Stainless steel' },
            { name: 'Warranty', value: '1 year' }
        ]
    },  {
        id: 'k1',
        name: 'Electric ki',
        description: 'Powerful 1000W electric ki with 4 stainless steel blades for smooth blending experience.',
        price: 150000,
        originalPrice: 200000,
        category: 'kitchen',
        images: ['ki1.jpg', 'ki2.jpg', 'ki3.jpg'],
        specifications: [
            { name: 'Power', value: '1000W' },
            { name: 'Capacity', value: '1.5L' },
            { name: 'Material', value: 'Stainless steel' },
            { name: 'Warranty', value: '1 year' }
        ]
    },
    {
        id: 'k2',
        name: 'Microwave Oven',
        description: '20L capacity microwave oven with 10 power levels and auto-cook menu.',
        price: 450000,
        originalPrice: 550000,
        category: 'kitchen',
        images: ['ki4.jpg', 'ki5.jpg', 'ki6.jpg'],
        specifications: [
            { name: 'Capacity', value: '20L' },
            { name: 'Power Levels', value: '10' },
            { name: 'Functions', value: 'Grill, Convection' },
            { name: 'Warranty', value: '2 years' }
        ]
    },
    // Add 18 more kitchen products...
    
    // Home and Office (20 products)
    {
        id: 'h1',
        name: 'Office ho',
        description: 'Ergonomic office ho with adjustable height and lumbar support.',
        price: 250000,
        originalPrice: 300000,
        category: 'home',
        images: ['ho1.jpg', 'ho2.jpg', 'ho3.jpg'],
        specifications: [
            { name: 'Material', value: 'Leather' },
            { name: 'Weight Capacity', value: '120kg' },
            { name: 'Adjustments', value: 'Height, Armrest' },
            { name: 'Warranty', value: '1 year' }
        ]
    },

      {
        id: 'h1',
        name: 'Office ho',
        description: 'Ergonomic office ho with adjustable height and lumbar support.',
        price: 250000,
        originalPrice: 300000,
        category: 'home',
        images: ['ho1.jpg', 'ho2.jpg', 'ho3.jpg'],
        specifications: [
            { name: 'Material', value: 'Leather' },
            { name: 'Weight Capacity', value: '120kg' },
            { name: 'Adjustments', value: 'Height, Armrest' },
            { name: 'Warranty', value: '1 year' }
        ]
    },
      {
        id: 'h1',
        name: 'Office ho',
        description: 'Ergonomic office ho with adjustable height and lumbar support.',
        price: 250000,
        originalPrice: 300000,
        category: 'home',
        images: ['ho1.jpg', 'ho2.jpg', 'ho3.jpg'],
        specifications: [
            { name: 'Material', value: 'Leather' },
            { name: 'Weight Capacity', value: '120kg' },
            { name: 'Adjustments', value: 'Height, Armrest' },
            { name: 'Warranty', value: '1 year' }
        ]
    },
    {
        id: 'h2',
        name: 'Desk Lamp',
        description: 'LED desk lamp with adjustable brightness and color temperature.',
        price: 80000,
        originalPrice: 100000,
        category: 'home',
        images: ['ho4.jpg', 'ho5.jpg', 'ho6.jpg'],
        specifications: [
            { name: 'Light Source', value: 'LED' },
            { name: 'Brightness', value: 'Adjustable' },
            { name: 'Color Temp', value: '3000K-6000K' },
            { name: 'Warranty', value: '6 months' }
        ]
    },
    // Add 18 more home/office products...
    
    // Baby and Kids (20 products)
    {
        id: 'b441',
        name: 'Baby ba',
        description: 'Lightweight baby ba with adjustable canopy and storage basket.',
        price: 350000,
        originalPrice: 400000,
        category: 'baby',
        images: ['ba1.jpg', 'ba2.jpg', 'ba3.jpg'],
        specifications: [
            { name: 'Weight', value: '8kg' },
            { name: 'Age Range', value: '0-3 years' },
            { name: 'Features', value: 'Adjustable, Foldable' },
            { name: 'Warranty', value: '1 year' }
        ]
    },

      {
        id: 'b13',
        name: 'Baby ba',
        description: 'Lightweight baby ba with adjustable canopy and storage basket.',
        price: 350000,
        originalPrice: 400000,
        category: 'baby',
        images: ['ba4.jpg', 'ba5.jpg', 'ba3.jpg'],
        specifications: [
            { name: 'Weight', value: '8kg' },
            { name: 'Age Range', value: '0-3 years' },
            { name: 'Features', value: 'Adjustable, Foldable' },
            { name: 'Warranty', value: '1 year' }
        ]
    },


    // Add 19 more baby products...
    
    // Car Accessories (20 products)
    {
        id: 'c1',
        name: 'Car Phone Holder',
        description: 'Universal car phone holder with strong suction cup and adjustable grip.',
        price: 30000,
        originalPrice: 40000,
        category: 'car',
        images: ['ba7.jpg', 'holder2.jpg', 'holder3.jpg'],
        specifications: [
            { name: 'Compatibility', value: 'Universal' },
            { name: 'Mount Type', value: 'Dashboard/Windshield' },
            { name: 'Adjustable', value: 'Yes' },
            { name: 'Warranty', value: '6 months' }
        ]
    },
    // Add 19 more car products...
    
    // Health, Fashion and Beauty (20 products)
    {
        id: 'hf1',
        name: 'Hair Dryer',
        description: 'Professional hair dryer with ionic technology and 3 heat settings.',
        price: 120000,
        originalPrice: 150000,
        category: 'health',
        images: ['ho6.jpg', 'dryer2.jpg', 'dryer3.jpg'],
        specifications: [
            { name: 'Power', value: '2000W' },
            { name: 'Settings', value: '3 heat, 2 speed' },
            { name: 'Technology', value: 'Ionic' },
            { name: 'Warranty', value: '1 year' }
        ]
    },
    // Add 19 more health/beauty products...
    
    // Electronics (20 products)
    {
        id: 'e1',
        name: 'Smartphone',
        description: 'Latest smartphone with 6.5" display, 128GB storage and quad camera.',
        price: 1200000,
        originalPrice: 1500000,
        category: 'electronics',
        images: ['phone1.jpg', 'phone2.jpg', 'phone3.jpg'],
        specifications: [
            { name: 'Screen Size', value: '6.5"' },
            { name: 'Storage', value: '128GB' },
            { name: 'Camera', value: 'Quad 48MP' },
            { name: 'Battery', value: '5000mAh' }
        ]
    },
    // Add 19 more electronics products...
    
    // Bedroom Accessories (20 products)
    {



        id: 'bd1',
        name: 'Queen Size Bed',
        description: 'Comfortable queen size bed with wooden frame and headboard.',
        price: 70000,
        originalPrice: 1000000,
        category: 'bedroom',
        images: ['ad7.jpg', 'ad2.jpg', 'ad3.jpg'],
        specifications: [
            { name: 'Size', value: 'Queen (60" x 80")' },
            { name: 'Material', value: 'Wood' },
            { name: 'Assembly', value: 'Required' },
            { name: 'Warranty', value: '2 years' }
        ]
    },

    {

         id: 'bewd1',
        name: 'Queen Size Bed',
        description: 'Comfortable queen size bed with wooden frame and headboard.',
        price: 830000,
        originalPrice: 1000000,
        category: 'bedroom',
        images: ['ad2.jpg', 'ad2.jpg', 'ad3.jpg'],
        specifications: [
            { name: 'Size', value: 'Queen (60" x 80")' },
            { name: 'Material', value: 'Wood' },
            { name: 'Assembly', value: 'Required' },
            { name: 'Warranty', value: '2 years' }
        ] 


    },
        
    
    
    {

         id: 'bdw1',
        name: 'Queen Size Bed',
        description: 'Comfortable queen size bed with wooden frame and headboard.',
        price: 80500,
        originalPrice: 1000000,
        category: 'bedroom',
        images: ['ad3.jpg', 'ad2.jpg', 'ad3.jpg'],
        specifications: [
            { name: 'Size', value: 'Queen (60" x 80")' },
            { name: 'Material', value: 'Wood' },
            { name: 'Assembly', value: 'Required' },
            { name: 'Warranty', value: '2 years' }
        ] 


    },
        
    {

         id: 'bxd1',
        name: 'Queen Size Bed',
        description: 'Comfortable queen size bed with wooden frame and headboard.',
        price: 90000,
        originalPrice: 1000000,
        category: 'bedroom',
        images: ['ad4.jpg', 'ad2.jpg', 'ad3.jpg'],
        specifications: [
            { name: 'Size', value: 'Queen (60" x 80")' },
            { name: 'Material', value: 'Wood' },
            { name: 'Assembly', value: 'Required' },
            { name: 'Warranty', value: '2 years' }
        ] 


    },
        
    {

         id: 'bd5',
        name: 'Queen Size Bed',
        description: 'Comfortable queen size bed with wooden frame and headboard.',
        price: 800004,
        originalPrice: 1000000,
        category: 'bedroom',
        images: ['ad1.jpg', 'ad2.jpg', 'ad3.jpg'],
        specifications: [
            { name: 'Size', value: 'Queen (60" x 80")' },
            { name: 'Material', value: 'Wood' },
            { name: 'Assembly', value: 'Required' },
            { name: 'Warranty', value: '2 years' }
        ] 


    },
        
    {

         id: '2bd1',
        name: 'Queen Size Bed',
        description: 'Comfortable queen size bed with wooden frame and headboard.',
        price: 8000,
        originalPrice: 1000000,
        category: 'bedroom',
        images: ['ad6.jpg', 'ad2.jpg', 'ad3.jpg'],
        specifications: [
            { name: 'Size', value: 'Queen (60" x 80")' },
            { name: 'Material', value: 'Wood' },
            { name: 'Assembly', value: 'Required' },
            { name: 'Warranty', value: '2 years' }
        ] 


    },
        
    {

         id: 'bd1',
        name: 'Queen Size Bed',
        description: 'Comfortable queen size bed with wooden frame and headboard.',
        price: 8000,
        originalPrice: 1000000,
        category: 'bedroom',
        images: ['ad7.jpg', 'ad2.jpg', 'ad3.jpg'],
        specifications: [
            { name: 'Size', value: 'Queen (60" x 80")' },
            { name: 'Material', value: 'Wood' },
            { name: 'Assembly', value: 'Required' },
            { name: 'Warranty', value: '2 years' }
        ] 


    },
        
    {

         id: 'bd1',
        name: 'Queen Size Bed',
        description: 'Comfortable queen size bed with wooden frame and headboard.',
        price: 80000,
        originalPrice: 1000000,
        category: 'bedroom',
        images: ['ad1.jpg', 'ad2.jpg', 'ad3.jpg'],
        specifications: [
            { name: 'Size', value: 'Queen (60" x 80")' },
            { name: 'Material', value: 'Wood' },
            { name: 'Assembly', value: 'Required' },
            { name: 'Warranty', value: '2 years' }
        ] 


    },
        
    {

         id: 'bd1',
        name: 'Queen Size Bed',
        description: 'Comfortable queen size bed with wooden frame and headboard.',
        price: 80000,
        originalPrice: 1000000,
        category: 'bedroom',
        images: ['ad1.jpg', 'ad2.jpg', 'ad3.jpg'],
        specifications: [
            { name: 'Size', value: 'Queen (60" x 80")' },
            { name: 'Material', value: 'Wood' },
            { name: 'Assembly', value: 'Required' },
            { name: 'Warranty', value: '2 years' }
        ] 


    },
        
    {

         id: 'bd1',
        name: 'Queen Size Bed',
        description: 'Comfortable queen size bed with wooden frame and headboard.',
        price: 80000,
        originalPrice: 1000000,
        category: 'bedroom',
        images: ['ad1.jpg', 'ad2.jpg', 'ad3.jpg'],
        specifications: [
            { name: 'Size', value: 'Queen (60" x 80")' },
            { name: 'Material', value: 'Wood' },
            { name: 'Assembly', value: 'Required' },
            { name: 'Warranty', value: '2 years' }
        ] 


    },
        
    {

         id: 'bd1',
        name: 'Queen Size Bed',
        description: 'Comfortable queen size bed with wooden frame and headboard.',
        price: 80000,
        originalPrice: 1000000,
        category: 'bedroom',
        images: ['ad1.jpg', 'ad2.jpg', 'ad3.jpg'],
        specifications: [
            { name: 'Size', value: 'Queen (60" x 80")' },
            { name: 'Material', value: 'Wood' },
            { name: 'Assembly', value: 'Required' },
            { name: 'Warranty', value: '2 years' }
        ] 


    },
        
    {

         id: 'bd1',
        name: 'Queen Size Bed',
        description: 'Comfortable queen size bed with wooden frame and headboard.',
        price: 80000,
        originalPrice: 1000000,
        category: 'bedroom',
        images: ['ad3.jpg', 'ad2.jpg', 'ad7.jpg'],
        specifications: [
            { name: 'Size', value: 'Queen (60" x 80")' },
            { name: 'Material', value: 'Wood' },
            { name: 'Assembly', value: 'Required' },
            { name: 'Warranty', value: '2 years' }
        ] 


    },
        
    {

         id: 'bd1',
        name: 'Queen Size Bed',
        description: 'Comfortable queen size bed with wooden frame and headboard.',
        price: 80000,
        originalPrice: 1000000,
        category: 'bedroom',
        images: ['ad4.jpg', 'ad5.jpg', 'ad6.jpg'],
        specifications: [
            { name: 'Size', value: 'Queen (60" x 80")' },
            { name: 'Material', value: 'Wood' },
            { name: 'Assembly', value: 'Required' },
            { name: 'Warranty', value: '2 years' }
        ] 


    },
        
    {

         id: 'bd1',
        name: 'Queen Size Bed',
        description: 'Comfortable queen size bed with wooden frame and headboard.',
        price: 80000,
        originalPrice: 1000000,
        category: 'bedroom',
        images: ['ad1.jpg', 'ad2.jpg', 'ad3.jpg'],
        specifications: [
            { name: 'Size', value: 'Queen (60" x 80")' },
            { name: 'Material', value: 'Wood' },
            { name: 'Assembly', value: 'Required' },
            { name: 'Warranty', value: '2 years' }
        ] 


    },
        
    {

         id: 'bd1',
        name: 'Queen Size Bed',
        description: 'Comfortable queen size bed with wooden frame and headboard.',
        price: 80000,
        originalPrice: 1000000,
        category: 'bedroom',
        images: ['ad1.jpg', 'ad2.jpg', 'ad3.jpg'],
        specifications: [
            { name: 'Size', value: 'Queen (60" x 80")' },
            { name: 'Material', value: 'Wood' },
            { name: 'Assembly', value: 'Required' },
            { name: 'Warranty', value: '2 years' }
        ] 


    },
        
    {

         id: 'bd1',
        name: 'Queen Size Bed',
        description: 'Comfortable queen size bed with wooden frame and headboard.',
        price: 80000,
        originalPrice: 1000000,
        category: 'bedroom',
        images: ['ad2.jpg', 'ad2.jpg', 'ad3.jpg'],
        specifications: [
            { name: 'Size', value: 'Queen (60" x 80")' },
            { name: 'Material', value: 'Wood' },
            { name: 'Assembly', value: 'Required' },
            { name: 'Warranty', value: '2 years' }
        ] 


    },
        
    {

         id: 'bd1',
        name: 'Queen Size Bed',
        description: 'Comfortable queen size bed with wooden frame and headboard.',
        price: 80000,
        originalPrice: 1000000,
        category: 'bedroom',
        images: ['ad17.jpg', 'ad2.jpg', 'ad3.jpg'],
        specifications: [
            { name: 'Size', value: 'Queen (60" x 80")' },
            { name: 'Material', value: 'Wood' },
            { name: 'Assembly', value: 'Required' },
            { name: 'Warranty', value: '2 years' }
        ] 


    },
        
    {

         id: 'bd1',
        name: 'Queen Size Bed',
        description: 'Comfortable queen size bed with wooden frame and headboard.',
        price: 80000,
        originalPrice: 1000000,
        category: 'bedroom',
        images: ['ad1.jpg', 'ad2.jpg', 'ad3.jpg'],
        specifications: [
            { name: 'Size', value: 'Queen (60" x 80")' },
            { name: 'Material', value: 'Wood' },
            { name: 'Assembly', value: 'Required' },
            { name: 'Warranty', value: '2 years' }
        ] 


    },
        
    {

         id: 'bd1',
        name: 'Queen Size Bed',
        description: 'Comfortable queen size bed with wooden frame and headboard.',
        price: 80000,
        originalPrice: 1000000,
        category: 'bedroom',
        images: ['ad1.jpg', 'ad2.jpg', 'ad3.jpg'],
        specifications: [
            { name: 'Size', value: 'Queen (60" x 80")' },
            { name: 'Material', value: 'Wood' },
            { name: 'Assembly', value: 'Required' },
            { name: 'Warranty', value: '2 years' }
        ] 


    },
        
    {

         id: 'bd1',
        name: 'Queen Size Bed',
        description: 'Comfortable queen size bed with wooden frame and headboard.',
        price: 80000,
        originalPrice: 1000000,
        category: 'bedroom',
        images: ['ad1.jpg', 'ad2.jpg', 'ad3.jpg'],
        specifications: [
            { name: 'Size', value: 'Queen (60" x 80")' },
            { name: 'Material', value: 'Wood' },
            { name: 'Assembly', value: 'Required' },
            { name: 'Warranty', value: '2 years' }
        ] 


    },
        
    {

         id: 'bd1',
        name: 'Queen Size Bed',
        description: 'Comfortable queen size bed with wooden frame and headboard.',
        price: 80000,
        originalPrice: 1000000,
        category: 'bedroom',
        images: ['ad1.jpg', 'ad2.jpg', 'ad3.jpg'],
        specifications: [
            { name: 'Size', value: 'Queen (60" x 80")' },
            { name: 'Material', value: 'Wood' },
            { name: 'Assembly', value: 'Required' },
            { name: 'Warranty', value: '2 years' }
        ] 


    },
        
    {

         id: 'bd1',
        name: 'Queen Size Bed',
        description: 'Comfortable queen size bed with wooden frame and headboard.',
        price: 80000,
        originalPrice: 1000000,
        category: 'bedroom',
        images: ['ad1.jpg', 'ad2.jpg', 'ad3.jpg'],
        specifications: [
            { name: 'Size', value: 'Queen (60" x 80")' },
            { name: 'Material', value: 'Wood' },
            { name: 'Assembly', value: 'Required' },
            { name: 'Warranty', value: '2 years' }
        ] 


    },
        
    {

         id: 'bd1',
        name: 'Queen Size Bed',
        description: 'Comfortable queen size bed with wooden frame and headboard.',
        price: 80000,
        originalPrice: 1000000,
        category: 'bedroom',
        images: ['ad1.jpg', 'ad2.jpg', 'ad3.jpg'],
        specifications: [
            { name: 'Size', value: 'Queen (60" x 80")' },
            { name: 'Material', value: 'Wood' },
            { name: 'Assembly', value: 'Required' },
            { name: 'Warranty', value: '2 years' }
        ] 


    },
        
    {

         id: 'bd1',
        name: 'Queen Size Bed',
        description: 'Comfortable queen size bed with wooden frame and headboard.',
        price: 80000,
        originalPrice: 1000000,
        category: 'bedroom',
        images: ['ad1.jpg', 'ad2.jpg', 'ad3.jpg'],
        specifications: [
            { name: 'Size', value: 'Queen (60" x 80")' },
            { name: 'Material', value: 'Wood' },
            { name: 'Assembly', value: 'Required' },
            { name: 'Warranty', value: '2 years' }
        ] 


    },
        
    {

         id: 'bd1',
        name: 'Queen Size Bed',
        description: 'Comfortable queen size bed with wooden frame and headboard.',
        price: 80000,
        originalPrice: 1000000,
        category: 'bedroom',
        images: ['ad1.jpg', 'ad2.jpg', 'ad3.jpg'],
        specifications: [
            { name: 'Size', value: 'Queen (60" x 80")' },
            { name: 'Material', value: 'Wood' },
            { name: 'Assembly', value: 'Required' },
            { name: 'Warranty', value: '2 years' }
        ] 


    },
        
    {

         id: 'bd1',
        name: 'Queen Size Bed',
        description: 'Comfortable queen size bed with wooden frame and headboard.',
        price: 80000,
        originalPrice: 1000000,
        category: 'bedroom',
        images: ['ad1.jpg', 'ad2.jpg', 'ad3.jpg'],
        specifications: [
            { name: 'Size', value: 'Queen (60" x 80")' },
            { name: 'Material', value: 'Wood' },
            { name: 'Assembly', value: 'Required' },
            { name: 'Warranty', value: '2 years' }
        ] 


    },
        
    {

         id: 'bd1',
        name: 'Queen Size Bed',
        description: 'Comfortable queen size bed with wooden frame and headboard.',
        price: 80000,
        originalPrice: 1000000,
        category: 'bedroom',
        images: ['ad1.jpg', 'ad2.jpg', 'ad3.jpg'],
        specifications: [
            { name: 'Size', value: 'Queen (60" x 80")' },
            { name: 'Material', value: 'Wood' },
            { name: 'Assembly', value: 'Required' },
            { name: 'Warranty', value: '2 years' }
        ] 


    },
        
    {

         id: 'bd1',
        name: 'Queen Size Bed',
        description: 'Comfortable queen size bed with wooden frame and headboard.',
        price: 80000,
        originalPrice: 1000000,
        category: 'bedroom',
        images: ['ad1.jpg', 'ad2.jpg', 'ad3.jpg'],
        specifications: [
            { name: 'Size', value: 'Queen (60" x 80")' },
            { name: 'Material', value: 'Wood' },
            { name: 'Assembly', value: 'Required' },
            { name: 'Warranty', value: '2 years' }
        ] 


    },
        
    {

         id: 'bd1',
        name: 'Queen Size Bed',
        description: 'Comfortable queen size bed with wooden frame and headboard.',
        price: 80000,
        originalPrice: 1000000,
        category: 'bedroom',
        images: ['ad1.jpg', 'ad2.jpg', 'ad3.jpg'],
        specifications: [
            { name: 'Size', value: 'Queen (60" x 80")' },
            { name: 'Material', value: 'Wood' },
            { name: 'Assembly', value: 'Required' },
            { name: 'Warranty', value: '2 years' }
        ] 


    },
        
    {

         id: 'bd1',
        name: 'Queen Size Bed',
        description: 'Comfortable queen size bed with wooden frame and headboard.',
        price: 80000,
        originalPrice: 1000000,
        category: 'bedroom',
        images: ['ad1.jpg', 'ad2.jpg', 'ad3.jpg'],
        specifications: [
            { name: 'Size', value: 'Queen (60" x 80")' },
            { name: 'Material', value: 'Wood' },
            { name: 'Assembly', value: 'Required' },
            { name: 'Warranty', value: '2 years' }
        ] 


    },
        
    {

         id: 'bd1',
        name: 'Queen Size Bed',
        description: 'Comfortable queen size bed with wooden frame and headboard.',
        price: 80000,
        originalPrice: 1000000,
        category: 'bedroom',
        images: ['ad1.jpg', 'ad2.jpg', 'ad3.jpg'],
        specifications: [
            { name: 'Size', value: 'Queen (60" x 80")' },
            { name: 'Material', value: 'Wood' },
            { name: 'Assembly', value: 'Required' },
            { name: 'Warranty', value: '2 years' }
        ] 


    },
        
    // Add 19 more bedroom products...
];

// Note: In a real implementation, you would have all 1000 products listed here
// For this example, I've shown the structure with a few sample products
// You would expand this with the remaining products following the same pattern