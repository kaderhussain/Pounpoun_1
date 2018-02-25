  import React, { Component } from "react";
  import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image
  } from "react-native";
  //library imports 
  import { Container, Content,Icon, Header, Body } from 'native-base'
  import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'
  
  //custom files 
  import SettingsScreen from '../components/HomeComponents/SettingsScreen';
  import HomeScreen from "../components/HomeComponents/HomeScreen";
  
  const myIcon = (<Icon name="rocket" size={30} color="#900" />)
  export default class HomeTab extends Component {
    static navigationOptions = {
      tabBarIcon:({tintColor})=>(
        <Icon name="person" style={{color:tintColor}}  />
      )
    }
    render() {
      return (
        <View>
        <Container style={styles.Container1} >
            <Image  source={require('../assets/img/Logo.png')}
            style={
              styles.boxContainer
            }/>
        </Container>

        <Container style={styles.Container2}>
        <View style={styles.boxContainer}>
          <Text>Box2</Text>
          </View>
        </Container>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    Container1:{
      flex: 1,
      flexDirection: 'row',
      position:'relative',
    },
    Container2:{
      padding:10,
      top:100,
      position:'relative',
      flex: 2,
      flexDirection: 'row'
    },
    boxContainer:{
      flex:1,

      height:150,
      backgroundColor:'green',
      alignItems:'center',
      justifyContent:'center'
    }
  })