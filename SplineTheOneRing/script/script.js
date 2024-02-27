gsap.registerPlugin(ScrollTrigger);


// #region TheOneRing
gsap.fromTo('.textContainer', {
    opacity: 0,
}, {
    opacity: 1,
    duration: 1,
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
// #endregion






// #region ContentContainers
gsap.from('.textContainer2', {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: '.textContainer2',
        start: 'top center',
        end: 'bottom bottom',
    }
});
gsap.from('.imgContainer2', {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer2',
        start: 'top center',
        end: 'bottom bottom',
    }
});


gsap.from('.textContainer3', {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: '.textContainer3',
        start: 'top center',
        end: 'bottom bottom',
    }
});
gsap.from('.imgContainer3', {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer3',
        start: 'top center',
        end: 'bottom bottom',
    }
});


gsap.from('.textContainer4', {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: '.textContainer4',
        start: 'top center',
        end: 'bottom bottom',
    }
});
gsap.from('.imgContainer4', {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer4',
        start: 'top center',
        end: 'bottom bottom',
    }
});


gsap.from('.textContainer5', {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: '.textContainer5',
        start: 'top center',
        end: 'bottom bottom',
    }
});
gsap.from('.imgContainer5', {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer5',
        start: 'top center',
        end: 'bottom bottom',
    }
});


gsap.from('.textContainer6', {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: '.textContainer6',
        start: 'top center',
        end: 'bottom bottom',
    }
});
gsap.from('.imgContainer6', {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer6',
        start: 'top center',
        end: 'bottom bottom',
    }
});


gsap.from('.textContainer7', {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: '.textContainer7',
        start: 'top center',
        end: 'bottom bottom',
    }
});
gsap.from('.imgContainer7', {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer7',
        start: 'top center',
        end: 'bottom bottom',
    }
});


gsap.from('.textContainer8', {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: '.textContainer8',
        start: 'top center',
        end: 'bottom bottom',
    }
});
gsap.from('.imgContainer8', {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer8',
        start: 'top center',
        end: 'bottom bottom',
    }
});


gsap.from('.textContainer9', {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: '.textContainer9',
        start: 'top center',
        end: 'bottom bottom',
    }
});
gsap.from('.imgContainer9', {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer9',
        start: 'top center',
        end: 'bottom bottom',
    }
});


gsap.from('.textContainer10', {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: '.textContainer10',
        start: 'top center',
        end: 'bottom bottom',
    }
});
gsap.from('.imgContainer10', {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer10',
        start: 'top center',
        end: 'bottom bottom',
    }
});


gsap.from('.textContainer11', {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: '.textContainer11',
        start: 'top center',
        end: 'bottom bottom',
    }
});
gsap.from('.imgContainer11', {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer11',
        start: 'top center',
        end: 'bottom bottom',
    }
});


gsap.from('.textContainer12', {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: '.textContainer12',
        start: 'top center',
        end: 'bottom bottom',
    }
});
gsap.from('.imgContainer12', {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer12',
        start: 'top center',
        end: 'bottom bottom',
    }
});


gsap.from('.textContainer13', {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: '.textContainer13',
        start: 'top center',
        end: 'bottom bottom',
    }
});
gsap.from('.imgContainer13', {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer13',
        start: 'top center',
        end: 'bottom bottom',
    }
});


gsap.from('.textContainer14', {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: '.textContainer14',
        start: 'top center',
        end: 'bottom bottom',
    }
});
gsap.from('.imgContainer14', {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer14',
        start: 'top center',
        end: 'bottom bottom',
    }
});





// #endregion






// #region Timeline & Dates
gsap.from('.firstTl', {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer2',
        start: 'top center',
        end: 'bottom bottom',
    }
});
gsap.from('.firstDate', {
    left: -500,
    delay: 1,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer2',
        start: 'top center',
        end: 'bottom bottom',
    }
});

gsap.from('.secondTl', {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer3',
        start: 'top center',
        end: 'bottom bottom',
    }
});
gsap.from('.secondDate', {
    right: -500,
    opacity: 0,
    delay: 1,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer3',
        start: 'top center',
        end: 'bottom bottom',
    }
});

gsap.from('.thirdTl', {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer4',
        start: 'top center',
        end: 'bottom bottom',
    }
});
gsap.from('.thirdDate', {
    left: -500,
    opacity: 0,
    delay: 1,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer4',
        start: 'top center',
        end: 'bottom bottom',
    }
});

gsap.from('.fourthTl', {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer5',
        start: 'top center',
        end: 'bottom bottom',
    }
});
gsap.from('.fourthDate', {
    right: -500,
    opacity: 0,
    delay: 1,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer5',
        start: 'top center',
        end: 'bottom bottom',
    }
});

gsap.from('.fifthTl', {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer6',
        start: 'top center',
        end: 'bottom bottom',
    }
});
gsap.from('.fifthDate', {
    left: -500,
    opacity: 0,
    delay: 1,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer6',
        start: 'top center',
        end: 'bottom bottom',
    }
});

gsap.from('.sixthTl', {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer7',
        start: 'top center',
        end: 'bottom bottom',
    }
});
gsap.from('.sixthDate', {
    right: -500,
    opacity: 0,
    delay: 1,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer7',
        start: 'top center',
        end: 'bottom bottom',
    }
});

gsap.from('.seventhTl', {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer8',
        start: 'top center',
        end: 'bottom bottom',
    }
});
gsap.from('.seventhDate', {
    left: -500,
    opacity: 0,
    delay: 1,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer8',
        start: 'top center',
        end: 'bottom bottom',
    }
});

gsap.from('.eighthTl', {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer9',
        start: 'top center',
        end: 'bottom bottom',
    }
});
gsap.from('.eighthDate', {
    right: -500,
    opacity: 0,
    delay: 1,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer9',
        start: 'top center',
        end: 'bottom bottom',
    }
});

gsap.from('.ninthTl', {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer10',
        start: 'top center',
        end: 'bottom bottom',
    }
});
gsap.from('.ninthDate', {
    left: -500,
    opacity: 0,
    delay: 1,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer10',
        start: 'top center',
        end: 'bottom bottom',
    }
});

gsap.from('.tenthTl', {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer11',
        start: 'top center',
        end: 'bottom bottom',
    }
});
gsap.from('.tenthDate', {
    right: -500,
    opacity: 0,
    delay: 1,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer11',
        start: 'top center',
        end: 'bottom bottom',
    }
});

gsap.from('.eleventhTl', {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer12',
        start: 'top center',
        end: 'bottom bottom',
    }
});
gsap.from('.eleventhDate', {
    left: -500,
    opacity: 0,
    delay: 1,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer12',
        start: 'top center',
        end: 'bottom bottom',
    }
});

gsap.from('.twelfthTl', {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer13',
        start: 'top center',
        end: 'bottom bottom',
    }
});
gsap.from('.twelfthDate', {
    right: -500,
    opacity: 0,
    delay: 1,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer13',
        start: 'top center',
        end: 'bottom bottom',
    }
});

gsap.from('.thirteenthTl', {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer14',
        start: 'top center',
        end: 'bottom bottom',
    }
});

gsap.from('.thirteenthDate', {
    left: -500,
    opacity: 0,
    delay: 1,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.textContainer14',
        start: 'top center',
        end: 'bottom bottom',
    }
});


// #endregion

