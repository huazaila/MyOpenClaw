import { motion } from 'framer-motion';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import { Download, RotateCcw, Share2 } from 'lucide-react';
import type { PersonalityType } from '../types';

interface ResultPageProps {
  personality: PersonalityType;
  onRestart: () => void;
}

export function ResultPage({ personality, onRestart }: ResultPageProps) {
  const radarData = Object.entries(personality.dimensions).map(([key, value]) => ({
    dimension: key,
    score: value,
    fullMark: 100,
  }));

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `我的第二人格：${personality.title}`,
        text: `我在性格测试中发现了我的第二人格：${personality.title} - ${personality.name}。快来测试你的吧！`,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(
        `我的第二人格：${personality.title} - ${personality.name}\n${window.location.href}`
      );
      alert('结果已复制到剪贴板！');
    }
  };

  const handleDownload = () => {
    // Create a simple poster image using canvas
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1920;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, 1920);
      gradient.addColorStop(0, '#0F0F0F');
      gradient.addColorStop(0.5, '#1A1A1A');
      gradient.addColorStop(1, '#252525');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 1080, 1920);

      // Title
      ctx.fillStyle = '#F5F1ED';
      ctx.font = 'bold 80px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('探寻你的第二人格', 540, 200);

      // Personality title
      ctx.fillStyle = '#C4B5C0';
      ctx.font = 'bold 120px Inter, sans-serif';
      ctx.fillText(personality.title, 540, 450);

      // Personality name
      ctx.fillStyle = '#B5C4B1';
      ctx.font = 'bold 80px Inter, sans-serif';
      ctx.fillText(personality.name, 540, 580);

      // Keywords
      ctx.fillStyle = '#9B8B7C';
      ctx.font = '48px Inter, sans-serif';
      ctx.fillText(personality.keywords.join(' · '), 540, 700);

      // Description (wrapped)
      ctx.fillStyle = '#F5F1ED';
      ctx.font = '36px Inter, sans-serif';
      const words = personality.description.split('');
      let line = '';
      let y = 900;
      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i];
        const metrics = ctx.measureText(testLine);
        if (metrics.width > 900 && i > 0) {
          ctx.fillText(line, 540, y);
          line = words[i];
          y += 60;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, 540, y);

      // Download
      const link = document.createElement('a');
      link.download = `我的第二人格-${personality.name}.png`;
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen px-6 py-8 relative"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(196, 181, 192, 0.4) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-lg mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <p className="text-gray-400 mb-2">你的第二人格是</p>
          <h1 className="text-5xl font-bold text-gradient mb-4">
            {personality.title}
          </h1>
          <p className="text-2xl text-morandi-sage">
            {personality.name}
          </p>
        </motion.div>

        {/* Keywords */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {personality.keywords.map((keyword, i) => (
            <motion.span
              key={keyword}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="px-4 py-2 rounded-full text-sm"
              style={{
                background: 'rgba(196, 181, 192, 0.15)',
                border: '1px solid rgba(196, 181, 192, 0.3)',
                color: '#F5F1ED',
              }}
            >
              {keyword}
            </motion.span>
          ))}
        </motion.div>

        {/* Radar Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-6 mb-8 radar-container"
        >
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
              <PolarGrid stroke="rgba(255,255,255,0.1)" />
              <PolarAngleAxis
                dataKey="dimension"
                tick={{ fill: '#F5F1ED', fontSize: 12 }}
              />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
              <Radar
                name="性格维度"
                dataKey="score"
                stroke="#C4B5C0"
                strokeWidth={2}
                fill="rgba(196, 181, 192, 0.3)"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card p-6 mb-8"
        >
          <h3 className="text-lg font-semibold mb-4 text-morandi-mauve">
            性格解析
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            {personality.description}
          </p>
          
          <div className="border-t border-gray-700 pt-4">
            <h4 className="text-sm font-medium text-morandi-sage mb-2">
              💡 给你的建议
            </h4>
            <p className="text-sm text-gray-400">
              {personality.advice}
            </p>
          </div>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col gap-4"
        >
          <div className="flex gap-4">
            <button
              onClick={handleDownload}
              className="flex-1 btn-primary flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              保存海报
            </button>
            
            <button
              onClick={handleShare}
              className="flex-1 btn-secondary flex items-center justify-center gap-2"
            >
              <Share2 className="w-5 h-5" />
              分享结果
            </button>
          </div>
          
          <button
            onClick={onRestart}
            className="btn-secondary flex items-center justify-center gap-2 w-full"
          >
            <RotateCcw className="w-5 h-5" />
            重新测试
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
