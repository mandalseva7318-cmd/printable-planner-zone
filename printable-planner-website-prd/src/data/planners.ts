export interface Planner {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  pdfUrl: string;
  tags: string[];
  featured: boolean;
}

export const categories = [
  { id: 'daily', name: 'Daily Planner', icon: '📅' },
  { id: 'weekly', name: 'Weekly Planner', icon: '📆' },
  { id: 'budget', name: 'Budget Planner', icon: '💰' },
  { id: 'study', name: 'Study Planner', icon: '📚' },
  { id: 'meal', name: 'Meal Planner', icon: '🍽️' },
  { id: 'habit', name: 'Habit Tracker', icon: '✅' },
  { id: 'fitness', name: 'Fitness Planner', icon: '💪' },
];

export const planners: Planner[] = [
  {
    id: 'minimal-daily-planner',
    title: 'Minimal Daily Planner',
    description: 'A clean and simple daily planner to organize your tasks, schedule, and priorities. Perfect for staying productive throughout the day.',
    category: 'daily',
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=1200&fit=crop',
    pdfUrl: '#',
    tags: ['minimal', 'daily', 'productivity'],
    featured: true,
  },
  {
    id: 'elegant-weekly-planner',
    title: 'Elegant Weekly Planner',
    description: 'Plan your entire week with this beautiful weekly spread. Includes sections for goals, priorities, and notes.',
    category: 'weekly',
    imageUrl: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=1200&fit=crop',
    pdfUrl: '#',
    tags: ['elegant', 'weekly', 'organization'],
    featured: true,
  },
  {
    id: 'budget-tracker',
    title: 'Monthly Budget Tracker',
    description: 'Take control of your finances with this comprehensive budget planner. Track income, expenses, and savings goals.',
    category: 'budget',
    imageUrl: 'https://images.unsplash.com/photo-1554224311-beee460c201f?w=800&h=1200&fit=crop',
    pdfUrl: '#',
    tags: ['budget', 'finance', 'money'],
    featured: true,
  },
  {
    id: 'student-study-planner',
    title: 'Student Study Planner',
    description: 'Perfect for students! Track assignments, exam dates, and study sessions. Stay on top of your academic goals.',
    category: 'study',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=1200&fit=crop',
    pdfUrl: '#',
    tags: ['study', 'student', 'academic'],
    featured: true,
  },
  {
    id: 'meal-prep-planner',
    title: 'Weekly Meal Prep Planner',
    description: 'Plan your meals for the week ahead. Includes grocery list and meal prep checklist for healthy eating.',
    category: 'meal',
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=1200&fit=crop',
    pdfUrl: '#',
    tags: ['meal', 'food', 'healthy'],
    featured: true,
  },
  {
    id: 'habit-tracker-monthly',
    title: 'Monthly Habit Tracker',
    description: 'Build positive habits and break bad ones. Track up to 30 habits daily with this simple and effective tracker.',
    category: 'habit',
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=1200&fit=crop',
    pdfUrl: '#',
    tags: ['habit', 'tracking', 'goals'],
    featured: true,
  },
  {
    id: 'daily-planner-simple',
    title: 'Simple Daily Planner',
    description: 'Straightforward daily planning with hourly schedule, to-do list, and notes section.',
    category: 'daily',
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=1200&fit=crop',
    pdfUrl: '#',
    tags: ['daily', 'simple', 'schedule'],
    featured: false,
  },
  {
    id: 'weekly-goals-planner',
    title: 'Weekly Goals Planner',
    description: 'Set and achieve your weekly goals with dedicated sections for priorities, tasks, and reflections.',
    category: 'weekly',
    imageUrl: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&h=1200&fit=crop',
    pdfUrl: '#',
    tags: ['weekly', 'goals', 'productivity'],
    featured: false,
  },
  {
    id: 'monthly-budget-planner',
    title: 'Simple Budget Planner',
    description: 'Easy-to-use monthly budget planner for tracking expenses and managing your money wisely.',
    category: 'budget',
    imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=1200&fit=crop',
    pdfUrl: '#',
    tags: ['budget', 'monthly', 'expenses'],
    featured: false,
  },
  {
    id: 'exam-study-schedule',
    title: 'Exam Study Schedule',
    description: 'Prepare for exams with this detailed study schedule. Allocate study time for each subject effectively.',
    category: 'study',
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=1200&fit=crop',
    pdfUrl: '#',
    tags: ['study', 'exam', 'schedule'],
    featured: false,
  },
  {
    id: 'family-meal-planner',
    title: 'Family Meal Planner',
    description: 'Plan delicious meals for the whole family. Includes space for breakfast, lunch, dinner, and snacks.',
    category: 'meal',
    imageUrl: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&h=1200&fit=crop',
    pdfUrl: '#',
    tags: ['meal', 'family', 'weekly'],
    featured: false,
  },
  {
    id: 'daily-habit-tracker',
    title: 'Daily Habit Tracker',
    description: 'Simple daily habit tracker to monitor your routines and build consistency in your life.',
    category: 'habit',
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=1200&fit=crop',
    pdfUrl: '#',
    tags: ['habit', 'daily', 'routine'],
    featured: false,
  },
  {
    id: 'fitness-workout-log',
    title: 'Fitness Workout Log',
    description: 'Track your workouts, exercises, sets, and reps. Perfect for gym enthusiasts and fitness lovers.',
    category: 'fitness',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=1200&fit=crop',
    pdfUrl: '#',
    tags: ['fitness', 'workout', 'exercise'],
    featured: true,
  },
  {
    id: 'daily-schedule-hourly',
    title: 'Hourly Daily Schedule',
    description: 'Detailed hourly planner from 6 AM to 10 PM. Perfect for time-blocking and scheduling appointments.',
    category: 'daily',
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=1200&fit=crop',
    pdfUrl: '#',
    tags: ['daily', 'hourly', 'schedule'],
    featured: false,
  },
  {
    id: 'weekly-planner-minimalist',
    title: 'Minimalist Weekly Planner',
    description: 'Clean minimalist design for weekly planning. Focus on what matters most without distractions.',
    category: 'weekly',
    imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=1200&fit=crop',
    pdfUrl: '#',
    tags: ['weekly', 'minimalist', 'clean'],
    featured: false,
  },
  {
    id: 'savings-goal-tracker',
    title: 'Savings Goal Tracker',
    description: 'Track your savings goals and watch your progress grow. Includes visual trackers for motivation.',
    category: 'budget',
    imageUrl: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=800&h=1200&fit=crop',
    pdfUrl: '#',
    tags: ['budget', 'savings', 'goals'],
    featured: false,
  },
  {
    id: 'homework-assignment-tracker',
    title: 'Homework Assignment Tracker',
    description: 'Never miss a deadline! Track all your homework assignments and due dates in one place.',
    category: 'study',
    imageUrl: 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=800&h=1200&fit=crop',
    pdfUrl: '#',
    tags: ['study', 'homework', 'student'],
    featured: false,
  },
  {
    id: 'healthy-eating-planner',
    title: 'Healthy Eating Planner',
    description: 'Plan nutritious meals and track your healthy eating journey. Includes water intake and nutrition notes.',
    category: 'meal',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=1200&fit=crop',
    pdfUrl: '#',
    tags: ['meal', 'healthy', 'nutrition'],
    featured: false,
  },
  {
    id: 'morning-routine-tracker',
    title: 'Morning Routine Tracker',
    description: 'Start your day right with a structured morning routine. Track habits and build a powerful morning practice.',
    category: 'habit',
    imageUrl: 'https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=800&h=1200&fit=crop',
    pdfUrl: '#',
    tags: ['habit', 'morning', 'routine'],
    featured: false,
  },
  {
    id: 'gym-progress-tracker',
    title: 'Gym Progress Tracker',
    description: 'Monitor your fitness progress with detailed workout logs, measurements, and personal records.',
    category: 'fitness',
    imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=1200&fit=crop',
    pdfUrl: '#',
    tags: ['fitness', 'gym', 'progress'],
    featured: false,
  },
];

export const getCategoryById = (categoryId: string) => {
  return categories.find(cat => cat.id === categoryId);
};

export const getPlannersByCategory = (categoryId: string) => {
  return planners.filter(planner => planner.category === categoryId);
};

export const getFeaturedPlanners = () => {
  return planners.filter(planner => planner.featured);
};

export const getPlannerById = (id: string) => {
  return planners.find(planner => planner.id === id);
};

export const searchPlanners = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return planners.filter(
    planner =>
      planner.title.toLowerCase().includes(lowerQuery) ||
      planner.description.toLowerCase().includes(lowerQuery) ||
      planner.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};
