import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCloud} from '@fortawesome/free-solid-svg-icons/faCloud';
import {faSun} from '@fortawesome/free-solid-svg-icons/faSun';
import {faCloudRain} from '@fortawesome/free-solid-svg-icons/faCloudRain';
import {faSnowflake} from '@fortawesome/free-solid-svg-icons/faSnowflake';
import {faThunderstorm} from '@fortawesome/free-solid-svg-icons/faThunderstorm';

const Daily = ({data, converter}) => {
  const {current, minutely, hourly, daily} = data;

  function ESTime(unixTime) {
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][
      new Date(unixTime * 1000).getDay()
    ];
  }

  const renderIcon = descr => {
    switch (descr) {
      case '01d':
        return (
          <FontAwesomeIcon
            style={{marginTop: 5}}
            icon={faSun}
            color={'yellow'}
          />
        );
      case '10d':
      case '09d':
        return (
          <FontAwesomeIcon
            style={{marginTop: 5}}
            icon={faCloudRain}
            color={'white'}
          />
        );
      case '03d':
      case '02d':
      case '04d':
        return (
          <FontAwesomeIcon
            style={{marginTop: 5}}
            icon={faCloud}
            color={'white'}
          />
        );
      case '11d':
        return (
          <FontAwesomeIcon
            style={{marginTop: 5}}
            icon={faThunderstorm}
            color={'white'}
          />
        );
      case '13d':
      case '13n':
        return (
          <FontAwesomeIcon
            style={{marginTop: 5}}
            icon={faSnowflake}
            color={'white'}
          />
        );
    }
  };

  const renderItem = ({item}) => <Item data={item} />;

  const Item = ({data}) => {
    const {dt, temp, weather} = data;
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          marginBottom: 10,
        }}>
        <View style={styles.box}>
          <Text style={styles.textStyle}>{ESTime(dt)} </Text>
        </View>
        <View style={styles.box}>{renderIcon(weather[0].icon)}</View>
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
            fontSize: 16,
            marginBottom: 5,
          }}>
          Daily Forecast
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
    height: 360,
    backgroundColor: '#156598',
    paddingTop: 24,
    borderWidth: 0.5,
    borderColor: 'white',
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
