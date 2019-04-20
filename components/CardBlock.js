import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Platform,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Moment from 'moment';

export class CardBlock extends React.Component {
  render() {
    const {
      image,
      location,
      minTime,
      maxTime,
      rating,
      price,
      title,
      category,
      rest,
      lastOrd,
      staticBox
    } = this.props.item;
    Moment.locale('en');
    staticstyle = function() {
      let styleObj = {
        flex: 1
      };
      if (staticBox) {
        styleObj = {
          ...styleObj,
          width: Math.round(Dimensions.get('window').width) - 30,
          flex: 1,
          alignSelf: 'stretch'
        };
      } else {
        styleObj = {
          ...styleObj,
          width: 350
        };
      }
      return styleObj;
    };
    handlerLongClick = () => {
      //handler for Long Click
      Alert.alert(' Button Long Pressed');
    };
    handlerClick = () => {
      //handler for Long Click
      Alert.alert(' Button Pressed');
    };
    return (
      <TouchableOpacity
        onLongPress={this.handlerLongClick}
        onPress={this.handlerClick}
        //Here is the trick
        activeOpacity={0.6}
        delayLongPress={0.5}
      >
        <View style={[styles.cardBlock, staticstyle()]}>
          <Image
            source={{
              uri: image,
              width: '100%',
              height: 200
            }}
            style={styles.cardImg}
          />
          <View style={styles.content}>
            <Text {...this.props} style={[styles.title]}>
              {title} - {location}
            </Text>
            <Text {...this.props} style={[styles.subTitle]}>
              {price} . {category} . {rest} . {rest}
            </Text>
            <View style={styles.flexCont}>
              <Text style={[styles.span]}>
                {minTime}-{maxTime} MINS
              </Text>
              <Text style={[styles.span]}>{rating} (107)</Text>
            </View>
            <Text style={[styles.subTitle]}>
              You last ordered here on {Moment(lastOrd).format('d MMM, YY')}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  cardBlock: {
    flex: 1,
    padding: 10,
    marginLeft: 20,
    borderRadius: 1,
    borderTopEndRadius: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderTopStartRadius: 5,

    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomStartRadius: 5,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2
      },
      android: {
        elevation: 1
      }
    })
  },
  cardImg: {
    width: '100%',
    marginBottom: 15,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  title: {
    fontSize: 18,
    marginBottom: 8
  },
  flexCont: {
    justifyContent: 'flex-start',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    fontSize: 14
  },
  span: {
    backgroundColor: '#F5F5F5',
    borderRadius: 3,
    marginRight: 15,
    padding: 5,
    maxWidth: 100,
    fontSize: 14
  },
  subTitle: {
    color: '#B8B8B8',
    marginBottom: 8,
    fontSize: 15
  },
  content: {
    padding: 5
  }
});
