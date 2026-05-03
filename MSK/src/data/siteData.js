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
 */

export const siteData = {
  // Navigation Social Links
  socials: [
    { name: 'Facebook', url: 'https://facebook.com', icon: 'Fb' },
    { name: 'Instagram', url: 'https://instagram.com', icon: 'Insta' },
    { name: 'WhatsApp', url: 'https://wa.me/1234567890', icon: 'Wa' },
  ],

  // Mobile Repairing Services Section
  // To add a service: Copy { id: ..., title: ..., etc. } and paste below.
  repairServices: [
    {
      id: 1,
      title: "Screen Replacement",
      description: "High-quality original and compatible screen replacements for all major brands.",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=400",
      price: "Starts from $20"
    },
    {
      id: 2,
      title: "Battery Replacement",
      description: "Fast-draining battery? Get a premium replacement with warranty.",
      image: "https://images.unsplash.com/photo-1601524909162-cd8725f25e71?auto=format&fit=crop&q=80&w=400",
      price: "Starts from $15"
    },
    {
      id: 3,
      title: "Charging Port Repair",
      description: "Fix loose or non-functional charging ports instantly.",
      image: "https://images.unsplash.com/photo-1551703599-6b3e8379aa8b?auto=format&fit=crop&q=80&w=400",
      price: "Starts from $10"
    },
    {
      id: 4,
      title: "Water Damage Repair",
      description: "Professional cleaning and component-level repair for liquid damage.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400",
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
      user: "Sarah Johnson",
      rating: 4,
      comment: "Great collection of accessories at very reasonable prices. The staff is very professional.",
      date: "1 week ago"
    },
    {
      id: 3,
      user: "Michael Smith",
      rating: 5,
      comment: "The only place I trust for my mobile repairs. Honest pricing and genuine parts.",
      date: "2 weeks ago"
    }
  ],

  // Contact Information
  contact: {
    address: "Hall Road, Lahore, Punjab 54000, Pakistan",
    phone: "+92 300 1234567",
    email: "contact@mskmobile.com",
    openingHours: "Mon - Sat: 10:00 AM - 10:00 PM",
    mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.9134440523!2d74.3184343!3d31.56499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b4277732247%3A0xe549557b70216440!2sHall%20Rd%2C%20Lahore%2C%20Punjab!5e0!3m2!1sen!2spk!4v1714750000000!5m2!1sen!2spk"
  }
};
