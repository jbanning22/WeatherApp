import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Item,
} from 'react-native';
import React, {useState, useEffect} from 'react';

const App = () => {
  const [users, setUsers] = useState(null);

  const renderItem = ({item}) => {
    return (
      <View>
        <View>
          <Text>{item.address.zipcode}</Text>
        </View>
      </View>
    );
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      //   'https://api.openweathermap.org/data/2.5/weather?lat={39.683723}&lon={-75.749657}&appid={a18dcffbfd962f8662fbf97f8a228b5c}',
      // )
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <FlatList
            data={users}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    border: 1,
    borderwidth: 1,
    borderColor: 'white',
  },
});
