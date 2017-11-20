import React, { Component } from 'react';
import { Text } from 'react-native';
import { Router, Scene, map } from 'react-native-router-flux';

import ScarletScreen from './ScarletScreen';
import GrayScreen from './GrayScreen';
import BlueScreen from './BlueScreen';
import MaizeScreen from './MaizeScreen';
import GoldScreen from './GoldScreen';
import BlackScreen from './BlackScreen';
import ModalScreen from './ModalScreen';
import Screen from './Screen';
import male1 from './male1';




// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}

const App = () => {
  return (
    <Router>
      <Scene key="root">
        {/* Tab Container */}
        <Scene
          key="tabbar"
          tabs={true}
          tabBarStyle={{ backgroundColor: '#FFFFFF' }}
        >
          {/* Tab and it's scenes */}
          <Scene key="Tab1" title="TAB1" icon={TabIcon}>
            <Scene
              key="scarlet"
              component={ScarletScreen}
              title="Tab1"
            />
            <Scene
              key="gray"
              component={GrayScreen}
              title="Gray"
            />
          </Scene>

          {/* Tab and it's scenes */}
          <Scene key="Tab2" title="TAB2" icon={TabIcon}>
            <Scene
              key="blue"
              component={BlueScreen}
              title="Tab2"
            />
            <Scene
              key="maize"
              component={MaizeScreen}
              title="Maize"
            />
          </Scene>

          {/* Tab and it's scenes */}
          <Scene key="Tab3" title="TAB3" icon={TabIcon}>
            <Scene
              key="gold"
              component={GoldScreen}
              title="Tab3"
            />
            <Scene
              key="black"
              component={BlackScreen}
              title="Black"
            />
          </Scene>
          <Scene key="Tab4" title="TAB4" icon={TabIcon}>
            <Scene
              key="screen"
              component={Screen}
              title="Tab4"
            />
            <Scene
              key="black"
              component={BlackScreen}
              title="Black"
            />
          </Scene>
        </Scene>

        <Scene
          key="modal"
          direction="vertical"
          component={ModalScreen}
          title="Modal"
          hideNavBar
        />
        <Scene
          key="male1"
          direction="vertical"
          component={male1}
          title="MaleNames"
          hideNavBar
        />
      </Scene>
    </Router>
  );
}

export default App;
