export interface Task {
  id: string;
  content: string;
  completed: boolean;
  createdAt: Date;
  priority: 'low' | 'medium' | 'high';
}

export type FilterType = 'all' | 'active' | 'completed';
