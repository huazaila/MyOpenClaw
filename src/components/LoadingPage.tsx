import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const loadingTexts = [
  '正在分析你的选择维度...',
  '正在匹配性格模型...',
  '正在生成个性画像...',
  '正在计算性格得分...',
  '即将揭示你的第二人格...',
];

export function LoadingPage() {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingTexts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center px-6 relative"
    >
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.3,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              border: '2px solid rgba(196, 181, 192, 0.2)',
            }}
          />
        ))}
      </div>

      {/* Center spinner */}
      <div className="relative z-10 text-center">
        <div className="relative w-32 h-32 mx-auto mb-10">
          {/* Outer ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full"
            style={{
              border: '3px solid transparent',
              borderTopColor: '#C4B5C0',
              borderRightColor: '#B5C4B1',
            }}
          />
          
          {/* Middle ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 rounded-full"
            style={{
              border: '2px solid transparent',
              borderBottomColor: '#D4C5B9',
              borderLeftColor: '#9B8B7C',
            }}
          />
          
          {/* Inner circle */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-8 rounded-full bg-gradient-to-br from-morandi-mauve/30 to-morandi-sage/30"
            style={{
              backdropFilter: 'blur(10px)',
            }}
          />
          
          {/* Center dot */}
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-morandi-mauve"
          />
        </div>

        {/* Loading text */}
        <motion.div
          key={textIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="text-lg text-gray-300"
        >
          {loadingTexts[textIndex]}
        </motion.div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-8">
          {loadingTexts.map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: i === textIndex ? 1.2 : 1,
                opacity: i === textIndex ? 1 : 0.3,
              }}
              className="w-2 h-2 rounded-full bg-morandi-mauve"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
