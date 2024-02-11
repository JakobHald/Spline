gsap.registerPlugin(ScrollTrigger);

gsap.fromTo('.textContainer', {
    opacity: 0,
}, {
    opacity: 1,
    duration: 2,
});


gsap.fromTo('.textContainer', {
    opacity: 1,
}, {
    
    opacity: 0,
    scrollTrigger: {
        trigger: '.textContainer',
        start: 'top top',
        end: 'bottom 10%',
        scrub: true,
    }
});



gsap.from('.ringContainer', {
    x: 1000,
    duration: 1,
    delay: 1
})

gsap.to('.theOneRing', {
    opacity: 0,
    
    
    scrollTrigger: {
        trigger: '.textContainer',
        start: 'top top',
        end: 'bottom 10%',
        scrub: true,
    }
});

gsap.from('.textContainer2', {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: '.textContainer2',
        start: 'top center',
        end: 'bottom bottom',
    }
});
