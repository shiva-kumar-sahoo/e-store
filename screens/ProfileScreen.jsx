import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons/";
import { useNavigation } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const ProfileScreen = () => {
  const { userLogout } = useContext(AuthContext);
  const navigation = useNavigation();
  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
      },
      { text: "OK", onPress: () => userLogout() },
    ]);
  };
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
            <Text className="text-3xl font-bold text-white">Profile</Text>
          </View>
        </View>
        <View className="bg-[#D0E8D7] rounded-t-[40px] w-full py-9 px-4 mt-10 border-2">
          <View className="flex items-center justify-center">
            <Image
              source={require("../assets/profile.png")}
              className="w-36 h-36 rounded-full"
            />
          </View>
          <Pressable
            className="w-full flex justify-end mt-6"
            onPress={() => {
              Alert.alert("edit profile");
            }}
          >
            <View className="flex flex-row items-center justify-end gap-x-2 bg-white rounded-full p-2 ml-auto">
              <Text className="text-base">Edit Profile</Text>
              <Image source={require("../assets/edit-pencil.png")} />
            </View>
          </Pressable>
          <View className="flex items-center justify-center gap-y-4 mt-6">
            <View className="bg-white p-2 rounded-xl w-full">
              <TextInput
                placeholder="Name"
                keyboardType="default"
                className="text-lg px-2"
              />
            </View>
            <View className="bg-white p-2 rounded-xl w-full">
              <TextInput
                placeholder="Contact"
                keyboardType="default"
                className="text-lg px-2"
              />
            </View>
            <View className="bg-white p-2 rounded-xl w-full h-24">
              <TextInput
                placeholder="Address"
                keyboardType="default"
                className="text-lg px-2"
              />
            </View>
          </View>
          <View className="border-b-2 my-4" />
          <View>
            <Text className="font-semibold text-2xl">My Payments</Text>
            <View className="flex items-start justify-start gap-y-4 mt-1">
              <View className="flex flex-row items-center gap-x-4 my-2">
                <Image
                  source={require("../assets/mobile-upi.png")}
                  className="w-auto h-auto"
                />
                <Text className="text-lg">Bank & UPI Details</Text>
              </View>
              <View className="flex flex-row items-center gap-x-4 my-2">
                <Image
                  source={require("../assets/money-refund.png")}
                  className="w-auto h-auto"
                />
                <Text className="text-lg">Payment & Refund</Text>
              </View>
            </View>
          </View>
          <View className="border-b-2 my-4" />
          <View>
            <Text className="font-semibold text-2xl">My Activity</Text>
            <View className="flex items-start justify-start gap-y-4 mt-1">
              <View className="flex flex-row items-center gap-x-4 my-2">
                <Image
                  source={require("../assets/heart.png")}
                  className="w-auto h-auto"
                />
                <Text className="text-lg">Wishlisted Products</Text>
              </View>
              <View className="flex flex-row items-center gap-x-4 my-2">
                <Image
                  source={require("../assets/share.png")}
                  className="w-auto h-auto"
                />
                <Text className="text-lg">Shared Products</Text>
              </View>
              <View className="flex flex-row items-center gap-x-4 my-2">
                <Image
                  source={require("../assets/ordered-products.png")}
                  className="w-auto h-auto"
                />
                <Text className="text-lg">Ordered Products</Text>
              </View>
            </View>
          </View>
          <View className="border-b-2 my-4" />
          <View>
            <Text className="font-semibold text-2xl">Others</Text>
            <View className="flex items-start justify-start gap-y-4 mt-1">
              <View className="flex flex-row items-center gap-x-4 my-2">
                <Image
                  source={require("../assets/settings.png")}
                  className="w-auto h-auto"
                />
                <Text className="text-lg">Settings</Text>
              </View>
              <View className="flex flex-row items-center gap-x-4 my-2">
                <Image
                  source={require("../assets/call.png")}
                  className="w-auto h-auto"
                />
                <Text className="text-lg">Help Desk</Text>
              </View>
              <View className="flex flex-row items-center gap-x-4 my-2">
                <Image
                  source={require("../assets/legal-policy.png")}
                  className="w-auto h-auto"
                />
                <Text className="text-lg">Legal & Policies</Text>
              </View>
            </View>
          </View>
          <View className="border-b-2 my-4" />
          <View>
            <Pressable
              className="flex flex-row items-center gap-x-2 bg-[#093616] p-2 rounded-full w-32"
              onPress={handleLogout}
            >
              <Entypo name="log-out" size={20} color="white" />
              <Text className="text-white text-lg font-semibold">Logout</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default ProfileScreen;
