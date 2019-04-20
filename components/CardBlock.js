import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export class CardBlock extends React.Component {
  render() {
    console.log(this.props.item.title);
    staticstyle = function(options) {
      return {
        flex: 1
      };
    };
    return (
      <View style={[styles.card, staticstyle()]}>
        <Image
          source={{
            uri:
              'https://assets3.thrillist.com/v1/image/2725860/size/gn-gift_guide_variable_c.jpg',
            width: '100%',
            height: 150
          }}
          style={{ width: '100%' }}
        />
        <View style={styles.content}>
          <Text {...this.props} style={[this.props.style]}>
            {this.props.item.title}
          </Text>
          <Text {...this.props} style={[styles.subTitle]}>
            $$.Fast Food . Italian . Type
          </Text>
          <Text style={styles.flexCont}>
            <Text style={[styles.span]}>40-50 MINS</Text>
            <Text style={[styles.span]}>4.2 (107)</Text>
          </Text>
          <Text style={[styles.subTitle]}>
            You last ordered here on 29 Nov, 2019
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 10,
    marginRight: 20,
    width: 300,
    borderRadius: 5,
    shadowColor: '#f4f4f4',
    shadowOffset: {
      width: 10,
      height: 10
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3
  },
  flexCont: {
    justifyContent: 'space-between',
    flex: 1
  },
  span: {
    backgroundColor: '#F5F5F5',
    borderRadius: 3,
    marginRight: 10,
    padding: 10,
    margin: 10,
    flex: 1
  },
  subTitle: {
    color: '#B8B8B8'
  },
  content: {
    padding: 5
  }
});
