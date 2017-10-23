import React from 'react';

import { storiesOf } from '@storybook/react';

import DriftingComponent from '../src/index';

import Text from './components/Text';
import Wrapper from './components/Wrapper';
import Background from './components/Background';

import './styles.css';

storiesOf('Button', module)
  .add('Background', () => (
    <Wrapper>
      <DriftingComponent maxRange={20} maxMobileRange={20}>
        {props => <Background {...props} />}
      </DriftingComponent>
    </Wrapper>
  ))
  .add('Title', () => (
    <Wrapper>
      <DriftingComponent maxRange={15} maxMobileRange={15}>
        {props => <Background {...props} />}
      </DriftingComponent>

      <DriftingComponent maxRange={50} maxMobileRange={20} reverse>
        {props => <Text {...props} text="Drifting component" className="title" />}
      </DriftingComponent>
    </Wrapper>
  ))
  .add('Lots of elements', () => (
    <Wrapper>
      <DriftingComponent maxRange={15} maxMobileRange={15}>
        {props => <Background {...props} />}
      </DriftingComponent>

      <DriftingComponent maxRange={50} maxMobileRange={20} reverse>
        {props => <Text {...props} text="Drifting component" className="title" />}
      </DriftingComponent>

      <DriftingComponent maxRange={70} maxMobileRange={30}>
        {props => <Text {...props} text="🛩" className="emoji-1" />}
      </DriftingComponent>

      <DriftingComponent maxRange={100} maxMobileRange={40} reverse>
        {props => <Text {...props} text="🚀" className="emoji-2" />}
      </DriftingComponent>

      <DriftingComponent maxRange={300} maxMobileRange={80}>
        {props => <Text {...props} text="🚚" className="emoji-3" />}
      </DriftingComponent>

      <DriftingComponent maxRange={150} maxMobileRange={60} reverse>
        {props => <Text {...props} text="☁️" className="emoji-4" />}
      </DriftingComponent>
    </Wrapper>
  ));
