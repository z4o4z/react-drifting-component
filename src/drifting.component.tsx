import { useDrifting } from './drifting.hook';
import { DriftingProps } from './drifting.interface';

export const Drifting = ({ reverse, children, maxMouseRange, maxOrientationRange }: DriftingProps) => {
  const ref = useDrifting({
    reverse,
    maxMouseRange,
    maxOrientationRange,
  });

  return children({ ref });
};
