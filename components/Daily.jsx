import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

const Daily = ({data, converter}) => {
  const {current, minutely, hourly, daily} = data;

  function ESTime(unixTime) {
    var date = new Date(unixTime * 1000);
    return date.toLocaleDateString('en-US', {weekday: 'short'});
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
        <Text style={{color: 'yellow'}}>Icon here</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 20,
    borderRadius: 10,
  },
  textStyle: {
    font: 30,
    color: 'white',
    padding: 10,
  },
});
