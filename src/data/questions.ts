import type { Question, PersonalityType } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: "当你参加一个聚会时，你通常会...",
    options: [
      { id: '1a', text: "主动与陌生人交谈，享受社交氛围", scores: { energy: 3, extraversion: 3 } },
      { id: '1b', text: "只和熟悉的朋友待在一起", scores: { energy: 1, extraversion: 1 } },
      { id: '1c', text: "找个安静角落观察周围", scores: { energy: -1, introversion: 3 } },
      { id: '1d', text: "提前离开，更喜欢独处时光", scores: { energy: -2, introversion: 3 } },
    ],
  },
  {
    id: 2,
    text: "面对一个新的挑战，你首先会...",
    options: [
      { id: '2a', text: "凭直觉直接行动，边做边调整", scores: { intuition: 3, spontaneity: 2 } },
      { id: '2b', text: "收集信息，制定详细计划", scores: { sensing: 3, planning: 2 } },
      { id: '2c', text: "咨询他人意见，综合各方观点", scores: { feeling: 2, collaboration: 2 } },
      { id: '2d', text: "等待时机成熟，不急于行动", scores: { sensing: 2, caution: 3 } },
    ],
  },
  {
    id: 3,
    text: "在做决定时，你更重视...",
    options: [
      { id: '3a', text: "逻辑分析和客观数据", scores: { thinking: 3, logic: 3 } },
      { id: '3b', text: "内心感受和价值观", scores: { feeling: 3, empathy: 2 } },
      { id: '3c', text: "对周围人的影响和和谐", scores: { feeling: 2, harmony: 3 } },
      { id: '3d', text: "可能带来的长远后果", scores: { intuition: 2, foresight: 3 } },
    ],
  },
  {
    id: 4,
    text: "你的理想周末是...",
    options: [
      { id: '4a', text: "参加户外活动或社交聚会", scores: { energy: 3, extraversion: 2 } },
      { id: '4b', text: "在家阅读、看电影或做手工", scores: { introversion: 3, creativity: 2 } },
      { id: '4c', text: "学习新技能或探索新地方", scores: { curiosity: 3, growth: 2 } },
      { id: '4d', text: "完成待办清单，整理生活", scores: { organization: 3, productivity: 2 } },
    ],
  },
  {
    id: 5,
    text: "当朋友向你倾诉烦恼时，你会...",
    options: [
      { id: '5a', text: "给出解决建议和行动方案", scores: { thinking: 3, problemSolving: 3 } },
      { id: '5b', text: "倾听并表达理解和共情", scores: { feeling: 3, empathy: 3 } },
      { id: '5c', text: "分享自己的类似经历", scores: { extraversion: 2, connection: 2 } },
      { id: '5d', text: "默默陪伴，给予空间", scores: { introversion: 2, support: 2 } },
    ],
  },
  {
    id: 6,
    text: "在团队合作中，你通常扮演...",
    options: [
      { id: '6a', text: "领导者，推动进度和方向", scores: { leadership: 3, extraversion: 2 } },
      { id: '6b', text: "创意者，提供新想法和方案", scores: { creativity: 3, intuition: 2 } },
      { id: '6c', text: "执行者，专注完成任务", scores: { reliability: 3, sensing: 2 } },
      { id: '6d', text: "协调者，维护团队和谐", scores: { harmony: 3, feeling: 2 } },
    ],
  },
  {
    id: 7,
    text: "你更欣赏哪种生活方式...",
    options: [
      { id: '7a', text: "充满变化和惊喜的冒险", scores: { spontaneity: 3, adventure: 3 } },
      { id: '7b', text: "稳定有序的日常规律", scores: { organization: 3, stability: 3 } },
      { id: '7c', text: "自由灵活的随心所欲", scores: { freedom: 3, flexibility: 3 } },
      { id: '7d', text: "有目标有计划的前进", scores: { planning: 3, achievement: 2 } },
    ],
  },
  {
    id: 8,
    text: "面对批评时，你的第一反应是...",
    options: [
      { id: '8a', text: "理性分析是否有道理", scores: { thinking: 3, objectivity: 3 } },
      { id: '8b', text: "感到受伤，反思自己", scores: { feeling: 2, sensitivity: 3 } },
      { id: '8c', text: "辩解并解释自己的立场", scores: { assertiveness: 2, defense: 2 } },
      { id: '8d', text: "虚心接受，寻求改进", scores: { growth: 3, adaptability: 2 } },
    ],
  },
  {
    id: 9,
    text: "你认为成功最重要的是...",
    options: [
      { id: '9a', text: "实现个人目标和梦想", scores: { ambition: 3, selfActualization: 3 } },
      { id: '9b', text: "拥有幸福的亲密关系", scores: { connection: 3, love: 3 } },
      { id: '9c', text: "对社会做出有意义的贡献", scores: { altruism: 3, purpose: 3 } },
      { id: '9d', text: "享受当下的快乐和自由", scores: { hedonism: 3, presence: 2 } },
    ],
  },
  {
    id: 10,
    text: "在空闲时间，你更喜欢...",
    options: [
      { id: '10a', text: "刷社交媒体，了解新鲜事", scores: { extraversion: 2, curiosity: 2 } },
      { id: '10b', text: "深度阅读或学习新知识", scores: { introversion: 2, depth: 3 } },
      { id: '10c', text: "运动健身或户外活动", scores: { energy: 2, vitality: 3 } },
      { id: '10d', text: "创作或实践某个爱好", scores: { creativity: 3, flow: 2 } },
    ],
  },
  {
    id: 11,
    text: "面对不确定性，你倾向于...",
    options: [
      { id: '11a', text: "拥抱未知，相信直觉", scores: { intuition: 3, openness: 3 } },
      { id: '11b', text: "控制风险，做好备案", scores: { caution: 3, preparedness: 3 } },
      { id: '11c', text: "寻求他人指导和建议", scores: { collaboration: 2, guidance: 2 } },
      { id: '11d', text: "顺势而为，灵活应对", scores: { adaptability: 3, resilience: 2 } },
    ],
  },
  {
    id: 12,
    text: "如果可以用一个词形容自己，那会是...",
    options: [
      { id: '12a', text: "开拓者——勇于尝试新事物", scores: { pioneer: 3, adventure: 2 } },
      { id: '12b', text: "守护者——珍视传统与稳定", scores: { guardian: 3, loyalty: 2 } },
      { id: '12c', text: "梦想家——追求理想与意义", scores: { dreamer: 3, idealism: 3 } },
      { id: '12d', text: "实干家——专注行动与结果", scores: { doer: 3, pragmatism: 3 } },
    ],
  },
];

