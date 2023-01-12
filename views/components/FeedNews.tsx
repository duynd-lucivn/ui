import React from 'react';
import {SectionList, StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
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
    height: 44,
marginBottom:16
  },
  containerThree: {
    height: 50,
    width: 50,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    paddingTop:4,
    marginRight: 16,
  },
  containerFour: {
    height: 200,
    width: '100%',
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    marginRight: 16,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {

    width: 66,
    height: 58,
  },
});

const SectionListBasics = () => {
  const data = [
    {
      id: '1',
      name:  "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    },
    {
      id: '2',
      name:  "He'll want to use your yacht, and I don't want this thing smelling like fish.",
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
      name:  "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    },
    {
      id: '6',
      name:  "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    },
    {
      id: '7',
      name:  "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    },
    {
      id: '8',
      name:  "He'll want to use your yacht, and I don't want this thing smelling like fish.",
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
              <View key={person.id}
                style={{
                  flexDirection: 'row',
                  paddingBottom:16,
                  alignItems:'flex-start'
                }}>
                <View style={styles.containerThree}>
                <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
                </View >
                <View style={{borderBottomWidth: 1, flex: 1,alignSelf:'flex-start', flexDirection: 'column',}}>
                <View style={{  flexDirection: 'row',justifyContent:'space-between'}}>  
                <Text style={styles.item}>Header</Text>
                <Text style={styles.item}>8mins</Text> 
                 </View>
                  <Text style={styles.item}>{person.name}</Text>
                </View>
              </View>
            );
          })}
        
        </View>
        <View style={styles.containerFour} />
      </View>
    </ScrollView>
  );
};

export default SectionListBasics;
