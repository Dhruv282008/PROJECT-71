import React from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native'

export default class ReadStory extends React.Component {
    render() {
        return (
            <View style={{ backgroundColor: 'black', height: 700 }}>
                <ScrollView>
                <Image source={require('../assets/jobsstory.png')} style={styles.story} />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    story: {
        width: 370,
        height: 680,
        alignSelf: "center",
        marginTop: 25
    }
})