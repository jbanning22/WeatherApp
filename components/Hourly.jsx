import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

const Hourly = ({data, converter}) => {
  const {current, minutely, hourly, daily} = data;

  function ESTime(unixTime) {
    var date = new Date(unixTime * 1000);
    return date.toLocaleTimeString([], {hour: '2-digit'});
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

        <View>
          <Text style={{color: 'yellow'}}>Icon here </Text>
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
  },
});
