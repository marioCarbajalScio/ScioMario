import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';

import Card from './components/Card/Card'
import Details from './components/Details/Details'

//Navegation
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

//Datos de las cards
const data = {
  name:['Chicken','Pizza','Thai'],
  img:['https://food-images.files.bbci.co.uk/food/recipes/oven-roasted_chicken_13123_16x9.jpg',
  'https://cnnespanol2.files.wordpress.com/2019/05/190528082519-pizza-hut-pan-relaunch-exlarge-169.jpg?quality=100&strip=info',
  'https://estaticos.miarevista.es/media/cache/760x570_thumb/uploads/images/recipe/594bb0885cafe85dac3c9869/ppal-pad-thai.jpg'],
  desc:['Chicken is the most common type of poultry in the world.Owing to the relative ease and low cost of raising them in comparison to animals such as cattle or hogs, chickens have become prevalent throughout the cuisine of cultures around the world, and their meat has been variously adapted to regional tastes.',
'Pizza (Italian: [ˈpittsa], Neapolitan: [ˈpittsə]) is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta.',
'Thai cooking places emphasis on lightly prepared dishes with strong aromatic components and a spicy edge. Thai chef McDang characterises Thai food as demonstrating "intricacy; attention to detail; texture; color; taste; and the use of ingredients with medicinal benefits, as well as good flavor", as well as care being given to the food`s appearance, smell and context.']
}

//Creacion de Cards
function CardView({navigation}){
  return(
    <ScrollView style={styles.container}>
      <Card name={data.name[0]} img={data.img[0]} desc={data.desc[0]} navigation={navigation}/>
      <Card name={data.name[1]} img={data.img[1]} desc={data.desc[1]} navigation={navigation}/>
      <Card name={data.name[2]} img={data.img[2]} desc={data.desc[2]} navigation={navigation}/>
    </ScrollView>
  )
}

//Control de rutas
export default class App extends Component{
  render(){
    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={CardView} options={{ title: '365 Restaurant' }}/>
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'black',
    borderWidth:5,
    borderRadius:5
  },
  Stack: {
    color:'red',
    fontWeight:"bold",
    padding:10,
    fontSize:20
},
btn:{
    backgroundColor:'#FFFFFF',
    width:'50%',
    maxWidth:100,
    margin:5
  },
  descriptionText:{
    fontSize:25,
    textAlign:"justify",
    margin:20
  }
});
