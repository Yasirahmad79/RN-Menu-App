// import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { AuthContext } from '../store/auth-context';
// import axios from 'axios';
import { Colors } from '../constants/styles';

function ProfileScreen() {
  // const [fetchedMessege, setFetchedMessege] = useState(''); //for fetching messege
  // const authCtx = useContext(AuthContext)
  // const token = authCtx.token;
  // useEffect(()=> {
  //   axios.get('https://expense-tracker-app-f4834-default-rtdb.firebaseio.com/messege.json?auth='+ token).then(response => {
  //     setFetchedMessege(response.data)
  //   })
  // },[token]);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      {/* <Text>{fetchedMessege}</Text> */}
      <Text>Work Are On Progress</Text>
      <Text>Currently only Logout function will be workable!</Text>
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    backgroundColor: Colors.greenish
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: "white"
  },
});
