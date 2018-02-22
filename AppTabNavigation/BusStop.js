import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Icon} from 'native-base';

class BusStop extends React.Component {
  
  static navigationOptions = {
    tabBarIcon:({tintColor})=>(
      <Icon name="md-locate" style={{color:tintColor}} />
    )
  }

    render() {
    return (
      <View style={styles.container}>
        <Text>Bus Stop</Text>
      </View>
    );
  }
}

export default BusStop;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"white",
      alignItems: 'center',
      justifyContent: 'center',
    },
  });