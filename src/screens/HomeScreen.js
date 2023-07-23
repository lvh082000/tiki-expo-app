import React from 'react';
import {StyleSheet, View, Text, StatusBar, ScrollView} from 'react-native';

import HomeSectionComponent from '../components/HomeSectionComponents';

const HomeScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />
      {/*  */}
      <View style={styles.headerContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Bạn tìm gì hôm nay?</Text>
        </View>
        {/*  */}
        <View style={styles.cartContainer}>
          <Text style={styles.inputText}>aaa</Text>
        </View>
      </View>
      {/*  */}
      <View style={styles.bodyContainer}>
        <ScrollView>
          <HomeSectionComponent />
          <HomeSectionComponent />
          <HomeSectionComponent />
          <HomeSectionComponent />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 50,
    paddingBottom: 4,
    backgroundColor: '#1e88e5',
  },
  inputContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 2,
  },
  inputText: {
    color: '#969696',
    fontSize: 14,
    marginLeft: 8,
    fontWeight: '500',
  },
  cartContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //
  bodyContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
