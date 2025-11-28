import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const benefits = [
    "Certified Technical Experts",
    "24/7 Emergency Support",
    "Eco-friendly Cooling Solutions",
    "Competitive Pricing Strategy"
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-ardent-900/50">
                {/* Abstract visual representation instead of generic stock photo */}
                <div className="h-[400px] w-full bg-gradient-to-br from-slate-800 to-slate-900 relative p-8 flex items-center justify-center">
                    <div className="absolute inset-0 opacity-20">
                        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="url(#grad1)" />
                            <defs>
                                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{stopColor:'rgb(14, 165, 233)', stopOpacity:1}} />
                                <stop offset="100%" style={{stopColor:'rgb(3, 105, 161)', stopOpacity:1}} />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="text-center">
                        <h3 className="text-6xl font-display font-bold text-white mb-2">10+</h3>
                        <p className="text-ardent-300 uppercase tracking-widest font-medium">Years of Excellence</p>
                    </div>
                </div>
            </div>
            {/* Decor element */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-ardent-500 rounded-full blur-[80px] opacity-30 pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
              Why Choose <span className="text-ardent-400">Ardent Cooling?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              At Ardent Cooling Ltd, we don't just fix ACs; we engineer comfort. Located in the heart of Abuja, we have established ourselves as the premier provider of HVAC solutions. Our approach combines technical precision with a customer-first philosophy.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-ardent-400 flex-shrink-0" />
                  <span className="text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block px-8 py-3 border border-ardent-500 text-ardent-400 hover:bg-ardent-500 hover:text-white rounded-lg font-medium transition-all duration-300"
            >
              Learn More
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;