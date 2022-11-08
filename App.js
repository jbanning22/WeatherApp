import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Temp from './components/Temp';
const URL =
  'https://api.openweathermap.org/data/2.5/weather?lat=39.683723&lon=-75.749657&appid=a18dcffbfd962f8662fbf97f8a228b5c';

const App = () => {
  const [APIData, setAPIData] = useState(null);

  // function getF({main.temp}) => {
  //     return
  // }

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
        <Temp data={APIData} />
      ) : (
        <ActivityIndicator size="large" />
      )}
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
