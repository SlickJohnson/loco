import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FetchLocation from './components/FetchLocation';
import UsersMap from './components/UsersMap';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {userLocation: null};
    this.getUserLocationHandler = this.getUserLocationHandler.bind(this);
  }

  getUserLocationHandler() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        userLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.6,
          longitudeDelta: 0.04,
        }
      })
    }, err => console.log(err));
  }

  render() {
    return (
      <View style={styles.container} >
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
        <UsersMap userLocation={this.state.userLocation} />
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
