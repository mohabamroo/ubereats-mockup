import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export class HomeScreenRouter extends React.Component {
  render() {
    const gotToUbereats = () => {
      Actions.ubereats();
    };
    const gotToFacebook = () => {
      Actions.facebookComments();
    };
    const gotToShimmer = () => {
      Actions.facebookShimmer();
    };
    return (
      <View style={{ marginBottom: 100 }}>
        <ScrollView style={styles.scrollLayout}>
          <Button
            style={styles.btn}
            onPress={gotToUbereats}
            title="Uber Eats"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            style={styles.btn}
            onPress={gotToFacebook}
            title="Facebook Comments"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            style={styles.btn}
            onPress={gotToShimmer}
            title="Facebook Shimmer"
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    marginBottom: 20,
    padding: 10,
    color: '#841584'
  },
  card: {
    padding: 10
  },
  scrollLayout: {
    backgroundColor: '#F4F4F4'
  }
});
