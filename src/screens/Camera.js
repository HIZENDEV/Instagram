import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Camera extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Camera</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
