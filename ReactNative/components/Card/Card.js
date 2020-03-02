import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';

export default class Card extends Component{
    render(){
        return(
            <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('Details',
            {
            name: this.props.name,
            desc:this.props.desc
            })}>
                <Text style={styles.cardText}>{this.props.name}</Text>
                  <Image style={styles.cardImage} source={{uri:this.props.img}} />
            </TouchableOpacity>
        )
    }    
}

const styles = StyleSheet.create({
    card: {
      backgroundColor:'#FFF',
      marginBottom:0,
      marginLeft:'2%',
      width:'96%',
      shadowColor:'#000',
      shadowOpacity:0.5,
      shadowRadius:1,
      shadowOffset:{
        width:3,
        height:3
      },
      borderRadius:5,
      paddingBottom:10,
      paddingTop:2,
      marginTop:10,
    },
    cardImage: {
    alignSelf:"center",
      width:'95%',
      height:200,
      resizeMode:'cover',
      borderRadius:5,
      paddingBottom:15
      
    },
    cardText: {
        color:'red',
        fontWeight:"bold",
        padding:10,
        fontSize:20
    },
    //-------------------------//
   
  });
