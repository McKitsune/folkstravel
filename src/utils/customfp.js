export function initCustomFP(wrapperSelector = '.fp-wrapper', options = {}) {
    const wrapper = document.querySelector(wrapperSelector);
    

    if (!wrapper) {
        console.warn(`Wrapper "${wrapperSelector}" not found.`);
        return;
    }

    const sections = Array.from(wrapper.children);
    const total = sections.length;
    let currentIndex = 0;
    let isScrolling = false;
    const delay = options.delay || 1000;
    const loop = options.loop || false;
    const debug = options.debug || false;
    const responsiveBreakpoint = options.disableBelow || 0;

    const navLinks = Array.from(document.querySelectorAll('.fp-nav a'));

    const scrollTo = (index) => {
        if (index === currentIndex) return;

        if (index < 0) {
            if (loop) index = total - 1;
            else return;
        }

        else if (index >= total) {
            if (loop) index = 0;
            else return;
        }

        if (typeof options.onLeave === 'function') {
            options.onLeave(currentIndex, index);
        }

        isScrolling = true;

        wrapper.style.transform = `translateX(-${index * 100}vw)`;
        
        updateNav(index);
        currentIndex = index;

        setTimeout(() => {
            isScrolling = false;

            if (typeof options.afterLoad === 'function') {
                options.afterLoad(index);
            }
        }

            , delay);

        if (options.updateHash && sections[index].id) {
            history.replaceState(null, '', `#$ {
                    sections[index].id
                }

                `);
        }

        if (debug) console.log(`Scrolled to section $ {
                index
            }

            `);
    }

        ;

    const updateNav = (index) => {
        navLinks.forEach((link, i) => {
            link.classList.toggle('active', i === index);
        });
    }

        ;

    const onWheel = (e) => {
        if (window.innerWidth < responsiveBreakpoint || isScrolling) return;
        e.preventDefault();
        if (e.deltaY > 0) scrollTo(currentIndex + 1);
        else if (e.deltaY < 0) scrollTo(currentIndex - 1);
    }

        ;

    const onKey = (e) => {
        if (window.innerWidth < responsiveBreakpoint || isScrolling) return;
        if (['ArrowRight', 'ArrowDown'].includes(e.key)) scrollTo(currentIndex + 1);
        if (['ArrowLeft', 'ArrowUp'].includes(e.key)) scrollTo(currentIndex - 1);
    }

        ;

    const onTouch = {
        startX: 0,
        endX: 0
    }

        ;

    const onTouchStart = (e) => {
        const touch = e.changedTouches[0];
        onTouch.startX = touch.screenX;
    }

        ;

    const onTouchEnd = (e) => {
        const touch = e.changedTouches[0];
        onTouch.endX = touch.screenX;
        handleSwipe();
    }

        ;

    const handleSwipe = () => {
        if (isScrolling || window.innerWidth < responsiveBreakpoint) return;
        const deltaX = onTouch.startX - onTouch.endX;
        const threshold = 50;
        if (deltaX > threshold) scrollTo(currentIndex + 1);
        else if (deltaX < -threshold) scrollTo(currentIndex - 1);
    }

        ;

    const bindNav = () => {
        navLinks.forEach((link, i) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                scrollTo(i);
            });
        });
    }

        ;

    const goToHash = () => {
        const hash = window.location.hash.replace('#', '');
        const index = sections.findIndex(sec => sec.id === hash);
        if (index !== -1) scrollTo(index);
    }

        ;

    // Public API
    window.customFP = {
        next: () => scrollTo(currentIndex + 1),
        prev: () => scrollTo(currentIndex - 1),
        moveTo: (index) => scrollTo(index),
        lock: () => isScrolling = true,
        unlock: () => isScrolling = false,
        current: () => currentIndex
    };

    // Event bindings
    window.addEventListener('wheel', onWheel, {
        passive: false
    });
    window.addEventListener('keydown', onKey);
    window.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchend', onTouchEnd);

    bindNav();
    goToHash();
    scrollTo(currentIndex);
}