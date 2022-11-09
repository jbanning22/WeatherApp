import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

const Temp = ({data, converter, cap}) => {
  const {current, minutely, hourly, daily} = data;

  return (
    <View
      style={{
        marginTop: 40,
        marginBottom: 40,
        // borderColor: 'white',
        // borderWidth: 5,
        // borderRadius: 10,
        // backgroundColor: '#DFF1F8',
      }}>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontWeight: '500', fontSize: 22, color: 'white'}}>
          Newark
        </Text>
        <Text style={{fontSize: 68, fontWeight: '200', color: 'white'}}>
          {converter(current.temp)}&deg;
        </Text>
        <Text style={{color: 'white'}}>
          {cap(current.weather[0].description)}{' '}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          //   padding: 10,
        }}>
        <Text style={{paddingRight: 10, color: 'white'}}>
          H: {converter(daily[0].temp.max)}&deg;
        </Text>
        <Text style={{color: 'white'}}>
          L: {converter(daily[0].temp.min)}&deg;
        </Text>
      </View>
    </View>
  );
};

export default Temp;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // height: 300,
    // marginTop: 50,
    width: 150,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
});
