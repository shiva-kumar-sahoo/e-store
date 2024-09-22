import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { AntDesign, Feather, FontAwesome6 } from "@expo/vector-icons/";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const dummyExploreCategoriesData = [
    {
      id: 1,
      title: "Furniture",
      icon: "bed",
    },
    {
      id: 2,
      title: "Clothes",
      icon: "shirt",
    },
    {
      id: 3,
      title: "Electronics",
      icon: "tv",
    },
    {
      id: 4,
      title: "Sports",
      icon: "football",
    },
    {
      id: 5,
      title: "Books",
      icon: "book",
    },
    {
      id: 6,
      title: "Toys",
      icon: "car",
    },
    {
      id: 7,
      title: "Beauty",
      icon: "smile",
    },
  ];

  const FeaturedProducts = [
    {
      id: 1,
      title: "Zebra Adidas",
      price: 3563,
      image: require("../assets/products/product1.png"),
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
      image: require("../assets/products/product3.png"),
    },
    {
      id: 4,
      title: "Nike Sneakers",
      price: 5000,
      image: require("../assets/products/product4.png"),
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
      image: require("../assets/products/product6.png"),
    },
  ];
  const TrendingProducts = [
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
    <ScrollView
      className="flex-1 bg-[#115925] pt-4"
      nestedScrollEnabled={true}
      showsVerticalScrollIndicator={false}
    >
      <View className="flex flex-row items-center justify-between px-4 my-4">
        <View>
          <Text className="text-3xl font-bold text-white">Home</Text>
        </View>
        <View className="flex flex-row items-center space-x-4">
          <View>
            <AntDesign
              name="heart"
              size={36}
              color="red"
              onPress={() => {
                navigation.navigate("WishlistScreen");
              }}
            />
          </View>
          <View className="flex items-center justify-center rounded-full bg-white p-3">
            <Feather
              name="shopping-cart"
              size={28}
              color="black"
              onPress={() => navigation.navigate("CartScreen")}
            />
          </View>
        </View>
      </View>
      <View className="mt-6">
        <FlatList
          data={dummyExploreCategoriesData}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View className="flex items-center justify-center space-x-2 px-3">
              <View className="flex items-center justify-center rounded-full bg-[#D0E8D7] p-5">
                <FontAwesome6 name={item.icon} size={24} color="grey" />
              </View>
              <View className="flex items-center justify-center">
                <Text className="text-lg text-white ">{item.title}</Text>
              </View>
            </View>
          )}
        />
      </View>
      <View className="bg-[#D0E8D7] rounded-t-[40px] w-full py-6 px-4 mt-10">
        <View className="items-start ">
          <Text className="text-2xl font-semibold text-start text-black mt-6">
            Featured Products
          </Text>
          <FlatList
            data={FeaturedProducts}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
                className="space-x-2 my-1 p-2"
                onPress={() => {
                  navigation.navigate("ProductScreen", { id: item.id });
                }}
              >
                <View className="w-full p-2">
                  <Image
                    source={item.image}
                    className="w-36 h-36 rounded-3xl"
                    resizeMode="contain"
                    resizeMethod="resize"
                  />
                </View>
                <View className="flex items-start justify-between gap-x-2">
                  <Text className="text-lg text-center text-black">
                    {item.title}
                  </Text>
                  <Text className="text-lg text-center text-[#6C53FD]">
                    ₹{item.price}
                  </Text>
                </View>
              </Pressable>
            )}
          />
        </View>

        <View className="mt-2 items-start">
          <Text className="text-2xl font-bold text-black mt-6">
            Trending Products
          </Text>
          <FlatList
            data={TrendingProducts}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            renderItem={({ item }) => (
              <Pressable
                className="space-x-2 my-1 p-2"
                onPress={() => {
                  navigation.navigate("ProductScreen", { id: item.id });
                }}
              >
                <View className="w-full p-2">
                  <Image
                    source={item.image}
                    className="w-36 h-36 rounded-3xl"
                    resizeMode="contain"
                    resizeMethod="resize"
                  />
                </View>
                <View className="flex items-start justify-between gap-x-2">
                  <Text className="text-lg text-center text-black">
                    Demo {item.id}
                  </Text>
                  <Text className="text-lg text-center text-[#6C53FD]">
                    ₹{item.price}
                  </Text>
                </View>
              </Pressable>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
