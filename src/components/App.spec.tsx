/*
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  Copyright © 2018 Evgeny Sysoletin. All rights reserved.
*/

import * as React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import StartingScreen from './StartingScreen/container';
import Bg from './Bg';
import Score from './Score/container';
import TotalScore from './TotalScore/container';
import Game from './Game/container';
import ScreenChecker from './ScreenChecker';
import About from './About';

describe('App', () => {
  it('contains <StartingScreen/>', () => {
    const component = shallow(<App />);
    expect(component.contains(<StartingScreen />)).toBeTruthy();
  });

  it('contains <Bg/>', () => {
    const component = shallow(<App />);
    expect(component.contains(<Bg />)).toBeTruthy();
  });

  it('contains <Score/>', () => {
    const component = shallow(<App />);
    expect(component.contains(<Score />)).toBeTruthy();
  });

  it('contains <Game/>', () => {
    const component = shallow(<App />);
    expect(component.contains(<Game />)).toBeTruthy();
  });

  it('contains <ScreenChecker/>', () => {
    const component = shallow(<App />);
    expect(component.contains(<ScreenChecker />)).toBeTruthy();
  });

  it('contains <TotalScore/>', () => {
    const component = shallow(<App />);
    expect(component.contains(<TotalScore />)).toBeTruthy();
  });

  it('contains <About/>', () => {
    const component = shallow(<App />);
    expect(component.contains(<About />)).toBeTruthy();
  });
});
