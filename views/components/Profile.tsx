import React, {useState} from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
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
    marginBottom: 16,
  },
  containerThree: {
    height: 50,
    width: 50,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    paddingTop: 4,
    marginRight: 16,
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 158,
    width: 158,
    backgroundColor: '#fff',
    borderRadius: 158,
    position: 'absolute',
    overflow: 'hidden',
    left: 0,
    //top: 120,
    right: 0,
    bottom: 0,
  },
  containerFour: {
    height: 200,
    width: '100%',
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    marginRight: 16,
  },
  header: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    height: 19,
    marginBottom: 8,
  },
  time: {
    fontSize: 14,
    fontWeight: '400',
    color: '#BDBDBD',
    height: 17,
    marginBottom: 8,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 156,
  },
  logo: {
    width: 400,
    height: 240,
  },
});

const ProfileDetail = () => {
  const [chose, setChose] = useState(true);
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
    <View>
      <View style={{height: 60}}></View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
          fontWeight: '600',
          color: '#000',
        }}>
        Victoria Robertson
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          fontWeight: '600',
          color: '#000',
        }}>
        A mantra goes here
      </Text>
      <View
        style={{
          flexDirection: 'row',
          borderRadius: 100,
          marginTop: 32,
          marginHorizontal: 32,
          justifyContent: 'center',
          backgroundColor: '#E8E8E8',
          marginBottom: 16,
        }}>
        <TouchableOpacity
          onPress={() => setChose(true)}
          style={{
            flex: 1,
            minHeight: 51,
            borderRadius: 100,
            width: '40%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: chose ? '#fff' : '#E8E8E8',
            opacity: 1,
          }}>
          <Text style={{color: chose ? '#5DB075' : '#BDBDBD', fontSize: 16}}>
            Posts
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setChose(false)}
          style={{
            width: '40%',
            flex: 1,

            minHeight: 51,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: !chose ? '#fff' : '#E8E8E8',
            opacity: 1,
          }}>
          <Text style={{color: !chose ? '#5DB075' : '#BDBDBD', fontSize: 16}}>
            Photos
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: 16}}>
        {chose === true ? (
          <ScrollView style={{minHeight: 240}}>
            <View style={styles.container}>
              {data.map(person => {
                return (
                  <View
                    key={person.id}
                    style={{
                      flexDirection: 'row',
                      paddingBottom: 16,
                      alignItems: 'flex-start',
                    }}>
                    <View style={styles.containerThree}>
                      <Image
                        style={styles.tinyLogo}
                        source={{
                          uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                      />
                    </View>
                    <View
                      style={{
                        borderBottomWidth: 1,
                        borderBottomColor: '#E8E8E8',
                        flex: 1,
                        alignSelf: 'flex-start',
                        flexDirection: 'column',
                      }}>
                      <View
                        style={{
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                        }}>
                        <Text style={styles.header}>Header</Text>
                        <Text style={styles.time}>8m ago</Text>
                      </View>
                      <Text style={styles.item}>{person.name}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        ) : (
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
                      }}>
                      <View style={styles.containerThree}>
                        <Image
                          style={styles.logo}
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
            </View>
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default ProfileDetail;
