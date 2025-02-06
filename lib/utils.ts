import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 *
 * @param {*} callback
 * @param {*} delay
 * @returns
 * this is used to create a debounced function and return a function.
 * this returned function can then be used anywhere.
 */

export function debounce(callback: Function, delay: number) {
  let timeout: NodeJS.Timeout;

  return function (...args: any) {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(...args), delay);
  };
}
