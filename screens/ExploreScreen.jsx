import { View, Text, ScrollView, FlatList, Image, Alert } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Ionicons, AntDesign } from "@expo/vector-icons/";
import { useNavigation } from "@react-navigation/native";
const ExploreScreen = () => {
  const navigation = useNavigation();
  const demoExploreData = [
    {
      id: 1,
      title: "Fashion",
      image: require("../assets/categories/category1.png"),
    },
    {
      id: 2,
      title: "Mobile",
      image: require("../assets/categories/category2.png"),
    },
    {
      id: 3,
      title: "Sports",
      image: require("../assets/categories/category3.png"),
    },
    {
      id: 4,
      title: "Electronics",
      image: require("../assets/categories/category4.png"),
    },
    {
      id: 5,
      title: "Men's Cloth",
      image: require("../assets/categories/category5.png"),
    },
    {
      id: 6,
      title: "Women's Cloth",
      image: require("../assets/categories/category6.png"),
    },
    {
      id: 7,
      title: "Beauty",
      image: require("../assets/categories/category7.png"),
    },
    {
      id: 8,
      title: "Books & Education",
      image: require("../assets/categories/category8.png"),
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
            <Text className="text-3xl font-bold text-white">Explore</Text>
          </View>
        </View>
        <View className="bg-[#D0E8D7] rounded-t-[40px] w-full py-9 px-4 mt-10 border-2">
          <View className="flex items-center justify-center">
            <FlatList
              data={demoExploreData}
              scrollEnabled={false}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: "space-between", gap: 10 }}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View className="flex items-center justify-center w-40 h-56 py-6 my-2 rounded-xl">
                  <View className="w-full px-1 mt-4">
                    <Image
                      source={item.image}
                      className="w-full h-full rounded-xl"
                      resizeMode="contain"
                    />
                  </View>
                  <View className="flex flex-row items-start mt-2 w-full">
                    <Text className="text-lg font-normal text-black">
                      {item.title}
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

export default ExploreScreen;
