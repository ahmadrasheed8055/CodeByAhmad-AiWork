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
 */

export const siteData = {
  // Navigation Social Links
  socials: [
    { name: 'Facebook', url: 'https://facebook.com', icon: 'Fb' },
    { name: 'Instagram', url: 'https://instagram.com', icon: 'Insta' },
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
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=400",
      price: "Starts from $15"
    },
    {
      id: 3,
      title: "Charging Port Repair",
      description: "Fix loose or non-functional charging ports instantly.",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=400",
      price: "Starts from $10"
    },
    {
      id: 4,
      title: "Water Damage Repair",
      description: "Professional cleaning and component-level repair for liquid damage.",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=400",
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
      image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      name: "Premium Leather Case",
      category: "Protection",
      price: "$9.50",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      name: "Wireless Bluetooth Earbuds",
      category: "Audio",
      price: "$25.00",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 4,
      name: "9D Tempered Glass",
      category: "Protection",
      price: "$4.99",
      image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=400",
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
