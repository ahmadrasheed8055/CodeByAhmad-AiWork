import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <header className="relative pb-5">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <div className="absolute bottom-0 left-0 w-10 h-1 bg-accent rounded-full"></div>
      </header>

      {/* Map Placeholder */}
      <div className="w-full h-[400px] glass-card overflow-hidden grayscale invert">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334133464!3d38.561654597395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6fbc4d1b7132!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1645564656556!5m2!1sen!2s" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          title="Location Map"
        ></iframe>
      </div>

      <section className="space-y-6">
        <h3 className="text-2xl font-semibold">Contact Form</h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input 
            type="text" 
            placeholder="Full name" 
            className="glass-card bg-transparent px-5 py-4 outline-none border-border-primary focus:border-accent transition-colors duration-300" 
            required
          />
          <input 
            type="email" 
            placeholder="Email address" 
            className="glass-card bg-transparent px-5 py-4 outline-none border-border-primary focus:border-accent transition-colors duration-300" 
            required
          />
          <textarea 
            placeholder="Your Message" 
            rows="5"
            className="md:col-span-2 glass-card bg-transparent px-5 py-4 outline-none border-border-primary focus:border-accent transition-colors duration-300 resize-none" 
            required
          ></textarea>
          
          <div className="md:col-span-2 flex justify-end">
            <button 
              type="submit"
              className="glass-card bg-transparent px-8 py-4 flex items-center gap-3 text-accent font-medium hover:bg-accent/5 transition-all duration-300 group shadow-lg"
            >
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <span>Send Message</span>
            </button>
          </div>
        </form>
      </section>
    </motion.div>
  );
};

export default Contact;
