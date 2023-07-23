import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ProductDetailScreen = () => {
  // Hard-coded product details for demonstration
  const product = {
    name: "Macbook M1 Pro",
    price: "36,999,000 VND",
    description:
      "Mô tả sản phẩm: Đây là Macbook M1 Pro với cấu hình mạnh mẽ đáp ứng cho tất cả mọi nhu cầu làm việc nặng",
    imageURL:
      "https://macstores.vn/wp-content/uploads/2021/10/macbook-pro-16-inch-space-gray-m1-pro.jpg",
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
