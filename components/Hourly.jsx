import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

const Hourly = ({data, converter}) => {
  const {current, minutely, hourly, daily} = data;
  const renderItem = ({item}) => <Item data={item} />;

  const Item = ({data}) => {
    const {dt, temp, weather} = data;
    return (
      <View>
        <Text> {dt} </Text>
        <Text> {converter(temp)} </Text>
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
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  HFL: {
    width: 350,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'skyblue',
  },
});
