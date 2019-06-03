import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableHighlight,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  RefreshControl,
  Animated
} from 'react-native';
import { LinearGradient } from 'expo';
export class FacebookShimmer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blocks: [1, 2, 3, 4, 5],
      refreshing: false,
      fadeAnim: new Animated.Value(0) // Initial value for opacity: 0
    };
  }

  componentDidMount() {
    loopAnimation();
    Animated.timing(
      // Animate over time
      this.state.fadeAnim, // The animated value to drive
      {
        toValue: 1, // Animate to opacity: 1 (opaque)
        duration: 10000 // Make it take a while
      }
    ).start(); // Starts the animation
  }

  render() {
    const { blocks } = this.state;
    console.log('TCL: FacebookShimmer -> render -> blocks', blocks);

    return (
      <View style={styles.commentsSection}>
        <ScrollView
          style={styles.commentsWrapper}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
          <Text>sdfdkdfmldfkmdflkn</Text>
          {blocks.map((item, index) => (
            <View style={styles.shimmerBlock} key={index}>
              <View style={styles.blockHeader}>
                <View style={[styles.headerCircle, styles.shimmerShine]} />
                <View style={styles.headerTextBlock}>
                  <View style={[styles.headerText, styles.shimmerShine]} />
                  <View style={[styles.headerText, styles.shimmerShine]} />
                </View>
              </View>
              <LinearGradient
                colors={['rgba(0,0,0,0.8)', 'transparent', 'red']}
                style={{
                  height: 300
                }}
              />
              <View styles={[styles.blockContent, styles.shimmerShine]} />
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  shimmerBlock: {
    width: '100%'
  },
  blockHeader: {
    height: 60,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  headerCircle: {
    borderRadius: 15,
    height: 30,
    width: 30
  },
  headerTextBlock: {
    flexGrow: 1,
    height: 15
  },
  headerText: {
    marginBottom: 10
  },
  blockContent: {
    height: 80,
    width: '100%',
    marginTop: 20
  },
  shimmerShine: {
    backgroundColor: '#ececec',
    backgroundColor: '#f6f7f8'
    // backgroundImage: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
    // backgroundRepeat: no-repeat;
    // background-size: 800px 104px;
    // display: inline-block;
    // position: relative;
  }
};
