import React, { Component } from "react";
import { AppRegistry, StyleSheet, Dimensions, Image, View, StatusBar, TouchableOpacity } from "react-native";
import { Container, Text } from "native-base";
import {Icon} from 'native-base';
import MapView from 'react-native-maps';
import Polyline from '@mapbox/polyline';
import MapViewDirections from 'react-native-maps-directions';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 18.9718;
const LONGITUDE = 72.8436;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = 'AIzaSyDEtfjgeNO4fVejyijkgH32s6COVFK0ZKc';

class Mymap extends Component {

  static navigationOptions = {
    tabBarIcon:({tintColor})=>(
      <Icon name="ios-map" style={{color:tintColor, fontSize:25}} />
    )
  }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Profile Tab</Text>
//       </View>
//     );
//   }
// }

// export default Mymap;

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor:"white",
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });

  constructor(props) {
    super(props);

    // AirBnB's Office, and Apple Park
    this.state = {
      coordinates: [
        {
          latitude: 19.0361,
          longitude: 72.9486,
        },
        {
          latitude: 18.9718,
          longitude: 72.8436,
        },

      ],
    };

    this.mapView = null;
  }

  onMapPress = (e) => {
    this.setState({
      coordinates: [
        ...this.state.coordinates,
        e.nativeEvent.coordinate,
      ],
    });
  }

  render() {
    return (
      <MapView
      showsUserLocation
        region={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        style={StyleSheet.absoluteFill}
        ref={c => this.mapView = c}
        onPress={this.onMapPress}
      >
        {this.state.coordinates.map((coordinate, index) =>
          <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} >
          <View style={styles.radius}>
              <View style={styles.marker}/>    
          </View>
            </MapView.Marker>
        )}
        {(this.state.coordinates.length >= 2) && (
          <MapViewDirections
            origin={this.state.coordinates[0]}
            waypoints={ (this.state.coordinates.length > 2) ? this.state.coordinates.slice(1, -1): null}
            destination={this.state.coordinates[this.state.coordinates.length-1]}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="black"
            onReady={(result) => {
              this.mapView.fitToCoordinates(result.coordinates);
            }}
            onError={(errorMessage) => {
              //alert('GOT AN ERROR');
            }}
          />
        )}
      </MapView>
    );
  }
}
export default Mymap;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor:"white",
      alignItems: 'center',
      justifyContent: 'center',
    },
  map: {
      left:0,
      right:0,
      top:0,
      bottom:20,
      position:'absolute'
  },
  radius:{
      height:50,
      width:50,
      overflow:'hidden',
      borderRadius : 50 /2,
      borderWidth:2,
      backgroundColor:'rgba(0,0,0,0.1)',
      borderColor:'rgba(0,0,0,0.3)',
      alignItems: 'center',
      justifyContent: 'center',

  },
  marker:{
      height:30,
      width:30,
      borderRadius : 30 /2,
      borderWidth:4,
      borderColor:'white',
      overflow:'hidden',
      backgroundColor:'black'
  },
});

 