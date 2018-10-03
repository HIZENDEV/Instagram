import React, {Component} from 'react'
import {YellowBox, View, Image} from 'react-native'
import Index from './src/Index'

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])
console.disableYellowBox = true;

export default class App extends React.Component {

  render() {
    return (
      <Index />
    )
  }
}
