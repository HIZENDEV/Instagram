import React, { Component } from "react"
import { View, StatusBar } from "react-native"
import { Biography, UserInfo, Gallery, Header } from "@components/Profile"

export default class Profile extends React.Component {

  render() {
    return (
      <View>
        <StatusBar
          backgroundColor="white"
          barStyle="dark-content"/>
        <Header />
        <UserInfo/>
        <Biography/>
        <Gallery/>
      </View>
    )
  }
}