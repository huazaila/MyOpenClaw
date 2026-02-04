import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, Edit2, Check, X, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Task, FilterType } from '@/types';

const filters: FilterType[] = ['all', 'active', 'completed'];

export default function TodoList() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem('myopenclaw-tasks');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState<FilterType>('all');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingContent, setEditingContent] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('myopenclaw-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTask.trim()) return;
    
    const task: Task = {
      id: crypto.randomUUID(),
      content: newTask.trim(),
      completed: false,
      createdAt: new Date(),
      priority: 'medium',
    };
    
    setTasks(prev => [task, ...prev]);
    setNewTask('');
  };

  const toggleTask = (id: string) => {
    setTasks(prev => 
      prev.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const startEditing = (task: Task) => {
    setEditingId(task.id);
    setEditingContent(task.content);
  };

  const saveEdit = () => {
    if (!editingId || !editingContent.trim()) {
      setEditingId(null);
      return;
    }
    
    setTasks(prev =>
      prev.map(task =>
        task.id === editingId ? { ...task, content: editingContent.trim() } : task
      )
    );
    setEditingId(null);
    setEditingContent('');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingContent('');
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const stats = {
    total: tasks.length,
    active: tasks.filter(t => !t.completed).length,
    completed: tasks.filter(t => t.completed).length,
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-rose-200/30 dark:bg-rose-900/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-8 sm:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-2">
            <span className="gradient-text">MyOpenClaw</span>
          </h1>
          <p className="text-muted-foreground text-lg">优雅的任务管理</p>
          
          {/* Stats */}
          <div className="flex justify-center gap-6 sm:gap-8 mt-6">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-foreground">{stats.total}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">全部</div>
            </motion.div>
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-primary">{stats.active}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">待办</div>
            </motion.div>
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-green-500">{stats.completed}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">已完成</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Add Task Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 sm:mb-8"
        >
          <div className="flex gap-2">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addTask()}
              placeholder="添加新任务..."
              className="flex-1 px-4 py-3 sm:px-5 sm:py-4 rounded-xl border border-border bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-base"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={addTask}
              className="px-5 py-3 sm:px-6 sm:py-4 bg-primary text-primary-foreground rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-colors flex items-center gap-2 font-medium"
            >
              <Plus size={20} />
              <span className="hidden sm:inline">添加</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex justify-center gap-2 mb-6"
        >
          {filters.map((f) => (
            <motion.button
              key={f}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setFilter(f)}
              className={cn(
                "px-4 py-2 rounded-lg font-medium transition-all capitalize text-sm sm:text-base",
                filter === f
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-muted-foreground hover:text-foreground border border-border"
              )}
            >
              {f === 'all' ? '全部' : f === 'active' ? '待办' : '已完成'}
            </motion.button>
          ))}
        </motion.div>

        {/* Task List */}
        <div className="space-y-3 sm:space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredTasks.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12 sm:py-16 text-muted-foreground"
              >
                <div className="text-4xl sm:text-6xl mb-4">📝</div>
                <p className="text-lg">
                  {filter === 'all' ? '暂无任务，开始添加吧！' : 
                   filter === 'active' ? '没有待办任务' : '没有已完成任务'}
                </p>
              </motion.div>
            ) : (
              filteredTasks.map((task) => (
                <motion.div
                  key={task.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  whileHover={{ scale: 1.01 }}
                  className={cn(
                    "group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border transition-all",
                    task.completed
                      ? "bg-green-50/80 dark:bg-green-900/20 border-green-200/50 dark:border-green-800/30"
                      : "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-border shadow-sm hover:shadow-md"
                  )}
                >
                  {/* Checkbox */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleTask(task.id)}
                    className={cn(
                      "flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 transition-all flex items-center justify-center",
                      task.completed
                        ? "bg-green-500 border-green-500"
                        : "border-muted-foreground/30 hover:border-primary"
                    )}
                  >
                    {task.completed && (
                      <motion.svg
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </motion.svg>
                    )}
                  </motion.button>

                  {/* Task Content */}
                  {editingId === task.id ? (
                    <div className="flex-1 flex gap-2">
                      <input
                        type="text"
                        value={editingContent}
                        onChange={(e) => setEditingContent(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') saveEdit();
                          if (e.key === 'Escape') cancelEdit();
                        }}
                        onBlur={saveEdit}
                        autoFocus
                        className="flex-1 px-3 py-1 rounded-lg border border-primary bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  ) : (
                    <span
                      className={cn(
                        "flex-1 text-base sm:text-lg transition-all cursor-pointer",
                        task.completed
                          ? "line-through text-muted-foreground"
                          : "text-foreground"
                      )}
                      onDoubleClick={() => startEditing(task)}
                    >
                      {task.content}
                    </span>
                  )}

                  {/* Actions */}
                  <div className="flex items-center gap-1 sm:gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {editingId !== task.id && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => startEditing(task)}
                        className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      >
                        <Edit2 size={16} className="sm:w-5 sm:h-5" />
                      </motion.button>
                    )}
                    
                    {editingId === task.id ? (
                      <>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={saveEdit}
                          className="p-2 rounded-lg text-green-500 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                        >
                          <Check size={16} className="sm:w-5 sm:h-5" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={cancelEdit}
                          className="p-2 rounded-lg text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                        >
                          <X size={16} className="sm:w-5 sm:h-5" />
                        </motion.button>
                      </>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => deleteTask(task.id)}
                        className="p-2 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                      >
                        <Trash2 size={16} className="sm:w-5 sm:h-5" />
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8 text-sm text-muted-foreground"
        >
          <p>双击任务可编辑 • 数据自动保存到本地</p>
        </motion.div>
      </div>
    </div>
  );
}
