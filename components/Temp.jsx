import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

const Temp = ({data, converter, cap}) => {
  const {coord, weather, base, main, wind, clouds, sys} = data;

  return (
    <View
      style={{
        marginTop: 40,
        marginBottom: 40,
        borderColor: 'white',
        borderWidth: 5,
        borderRadius: 10,
        backgroundColor: '#DFF1F8',
      }}>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 22}}>Newark</Text>
        <Text style={{fontSize: 68, fontWeight: '200'}}>
          {converter(main.temp)}&deg;
        </Text>
        <Text>{cap(weather[0].description)}</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <Text style={{paddingRight: 10}}>
          High: {converter(main.temp_max)}&deg;
        </Text>
        <Text>Low: {converter(main.temp_min)}&deg;</Text>
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
