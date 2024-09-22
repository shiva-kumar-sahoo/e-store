import { View, Text, ScrollView, Image, Pressable, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons/";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import axios from "axios";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const CartScreen = () => {
  const [cartproduct, setCartProduct] = useState([]);
  const navigation = useNavigation();
  const fetchCartProduct = async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products/?limit=5"
    );
    setCartProduct(response.data);
  };
  useEffect(() => {
    fetchCartProduct();
  }, []);
  return (
    <GestureHandlerRootView>
      <ScrollView
        className="flex-1 bg-[#115925]"
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex flex-row items-center  px-4 my-4">
          <View>
            <Ionicons
              name="chevron-back-outline"
              size={44}
              color="white"
              onPress={() => navigation.goBack()}
            />
          </View>
          <View>
            <Text className="text-3xl font-bold text-white">My Cart</Text>
          </View>
        </View>
        <View className="bg-[#D0E8D7] rounded-t-[40px] w-full py-9 px-4 mt-10 border-2">
          <View className="flex items-center justify-center">
            <FlatList
              data={cartproduct}
              scrollEnabled={false}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <View className="flex flex-row items-center space-x-4 p-4">
                  <View className="w-20 px-1 h-20">
                    <Image
                      source={{ uri: item.image }}
                      className="w-full h-full rounded-xl"
                      resizeMode="center"
                      resizeMethod="resize"
                    />
                  </View>
                  <View className="flex w-2/3 items-start justify-between gap-x-2">
                    <Text className="text-lg font-semibold" numberOfLines={2}>
                      {item.title}
                    </Text>
                    <Text className="text-lg font-normal text-[#6C53FD] mt-2">
                      ₹{item.price}
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>
          <View>
            <View className="flex flex-row items-center justify-between px-4 mt-4">
              <Text className="text-lg font-semibold text-black">
                Subtotal:{" "}
              </Text>
              <Text className="text-lg font-semibold text-black">
                ₹{cartproduct.reduce((a, b) => a + b.price, 0)}
              </Text>
            </View>
          </View>
          <View>
            <Pressable
              className="flex items-center justify-center rounded-full bg-[#093616] p-4 mt-4"
              onPress={() => {
                Alert.alert("Payment Successful");
              }}
            >
              <Text className="text-lg font-semibold text-white">
                Make Payment
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default CartScreen;
