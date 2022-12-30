import React from "react";
import { View, StyleSheet, TextInput,} from "react-native";


export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    render() {

        return(

                <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Entrez votre nom"
                    onChangeText={text => this.handleText(text)}
                />
                </View>
                

        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})