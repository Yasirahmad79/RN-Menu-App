import {StyleSheet, Text} from 'react-native'

const DrawerUser = () => {
  return (
    <Text style={styles.main}>DrawerUser Screen Just For Implementing Drawer Navigation..</Text>
  )
}

export default DrawerUser;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 25,
        textAlign: 'center'
    }
})