import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Temp from './components/Temp';
import Hourly from './components/Hourly';

const URL =
  'https://api.openweathermap.org/data/2.5/weather?lat=39.683723&lon=-75.749657&appid=a18dcffbfd962f8662fbf97f8a228b5c';

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
      {APIData !== null ? (
        <Temp converter={getF} data={APIData} cap={capitilize} />
      ) : (
        <ActivityIndicator size="large" />
      )}
      <View>
        <Hourly />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
});
