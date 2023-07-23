import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ProductDetailScreen = () => {
  // Add your code here to fetch and display product details
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chi tiết sản phẩm</Text>
      {/* Display product details here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ProductDetailScreen;
