import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Icon} from 'native-base';

class BusDetail extends React.Component {
  
  static navigationOptions = {
    tabBarIcon:({tintColor})=>(
      <Icon name="md-bus" style={{color:tintColor}} />
    )
  }

    render() {
    return (
      <View style={styles.container}>
        <Text>Bus Detail</Text>
      </View>
    );
  }
}

export default BusDetail;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"white",
      alignItems: 'center',
      justifyContent: 'center',
    },
  });