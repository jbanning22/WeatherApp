import {SafeAreaView, StyleSheet, Text, View, Image, Item} from 'react-native';
import React, {useState, useEffect} from 'react';

const App = () => {
  const [users, setUsers] = useState(null);
  const {coord, weather, base, main, wind, clouds, sys} = users;
  //   console.log(users);
  //   console.log(weather);

  useEffect(() => {
    fetch(
      'https:api.openweathermap.org/data/2.5/weather?lat=39.683723&lon=-75.749657&appid=a18dcffbfd962f8662fbf97f8a228b5c',
    )
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Text>{}</Text>
        </View>

        <View>
          <Text>{wind.speed}</Text>
        </View>

        <View style={styles.currentConditions}>
          <Text>{main.temp_max}</Text>
          <Text>{main.temp_min}</Text>
        </View>
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
    border: 1,
    borderwidth: 1,
    borderColor: 'black',
  },
  currentConditions: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    border: 1,
    borderwidth: 1,
    borderColor: 'black',
    backgroundColor: '#0DD8F1',
  },
});
