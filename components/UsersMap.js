import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

function UsersMap(props) {
  const userLocationMarker = props.userLocation ? <Marker coordinate={props.userLocation} /> : null;

  return (
    <View style={styles.mapContainer} >
      <MapView 
        initialRegion={{
          latitude: 37,
          longitude: -122,
          latitudeDelta: 0.6,
          longitudeDelta: 0.04,
        }}
        region={props.userLocation}
        style={styles.map} 
      >
        {userLocationMarker}
      </MapView >
    </View >
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    width: '100%',
    height: 200
  },
  map: {
    width: '100%',
    height: '100%'
  },
});
export default UsersMap;