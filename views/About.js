import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default class About extends React.Component {

render() {

    return(

        <View style={style.view}>
            
            <Text style={style.title}>Page de présentation</Text>
            <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatibus neque magni 
            vitae ea tempora, at voluptatum consectetur temporibus 
            dicta vel velit nulla sequi rerum inventore mollitia. Libero, tenetur eum?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatibus neque magni 
            vitae ea tempora, at voluptatum consectetur temporibus 
            dicta vel velit nulla sequi rerum inventore mollitia. Libero, tenetur eum?
            </Text>



        </View>
    );

}

}
const style = StyleSheet.create({
    title: {
        fontSize: 22,
        marginBottom: 22
    },
     view: {
         margin: 35
     },

})