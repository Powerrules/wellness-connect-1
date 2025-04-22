// lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names with Tailwind-merge and clsx for optimal class handling
 * @param inputs Class values to merge
 * @returns Optimized class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a date to relative time (e.g., "2 minutes ago")
 * @param date Date object or string
 * @returns Relative time string
 */
export function formatRelativeTime(date: Date | string): string {
  const now = new Date();
  const target = new Date(date);
  const seconds = Math.floor((now.getTime() - target.getTime()) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / secondsInUnit);
    if (interval >= 1) {
      return `${interval} ${unit}${interval === 1 ? '' : 's'} ago`;
    }
  }

  return 'Just now';
}

/**
 * Type-safe object access
 * @param obj Object to access
 * @param key Property key
 * @returns Value or undefined
 */
export function safeAccess<T, K extends keyof T>(obj: T, key: K): T[K] | undefined {
  return obj?.[key];
}

/**
 * Truncates text with ellipsis
 * @param text Input string
 * @param length Max length before truncation
 * @returns Truncated string
 */
export function truncate(text: string, length: number = 50): string {
  return text.length > length ? `${text.substring(0, length)}...` : text;
}

// Optional: Emotion-specific utilities
type Emotion = 'happy' | 'sad' | 'angry' | 'anxious' | 'calm' | 'neutral' | 'error';

/**
 * Gets Tailwind classes for emotion states
 * @param emotion Emotion type
 * @returns Tailwind class string
 */
export function getEmotionClasses(emotion: Emotion): string {
  const emotionMap: Record<Emotion, string> = {
    happy: 'bg-green-100 text-green-800 border-green-200',
    sad: 'bg-blue-100 text-blue-800 border-blue-200',
    angry: 'bg-red-100 text-red-800 border-red-200',
    anxious: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    calm: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    neutral: 'bg-gray-100 text-gray-800 border-gray-200',
    error: 'bg-gray-200 text-gray-600 border-gray-300'
  };
  return emotionMap[emotion];
}