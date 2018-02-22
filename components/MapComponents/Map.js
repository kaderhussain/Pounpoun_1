import React, { Component } from "react";
import { AppRegistry, StyleSheet, Dimensions, Image, View, StatusBar, TouchableOpacity } from "react-native";
import { Container, Text } from "native-base";
import {Icon} from 'native-base';
import MapView ,{ Polyline } from 'react-native-maps';



class Mymap extends Component {
    static navigationOptions = {
        tabBarIcon:({tintColor})=>(
          <Icon name="person" style={{color:tintColor}} />
        )
      }
    
    constructor(props) {
      super(props);
  
      this.state = {
        latitude: 18.9718,
        longitude: 72.8436,
        error: null,
        concat: null,
        coords:[],
        x: 'false',
        cordLatitude:19.0361,
        cordLongitude:72.9486,
      };
  
      this.mergeLot = this.mergeLot.bind(this);
  
    }
  
    componentDidMount() {
      navigator.geolocation.getCurrentPosition(
         (position) => {
           this.setState({
             latitude: this.state.latitude,
             longitude: this.state.longitude,
             error: null,
           });
           this.mergeLot();
         },
         (error) => this.setState({ error: error.message }),
         { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
       );
  
     }
  
    mergeLot(){
      if (this.state.latitude != null && this.state.longitude!=null)
       {
         let concatLot = this.state.latitude +","+this.state.longitude
         this.setState({
           concat: concatLot
         }, () => {
           this.getDirections(concatLot, "19.0361,72.9486");
         });
       }
  
     }
  
     async getDirections(startLoc, destinationLoc) {
  
           try {
               let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }&destination=${ destinationLoc }`)
               let respJson = await resp.json();
               let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
               let coords = points.map((point, index) => {
                   return  {
                       latitude : point[0],
                       longitude : point[1]
                   }
               })
               this.setState({coords: coords})
               this.setState({x: "true"})
               return coords
           } catch(error) {
             console.log('masuk fungsi')
               this.setState({x: "error"})
               return error
           }
       }
    render() {
  
      return (
        <MapView 
        showsUserLocation
        style={styles.map} region={{
            latitude: 18.9718,
            longitude: 72.8436,
         latitudeDelta: 1,
         longitudeDelta: 1
        }}>
  
        {!!this.state.latitude && !!this.state.longitude && <MapView.Marker
           coordinate={{"latitude":this.state.latitude,"longitude":this.state.longitude}}
           title={"Your Location"}
         />}
  
         {!!this.state.cordLatitude && !!this.state.cordLongitude && <MapView.Marker
            coordinate={{"latitude":this.state.cordLatitude,"longitude":this.state.cordLongitude}}
            title={"Your Destination"}
          />}
  
         {!!this.state.latitude && !!this.state.longitude && this.state.x == 'true' && <MapView.Polyline
              coordinates={this.state.coords}
              strokeWidth={2}
              strokeColor="green">
              <View style={styles.radius}>
                <View style={styles.marker}/>    
            </View>
              </MapView.Polyline>
          }
  
          {!!this.state.latitude && !!this.state.longitude && this.state.x == 'error' && <MapView.Polyline
            coordinates={[
                {latitude: this.state.latitude, longitude: this.state.longitude},
                {latitude: this.state.cordLatitude, longitude: this.state.cordLongitude},
            ]}
            strokeWidth={2}
            strokeColor="red">
            <View style={styles.radius}>
        <View style={styles.marker}/>    
      </View>
      </MapView.Polyline>
     }
           
        </MapView>
      );
    }
  }
  
  const styles = StyleSheet.create({
    map: {
        left:0,
        right:0,
        top:0,
        bottom:0,
        position:'absolute'
    },
    radius:{
        height:50,
        width:50,
        borderRadius : 50 /2,
        overflow:'hidden',
        borderWidth:1,
        backgroundColor:'rgba(0,122,255,0.1)',
        borderColor:'rgba(0,112,255,0.3)',
        alignItems: 'center',
        justifyContent: 'center',

    },
    marker:{
        height:20,
        width:20,
        borderRadius : 20 /2,
        borderWidth:3,
        borderColor:'white',
        overflow:'hidden',
        backgroundColor:'#007AFF'
    },
  });
  
  export default Mymap;