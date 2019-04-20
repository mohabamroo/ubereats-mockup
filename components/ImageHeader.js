import React from 'react';
import { Text, View, Image, StyleSheet, ImageBackground } from 'react-native';

export class ImageHeader extends React.Component {
  render() {
    return (
      <ImageBackground
        source={{
          uri:
            'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          width: '100%',
          height: 250
        }}
        style={{ width: 400, height: 200 }}
      >
        <View style={styles.bottomContent}>
          <Text style={styles.title}>Buy 1 Get 1 Free</Text>
          <Text style={styles.subTitle}>from Chicken and Ribs</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: 'white'
  },
  subTitle: {
    fontSize: 18,
    color: 'white'
  },
  bottomContent: {
    padding: 20,
    position: 'absolute',
    bottom: 0
  }
});
