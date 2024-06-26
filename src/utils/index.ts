import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}



/**
 * Shrink a string to a specified length(len).
 * @function shrinkString
 * @param {string} str
 * @param {number} len
 * @returns {string}
 */
export const shrinkString = ({
    str,
    len
}: {
    str?: string;
    len: number;
}): string => {
    if (!str) return '';
    if (str.length > len) {
        return str.substring(0, len) + '...';
    }
    return str;
};

/**
 * Returns an Encrypted a string .
 * @function encryptString - Encodes or encrypts a string using a base64 Buffer
 * @returns A encoded string .
 */
export const encryptString = (str: string): string => {
    const buffer = Buffer.from(str);
    return buffer.toString("base64");
};

/**
 * Decodes and Returns a string .
 * @function decryptString - Decodes or decrypts an encrypted string Buffer
 * @returns A decoded string .
 */

export const decryptString = (str: string): string => {
    const buffer = Buffer.from(str, "base64");
    return buffer.toString();
};
