import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const fallbackSvgDataUri = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22300%22%20height%3D%22300%22%20viewBox%3D%220%200%20300%20300%22%3E%3Crect%20width%3D%22300%22%20height%3D%22300%22%20fill%3D%22%23cccccc%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23666666%22%3EProduct%20Image%3C%2Ftext%3E%3C%2Fsvg%3E';

function sanitizeImageUrl(url) {
  if (!url || typeof url !== 'string') return fallbackSvgDataUri;
  if (url.includes('via.placeholder.com')) return fallbackSvgDataUri;
  return url;
}

export function getProductImage(product) {
  if (!product) return fallbackSvgDataUri;
  
  if (typeof product.image === "string" && product.image.trim() !== "") {
    return sanitizeImageUrl(product.image);
  }
  if (product.image && typeof product.image === "object" && product.image.url) {
    return sanitizeImageUrl(product.image.url);
  }
  if (Array.isArray(product.images) && product.images.length > 0) {
    if (typeof product.images[0] === "string") return sanitizeImageUrl(product.images[0]);
    if (product.images[0].url) return sanitizeImageUrl(product.images[0].url);
  }
  return fallbackSvgDataUri;
}
