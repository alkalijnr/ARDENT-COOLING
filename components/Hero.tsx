import React from 'react';
import { motion } from 'framer-motion';
import { Wind, ChevronDown, Snowflake, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Abstract Floating Icons Background */}
      <motion.div 
        className="absolute top-[15%] left-[10%] text-ardent-500/10 z-0 pointer-events-none"
        animate={{ 
            y: [0, -30, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1]
        }}
        transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
        }}
      >
        <Snowflake size={180} />
      </motion.div>

      <motion.div 
        className="absolute bottom-[20%] right-[5%] text-blue-500/10 z-0 pointer-events-none"
        animate={{ 
            y: [0, 40, 0],
            rotate: [0, -15, 0],
            scale: [1, 1.2, 1]
        }}
        transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
        }}
      >
        <Wind size={220} />
      </motion.div>

      <motion.div 
        className="absolute top-[30%] right-[25%] text-cyan-400/5 z-0 pointer-events-none"
        animate={{ 
            y: [0, -20, 0],
            x: [0, 20, 0]
        }}
        transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
        }}
      >
        <Zap size={120} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
            >
                <Wind size={16} className="text-ardent-400" />
                <span className="text-ardent-200 text-sm font-medium tracking-wide">
                    Next Generation HVAC Solutions
                </span>
            </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-2xl"
        >
          Mastering the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-ardent-300 via-ardent-100 to-ardent-300">
            Art of Cooling
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Providing industrial and residential cooling excellence in Abuja. 
          We blend reliability with modern technology to keep your environment perfect.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-ardent-500 hover:bg-ardent-600 text-white rounded-lg font-bold transition-all shadow-lg shadow-ardent-500/25 hover:shadow-ardent-500/40 hover:-translate-y-1"
          >
            Schedule Consultation
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg font-medium transition-all hover:-translate-y-1"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-slate-500 w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;