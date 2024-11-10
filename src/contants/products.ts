import { Product } from "@/models/product";

export const dummyProducts: Product[] = [
  {
    id: 1,
    name: "Ultra-Slim Laptop",
    sku: "TECH-001",
    brand: "TechMaster",
    description:
      "<p>Experience lightning-fast performance with our Ultra-Slim Laptop. Featuring a sleek design and powerful specs, it's perfect for both work and play.</p><ul><li>15.6\" Full HD Display</li><li>Intel Core i7 Processor</li><li>16GB RAM</li><li>512GB SSD</li><li>Windows 11 Pro</li></ul>",
    variations: [
      { name: "Silver", sku: "TECH-001-SLV", price: 1299.99 },
      { name: "Space Gray", sku: "TECH-001-GRY", price: 1299.99 },
    ],
  },
  {
    id: 2,
    name: "Professional DSLR Camera",
    sku: "PHOTO-002",
    brand: "CaptureMax",
    description:
      '<p>Capture stunning photos and videos with our Professional DSLR Camera. Ideal for both beginners and experienced photographers.</p><h3>Key Features:</h3><ul><li>24.2 Megapixel CMOS Sensor</li><li>4K Video Recording</li><li>45-point Autofocus System</li><li>3" Vari-angle Touchscreen</li><li>Built-in Wi-Fi and Bluetooth</li></ul>',
    variations: [
      { name: "Body Only", sku: "PHOTO-002-BODY", price: 899.99 },
      { name: "With 18-55mm Lens", sku: "PHOTO-002-KIT", price: 1099.99 },
    ],
  },
  {
    id: 3,
    name: "Ergonomic Office Chair",
    sku: "FURN-003",
    brand: "ComfortPlus",
    description:
      "<p>Work in comfort with our Ergonomic Office Chair. Designed to provide optimal support and reduce fatigue during long work hours.</p><h3>Features:</h3><ul><li>Adjustable Lumbar Support</li><li>Breathable Mesh Back</li><li>360-degree Swivel</li><li>Height Adjustable</li><li>Tilt Tension Control</li></ul><p>Available in multiple colors to suit your office decor.</p>",
    variations: [
      { name: "Black", sku: "FURN-003-BLK", price: 249.99 },
      { name: "Gray", sku: "FURN-003-GRY", price: 249.99 },
      { name: "Blue", sku: "FURN-003-BLU", price: 259.99 },
    ],
  },
  {
    id: 4,
    name: "Smart Fitness Tracker",
    sku: "WEARABLE-004",
    brand: "FitTech",
    description:
      "<p>Stay on top of your fitness goals with our Smart Fitness Tracker. Packed with features to monitor your health and activity levels.</p><h3>Key Functions:</h3><ul><li>Heart Rate Monitoring</li><li>Sleep Tracking</li><li>Step Counter</li><li>GPS Tracking</li><li>Water Resistant (50m)</li><li>7-day Battery Life</li></ul><p>Sync with our mobile app for detailed insights and personalized coaching.</p>",
    variations: [
      { name: "Small Band", sku: "WEARABLE-004-S", price: 129.99 },
      { name: "Large Band", sku: "WEARABLE-004-L", price: 129.99 },
    ],
  },
  {
    id: 5,
    name: "Gourmet Coffee Maker",
    sku: "KITCHEN-005",
    brand: "BrewMaster",
    description:
      "<p>Enjoy barista-quality coffee at home with our Gourmet Coffee Maker. Featuring advanced brewing technology for the perfect cup every time.</p><h3>Specifications:</h3><ul><li>10-cup Capacity</li><li>Programmable 24-hour Timer</li><li>Adjustable Brew Strength</li><li>Keep Warm Function</li><li>Reusable Filter Included</li><li>Auto Shut-off</li></ul><p>Sleek stainless steel design complements any kitchen decor.</p>",
    variations: [
      { name: "Stainless Steel", sku: "KITCHEN-005-SS", price: 179.99 },
      { name: "Matte Black", sku: "KITCHEN-005-MB", price: 189.99 },
    ],
  },
];
