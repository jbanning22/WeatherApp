import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCloud} from '@fortawesome/free-solid-svg-icons/faCloud';
import {faSun} from '@fortawesome/free-solid-svg-icons/faSun';
import {faCloudRain} from '@fortawesome/free-solid-svg-icons/faCloudRain';
import {faCloudMoon} from '@fortawesome/free-solid-svg-icons/faCloudMoon';
import {faMoon} from '@fortawesome/free-solid-svg-icons/faMoon';

const Hourly = ({data, converter}) => {
  const {current, minutely, hourly, daily} = data;

  function ESTime(unixTime) {
    var date = new Date(unixTime * 1000);
    return date.toLocaleTimeString([], {hour: '2-digit'});
  }

  function getIcon(descr) {
    switch (descr) {
      case '01d':
        return faSun;
      case '10d':
      case '10n':
      case '09n':
      case '09d':
        return faCloudRain;
      case '03d':
      case '03n':
      case '02n':
      case '04n':
      case '02d':
      case '04d':
        return faCloud;
      case '01n':
        return faMoon;
      case '02n':
      case '03n':
      case '04n':
        return faCloudMoon;
    }
  }

  const renderItem = ({item}) => <Item data={item} />;

  const Item = ({data}) => {
    const {dt, temp, weather} = data;
    console.log('icon: ', weather[0].icon);
    return (
      // <View>
      // <Text>Hourly Forecast</Text>
      // </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', padding: 5}}>
        <View>
          <Text style={{color: 'white', fontSize: 12}}> {ESTime(dt)} </Text>
        </View>

        <View
          style={{
            // paddingTop: 8,
            // paddingBottom: 8,
            marginTop: 10,
            marginBottom: 10,
          }}>
          <FontAwesomeIcon icon={getIcon(weather[0].icon)} color={'white'} />
        </View>

        <Text style={{color: 'white'}}> {converter(temp)} &deg;</Text>
      </View>
    );
  };

  return (
    <View>
      <View>
        <Text style={{alignSelf: 'center', color: 'white', fontSize: 18}}>
          Hourly Forecast
        </Text>
      </View>
      <View style={styles.HFL}>
        <FlatList
          data={hourly}
          horizontal
          renderItem={renderItem}
          keyExtractor={item => item.dt}
        />
      </View>
    </View>
  );
};

export default Hourly;

const styles = StyleSheet.create({
  HFL: {
    width: 350,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.25,
    borderColor: 'white',
    backgroundColor: 'skyblue',
    borderRadius: 10,
  },
});
