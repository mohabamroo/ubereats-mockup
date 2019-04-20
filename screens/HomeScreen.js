import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Header } from 'react-native-elements';
import { WebBrowser } from 'expo';
import { Section } from '../components/Section';
import { ImageHeader } from '../components/ImageHeader';
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  state = {
    favorites: [
      {
        image: '',
        title: 'Double Dds',
        location: 'Nasr city',
        minTime: 40,
        maxTime: 50,
        rating: 3.5
      }
    ],
    top: [
      {
        image: '',
        title: 'Double Dds',
        location: 'Nasr city',
        minTime: 40,
        maxTime: 50,
        rating: 5
      },
      {
        image: '',
        title: 'Double Dds',
        location: 'Nasr city',
        minTime: 40,
        maxTime: 50,
        rating: 4.4
      }
    ]
  };
  render() {
    return (
      <View>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <ScrollView style={styles.scrollLayout}>
          <ImageHeader />
          <Section cards={this.state.favorites} title="Your favorite" />
          <Section cards={this.state.top} title="Top Picks" />
          <Section cards={this.state.favorites} title="Your favorite" />
          <Section cards={this.state.top} title="Top Picks" />
        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use
          useful development tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/development-mode'
    );
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    margin: 2,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: '#d2f7f1'
  },
  card: {
    padding: 10
  },
  scrollLayout: {
    backgroundColor: '#F4F4F4'
  }
});
