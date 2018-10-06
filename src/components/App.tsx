/*
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  Copyright © 2018 Evgeny Sysoletin. All rights reserved.
*/

import * as React from 'react';
import StartingScreen from './StartingScreenContainer';
import Bg from './Bg';
import Score from './Score';
import TotalScore from './TotalScore';
import Game from './Game';
import ScreenChecker from './ScreenChecker';

class App extends React.PureComponent<{}, {}> {
  render() {
    return (
      <React.StrictMode>
        <React.Fragment>
          <ScreenChecker />
          <StartingScreen />
          <Score score={[0, 0]} />
          <TotalScore
            name="Diophantus"
            score={[150, 50]}
            coefficients={[5, 1]}
          />
          <Game />
          <Bg />
        </React.Fragment>
      </React.StrictMode>
    );
  }
}

export default App;
