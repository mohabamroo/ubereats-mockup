import React from 'react';
import { CardBlock } from './CardBlock';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

export class Section extends React.Component {
  render() {
    if (this.props.cards.length == 1) {
      staticBox = 1;
    }
    staticstyle = function() {
      if (staticBox) {
				console.log("TCL: Section -> staticstyle -> staticBox", staticBox)
        return (styleObj = {
          width: Dimensions.get('window').width,
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'stretch'
        });
      }
      return { backgroundColor: 'white' };
    };
    return (
      // Section header
      <View style={[styles.section, staticstyle()]}>
        <Text style={styles.title}>{this.props.title}</Text>
        {staticBox ? (
          <ScrollView
            horizontal="horizontal"
            showsHorizontalScrollIndicator={false}
          >
            {this.props.cards.map((item, index) => (
              <CardBlock item={item} key={index} />
            ))}
          </ScrollView>
        ) : (
          <CardBlock item={this.props.cards[0]} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  section: {
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
