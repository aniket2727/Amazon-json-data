







const electronicsData = [
    {
        "name": "Boat prime",
        "price": 10000000,
        "captions": "Up to 57% off on 190000",
        "brand": "samsung",
        "product_type": "Electronics",
        "image": "https://images-eu.ssl-images-amazon.com/images/I/41cU0ptdpWL._AC_SX184_.jpg"
    },
    {
        "name": "Real Me N53",
        "price": 300000,
        "captions": "realme narzo N53 (Feather Gold, 4GB+64GB) 33W Segment Fastest Charging | Slimmest Phone in Segment | 90 Hz Smooth Display 3.9 out of 5 stars 8,374",
        "brand": "Real me",
        "product_type": "Electronics",
        "image": "https://images-eu.ssl-images-amazon.com/images/I/41cU0ptdpWL._AC_SX184_.jpg"
    },
    {
        "name": "Readmi 12c",
        "price": 15000,
        "captions": "Redmi 12C (Matte Black, 4GB RAM, 64GB Storage) | High Performance Mediatek Helio G85",
        "brand": "Real me",
        "product_type": "Electonics",
        "image": "https://images-eu.ssl-images-amazon.com/images/I/41cU0ptdpWL._AC_SX184_.jpg"
    },
    {
        "name": "Red mi f1",
        "price": 6999,
        "captions": "Redmi 12C (Mint Green, 4GB RAM, 64GB Storage) | High Performance Mediatek Helio G85 | ",
        "brand": "red mi",
        "product_type": "Electronics",
        "image": "https://m.media-amazon.com/images/I/81YEyQqHjPL._AC_UL320_.jpg"
    },
    {
        "name": "Red Mi A2",
        "price": 30899,
        "captions": "Redmi A2 (Aqua Blue, 4GB RAM, 64GB Storage) | Powerful Octa Core G36 Processor ",
        "brand": "Real me",
        "product_type": "Electronics",
        "image": "https://m.media-amazon.com/images/I/71dEY4Neo3L._AC_UL320_.jpg"
    },
    {
        "name": "samsung galaxy m04",
        "price": 5222,
        "captions": "Samsung Galaxy M04 Light Green, 4GB RAM, 64GB Storage | Upto 8GB RAM with RAM Plus",
        "brand": "Real me",
        "product_type": "Electonics",
        "image": "https://m.media-amazon.com/images/I/813sVzTfvaL._AC_UL320_.jpg"
    }
];

const wirelessData = [
    {
        "name": "Noise B500",
        "price": 400,
        "captions": "Noise Airdopes Atom 81 True Wireless",
        "brand": "Noise",
        "product_type": "Electronics",
        "image": "https://m.media-amazon.com/images/I/71dEY4Neo3L._AC_UL320_.jpg"
    },
    {
        "name": "Boat AP",
        "price": 450,
        "captions": "Boat Bluetooth Golden True Wireless",
        "brand": "Boat",
        "product_type": "Electronics",
        "image": "https://m.media-amazon.com/images/I/71dEY4Neo3L._AC_UL320_.jpg"
    },
    {
        "name": "Noise N53",
        "price": 400,
        "captions": "Boat Bluetooth Golden True Wireless",
        "brand": "Noise",
        "product_type": "Electronics",
        "image": "https://m.media-amazon.com/images/I/71dEY4Neo3L._AC_UL320_.jpg"
    },
    {
        "name": "Boat A2",
        "price": 450,
        "captions": "Boat A2 Powerful Octa Core G36",
        "brand": "Boat",
        "product_type": "Electronics",
        "image": "https://images-eu.ssl-images-amazon.com/images/I/41cU0ptdpWL._AC_SX184_.jpg"
    },
    {
        "name": "Noise N53",
        "price": 400,
        "captions": "Noise N53",
        "brand": "Noise",
        "product_type": "Electronics",
        "image": "https://m.media-amazon.com/images/I/71dEY4Neo3L._AC_UL320_.jpg"
    },
    {
        "name": "Boat A2",
        "price": 450,
        "captions": "Boat A2 (Aqua Blue, 4GB RAM, 64GB Storage) | Powerful Octa Core G36 Processor",
        "brand": "Boat",
        "product_type": "Electronics",
        "image": "https://m.media-amazon.com/images/I/71dEY4Neo3L._AC_UL320_.jpg"
    },
    {
        "name": "Noise N53",
        "price": 400,
        "captions": "Boat Bluetooth Golden True Wireless",
        "brand": "Noise",
        "product_type": "Electronics",
        "image": "https://images-eu.ssl-images-amazon.com/images/I/41cU0ptdpWL._AC_SX184_.jpg"
    },
    {
        "name": "Boat A2",
        "price": 450,
        "captions": "Boat silver Airdopes 9A",
        "brand": "Boat",
        "product_type": "Electronics",
        "image": "https://images-eu.ssl-images-amazon.com/images/I/41cU0ptdpWL._AC_SX184_.jpg"
    },
    {
        "name": "Noise N53",
        "price": 400,
        "captions": "Noise prime bluetooth truly wireless",
        "brand": "Noise",
        "product_type": "Electronics",
        "image": "https://images-eu.ssl-images-amazon.com/images/I/41cU0ptdpWL._AC_SX184_.jpg"
    },
    {
        "name": "Boat A2",
        "price": 450,
        "captions": "Boat Airdopes jambo prime 661",
        "brand": "Boat",
        "product_type": "Electronics",
        "image": "https://images-eu.ssl-images-amazon.com/images/I/41cU0ptdpWL._AC_SX184_.jpg"
    }
];


