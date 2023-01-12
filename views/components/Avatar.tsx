import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
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
    shadowColor: '#65656526',
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowRadius: 20,
    shadowOpacity: 5,
    left: '33.33%',
    top: 128,
    bottom: 0,
  },
  containerFour: {
    height: 200,
    width: '100%',
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    marginRight: 16,
  },
  tinyLogo: {
    height: 152,
    width: 152,
    backgroundColor: '#fff',
    borderRadius: 152,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const Avatar = () => {
  return (
    <View style={styles.avatar}>
      <Image
        style={styles.tinyLogo}
        resizeMode={'cover'}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </View>
  );
};

export default Avatar;
