import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

const Temp = ({data, converter, cap}) => {
  const {current, minutely, hourly, daily} = data;

  return (
    <View
      style={{
        marginTop: 40,
        marginBottom: 40,
      }}>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontWeight: '500', fontSize: 30, color: 'white'}}>
          Newark
        </Text>
        <Text style={{fontSize: 80, fontWeight: '200', color: 'white'}}>
          {converter(current.temp)}&deg;
        </Text>
        <Text style={{fontSize: 16, color: 'white'}}>
          {cap(current.weather[0].main)}{' '}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text style={{paddingRight: 10, color: 'white', fontSize: 16}}>
          H: {converter(daily[0].temp.max)}&deg;
        </Text>
        <Text style={{color: 'white', fontSize: 16}}>
          L: {converter(daily[0].temp.min)}&deg;
        </Text>
      </View>
    </View>
  );
};

export default Temp;

const styles = StyleSheet.create({
  container: {
    width: 150,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
});
