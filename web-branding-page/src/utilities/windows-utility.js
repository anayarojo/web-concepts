
export function scrollToTop(offset = 0){
    window.scroll({ top: 0 + offset, left: 0, behavior: 'smooth' })
}

export function scrollToSelector(selector, offset = 0){
    window.scrollBy({ top: document.querySelector(selector).getBoundingClientRect().top + offset, left: 0, behavior: 'smooth' })
}

export function scrollToElement(element, offset = 0) {
    window.scrollBy({ top: element.getBoundingClientRect().top + offset, left: 0, behavior: 'smooth' })
}