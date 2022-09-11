
export const scrollToTop = () => {
    let scroll = 0;
    setTimeout(() => {
        window.scrollTo({ top: scroll, behavior: 'smooth' })
    }, 100)
}

