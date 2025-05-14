gsap.to('h1', {
    scale: 0.5
})

gsap.from('h1', {
    y: '500',
    ease: 'power1.in',
    scale: 0.5,
    duration: 2,
    delay:1
})

const timeline = gsap.timeline();

timeline.to()