import React, { Component } from "react";
import { AppRegistry, FlatList, StyleSheet, Text, View } from "react-native";
import flatListData from "../data/flatList";
import App from "../App";

export default class BasicFlatList extends {
    render(){
        return(
            <View style={{flex: 1, marginTop: 22}}>
                <FlatList
                    data={flatListData}
                    renderItem={({item})=>{
                        console.log(`Item = ${item}`)
                    }}>
                    
                </FlatList>
            </View>
        )
    }
}