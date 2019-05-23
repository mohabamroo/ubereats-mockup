import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import { Section } from '../components/Section';
import { ImageHeader } from '../components/ImageHeader';

export class UberEatsHome extends React.Component {
  render() {
    this.state = {
      favorites: [
        {
          image:
            'https://assets3.thrillist.com/v1/image/2725860/size/gn-gift_guide_variable_c.jpg',
          title: 'Double Dds..',
          location: 'Nasr city',
          minTime: 40,
          maxTime: 50,
          rating: 3.5,
          price: '$$$',
          category: 'Pizzza',
          rest: 'Italian',
          lastOrd: new Date(),
          staticBox: 1
        }
      ],
      top: [
        {
          image:
            'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          title: 'Burger King',
          location: 'Nasr city',
          minTime: 42,
          maxTime: 53,
          rating: 4.7,
          price: '$$$',
          category: 'Burgers',
          rest: 'American',
          lastOrd: new Date()
        },
        {
          image:
            'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
          title: 'Shawrma El Reem',
          location: 'El Sahrawy',
          minTime: 35,
          maxTime: 45,
          rating: 4.3,
          price: '$$',
          category: 'Shawrma',
          rest: 'Syrian',
          lastOrd: new Date()
        },
        {
          image:
            'https://assets3.thrillist.com/v1/image/2725860/size/gn-gift_guide_variable_c.jpg',
          title: 'Pizza Hut',
          location: 'Mostafa El nahaas',
          minTime: 45,
          maxTime: 60,
          rating: 5,
          price: '$$$',
          category: 'Pizzza',
          rest: 'Italian',
          lastOrd: new Date()
        },
        {
          image:
            'https://images.pexels.com/photos/459469/pexels-photo-459469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          title: 'Crave',
          location: 'Maadi',
          minTime: 55,
          maxTime: 65,
          rating: 4.6,
          price: '$$$$',
          category: 'Food',
          rest: 'French',
          lastOrd: new Date()
        }
      ],
      short: [
        {
          image:
            'https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
          title: 'Awlad El &ag Ragab',
          location: 'Ahmed Fakhry',
          minTime: 20,
          maxTime: 24,
          rating: 4.1,
          price: '$',
          category: 'Vegetables',
          rest: 'Natural',
          lastOrd: new Date()
        },
        {
          image:
            'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          title: 'Toast And Bread',
          location: 'Makrm Ebid',
          minTime: 18,
          maxTime: 22,
          rating: 4.3,
          price: '$$',
          category: 'Toast',
          rest: 'French',
          lastOrd: new Date()
        },
        {
          image:
            'https://images.pexels.com/photos/5929/food-salad-dinner-eating.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          title: 'Kosharnia',
          location: 'Abbas EL Akkad',
          minTime: 20,
          maxTime: 23,
          rating: 4.7,
          price: '$$',
          category: 'Food',
          rest: 'Egyptian',
          lastOrd: new Date()
        }
      ],
      recommendations: [
        {
          image:
            'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          title: "Daddy's Burger",
          location: 'Masr El Gdeda',
          minTime: 43,
          maxTime: 49,
          rating: 4.7,
          price: '$$$',
          category: 'Burgers',
          rest: 'American',
          lastOrd: new Date()
        },
        {
          image:
            'https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          title: 'Pasta&Wine',
          location: 'Tagamo3',
          minTime: 50,
          maxTime: 55,
          rating: 4.8,
          price: '$$$',
          category: 'Pastas',
          rest: 'French',
          lastOrd: new Date()
        },
        {
          image:
            'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          title: 'Wilies Kitchen',
          location: 'Ebraheem Nawaar',
          minTime: 39,
          maxTime: 56,
          rating: 4.9,
          price: '$$$',
          category: 'Sandwiches',
          rest: 'General',
          lastOrd: new Date()
        }
      ]
    };
    return (
      <View style={{ marginBottom: 100 }}>
        <Header
          leftComponent={{ text: 'ASAP Makrmk ebid' }}
          rightComponent={{ text: 'Filter' }}
          style={styles.header}
          statusBarProps={{ barStyle: 'dark-content' }}
          barStyle="dark-content" // or directly
          containerStyle={{
            backgroundColor: 'white',
            // fontWeight: 'bold',
            elevation: 1
          }}
        />
        <ScrollView style={styles.scrollLayout}>
          <ImageHeader />
          <Section cards={this.state.favorites} title="Your favorite" />
          <Section cards={this.state.top} title="Top Picks" />
          <Section cards={this.state.short} title="Under 25 minutes" />
          <Section
            cards={this.state.recommendations}
            title="Recommended Resturants"
          />
        </ScrollView>
      </View>
    );
  }
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
