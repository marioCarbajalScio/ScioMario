import 'react-native-gesture-handler';

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

function Details({route}){
    const name  = route.params.name;
    const desc  = route.params.desc;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.descriptionText}>{name}</Text>
        <Text style={styles.descriptionText}>{desc}</Text>
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
  