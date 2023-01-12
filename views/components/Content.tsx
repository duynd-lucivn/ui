import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
  },
  sectionHeader: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    fontSize: 18,
    minHeight: 20,
    marginTop: 16,
  },
  containerThree: {
    height: 240,
    width: '90%',
    backgroundColor: '#F6F6F6',
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
    width: 400,
    height: 240,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const ContentListBasics = () => {
  const data = [
    {
      id: '1',
      name: "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    },
    {
      id: '2',
      name: "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    },
    {
      id: '3',
      name: "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    },
    {
      id: '4',
      name: "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    },
    {
      id: '5',
      name: "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    },
    {
      id: '6',
      name: "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    },
    {
      id: '7',
      name: "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    },
    {
      id: '8',
      name: "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    },
    {
      id: '9',
      name: "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    },
  ];
  return (
    <ScrollView>
      <View>
        <View style={styles.container}>
          {data.map(person => {
            return (
              <View
                key={person.id}
                style={{
                  flexDirection: 'column',
                  paddingBottom: 16,
                  alignItems: 'flex-start',
                }}>
                <View style={styles.containerThree}>
                  <Image
                    style={styles.tinyLogo}
                    source={{
                      uri: 'https://images.unsplash.com/photo-1673364982114-a1e07639bda3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
                    }}
                  />
                </View>
                <Text style={styles.item}>Header</Text>
                <Text style={styles.item}>{person.name}</Text>
                <Text style={styles.item}>8m ago</Text>
              </View>
            );
          })}
        </View>
        <View style={styles.containerFour} />
      </View>
    </ScrollView>
  );
};

export default ContentListBasics;
