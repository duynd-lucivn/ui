import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  default: {
    backgroundColor: '#FFF',
    height: '100%',
    width: '100%',
    padding: 16,
  },
  header: {
    backgroundColor: 'transparent',
    width: '100%',
    height: 100,
    fontSize: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'Inter',
  },

  headerTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: '#000',
  },

  headerSubTitle: {
    fontWeight: '500',
    color: '#5DB075',
  },
  container: {
    backgroundColor: '#F6F6F6',
    width: '100%',
    borderColor: '#E5E5E5',
    borderWidth: 1,
    paddingLeft: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  textFieldStyle: {
    fontWeight: '500',
    width: '100%',
    height: 100,
    fontSize: 16,
  },
  textFieldSearchStyle: {
    backgroundColor: '#F6F6F6',
    width: '100%',
    borderColor: '#E5E5E5',
    borderWidth: 1,
    paddingLeft: 16,
    marginVertical: 8,
    borderRadius: 100,
  },
  iconStyle: {
    borderRadius: 16,
    width: 32,
    fontSize: 16,
    // color: '#E5E5E5',
    height: 32,
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  checkbox: {
    alignSelf: 'flex-start',
  },
  label: {
    marginHorizontal: 8,
    marginVertical: 4,
    alignSelf: 'center',
  },
  iconInTextField: {
    color: '#5DB075',
    position: 'absolute',
    top: 16,
    right: 16,
  },
});

export default styles;
