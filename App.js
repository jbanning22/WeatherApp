import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  StatusBar,
  Platform,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Temp from './components/Temp';
import Hourly from './components/Hourly';
import Daily from './components/Daily';
import Geolocation from 'react-native-geolocation-service';

const App = () => {
  const [location, setLocation] = useState({});
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
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('always');
    }
  }, []);

  useEffect(() => {
    const getData = async url => {
      const res = await fetch(url);
      const data = await res.json();
      setAPIData(data);
    };
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocation({latitude, longitude});
        console.log(latitude, longitude);
        const URL = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=fe00c682c3e53ad073fa636d3b457d9a`;
        console.log(URL);
        getData(URL);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View>
        {APIData !== null ? (
          <Temp
            converter={getF}
            location={location}
            data={APIData}
            cap={capitilize}
          />
        ) : (
          <ActivityIndicator
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            size="large"
          />
        )}
      </View>
      <View>
        {APIData !== null ? <Hourly converter={getF} data={APIData} /> : null}
      </View>
      <View>
        {APIData !== null ? <Daily converter={getF} data={APIData} /> : null}
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#1374B2',
  },
});
