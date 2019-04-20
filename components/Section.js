import React from 'react';
import { CardBlock } from './CardBlock';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export class Section extends React.Component {
  render() {
    return (
      // Section header
      <View style={styles.section}>
        <Text style={styles.title}>{this.props.title}</Text>
        <ScrollView horizontal="horizontal">
          {this.props.cards.map((item, index) => (
            <CardBlock item={item} key={index} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  section: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 30,
    paddingBottom: 20,
    marginBottom: 10,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 20,
    paddingLeft: 20,
    marginBottom: 20
  }
});
