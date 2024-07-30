import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Colors } from '../constants/styles';

// Dummy payment method icons
const paymentMethods = [
  { id: '1', name: 'Credit/Debit Card', image: 'https://via.placeholder.com/50x30?text=Card' },
  { id: '2', name: 'PayPal', image: 'https://via.placeholder.com/50x30?text=PayPal' },
  { id: '3', name: 'Apple Pay', image: 'https://via.placeholder.com/50x30?text=Apple+Pay' },
  { id: '4', name: 'Google Pay', image: 'https://via.placeholder.com/50x30?text=Google+Pay' },
];

const PaymentScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  // Extracting checkout details from route params
  const { title, imageUrl, totalPrice, quantity, selectedSize, } = route.params || {};


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.itemDetails}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>Total Price: ${totalPrice}</Text>
          <Text style={styles.price}>{quantity} Item{quantity > 1 ? 's' : ''}</Text>
          <Text style={styles.price}>Size: {selectedSize}</Text>
        </View>
      </View>
      
      <Text style={styles.paymentTitle}>Choose Payment Method</Text>
      
      {paymentMethods.map(method => (
        <TouchableOpacity key={method.id} style={styles.paymentOption}>
          <Image source={{ uri: method.image }} style={styles.paymentImage} />
          <Text style={styles.paymentText}>{method.name}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => {
          // Handle the payment process here
          alert('Payment Confirmed');
          navigation.goBack();
        }}
      >
        <Text style={styles.confirmButtonText}>Confirm Payment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  itemDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginRight: 10,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    color: 'black',
    fontWeight: '900',
    marginBottom: 5,
  },
  paymentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'black',
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  paymentImage: {
    width: 50,
    height: 30,
    marginRight: 10,
  },
  paymentText: {
    fontSize: 16,
    color: 'black',
  },
  confirmButton: {
    backgroundColor: Colors.primary800,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PaymentScreen;
