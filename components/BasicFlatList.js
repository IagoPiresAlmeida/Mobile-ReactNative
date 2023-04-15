import React, { Component } from "react";
import { AppRegistry, FlatList, StyleSheet, Text, View } from "react-native";
import flatListData from "../data/flatList";

export default class BasicFlatList extends {
    render(){
        return(
            <View style={{flex: 1, marginTop: 22}}>
                <FlatList
                    data={flatListData}
                    renderItem={({item, index})=>{
                        console.log(`Item = ${item}, index= ${index}`)
                    }}>
                    
                </FlatList>
            </View>
        )
    }
}