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
      case ('03d', '02d', '04d'):
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
        <Text style={styles.textStyle}>{ESTime(dt)} </Text>
        {/* <FontAwesomeIcon icon={getIcon(weather[0].main)} color={'white'} /> */}
        <FontAwesomeIcon icon={getIcon(weather[0].icon)} color={'white'} />
        <Text style={styles.textStyle}>{converter(temp.max)}&deg; </Text>
        <Text style={styles.textStyle}>{converter(temp.min)}&deg;</Text>
      </View>
    );
  };
  return (
    <View style={styles.VFL}>
      <FlatList
        data={daily}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Daily;

const styles = StyleSheet.create({
  VFL: {
    width: 350,
    height: 500,
    backgroundColor: 'skyblue',
    // justifyContent: 'center',
    // alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 20,
    borderRadius: 10,
  },
  textStyle: {
    fontSize: 20,
    // justifyContent: 'space-between',
    alignSelf: 'flex-start',
    color: 'white',
    padding: 10,
    paddingRight: 10,
    paddingRight: 10,
  },
});
