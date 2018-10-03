import React, { Component } from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Dimensions, ScrollView } from "react-native"
import Ionicons from 'react-native-vector-icons/MaterialIcons';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export class Header extends React.Component {
    render () {
        return (
            <View style={header.container}>
                <Text style={header.username}>John_Doe</Text>
            </View>
        )
    }
}

export class Biography extends React.Component {
    render() {
        return (
            <View style={biography.container}>
                <Text style={biography.displayName}>John Doe</Text>
                <Text style={biography.description}>
                    Discovering -- and telling -- stories from around the world. Curated by Instagram's community team.
                </Text>
                <TouchableOpacity>
                    <Text style={biography.weblink}>blog.instagram.com</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export class UserInfo extends React.Component {
    render() {
        return (
            <View style={userInfo.container}>
                <View style={userInfo.colone}>
                    <Image style={userInfo.image} source={require('@images/barbara.png')}/>
                </View>
                <View style={userInfo.coltwo}>
                    <View style={userInfo.row}>
                        <View style={userInfo.counter}>
                            <Text style={userInfo.num}>595</Text>
                            <Text style={userInfo.info}>posts</Text>
                        </View>
                        <View style={userInfo.counter}>
                            <Text style={userInfo.num}>4,6M</Text>
                            <Text style={userInfo.info}>followers</Text>
                        </View>
                        <View style={userInfo.counter}>
                            <Text style={userInfo.num}>276</Text>
                            <Text style={userInfo.info}>following</Text>
                        </View>
                    </View>
                    <View style={userInfo.row}>
                        <TouchableOpacity style={userInfo.button}>
                            <Text style={userInfo.follow}>Edit Your Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export class Gallery extends React.Component {


    render() {
        return (
            <View style={gallery.container} >
                <View style={gallery.sorting} >
                    <TouchableOpacity style={gallery.sortItem}>
                        <Ionicons name={'grid-on'} size={25} color={'#50c1e0'}/>
                    </TouchableOpacity >
                    <TouchableOpacity style={gallery.sortItem}>
                        <Ionicons name={'view-list'} size={25} color={'lightgrey'}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={gallery.sortItem}>
                        <Ionicons name={'label-outline'} size={25} color={'lightgrey'}/>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <FlatList
                        data={[
                            { uri: 'https://i.imgur.com/et4b5Ek.png', key: 123456 },
                            { uri: 'https://i.imgur.com/pVumbdW.png', key: 123789 },
                            { uri: 'https://i.imgur.com/QrnOia3.png', key: 123123 },
                            { uri: 'https://i.imgur.com/txjhHOC.png', key: 123654 },
                            { uri: 'https://i.imgur.com/uC7y5Fb.png', key: 123987 },
                            { uri: 'https://i.imgur.com/QxwtoAF.png', key: 123321 },
                            { uri: 'https://i.imgur.com/XLgWvUD.png', key: 123852 },
                            { uri: 'https://i.imgur.com/JpVvYwR.png', key: 174285 },
                            { uri: 'https://i.imgur.com/RpU8bxx.png', key: 198765 },
                            { uri: 'https://i.imgur.com/RpU8bxx.png', key: 132548 },
                            { uri: 'https://i.imgur.com/7FNUaIe.png', key: 174562 },
                            { uri: 'https://i.imgur.com/VQKuHRT.png', key: 152378 },
                        ]}
                        renderItem={({ item }) => (
                            <Image style={gallery.image} source={{ uri: `${item.uri}` }} />
                        )}
                        numColumns={3}
                        style={gallery.list}
                    />
                </ScrollView>
            </View>
        )
    }
}

const gallery = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sorting: {
        marginTop: '4%',
        flexDirection: 'row',
        borderTopWidth: .5,
        borderColor: 'lightgrey',
    },
    sortItem: {
        paddingVertical: '3%',
        width: width / 3,
        alignItems: 'center'
    },
    sortText: {
        textAlign: 'center'
    },
    image: {
        backgroundColor: '#f3f3f3',
        width: width / 3,
        height: width / 3,
    }
})

const biography = StyleSheet.create({
    container: {
        paddingHorizontal: '4%',
        backgroundColor: '#fff',
    },
    displayName: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 17,
    },
    description: {
        paddingVertical: '1%',
        fontSize: 16,
    },
    weblink: {
        color: 'blue',
        fontSize: 16,
    }
})

const userInfo = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    colone: {
        height: 120,
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    coltwo: {
        height: 120,
        width: '70%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        height: '45%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image: {
        width: 82,
        height: 82,
        borderRadius: 82
    },
    counter: {
        marginTop: '2%',
        width: '33%'
    },
    num: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    info: {
        textAlign: 'center',
        fontSize: 14,
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: 4,
        borderWidth: .5,
        borderColor: 'lightgrey',
        paddingVertical: 3,
        width: '90%',
    },
    follow: {
        textAlign: 'center',
        color: '#000',
        fontSize: 14,
    },

})

const header = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderBottomWidth: .5,
        borderColor: 'lightgrey',
        padding: '3%'
    },
    username: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 17,
    },
})