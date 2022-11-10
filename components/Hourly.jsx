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
      case ('10d', '13d', '09d'):
        return faCloudRain;
      case ('03d', '02d', '04d'):
        return faCloud;
      case '01n':
        return faMoon;
      case ('02n', '03n', '04n'):
        return faCloudMoon;
    }
  }

  const renderItem = ({item}) => <Item data={item} />;

  const Item = ({data}) => {
    const {dt, temp, weather} = data;
    return (
      <View
        style={{justifyContent: 'center', alignItems: 'center', padding: 5}}>
        <View>
          <Text style={{color: 'white'}}> {ESTime(dt)} </Text>
        </View>

        <View style={{paddingTop: 8, paddingBottom: 8}}>
          <FontAwesomeIcon icon={getIcon(weather[0].icon)} color={'white'} />
        </View>

        <Text style={{color: 'white'}}> {converter(temp)} &deg;</Text>
      </View>
    );
  };

  return (
    <View style={styles.HFL}>
      <FlatList
        data={hourly}
        horizontal
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
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
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'skyblue',
    borderRadius: 10,
  },
});
