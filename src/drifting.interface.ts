export interface DriftingOptions {
  reverse?: boolean;
  maxMouseRange: number;
  maxOrientationRange?: number;
}

export interface DriftingRenderedProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: React.RefObject<any>;
}

export interface DriftingProps extends DriftingOptions {
  children: (props: DriftingRenderedProps) => React.ReactNode;
}
