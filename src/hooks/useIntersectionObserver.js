import {useEffect, useState, useRef} from 'react';

const useIntersectionObserver = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                setIsVisible(entry.isIntersecting);
            },
            {root: null, threshold: 0, rootMargin: '-40px'}
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return {isVisible, ref};
};

export default useIntersectionObserver;
