import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';

const Temp = ({data, location, converter, cap}) => {
  const [city, setCity] = useState('');
  const {current, minutely, hourly, daily} = data;

  useEffect(() => {
    const URL = `https://api.tomtom.com/search/2/reverseGeocode/${location.latitude},${location.longitude}.json?key=z3JIhQDKHGEG92E3Jw5PJT8kmDLfmu0M&radius=100`;

    const getData = async url => {
      try {
        const res = await fetch(url);
        const data = await res.json();

        setCity(data.addresses[0].address.localName);
      } catch (err) {
        console.log('error ', err);
      }
    };

    getData(URL);
  }, []);

  return (
    <View
      style={{
        marginTop: 40,
        marginBottom: 40,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontWeight: '500', fontSize: 30, color: 'white'}}>
          {city}
        </Text>
        <Text
          style={{
            fontSize: 80,
            fontWeight: '200',
            color: 'white',
            alignSelf: 'center',
          }}>
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
