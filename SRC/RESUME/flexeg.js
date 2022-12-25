import React, {Component} from 'react';
import {View,
        Text,
        StyleSheet,
        TextInput,
    Checkbox} from 'react-native';

export default class flexeg extends Component{
    render(){
        return (
            <View style = {{flex:1, backgroundColor:'blue', flexDirection:'row', marginTop:10, alignItems:'center',  justifyContent:'space-around'}}>

                <View style = {{flex:1, backgroundColor:'blue', flexDirection:'column', marginTop:10, alignItems:'center',  justifyContent:'space-around'}}>
                    <View style = {{height: 100, width: 100, backgroundColor:'green'}} />
                    <View style = {{height: 100, width: 100, backgroundColor:'white'}} />
                    <View style = {{height: 100, width: 100, backgroundColor:'purple'}} />
                    <View style = {{height: 100, width: 100, backgroundColor:'pink'}} />
                </View>
                <View style = {{flex:1, backgroundColor:'blue', flexDirection:'column', marginTop:10, alignItems:'center',  justifyContent:'space-around'}}>
                    <View style = {{height: 100, width: 100, backgroundColor:'green'}} />
                    <View style = {{height: 100, width: 100, backgroundColor:'white'}} />
                    <View style = {{height: 100, width: 100, backgroundColor:'purple'}} />
                    <View style = {{height: 100, width: 100, backgroundColor:'pink'}} />
                </View>
                <View style = {{flex:1, backgroundColor:'blue', flexDirection:'column', marginTop:10, alignItems:'center',  justifyContent:'space-around'}}>
                    <View style = {{height: 100, width: 100, backgroundColor:'green'}} />
                    <View style = {{height: 100, width: 100, backgroundColor:'white'}} />
                    <View style = {{height: 100, width: 100, backgroundColor:'purple'}} />
                    <View style = {{height: 100, width: 100, backgroundColor:'pink'}} />
                </View>

            </View>

        );
    }
}
