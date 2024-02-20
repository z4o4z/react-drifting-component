import { useEffect, useRef } from 'react';
export const useDrifting = ({ reverse, maxMouseRange, maxOrientationRange = maxMouseRange }) => {
    const ref = useRef(null);
    useEffect(() => {
        const getDegreeSin = (degree) => Math.sin((Math.PI * degree) / 180);
        let frame;
        const onDeviceOrientation = ({ beta, gamma }) => {
            if (beta === null || gamma === null)
                return;
            frame = requestAnimationFrame(() => {
                if (!ref.current)
                    return;
                const maxRange = maxOrientationRange * (reverse ? -1 : 1);
                if (window.screen.orientation.type.includes('landscape')) {
                    ref.current.style.transform = `translateX(${getDegreeSin(beta) * maxRange}px) translateY(${getDegreeSin(gamma * 2) * maxRange}px)`;
                }
                else {
                    ref.current.style.transform = `translateX(${getDegreeSin(gamma * 2) * maxRange}px) translateY(${getDegreeSin(beta) * maxRange}px)`;
                }
            });
        };
        const onMouseMove = ({ clientX, clientY }) => {
            frame = requestAnimationFrame(() => {
                if (!ref.current)
                    return;
                const maxRange = maxMouseRange * (reverse ? -1 : 1);
                const factorX = maxRange / (window.innerWidth / 2);
                const factorY = maxRange / (window.innerHeight / 2);
                const { top, left, width, height } = ref.current.getBoundingClientRect();
                ref.current.style.transform = `translateX(${factorX * (clientX - left - width / 2)}px) translateY(${factorY * (clientY - top - height / 2)}px)`;
            });
        };
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('deviceorientation', onDeviceOrientation);
        return () => {
            if (frame) {
                cancelAnimationFrame(frame);
            }
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('deviceorientation', onDeviceOrientation);
        };
    }, [reverse, maxMouseRange, maxOrientationRange]);
    return ref;
};