export const personalityTypes: PersonalityType[] = [
  {
    id: 'pioneer',
    name: '开拓者',
    title: '自由灵魂',
    description: '你是一个充满好奇心和冒险精神的人。你渴望探索未知，不喜欢被规则和常规束缚。你的能量来自于新的体验和可能性，而不是稳定和安全。你善于发现机会，并勇于迈出第一步。',
    keywords: ['冒险', '创新', '独立', '好奇'],
    dimensions: {
      energy: 80,
      creativity: 90,
      spontaneity: 85,
      openness: 88,
      adaptability: 75,
    },
    advice: '你的冒险精神是你的超能力，但有时也需要停下来巩固成果。学会在探索和深耕之间找到平衡，你的成就将更加稳固。',
  },
  {
    id: 'guardian',
    name: '守护者',
    title: '可靠支柱',
    description: '你是一个注重稳定和秩序的人。你重视承诺，对朋友和家人非常忠诚。你喜欢可预测的环境，并在其中发挥最佳水平。你的可靠性让你成为他人信赖的依靠。',
    keywords: ['可靠', '忠诚', '稳定', '务实'],
    dimensions: {
      organization: 90,
      reliability: 88,
      stability: 85,
      loyalty: 82,
      caution: 75,
    },
    advice: '你的稳定性给了他人安全感，但不要因此害怕改变。偶尔的冒险和变化可能带来意想不到的成长。',
  },
  {
    id: 'dreamer',
    name: '梦想家',
    title: '理想主义者',
    description: '你是一个富有想象力和深度的人。你追求生活的意义，不满足于表面的成功。你对美和真理敏感，常常思考人生的宏大命题。你的同理心让你能够理解他人的痛苦。',
    keywords: ['理想', '共情', '深度', '意义'],
    dimensions: {
      empathy: 90,
      idealism: 88,
      creativity: 82,
      depth: 85,
      altruism: 80,
    },
    advice: '你的理想主义让世界更美好，但也要学会接受不完美。将宏大的愿景拆解为可行的步骤，你的梦想将更容易实现。',
  },
  {
    id: 'doer',
    name: '实干家',
    title: '效率达人',
    description: '你是一个注重结果和效率的人。你喜欢设定目标并全力以赴去实现。你善于解决问题，对拖延和借口没有耐心。你的行动力常常让你脱颖而出。',
    keywords: ['高效', '务实', '目标导向', '执行力'],
    dimensions: {
      productivity: 90,
      pragmatism: 88,
      achievement: 85,
      planning: 82,
      problemSolving: 80,
    },
    advice: '你的执行力令人惊叹，但不要忘记过程中的乐趣和意义。有时候，旅程和目的地同样重要。',
  },
  {
    id: 'harmonizer',
    name: '协调者',
    title: '和平使者',
    description: '你是一个重视和谐与平衡的人。你善于倾听，能够在冲突中看到各方的立场。你的存在让周围的人感到舒适和被理解。你是团队中的粘合剂。',
    keywords: ['和谐', '共情', '外交', '包容'],
    dimensions: {
      harmony: 90,
      empathy: 85,
      collaboration: 88,
      support: 82,
      adaptability: 78,
    },
    advice: '你的和谐能力很珍贵，但也要学会表达自己的需求。有时候，健康的冲突比表面的和平更有价值。',
  },
  {
    id: 'thinker',
    name: '思考者',
    title: '智慧探索者',
    description: '你是一个热爱知识和真理的人。你喜欢深入分析问题，不轻易接受表面的答案。你的逻辑性和客观性让你在复杂情况下保持清醒。',
    keywords: ['理性', '分析', '求知', '独立'],
    dimensions: {
      logic: 90,
      objectivity: 88,
      curiosity: 85,
      depth: 82,
      foresight: 80,
    },
    advice: '你的理性思维是你的优势，但也要关注情感维度。有时候，人心比逻辑更复杂，也更重要。',
  },
  {
    id: 'creator',
    name: '创造者',
    title: '灵感艺术家',
    description: '你是一个充满创造力和热情的人。你看待世界的方式独特，善于发现美和可能性。你的想象力常常带给他人惊喜和启发。',
    keywords: ['创造', '热情', '独特', '灵感'],
    dimensions: {
      creativity: 92,
      intuition: 88,
      openness: 85,
      spontaneity: 80,
      flow: 78,
    },
    advice: '你的创造力是宝贵的礼物，但完成作品和开始作品同样重要。学会在创作和交付之间找到节奏。',
  },
  {
    id: 'strategist',
    name: '战略家',
    title: '远见规划者',
    description: '你是一个具有远见和规划能力的人。你善于看到大局，并为未来做好准备。你的深思熟虑常常让你在竞争中占据优势。',
    keywords: ['远见', '规划', '智慧', '冷静'],
    dimensions: {
      foresight: 90,
      planning: 88,
      logic: 85,
      objectivity: 82,
      preparedness: 80,
    },
    advice: '你的规划能力令人钦佩，但也要给意外和机遇留出空间。有时候，最好的计划是灵活的计划。',
  },
  {
    id: 'empath',
    name: '共情者',
    title: '心灵感应者',
    description: '你是一个极具同理心和敏感度的人。你能够深刻地感受他人的情绪，并给予温暖的支持。你的存在本身就是一个治愈的力量。',
    keywords: ['共情', '温暖', '直觉', '治愈'],
    dimensions: {
      empathy: 95,
      sensitivity: 88,
      connection: 85,
      support: 82,
      harmony: 80,
    },
    advice: '你的共情能力让你成为他人的避风港，但也要注意保护自己的能量。学会设立界限，你的善良才能持久。',
  },
];

export function calculatePersonality(answers: Record<number, string>): PersonalityType {
  const scores: Record<string, number> = {};
  
  // 累加所有分数
  Object.entries(answers).forEach(([questionId, optionId]) => {
    const question = questions.find(q => q.id === parseInt(questionId));
    const option = question?.options.find(o => o.id === optionId);
    
    if (option) {
      Object.entries(option.scores).forEach(([dimension, score]) => {
        scores[dimension] = (scores[dimension] || 0) + score;
      });
    }
  });

  // 计算每个性格类型的匹配度
  let bestMatch = personalityTypes[0];
  let highestScore = -Infinity;

  personalityTypes.forEach(type => {
    let matchScore = 0;
    Object.entries(type.dimensions).forEach(([dimension, weight]) => {
      const userScore = scores[dimension] || 0;
      matchScore += userScore * (weight / 100);
    });
    
    if (matchScore > highestScore) {
      highestScore = matchScore;
      bestMatch = type;
    }
  });

  return bestMatch;
}
