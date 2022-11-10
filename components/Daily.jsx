import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSolid} from '@fortawesome/free-solid-svg-icons/faSolid';
import {faSharp} from '@fortawesome/free-solid-svg-icons/faSharp';

import {faCloudRain} from '@fortawesome/free-solid-svg-icons/faCloudRain';

const Daily = ({data, converter}) => {
  const {current, minutely, hourly, daily} = data;

  function ESTime(unixTime) {
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][
      new Date(unixTime * 1000).getDay()
    ];
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
        <FontAwesomeIcon icon=" fa-Solid faCloudRain" />
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
    height: 1000,
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
