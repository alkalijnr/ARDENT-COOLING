import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Snowflake, Fan, Home, Factory, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: <Snowflake className="w-8 h-8" />,
    title: "AC Installation",
    description: "Expert installation of split, window, and central air conditioning systems for maximum efficiency."
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Repair & Maintenance",
    description: "Rapid diagnostics and repair to get your systems back online. Scheduled maintenance plans available."
  },
  {
    icon: <Factory className="w-8 h-8" />,
    title: "Industrial Cooling",
    description: "Large-scale HVAC solutions for factories, warehouses, and commercial complexes."
  },
  {
    icon: <Fan className="w-8 h-8" />,
    title: "Ventilation Systems",
    description: "Improving indoor air quality with state-of-the-art ventilation and filtration setups."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "System Audits",
    description: "Comprehensive energy efficiency audits to reduce your cooling costs and carbon footprint."
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Smart Home HVAC",
    description: "Integration of smart thermostats and automated climate control for modern living."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Comprehensive <span className="text-ardent-400">Services</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            From residential comfort to industrial complexity, Ardent Cooling delivers precision and reliability.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-2xl bg-slate-800/80 border border-white/5 hover:border-ardent-500/50 transition-all duration-300"
            >
              {/* Removed backdrop-blur-sm for performance */}
              <div className="absolute inset-0 bg-gradient-to-br from-ardent-500/0 via-ardent-500/0 to-ardent-500/5 group-hover:to-ardent-500/10 rounded-2xl transition-all" />
              
              <div className="relative z-10 mb-6 inline-block p-3 rounded-lg bg-ardent-500/10 text-ardent-400 group-hover:bg-ardent-500 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="relative z-10 text-xl font-bold text-white mb-4 group-hover:text-ardent-300 transition-colors">
                {service.title}
              </h3>
              
              <p className="relative z-10 text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;