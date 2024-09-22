import { View, Text, ScrollView, FlatList, Image, Alert } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons/";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const WishlistScreen = () => {
  const navigation = useNavigation();
  const wishlistproduct = [
    {
      id: 1,
      title: "Nike Sneakers",
      price: 5000,
      image: require("../assets/products/product4.png"),
    },
    {
      id: 2,
      title: "Macbook Pro",
      price: 61990,
      image: require("../assets/products/product2.png"),
    },
    {
      id: 3,
      title: "Comfy Chair",
      price: 2000,
      image: require("../assets/products/product6.png"),
    },
    {
      id: 4,
      title: "Zebra Adidas",
      price: 3563,
      image: require("../assets/products/product1.png"),
    },
    {
      id: 5,
      title: "Hp Victus",
      price: 25000,
      image: require("../assets/products/product5.png"),
    },
    {
      id: 6,
      title: "Comfy Chair",
      price: 2000,
      image: require("../assets/products/product3.png"),
    },
  ];

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
            <Text className="text-3xl font-bold text-white">My Wishlist</Text>
          </View>
        </View>
        <View className="bg-[#D0E8D7] rounded-t-[40px] w-full py-9 px-4 mt-10">
          <View>
            <FlatList
              data={wishlistproduct}
              scrollEnabled={false}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: "space-between", gap: 10 }}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <View className="flex items-center justify-center w-40 h-72  py-6 my-2 rounded-xl">
                  <View className="w-full px-1  mt-4">
                    <Image
                      source={item.image}
                      className="w-full h-full rounded-xl"
                      resizeMode="contain"
                    />
                  </View>
                  <View className="w-full px-1 mt-2">
                    <Text className="text-lg font-semibold " numberOfLines={2}>
                      {item.title}
                    </Text>
                  </View>
                  <View className="flex flex-row items-center justify-between mt-2 w-full px-4">
                    <Text className="text-lg font-normal text-[#6C53FD]">
                      ${item.price}
                    </Text>
                    <AntDesign
                      name="heart"
                      size={30}
                      color="red"
                      onPress={() => {
                        Alert.alert(
                          "Wishlist",
                          `Product ${item.title} removed from wishlist`
                        );
                      }}
                    />
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

export default WishlistScreen;
