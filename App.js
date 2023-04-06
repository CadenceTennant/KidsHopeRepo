import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { axios } from 'axios';


export default function App() {
  let x = 1;
  console.log("App executed");
//  const fetchData = () => {
//    const baseURL = "https://logindevsite.wpengine.com/wp-json/mo/v1/get_posts";
//    axios.get(`${baseURL}`).then((response) => console.log(response.data));
//  };
//  useEffect(() => {
//    fetchData();
//  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello Haniah!!</Text>
      //{fetchData} this should show
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
