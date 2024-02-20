import type { StoryObj } from '@storybook/react';
import { DriftingRenderedProps } from './drifting.interface';
import React, { PropsWithChildren, forwardRef } from 'react';
import { Drifting } from './drifting.component';

import './drifting.story.css';

const Background = forwardRef<HTMLDivElement, DriftingRenderedProps>((_, ref) => {
  return <div ref={ref} className="background" />;
});

const Text = forwardRef<HTMLDivElement, DriftingRenderedProps & { text: string; className: string }>(
  ({ text, className }, ref) => {
    return (
      <div ref={ref} className="text-wrapper">
        <h1 className={className}>{text}</h1>
      </div>
    );
  },
);

const meta = {
  title: 'Drifting',
  component: ({ children }: PropsWithChildren) => <div className="wrapper">{children}</div>,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    children: <Drifting maxMouseRange={20}>{props => <Background {...props} />}</Drifting>,
  },
};

export const WithText: Story = {
  args: {
    children: (
      <>
        <Drifting maxMouseRange={20}>{props => <Background {...props} />}</Drifting>

        <Drifting maxMouseRange={50} maxOrientationRange={20} reverse>
          {props => <Text {...props} text="Drifting component" className="title" />}
        </Drifting>
      </>
    ),
  },
};

export const AllInOne: Story = {
  args: {
    children: (
      <>
        <Drifting maxMouseRange={15} maxOrientationRange={15}>
          {props => <Background {...props} />}
        </Drifting>

        <Drifting maxMouseRange={50} maxOrientationRange={20} reverse>
          {props => <Text {...props} text="Drifting component" className="title" />}
        </Drifting>

        <Drifting maxMouseRange={70} maxOrientationRange={30}>
          {props => <Text {...props} text="🛩" className="emoji-1" />}
        </Drifting>

        <Drifting maxMouseRange={100} maxOrientationRange={40} reverse>
          {props => <Text {...props} text="🚀" className="emoji-2" />}
        </Drifting>

        <Drifting maxMouseRange={300} maxOrientationRange={80}>
          {props => <Text {...props} text="🚚" className="emoji-3" />}
        </Drifting>

        <Drifting maxMouseRange={150} maxOrientationRange={60} reverse>
          {props => <Text {...props} text="☁️" className="emoji-4" />}
        </Drifting>
      </>
    ),
  },
};
