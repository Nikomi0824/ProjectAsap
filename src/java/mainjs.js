export function ScrolToElement(el) {
    const element = document.querySelector(el)
    if (!element) return

    const top = element.offsetTop;
    window.scrollTo({
        top: top,
        behavior: 'smooth'
    });
}