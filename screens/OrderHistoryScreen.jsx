import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons/";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const OrderHistoryScreen = () => {
  const [orderedProduct, setOrderedProduct] = useState([]);
  const navigation = useNavigation();
  const fetchOrderedProduct = async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products/?limit=5"
    );
    setOrderedProduct(response.data);
  };
  useEffect(() => {
    fetchOrderedProduct();
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
            <Text className="text-3xl font-bold text-white">My Orders</Text>
          </View>
        </View>
        <View className="bg-[#D0E8D7] rounded-t-[40px] w-full py-9 px-4 mt-10 border-2">
          <View className="flex flex-row items-center justify-between bg-white rounded-full px-4">
            <AntDesign name="search1" size={30} color="gray" />
            <TextInput
              placeholder="Search your order here"
              keyboardType="default"
              className="ml-4 w-60 h-14 text-lg"
            />
          </View>
          <View className="flex items-center justify-center">
            <FlatList
              data={orderedProduct}
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
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default OrderHistoryScreen;
