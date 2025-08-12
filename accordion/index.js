const fadeIn = [
    { display: 'inline-block', offset: 0},
    { transform: 'scaleY(1)', display: 'inline-block', offset: 1}
]

const fadeOut = [
    { transform: 'scaleY(0)', offset: 1},
    { display: 'none', offset: 1},
]
const animationOptions = {
    duration: 300,
    easing: 'ease-in-out',
    fill: 'forwards'
}
const handleClickArrow = (event) => {
    const arrow = event.target
    const id = arrow.getAttribute('data-id')
    const spanArrow = document.getElementById(id)
    const accordionContent = document.querySelector(`div[data-id="${id}"]`)

    if( spanArrow.classList.contains('inverted') ){
        spanArrow.classList.remove('inverted')
        accordionContent.animate(fadeOut, animationOptions)
        return
    } else {
        spanArrow.classList.add('inverted')
        accordionContent.animate(fadeIn, animationOptions)
        return
    }
}
