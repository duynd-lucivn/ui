import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  item: {
    fontSize: 14,
    minHeight: 50,
    fontWeight: '400',
    color: '#000',
    marginTop: 16,
  },
  price: {
    fontSize: 14,
    color: '#000',
    fontWeight: '600',
    marginTop: 4,
  },
  containerThree: {
    minHeight: 200,
    width: 110,
    borderRadius: 8,
    paddingTop: 4,
  },
  containerFour: {
    height: 200,
    width: '100%',
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    marginRight: 16,
  },
  tinyLogo: {
    width: 110,
    height: 110,
    borderRadius: 8,
  },
});

const MarketListBasics = () => {
  const data = [
    {
      title: 'Hot deals',
      id: 1,
      data: [
        {
          id: '1',
          name: 'Roksolana Zasiadko',
          url: 'https://images.unsplash.com/reserve/RONyPwknRQOO3ag4xf3R_Kinsey.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        },
        {
          id: '2',
          name: 'Roksolana Zasiadko',
          url: 'https://images.unsplash.com/photo-1440589473619-3cde28941638?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpcmwlMjBmcm9tJTIwY291bnRyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: '3',
          name: 'Brooke Cagle',
          url: 'https://images.unsplash.com/photo-1445052858312-134745f190f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
        {
          id: '4',
          name: 'Brooke Cagle',
          url: 'https://images.unsplash.com/photo-1441123694162-e54a981ceba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
      ],
    },
    {
      title: 'Trending',
      id: 2,
      data: [
        {
          id: '1',
          name: 'Roksolana Zasiadko',
          url: 'https://images.unsplash.com/reserve/RONyPwknRQOO3ag4xf3R_Kinsey.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        },
        {
          id: '2',
          name: 'Roksolana Zasiadko',
          url: 'https://images.unsplash.com/photo-1440589473619-3cde28941638?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpcmwlMjBmcm9tJTIwY291bnRyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: '3',
          name: 'Brooke Cagle',
          url: 'https://images.unsplash.com/photo-1445052858312-134745f190f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
        {
          id: '4',
          name: 'Brooke Cagle',
          url: 'https://images.unsplash.com/photo-1441123694162-e54a981ceba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
      ],
    },
    {
      title: 'Deals',
      id: 3,
      data: [
        {
          id: '1',
          name: 'Roksolana Zasiadko',
          url: 'https://images.unsplash.com/reserve/RONyPwknRQOO3ag4xf3R_Kinsey.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        },
        {
          id: '2',
          name: 'Roksolana Zasiadko',
          url: 'https://images.unsplash.com/photo-1440589473619-3cde28941638?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpcmwlMjBmcm9tJTIwY291bnRyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: '3',
          name: 'Brooke Cagle',
          url: 'https://images.unsplash.com/photo-1445052858312-134745f190f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
        {
          id: '4',
          name: 'Brooke Cagle',
          url: 'https://images.unsplash.com/photo-1441123694162-e54a981ceba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
      ],
    },
  ];
  return (
    <ScrollView>
      <View>
        <View style={styles.container}>
          {data.map(person => {
            return (
              <View key={person.id}>
                <Text style={styles.header}>{person.title}</Text>
                <ScrollView
                  scrollEnabled
                  horizontal
                  showsHorizontalScrollIndicator={false}>
                  <View style={[styles.container, {flexDirection: 'row'}]}>
                    {person.data.map(item => {
                      return (
                        <View
                          key={item.id}
                          style={{
                            flexDirection: 'column',
                            paddingBottom: 16,
                            paddingRight: 24,
                            alignItems: 'flex-start',
                          }}>
                          <View style={styles.containerThree}>
                            <Image
                              style={styles.tinyLogo}
                              source={{
                                uri: item.url,
                              }}
                            />
                            <Text style={styles.item}>{item.name}</Text>
                            <Text style={styles.price}>$19.99</Text>
                          </View>
                        </View>
                      );
                    })}
                  </View>
                </ScrollView>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default MarketListBasics;
