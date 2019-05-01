/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';
import Main from './app/screens/Main';

export default function app(){
    return (
      <Fragment>
        <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
        <Main />
      </Fragment>
    );
}
