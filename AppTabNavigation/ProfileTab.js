import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Icon} from 'native-base';

class ProfileTab extends React.Component {
  
  static navigationOptions = {
    tabBarIcon:({tintColor})=>(
      <Icon name="person" style={{color:tintColor}} />
    )
  }

    render() {
    return (
      <View style={styles.container}>
        <Text>Profile Tab</Text>
      </View>
    );
  }
}

export default ProfileTab;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"white",
      alignItems: 'center',
      justifyContent: 'center',
    },
  });