const shoesData = [
    {
        "name": "Nike Prime",
        "price": 2543,
        "captions": "The most flexible shoes offering comfort, priced between 1000 to 10000",
        "brand": "Nike",
        "product_type": "Shoes",
        "image": "https://m.media-amazon.com/images/I/61FwDD6em2L._AC_UL320_.jpg"
    },
    {
        "name": "Adidas Elite",
        "price": 7151,
        "captions": "Experience ultimate flexibility and comfort with these shoes, priced between 1000 to 10000",
        "brand": "Adidas",
        "product_type": "Shoes",
        "image": "https://m.media-amazon.com/images/I/51w4Cj52CzL._AC_UL320_.jpg"
    },
    {
        "name": "Nike Prime",
        "price": 6953,
        "captions": "Step into flexibility and comfort with these shoes, priced between 1000 to 10000",
        "brand": "Nike",
        "product_type": "Shoes",
        "image": "https://m.media-amazon.com/images/I/51crsMMADTL._AC_UL320_.jpg"
    },
    {
        "name": "Adidas Elite",
        "price": 1686,
        "captions": "Get the most flexible and comfortable feel with these shoes, priced between 1000 to 10000",
        "brand": "Adidas",
        "product_type": "Shoes",
        "image": "https://m.media-amazon.com/images/I/81YEyQqHjPL._AC_UL320_.jpg"
    },
    {
        "name": "Adidas Elite",
        "price": 5523,
        "captions": "Walk in style and comfort with these flexible shoes, priced between 1000 to 10000",
        "brand": "Adidas",
        "product_type": "Shoes",
        "image": "https://m.media-amazon.com/images/I/711hmrJQrUL._AC_UL320_.jpg"
    },
    {
        "name": "Adidas Elite",
        "price": 4889,
        "captions": "Experience the most comfortable and flexible shoes, priced between 1000 to 10000",
        "brand": "Adidas",
        "product_type": "Shoes",
        "image": "https://m.media-amazon.com/images/I/51gixMf5XBL._AC_UL320_.jpg"
    }
];


const tshirtData = [
    {
        "name": "ComfortFit Cotton Tee",
        "brand": "Cotton Style",
        "product_type": "T-shirt",
        "price": 1899,
        "captions": "Experience the ultimate comfort with our ComfortFit Cotton Tee, priced affordably",
        "image": "https://example.com/tshirt1.jpg"
    },
    {
        "name": "CoolBreeze V-Neck",
        "brand": "BreezyWear",
        "product_type": "T-shirt",
        "price": 2499,
        "captions": "Stay cool and stylish in our CoolBreeze V-Neck T-shirt, offering comfort at its best",
        "image": "https://example.com/tshirt2.jpg"
    },
    {
        "name": "CasualChic Graphic Tee",
        "brand": "Urban Trends",
        "product_type": "T-shirt",
        "price": 1599,
        "captions": "Casual meets chic with our Graphic Tee, a perfect addition to your wardrobe",
        "image": "https://example.com/tshirt3.jpg"
    },
    {
        "name": "SportyStyle Performance Shirt",
        "brand": "ActiveFit",
        "product_type": "T-shirt",
        "price": 2999,
        "captions": "Elevate your sports style with our SportyStyle Performance Shirt, designed for active lifestyles",
        "image": "https://example.com/tshirt4.jpg"
    },
    {
        "name": "ClassicFit Polo Tee",
        "brand": "Timeless Threads",
        "product_type": "T-shirt",
        "price": 2199,
        "captions": "Achieve a classic look with our ClassicFit Polo Tee, a timeless wardrobe essential",
        "image": "https://example.com/tshirt5.jpg"
    },
    {
        "name": "GraphicArt Casual Tee",
        "brand": "Artistic Threads",
        "product_type": "T-shirt",
        "price": 1799,
        "captions": "Express your unique style with our GraphicArt Casual Tee, a blend of comfort and creativity",
        "image": "https://example.com/tshirt6.jpg"
    }
];


const tvData = [
    {
        "name": "UltraHD Smart TV",
        "brand": "TechVision",
        "product_type": "TV",
        "price": 6999,
        "captions": "Immerse yourself in the world of entertainment with our UltraHD Smart TV, offering stunning visuals",
        "image": "https://example.com/tv1.jpg"
    },
    {
        "name": "SmartLED Curved TV",
        "brand": "VisionCurve",
        "product_type": "TV",
        "price": 8999,
        "captions": "Experience cinematic viewing at home with our SmartLED Curved TV, designed for an immersive experience",
        "image": "https://example.com/tv2.jpg"
    },
    {
        "name": "CrystalClear 4K TV",
        "brand": "CrystalView",
        "product_type": "TV",
        "price": 12999,
        "captions": "See every detail come to life with our CrystalClear 4K TV, delivering crystal-clear picture quality",
        "image": "https://example.com/tv3.jpg"
    },
    {
        "name": "SlimProfile QLED TV",
        "brand": "SlimView",
        "product_type": "TV",
        "price": 10999,
        "captions": "Enhance your living space with our SlimProfile QLED TV, combining style with advanced display technology",
        "image": "https://example.com/tv4.jpg"
    },
    {
        "name": "GamingMaster LED TV",
        "brand": "GameTech",
        "product_type": "TV",
        "price": 7999,
        "captions": "Level up your gaming experience with our GamingMaster LED TV, delivering smooth visuals and low latency",
        "image": "https://example.com/tv5.jpg"
    },
    {
        "name": "SmartHome Theater System",
        "brand": "HomeCinema",
        "product_type": "TV",
        "price": 14999,
        "captions": "Transform your home into a theater with our SmartHome Theater System, featuring a sleek and modern design",
        "image": "https://example.com/tv6.jpg"
    }
];



