import React, { Component } from "react"
import { View, StatusBar } from "react-native"
import { List, Header } from "@components/Home"

export default class Home extends React.Component {

  render() {
    return (
      <View>
        <StatusBar
          backgroundColor="white"
          barStyle="dark-content"
        />
        <Header/>
        <List/>
      </View>
    )
  }
}