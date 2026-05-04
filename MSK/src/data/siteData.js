/**
 * MSK Mobile Store - Website Data Configuration
 * 
 * HOW TO ADD NEW ITEMS:
 * 1. Find the section you want to update (e.g., accessories).
 * 2. Copy a block of code between the curly braces { ... }.
 * 3. Paste it below the last item and add a comma (,) before it.
 * 4. Update the 'id' to the next number and change the name, price, and image.
 * 
 * IMAGE TIPS: You can use local images from public/assets/ or links from Unsplash.
 * copy the image URL and paste it in the 'image' field. Make sure to use high-quality images for better appearance.
 * 
 * update under the double quoutes only ("") and keep the structure intact for the website to work properly.
 */

export const siteData = {
  // Navigation Social Links
  socials: [
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61583561695294', icon: 'Fb' },
    { name: 'Instagram', url: 'https://www.instagram.com/msk.shop01/', icon: 'Insta' },
    { name: 'WhatsApp', url: 'https://wa.me/+923066208899', icon: 'Wa' },
  ],

  // Mobile Repairing Services Section
  // To add a service: Copy { id: ..., title: ..., etc. } and paste below.
  repairServices: [
    {
      id: 1,
      title: "Screen Replacement",
      description: "High-quality original and compatible screen replacements for all major brands.",
      image: "https://images.unsplash.com/photo-1611396000732-f8c9a933424f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "Starts from $20"
    },

    {
      id: 2,
      title: "Battery Replacement",
      description: "Fast-draining battery? Get a premium replacement with warranty.",
      image: "https://images.unsplash.com/photo-1512439408685-2e399291a4e6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJhdHRlcnklMjByZXBsYWNlbWVudHxlbnwwfHwwfHx8MA%3D%3D",
      price: "Starts from $15"
    },
    {
      id: 3,
      title: "Charging Port Repair",
      description: "Fix loose or non-functional charging ports instantly.",
      image: "https://images.unsplash.com/photo-1774137909186-3fe3ae3ddc08?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hhcmdpbmclMjBwb3J0fGVufDB8fDB8fHww",
      price: "Starts from $10"
    },
    {
      id: 4,
      title: "Water Damage Repair",
      description: "Professional cleaning and component-level repair for liquid damage.",
      image: "https://plus.unsplash.com/premium_photo-1663047430590-f2947119c3f0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmUlMjByZXBhaXJ8ZW58MHx8MHx8fDA%3D",
      price: "Free Diagnosis"
    }
    
  ],

  // Accessories Shop Section
  // To add a product: Copy { id: ..., name: ..., etc. } and paste below.
  accessories: [
    {
      id: 1,
      name: "Fast Charging Adapter",
      category: "Power",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1731616103600-3fe7ccdc5a59?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwZmFzdCUyMGNoYXJnaW5nJTIwYWRhcHRlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      name: "Premium Leather Case",
      category: "Protection",
      price: "$9.50",
      image: "https://images.unsplash.com/photo-1625102216615-3a61ee26e4db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vYmlsZSUyMGNhc2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      name: "Wireless Bluetooth Earbuds",
      category: "Audio",
      price: "$25.00",
      image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww",
    },
    {
      id: 4,
      name: "9D Tempered Glass",
      category: "Protection",
      price: "Rs. 200",
      image: "https://plus.unsplash.com/premium_photo-1664201890589-6ee3c8367a27?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9iaWxlJTIwZ2xhc3N8ZW58MHx8MHx8fDA%3D",
    }
  ],

  // User Reviews Section
  // To add a review: Copy { id: ..., user: ..., etc. } and paste below.
  reviews: [
    {
      id: 1,
      user: "Ahmad Khan",
      rating: 5,
      comment: "Excellent service! Fixed my broken iPhone screen in just 30 minutes. Highly recommended.",
      date: "2 days ago"
    },
    {
      id: 2,
      user: "Fatima Zahra",
      rating: 5,
      comment: "Bohat hi shandar service hai, inke paas mobile accessories ki behtreen variety munasib qeemat mein mojud hai.",
      date: "1 week ago"
    },
    {
      id: 3,
      user: "Muhammad Bilal",
      rating: 5,
      comment: "The only place I trust for my mobile repairs. Honest pricing and genuine parts.",
      date: "2 weeks ago"
    }
  ],

  // Contact Information
  contact: {
    address: "MSK Mobile Store, Bedian Road, Lahore, Pakistan",
    phone: "+92 306 6208899",
    email: "msa.khan620@gmail.com",
    openingHours: "Mon - Sat: 10:00 AM - 10:00 PM",
    mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.043210112345!2d74.4201223!3d31.4837605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190f0652ace1c3%3A0xd9673e00ac792656!2sMSK%20Mobile%20Shop%20%2F%20Online%20Store!5e0!3m2!1sen!2spk!4v1714750000000!5m2!1sen!2spk"
  }
};
