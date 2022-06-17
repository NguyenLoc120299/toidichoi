import React from 'react'

const GridImages = ({ images }) => {
    if (images.length === 1)
        return (
            <div>
                a
            </div>
        )
    if (images.length === 2) return <div>GridImages2</div>
    if (images.length === 3) return <div>GridImages3</div>
    if (images.length === 4) return <div>GridImages4</div>
    else
        return (
            <div>GridImages</div>
        )
}

export default GridImages