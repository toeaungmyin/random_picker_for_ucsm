import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const links = [
    {
        name: "Random Picker",
        href: "/random-picker"
    },
    {
        name: "Picked Items",
        href: "/random-picker/picked-items"
    }
]