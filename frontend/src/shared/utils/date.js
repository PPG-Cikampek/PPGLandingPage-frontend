/**
 * Lightweight date formatter for Indonesian locale.
 * Returns a string like: "Kamis, 21 Agustus 2025" or an empty string for invalid input.
 */
export function formatDateIndo(input) {
    if (!input && input !== 0) return "";

    const date = input instanceof Date ? input : new Date(input);
    if (Number.isNaN(date.getTime())) return "";

    const days = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu",
    ];

    const months = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ];

    const dayName = days[date.getDay()];
    const day = date.getDate();
    const monthName = months[date.getMonth()];
    const year = date.getFullYear();

    return `${dayName}, ${day} ${monthName} ${year}`;
}

export default formatDateIndo;
