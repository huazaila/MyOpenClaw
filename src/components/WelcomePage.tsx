import { motion } from 'framer-motion';
import { Sparkles, Users } from 'lucide-react';

interface WelcomePageProps {
  onStart: () => void;
}

export function WelcomePage({ onStart }: WelcomePageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'linear-gradient(135deg, #C4B5C0 0%, #B5C4B1 50%, #9B8B7C 100%)',
            filter: 'blur(60px)',
          }}
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.3, 1],
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -bottom-60 -left-60 w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: 'linear-gradient(135deg, #B5C4B1 0%, #D4C5B9 50%, #C4B5C0 100%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-lg w-full text-center">
        {/* Floating icon */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, rgba(196, 181, 192, 0.2) 0%, rgba(181, 196, 177, 0.2) 100%)',
              border: '1px solid rgba(196, 181, 192, 0.3)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Sparkles className="w-12 h-12 text-morandi-mauve" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
        >
          <span className="text-gradient">
            探寻你的
            <br />
            第二人格
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-400 mb-4"
        >
          12 道题，遇见未知的自己
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-sm text-gray-500 mb-12 max-w-md mx-auto"
        >
          基于心理学研究的人格维度分析，
          <br />
          揭示你内心深处的性格原型
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={onStart}
          className="btn-primary btn-breathe text-lg px-12 py-4"
        >
          开始测试
        </motion.button>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex items-center justify-center gap-2 text-sm text-gray-500"
        >
          <Users className="w-4 h-4" />
          <span>已有 12,000+ 人参与测试</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
