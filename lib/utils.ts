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

export function debounce<T extends unknown[]>(callback: (...args: T) => void, delay: number) {
  let timeout: NodeJS.Timeout;

  return function (...args: T) {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(...args), delay);
  };
}

/**
 *
 * @param amount
 * @param currency
 * @param locale
 * @returns
 */
export const formatCurrency = (amount: number, currency: string = "USD", locale: string = "en-US"): string => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2, // Ensures two decimal places
  }).format(amount);
};
