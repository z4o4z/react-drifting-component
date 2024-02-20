import { useDrifting } from './drifting.hook';
export const Drifting = ({ reverse, children, maxMouseRange, maxOrientationRange }) => {
    const ref = useDrifting({
        reverse,
        maxMouseRange,
        maxOrientationRange,
    });
    return children({ ref });
};
