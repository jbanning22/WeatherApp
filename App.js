import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Temp from './components/Temp';
import Hourly from './components/Hourly';
import Daily from './components/Daily';

const URL =
  'https://api.openweathermap.org/data/3.0/onecall?lat=39.6837&lon=-75.7497&appid=fe00c682c3e53ad073fa636d3b457d9a';

const App = () => {
  const [APIData, setAPIData] = useState(null);

  function getF(kelvinTemp) {
    return Math.round(1.8 * (kelvinTemp - 273.15) + 32);
  }
  function capitilize(str) {
    const arr = str.split(' ');
    const result = arr.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return result.join(' ');
  }

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      setAPIData(data);
    };
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView>
        <View>
          {APIData !== null ? (
            <Temp converter={getF} data={APIData} cap={capitilize} />
          ) : (
            <ActivityIndicator size="large" />
          )}
        </View>
        <View>
          {APIData !== null ? (
            <Hourly converter={getF} data={APIData} />
          ) : (
            <ActivityIndicator size="large" />
          )}
        </View>
        <View>
          {APIData !== null ? (
            <Daily converter={getF} data={APIData} />
          ) : (
            <ActivityIndicator size="large" />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
});
