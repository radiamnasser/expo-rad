import React from "react";
import { View, TextInput, Linking, StyleSheet } from "react-native";
import XHR from "../utils/XHR";

const call = 'https://api-meteo.io'

export default class Meteo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    handleText = (text) => {

        XHR('meteo', call, text, (response) => {
            this.setState({ data: response})
        })
    }

    toURL = (link) => {
        Linking.openURL(link).catch((err) =>
            console.error('An error occurred', err),
        );
    }

    render() {
        console.log(this.state.data)
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Taper le nom de la ville"
                    data={this.state.data}
                    onChangeText={text => this.handleText(text)}
                />
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        margin: 20,
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#E1E1E1',
        backgroundColor: '#fff',
        overflow: 'hidden',
        shadowOffset: { width: 15, height: 15 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 4,
        borderRadius: 8
    },
})