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
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    },
    {
      id: 2,
      title: "Mobile",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      id: 3,
      title: "Sports",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
    {
      id: 4,
      title: "Electronics",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },
    {
      id: 5,
      title: "Beauty",
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    },
    {
      id: 6,
      title: "Education",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      id: 7,
      title: "Children's Toy",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
    {
      id: 8,
      title: "Shoes",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
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
              columnWrapperStyle={{ justifyContent: "space-between", gap: 15 }}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View className="flex items-center justify-center w-40 h-56 py-6 my-2 rounded-xl">
                  <View className="w-full px-1 mt-4">
                    <Image
                      source={{ uri: item.image }}
                      className="w-36 h-36 rounded-3xl"
                      resizeMode="center"
                      resizeMethod="resize"
                    />
                  </View>
                  <View className="flex flex-row items-center justify-center mt-2 w-full px-4">
                    <Text className="text-xl font-normal text-black">
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
