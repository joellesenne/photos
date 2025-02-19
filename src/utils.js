export function currentGetYear() {
    const currentYear = new Date().getFullYear();
    if (currentYear > 2022) {
        return `2022-${currentYear}`;
    }
        return String(currentYear);

}

export const sortMethods = {
    ascending: (a, b) => a.id - b.id,
    descending: (a, b) => b.id - a.id,
};

export function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
