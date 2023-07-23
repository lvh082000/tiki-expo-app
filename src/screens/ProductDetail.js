import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ProductDetailScreen = () => {
  // Hard-coded product details for demonstration
  const product = {
    name: "Sản phẩm A",
    price: "100,000 VND",
    description: "Mô tả sản phẩm A: Đây là sản phẩm A mô tả...",
    imageURL:
      "https://vuongkhang.com/v1/upload/28/Surface-Pro-8/1.png/1000x0.webp", // Replace this with the actual image URL
  };

  return (
    <View style={styles.container}>
      {/* Layout column bên trên */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.imageURL }} style={styles.image} />
      </View>

      {/* Layout column bên dưới */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    marginTop: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  price: {
    fontSize: 18,
    color: "green",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});

export default ProductDetailScreen;
