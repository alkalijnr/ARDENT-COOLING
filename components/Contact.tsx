import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Get In <span className="text-ardent-400">Touch</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Ready to upgrade your cooling system? Reach out to us for a free quote or consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <a 
                  href="https://www.google.com/maps/place/Ardent+Cooling+Ltd/data=!4m7!3m6!1s0x104e0b2eca16718b:0xb337f89efaa22dbc!8m2!3d9.0670077!4d7.4415886!16s%2Fg%2F11n008zvx1!19sChIJi3EWyi4LThARvC2i-p74N7M?authuser=0&hl=en&rclk=1" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-start space-x-4 group"
                >
                  <div className="p-3 bg-ardent-500/10 rounded-lg text-ardent-400 group-hover:bg-ardent-500 group-hover:text-white transition-colors">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Visit Us</h4>
                    <p className="text-slate-400 text-sm leading-relaxed group-hover:text-ardent-300 transition-colors">
                      Use Maps Link: Ardent Cooling Ltd<br/>Abuja, Nigeria
                    </p>
                  </div>
                </a>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-ardent-500/10 rounded-lg text-ardent-400">
                    <Phone />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Call Us</h4>
                    <p className="text-slate-400 text-sm">+234 800 COOLING</p>
                    <p className="text-slate-500 text-xs mt-1">(Placeholder Number)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-ardent-500/10 rounded-lg text-ardent-400">
                    <Mail />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email Us</h4>
                    <p className="text-slate-400 text-sm">info@ardentcooling.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-ardent-500/10 rounded-lg text-ardent-400">
                    <Clock />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Working Hours</h4>
                    <p className="text-slate-400 text-sm">Mon - Sat: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder/Visual */}
            <div className="h-64 rounded-2xl overflow-hidden border border-white/10 relative group">
                <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                    <span className="text-slate-500 font-medium">Map Visualization</span>
                </div>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.986616428765!2d7.439013675865487!3d9.067007690994967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b2eca16718b%3A0xb337f89efaa22dbc!2sArdent%20Cooling%20Ltd!5e0!3m2!1sen!2sus!4v1715424000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    className="opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-ardent-500 focus:border-transparent outline-none text-white placeholder-slate-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-ardent-500 focus:border-transparent outline-none text-white placeholder-slate-500 transition-all"
                    placeholder="+234..."
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-ardent-500 focus:border-transparent outline-none text-white placeholder-slate-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">Service Required</label>
                <select id="service" className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-ardent-500 focus:border-transparent outline-none text-white transition-all">
                  <option>AC Installation</option>
                  <option>Repair & Maintenance</option>
                  <option>Industrial Cooling</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-ardent-500 focus:border-transparent outline-none text-white placeholder-slate-500 transition-all"
                  placeholder="Tell us about your cooling needs..."
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full py-4 bg-ardent-600 hover:bg-ardent-500 text-white rounded-lg font-bold flex items-center justify-center space-x-2 transition-all shadow-lg shadow-ardent-600/30 hover:shadow-ardent-500/50"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;