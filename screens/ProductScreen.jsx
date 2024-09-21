import { View, Text, Image, ScrollView, Pressable, Alert } from "react-native";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons/";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const ProductScreen = (params) => {
  const [product, setProduct] = useState({});
  const productId = parseInt(params.route.params.id);
  const navigation = useNavigation();
  const fetchProduct = async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    setProduct(response.data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <ScrollView className="flex-1 bg-[#115925]">
      <View className="flex flex-row items-center justify-between px-4 my-4">
        <Ionicons
          name="chevron-back-outline"
          size={44}
          color="white"
          onPress={() => params.navigation.goBack()}
        />
        <View className="flex items-center justify-center rounded-full bg-white p-3">
          <Feather
            name="shopping-cart"
            size={28}
            color="black"
            onPress={() => navigation.navigate("CartScreen")}
          />
        </View>
      </View>
      <View className="bg-[#D0E8D7] rounded-t-[40px] w-full py-9 px-4 mt-10 ">
        <View>
          <Image
            source={{ uri: product.image }}
            className="w-full h-60"
            style={{ resizeMode: "contain" }}
          />
        </View>
        <View className="flex flex-row items-center justify-around  mt-4">
          <View className="flex items-center justify-center m-2">
            <Text className="text-xl font-semibold text-black">
              {product.title}
            </Text>
          </View>
          <View className="flex items-center justify-center bg-white rounded-full p-2 mt-12">
            <AntDesign
              name="hearto"
              size={36}
              color="pink"
              onPress={() => {
                Alert.alert("Product", "Added to wishlist");
              }}
            />
          </View>
        </View>
        <View className="mt-4">
          <Text className="text-xl font-semibold text-black">
            ${product.price}
          </Text>
        </View>
        <View className="mt-4">
          <Text className="text-lg font-semibold text-black">
            {product.description}
          </Text>
        </View>
        <View className="mt-8">
          <Pressable
            className="bg-[#115925] rounded-full p-3"
            onPress={() => {
              Alert.alert("Product", "Added to cart");
            }}
          >
            <Text className="text-xl font-semibold text-white text-center">
              Add to Cart
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductScreen;
