import 'react-native-gesture-handler';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
} from 'react-native';

function Details({route}){
    const index  = route.params.index;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.descriptionText}>{data.name[index]}</Text>
        <Text style={styles.descriptionText}>{data.desc[index]}</Text>
      </View>
    )
  }

  export default Details

  const styles = StyleSheet.create({
    descriptionText:{
      fontSize:25,
      textAlign:"justify",
      margin:20
    }
  });
  