import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { StyleSheet, Text } from 'react-native';
import { WebBrowser } from 'expo';
import { UberEatsHome } from '../components/UberEats';
import { HomeScreenRouter } from '../components/HomeRouter';
import { FacebookComments } from '../components/FacebookComments';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="homerouter"
            component={HomeScreenRouter}
            title="Home Router"
            initial={true}
          />
          <Scene key="ubereats" component={UberEatsHome} title="Uber Eats" />
          <Scene
            key="facebookComments"
            component={FacebookComments}
            title="Facebook"
          />
        </Scene>
      </Router>
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
  header: {
    backgroundColor: 'white',
    color: 'black'
  },
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
