import React, { Component } from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Dimensions, ScrollView } from "react-native"
import Ionicons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'
import theme from '@config/theme'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const that = this

export class Story extends React.Component {
    render() {
        return (
            <View style={story.background}>
                    <FlatList
                        data={[
                            { picUser: 'https://i.imgur.com/wcNhkxX.png', user: 'mathilde_gbn' },
                            { picUser: 'https://i.imgur.com/ijmUO2l.png', user: 'designershumor' },
                            { picUser: 'https://i.imgur.com/A4TWMZl.png', user: 'estellechn_fit' },
                            { picUser: 'https://i.imgur.com/OgKCNN7.png', user: 'loupanchione' },
                            { picUser: 'https://i.imgur.com/DpaXgy9.png', user: 'uivivid' },
                            { picUser: 'https://i.imgur.com/mA7YilW.png', user: 'gameofthrones' }
                        ]}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={story.container}>
                                <LinearGradient
                                    colors={['#FECB62', '#9937A6']}
                                    start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }}
                                    locations={[0, 0.5, 0.6]} style={story.picBorder}>
                                    <Image style={story.picUser} source={{ uri: `${item.picUser}` }} />
                                </LinearGradient>
                                <Text style={story.username}>{item.user.length > 8 ? item.user.substring(0, 8) + '...' : item.user }</Text>
                            </View>
                        )}
                        style={list.list}
                    />
            </View>
        )
    }
}

export class List extends React.Component {
    render() {
        return (
            <View style={list.background}>
                <ScrollView showsVerticalScrollIndicator={false} ref='_scrollView'>
                <Story/>
                    <FlatList
                        data={[
                            { uri: 'https://i.imgur.com/et4b5Ek.png', picUser: 'https://i.imgur.com/wcNhkxX.png', user: 'mathilde_gbn', location: 'Île Barbe', like: '45', description: 'Le retour des petits dej' },
                            { uri: 'https://i.imgur.com/OrGYVUG.png', picUser: 'https://i.imgur.com/ijmUO2l.png', user: 'designershumor', location: '', like: '901', description: 'I\'m a designer' },
                            { uri: 'https://i.imgur.com/PpvUtNm.png', picUser: 'https://i.imgur.com/A4TWMZl.png', user: 'estellechn_fit', location: '', like: '522', description: 'Ça ne m\'a pas empêché de faire un bon legday' },
                            { uri: 'https://i.imgur.com/ftTPSNo.png', picUser: 'https://i.imgur.com/OgKCNN7.png', user: 'loupanchione', location: 'Lyon, France', like: '94', description: 'NS✨' },
                            { uri: 'https://i.imgur.com/XlCqITf.png', picUser: 'https://i.imgur.com/DpaXgy9.png', user: 'uivivid', location: '', like: '356', description: 'Dribbble app design concept' },
                            { uri: 'https://i.imgur.com/l56gPec.png', picUser: 'https://i.imgur.com/mA7YilW.png', user: 'gameofthrones', location: 'Los Angeles, CA', like: '533 182', description: 'For House Targaryen' },
                        ]}
                        renderItem={({ item }) => (
                            <View style={list.container}>
                                <View style={list.header}>
                                    <View style={list.left}>
                                        <Image style={list.picUser} source={{ uri: `${item.picUser}` }} />
                                        <View style={list.col}>
                                            <Text style={list.user}>{item.user}</Text>
                                            <Text style={list.location}>{item.location}</Text>
                                        </View>
                                    </View>
                                    <View style={list.right}>
                                        <Ionicons name={'more-vert'} size={25} color={'lightgrey'} />
                                    </View>
                                </View>
                                <Image style={list.image} source={{ uri: `${item.uri}` }} />
                                <View style={list.header}>
                                    <View style={list.left}>
                                        <Ionicons style={list.icon} name={'favorite-border'} size={25} color={'grey'} />
                                        <Ionicons style={list.icon} name={'chat-bubble-outline'} size={25} color={'grey'} />
                                        <Ionicons style={list.icon} name={'share'} size={25} color={'grey'} />
                                    </View>
                                    <Ionicons name={'bookmark-border'} size={25} color={'grey'} />
                                </View>
                                <Text style={list.like}>{item.like} likes</Text>
                                <View style={list.inline}>
                                    <Text style={list.from}>{item.user}</Text>
                                    <Text style={list.description}>{item.description}</Text>
                                </View>
                            </View>
                        )}
                        style={list.list}
                    />
                </ScrollView>
            </View>
        )
    }
}

export class Header extends React.Component {
    render() {
        return (
            <View style={header.container}>
                <View style={header.left}>
                    <Ionicons name={'camera-enhance'} size={25} color={theme.PRIMARY_COLOR} />
                    <Image style={header.logo} source={require('@images/logo.png')} />
                </View>
                <View style={header.right}>
                    <Image style={header.live} source={require('@icons/live.png')} />
                </View>
            </View>
        )
    }
}

const header = StyleSheet.create({
    container: {
        backgroundColor: theme.BACKGROUND,
        borderBottomWidth: .5,
        borderColor: theme.LIGHT_COLOR,
        paddingHorizontal: '3%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    logo: {
        marginLeft: 10,
        height: 40,
        width: 110,
    },
    live: {
        height: 34,
        width: 34,
        margin: 8
    }
})

const list = StyleSheet.create({
    background: {
        backgroundColor: theme.BACKGROUND,
        paddingBottom: 12,
        marginBottom: 80,
    },
    container: {
        backgroundColor: theme.BACKGROUND,
        borderBottomWidth: .5,
        borderColor: theme.LIGHT_COLOR,
        marginBottom: '2%',
    },
    username: {
        color: theme.PRIMARY_COLOR,
        fontWeight: 'bold',
        fontSize: 17,
    },
    image: {
        width: width,
        height: width
    },
    header: {
        padding: '2%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    picUser: {
        width: 38,
        height: 38,
        borderRadius: 38
    },
    right: {

    },
    col: {
        paddingLeft: '5%',
    },
    user: {
        color: theme.PRIMARY_COLOR
    },
    location: {
        fontSize: 12,
        color: theme.PRIMARY_COLOR
    },
    icon: {
        marginRight: '8%'
    },
    like: {
        fontWeight: 'bold',
        marginLeft: '2%'
    },
    inline: {
        flexDirection: 'row',
        marginLeft: '2%',
        marginBottom: 12,
    },
    from: {
        color: theme.PRIMARY_COLOR,
        fontWeight: 'bold',
        marginRight: '2%',
    }
})

const story = StyleSheet.create({
    container: {
        backgroundColor: theme.BACKGROUND,
        paddingBottom: 20,
    },
    picUser: {
        width: 60,
        height: 60,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: theme.BACKGROUND
    },
    picBorder: {
        width: 65,
        height: 65,
        borderRadius: 65,
        backgroundColor: 'gold',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8
    },
    username: {
        textAlign: 'center',
        fontSize: 12
    },
    background: {
        borderBottomWidth: .5,
        borderColor: theme.LIGHT_COLOR
    }
})