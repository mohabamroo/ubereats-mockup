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
    return (
      <View style={{ marginBottom: 100 }}>
        <ScrollView style={styles.scrollLayout}>
          <Button
            onPress={gotToUbereats}
            title="Uber Eats"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={gotToFacebook}
            title="Facebook Comments"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    padding: 10
  },
  scrollLayout: {
    backgroundColor: '#F4F4F4'
  }
});
