/**
 * Utility to conditionally join class names.
 * Filters out falsy values and joins the rest with spaces.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
