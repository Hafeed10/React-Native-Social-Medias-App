/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[styles.backgroundStyle, backgroundStyle]}>
      {/*! //  Navbar full finish */}
      <View style={styles.max}>
        <Text style={styles.middle}>FILLI</Text>
        <TouchableOpacity>
          <Text style={styles.middle1}>$$$</Text>
        </TouchableOpacity>
      </View>
      {/*! //  Navbar full finish */}
      {/* Scroll box seting  horizen true  start */}
      <View style={styles.sectionmax}>
        <Text style={styles.sectionText}>Box</Text>
      </View>
      {/* Scroll box seting  horizen true  end */}
      {/* This row working method only img popup setting start */}
      <View style={styles.sectionMap}>
        <View style={styles.sectionmaxe1}>
          <Text style={styles.sectionText}>Box1</Text>
        </View>
        <View style={styles.sectionmaxe1}>
          <Text style={styles.sectionText}>Box2</Text>
        </View>
        <View style={styles.sectionmaxe1}>
          <Text style={styles.sectionText}>Box2</Text>
        </View>
        <View style={styles.sectionmaxe1}>
          <Text style={styles.sectionText}>Box2</Text>
        </View>
        <View style={styles.sectionmaxe1}>
          <Text style={styles.sectionText}>Box2</Text>
        </View>
      </View>
      {/* This row working method only img popup setting end */}
      {/* This row working method only image scroll start  */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={[styles.sectionlispop, {flex: 1}]}>
          <View style={styles.sectionlist}>
            <Text>Body</Text>
          </View>
        </View>
        <View style={[styles.sectionlispop, {flex: 1}]}>
          <View style={styles.sectionlist}>
            <Text>Body</Text>
          </View>
        </View>
        <View style={[styles.sectionlispop, {flex: 1}]}>
          <View style={styles.sectionlist}>
            <Text>Body</Text>
          </View>
        </View>
        <View style={[styles.sectionlispop, {flex: 1}]}>
          <View style={styles.sectionlist}>
            <Text>Body</Text>
          </View>
        </View>
      </ScrollView>
      {/* This row working method only image scroll start  */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {flex: 1},
  max: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#c024cb', // Single color background
  },
  middle: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
  },
  middle1: {
    fontSize: 26,
    color: '#d3b5b5',
    fontWeight: 'bold',
  },

  sectionmax: {
    backgroundColor: '#b86db2',
    height: 200,
    padding: 10,
    width: '93%',
    marginLeft: 13,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  sectionText: {
    color: '#fff',
    fontSize: 20,
  },
  sectionMap: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  sectionmaxe: {
    flexDirection: 'row',
    backgroundColor: '#a8a1a8',
    height: 200,
    padding: 10,
    width: '13%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  sectionmaxe1: {
    flexDirection: 'row',
    backgroundColor: '#8d858c',
    height: 200,
    padding: 10,
    width: '13%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  sectionlispop: {
    flexDirection: 'row',
    flex: 1, // Add this
  },
  sectionlist: {
    backgroundColor: '#8d858c',
    height: 100,
    padding: 1,
    width: 150,
    marginLeft: 12,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    // Remove width: '100%'
  },
});

export default App;
