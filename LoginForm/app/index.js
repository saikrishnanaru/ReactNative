import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import StackNavigator from './config/routes';
import AlertProvider from '../app/components/Alert';

EStyleSheet.build({
  $primaryBlue: '#4F6699',
  $primaryGreen:'#00BD9D',
  $primaryOrange:'#D57A66',
  $primaryPurple:'#9E768F',
  $white: '#FFFFFF',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#F0F0F0',
  $darkText: '#343434'
});

export default () => <AlertProvider><StackNavigator /></AlertProvider>;
