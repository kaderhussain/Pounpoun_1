import React,{Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Icon} from 'native-base';
//import EntypoIcon from 'react-native-vector-icons/Entypo';

import Camera from 'react-native-camera';

 export default class BookTicket extends Component {
    static navigationOptions = {
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-home" style={{color:tintColor, fontSize:25}} />
      )
    }
  
    render() {
      return (
        <View style={styles.container}>
          <Camera
            ref={(cam) => {
              this.camera = cam
            }}
            style={styles.view}
            aspect={Camera.constants.Aspect.fill}>
              <Text 
              style={styles.capture} 
              onPress={this.takePicture.bind(this)}>
                [CAPTURE_IMAGE]
              </Text>
          </Camera>
        </View>
      );
    }
  
    takePicture() {
      const options = {}
  
      this.camera.capture({metadata: options}).then((data) => {
        console.log(data)
      }).catch((error) => {
        console.log(error)
      })
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row'
    },
    view: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    capture: {
      flex: 0,
      backgroundColor: 'steelblue',
      borderRadius: 10,
      color: 'black',
      padding: 15,
      margin: 45
    }
  });