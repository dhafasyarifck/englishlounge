// utils.js

/**
 * Convert a number into Indonesian Rupiah currency format
 * @param {number} number - The number to be formatted
 * @returns {string} The formatted currency string
 */
export const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
};
