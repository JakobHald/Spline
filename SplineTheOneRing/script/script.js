gsap.registerPlugin(ScrollTrigger);

gsap.from('.textContainer', {
    x: -1000,
    duration: 1,
})

gsap.from('.ringContainer', {
    x: 1000,
    duration: 1,
    delay: 1
})


gsap.to('.textContainer', {
    opacity: 0,
    
    scrollTrigger: {
        trigger: '.textContainer',
        start: 'top top',
        end: 'bottom 10%',
        scrub: true,
    }
});




gsap.to('.theOneRing', {
    opacity: 0,
    
    scrollTrigger: {
        trigger: '.textContainer',
        start: 'top top',
        end: 'bottom 10%',
        scrub: true,
    }
});
