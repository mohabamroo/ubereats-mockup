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
  RefreshControl
} from 'react-native';
import { Colors } from '../Colors';
let userProfile = require('../assets/images/user.png');

// https://github.com/tokict/react-native-comments/blob/master/Comment.js
export class FacebookComments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
      commentText: '',
      comments: [
        { text: 'Very d text.', user: 'Mohab Amr' },
        {
          text: 'Very nice post but I thillnk this and that .',
          user: 'M7md 3arbi'
        },
        {
          text: "No I don't agree because you said this and that .",
          user: 'Marshal Ali'
        },
        {
          text:
            'How many niggas have we lost? this year alone? you think this is tolerable? because, Sir! I disagree..',
          user: 'Leo Dicaprio'
        }
      ]
    };

    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        this.setState({
          dynamicStyle: {
            flex: 1,
            marginBottom: 15
          }
        });
      }
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        this.setState({
          dynamicStyle: {}
        });
      }
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    const self = this;
    // TODO: bind to backend request
    setTimeout(() => {
      self.setState({ refreshing: false });
    }, 2000);
  };

  render() {
    const { comments } = this.state;
    const submitComment = () => {
      Keyboard.dismiss();
      console.log('Comment: ' + this.state.commentText);
      const self = this;
      // TODO: bind to backend request
      setTimeout(() => {
        self.setState({ commentText: '' });
      }, 300);
    };

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
          {comments.map((item, index) => (
            <View style={styles.commentBlock} key={index}>
              <View style={styles.iconWrapper}>
                <Image source={userProfile} style={[styles.icon]} />
              </View>
              <View style={styles.textBlock}>
                <Text style={styles.userName}>{item.user}</Text>
                <Text>{item.text}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
        <KeyboardAvoidingView
          style={[styles.inputWrapper, this.state.dynamicStyle]}
          behavior={Platform.OS === 'ios' ? 'padding' : null}
        >
          <TextInput
            style={styles.commentInput}
            placeholder="Write a comment..."
            onSubmitEditing={submitComment}
            value={this.state.commentText}
            onChangeText={text => this.setState({ commentText: text })}
          />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = {
  commentsSection: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  commentsWrapper: {
    flex: 1,
    marginTop: 15
  },
  inputWrapper: {
    borderTopWidth: 1,
    borderColor: '#f2f2f2',
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 18,
    paddingTop: 14
  },
  commentInput: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 2,
    borderColor: '#03c9a9',
    padding: 10
  },
  commentBlock: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row'
  },
  textBlock: {
    backgroundColor: '#ebf6f0',
    flex: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingLeft: 5,
    paddingTop: 5,
    fontSize: 12,
    paddingBottom: 10,
    color: 'black'
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
    marginBottom: 5
  },
  iconWrapper: {
    width: 30,
    height: 30,
    marginTop: 5,
    backgroundColor: '#ebf6f0',
    borderRadius: 15,
    marginRight: 5
  },
  icon: {
    width: 30,
    height: 30
  }
};
