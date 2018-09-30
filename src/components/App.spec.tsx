import * as React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import Bg from './Bg';
import Count from './Count';

describe('App', () => {
  it('contains <Bg/>', () => {
    const component = shallow(<App />);
    expect(component.contains(<Bg />)).toBeTruthy();
  });

  it('contains <Count/>', () => {
    const component = shallow(<App />);
    expect(component.contains(<Count score={[0, 0]} />)).toBeTruthy();
  });
});