import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCloud} from '@fortawesome/free-solid-svg-icons/faCloud';
import {faSun} from '@fortawesome/free-solid-svg-icons/faSun';
import {faCloudRain} from '@fortawesome/free-solid-svg-icons/faCloudRain';

const Daily = ({data, converter}) => {
  const {current, minutely, hourly, daily} = data;

  function ESTime(unixTime) {
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][
      new Date(unixTime * 1000).getDay()
    ];
  }

  function getIcon(descr) {
    switch (descr) {
      case '01d':
        return faSun;
      case '10d':
        return faCloudRain;
      case '03d':
      case '02d':
      case '04d':
        return faCloud;
    }
  }

  const renderItem = ({item}) => <Item data={item} />;

  const Item = ({data}) => {
    const {dt, temp, weather} = data;
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          marginBottom: 20,
        }}>
        <View style={styles.box}>
          <Text style={styles.textStyle}>{ESTime(dt)} </Text>
        </View>
        <View style={styles.box}>
          <FontAwesomeIcon
            style={{marginTop: 5}}
            icon={getIcon(weather[0].icon)}
            color={'white'}
          />
        </View>
        <View style={styles.box}>
          <Text style={styles.textStyle}>L: {converter(temp.min)}&deg;</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.textStyle}>H: {converter(temp.max)}&deg; </Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <View>
        <Text
          style={{
            alignSelf: 'center',
            color: 'white',
            marginTop: 25,
            fontSize: 18,
          }}>
          Hourly Forecast
        </Text>
      </View>
      <View style={styles.VFL}>
        <FlatList
          data={daily}
          renderItem={renderItem}
          keyExtractor={item => item.dt}
        />
      </View>
    </View>
  );
};

export default Daily;

const styles = StyleSheet.create({
  VFL: {
    width: 350,
    height: 500,
    backgroundColor: 'skyblue',
    paddingTop: 24,
    borderWidth: 0.25,
    borderColor: 'white',
    // marginTop: 20,
    borderRadius: 10,
  },
  textStyle: {
    fontSize: 20,
    color: 'white',
  },
  box: {
    height: 40,
    width: 60,
  },
});
