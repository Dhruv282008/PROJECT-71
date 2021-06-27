import React from 'react';
import { ToastAndroid, View, Text,TextInput, StyleSheet, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native'
import db from '../config';
import firebase from 'firebase'
export default class WriteStory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            story: "",
            title: "",
            author: ""
        }
    }
    submitStory = () => {
        db.collection('stories').add({
            author: this.state.author,
            story: this.state.story,
            title: this.state.title
        });
        this.setState({
            author: "",
            title: "",
            story: "",
        });
        ToastAndroid.show("Story Submitted Successfully",ToastAndroid.SHORT)
    }
    render() {
        return (
            <View style = {{backgroundColor: 'lightblue', height: 1000}}>
                <View style={styles.header}>
                    <Text style={styles.headertxt}>Write A Story</Text>
                </View>
                <ScrollView>
                <KeyboardAvoidingView>
                <TextInput
                     style={styles.input}
                     multiline
                     numberOfLines={2}
                     placeholder={'Title of the Story'}
                    >
                    </TextInput>

                    <TextInput
                     style={styles.input1}
                     multiline
                     numberOfLines={2}
                     placeholder={'Author Of the Story'}
                    >
                    </TextInput>

                        <TextInput
                        style={styles.input2}
                        multiline={true}
                            placeholder={'Write Your Story Here'}
                        onChangeText = {(text)=>{this.setState({story: text})}}>
                        </TextInput>
                    </KeyboardAvoidingView>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        this.submitStory();
                    }}>
                        <Text style={styles.buttontxt}>Submit</Text>
                    </TouchableOpacity>
                    </ScrollView>    
            </View>
        )
    }
}
const styles = StyleSheet.create({
    input: {
        borderRadius: 20,
        borderColor: 'darkblue',
        borderBottomWidth: 3,
        marginTop: 50,
        width: 300,
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 10,
        fontStyle: 'italic',
        color: 'darkblue'
    },
    input1: {
        borderRadius: 20,
        borderColor: 'darkblue',
        borderBottomWidth: 3,
        marginTop: 25,
        width: 300,
        alignSelf: 'center',
        padding: 10,
        fontStyle: 'italic',
        color: 'darkblue'
    },
    input2: {
        borderRadius: 20,
        borderColor: 'darkblue',
        borderWidth: 3,
        marginTop: 40,
        width: 300,
        height: 195,
        alignSelf: 'center',
        padding: 10,
        backgroundColor: 'lightblue',
        fontStyle: 'italic',
        color: 'darkblue',
        fontWeight: 'bold'
    },
    header: {
        backgroundColor: 'darkblue',
        height: 100,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'darkblue'
    },
    headertxt: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 40,
        marginTop: 35,
        color: 'lightblue',
        fontStyle :'italic'
    },
    button: {
        backgroundColor: 'lightblue',
        borderRadius: 25,
        borderWidth: 5,
        borderColor: 'darkblue',
        width: 130,
        height: 50,
        alignSelf: 'center',
        marginTop: 50,
    },
    buttontxt: {
        textAlign: 'center',
        fontStyle: 'italic',
        color: 'darkblue',
        marginTop: 5,
        fontSize: 20
    }
})