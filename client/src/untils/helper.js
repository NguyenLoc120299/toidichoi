let scroll = 0;
export const scrollToTop = () => {
    setTimeout(() => {
        window.scrollTo({ top: scroll, behavior: 'smooth' })
    }, 100)
}