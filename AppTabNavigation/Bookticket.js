import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Icon} from 'native-base';

//import EntypoIcon from 'react-native-vector-icons/Entypo';


class BookTicket extends React.Component {
  
  static navigationOptions = {
    tabBarIcon:({tintColor})=>(
      <Icon name="ios-home" style={{color:tintColor, fontSize:25}} />
    )
  }

    render() {
    return (
      <View style={styles.container}>
        <Text>BookTicket</Text>
      </View>
    );
  }
}

export default BookTicket;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"white",
      alignItems: 'center',
      justifyContent: 'center',
    },
  });