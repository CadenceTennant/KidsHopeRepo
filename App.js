import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100, // Set marginTop to the height of your device's status bar
  },
  text: {
    fontSize: 24,
    fontFamily: 'Helvetica',
  },
});

export default function App() {
  return (
   <SafeAreaView style={styles.container}>
    <View>
      <Fetch1 />
    </View>
    </SafeAreaView>
  );
}


//https://logindevsite.wpengine.com/wp-json/mentor-app/v1/posts/6
function Fetch1() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get('https://logindevsite.wpengine.com/wp-json/mentor-app/v1/posts/6')
      .then(response => {
        setData(response.data);
        console.log(response.data);

      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      {data && (
        <View>
          <Text>{data.title}</Text>
          <Text>{data[0].post_content}</Text>
        </View>
      )}
    </View>
  );
}
