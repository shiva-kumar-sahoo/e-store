import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { Feather, FontAwesome5, AntDesign } from "@expo/vector-icons/";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const SignupScreen = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { userLogin } = useContext(AuthContext);
  const navigation = useNavigation();
  const handleSignUp = async () => {
    if (email && password) {
      await userLogin(email);
    } else {
      Alert.alert("All field is required.");
    }
  };
  return (
    <KeyboardAvoidingView className="flex-1 items-center justify-center bg-[#115925]">
      <View className="flex items-center justify-center my-6">
        <Image source={require("../assets/logo.png")} className="w-40 h-40" />
      </View>
      <View className="flex items-center justify-center bg-[#D0E8D7] rounded-t-[40px] w-full py-6">
        <View className="my-6">
          <Text className="text-3xl font-semibold text-black">Sign Up</Text>
        </View>
        <View className="flex items-center justify-center space-y-8 my-8">
          <View className="flex flex-row items-center space-x-2 bg-white rounded-full p-1">
            <View className="flex items-center justify-center bg-[#115925] rounded-full w-12 h-12">
              <Feather name="user" size={26} color="white" />
            </View>
            <TextInput
              placeholder="Email"
              keyboardType="email-address"
              className="ml-4 w-60 h-10 text-lg"
              onChangeText={(value) => setEmail(value)}
            />
          </View>
          <View className="flex flex-row items-center space-x-2 bg-white rounded-full p-1">
            <View className="flex items-center justify-center bg-[#115925] rounded-full w-12 h-12">
              <Feather name="lock" size={26} color="white" />
            </View>
            <TextInput
              placeholder="Password"
              keyboardType="visible-password"
              className="ml-4 w-60 h-10 text-lg"
              onChangeText={(value) => setPassword(value)}
            />
          </View>
        </View>
        <View className="flex items-center justify-center my-6 gap-y-5">
          <View className="flex flex-row items-center justify-evenly w-full my-2">
            <Pressable className="bg-[#093616] py-3 rounded-full w-32">
              <Text
                className="text-base text-center text-white"
                onPress={handleSignUp}
              >
                Sign Up
              </Text>
            </Pressable>
          </View>
          <View className="flex flex-row items-center justify-center mt-4">
            <Text className="text-base">Already have an account? </Text>
            <Text
              className="text-[#6C53FD] text-base"
              onPress={() => {
                navigation.navigate("LoginScreen");
              }}
            >
              Login
            </Text>
          </View>
        </View>
        <View className="flex flex-row items-center justify-evenly w-full my-4">
          <View className="flex items-center justify-center rounded-full bg-[#4D6EF6] p-3">
            <FontAwesome5 name="facebook" size={30} color="white" />
          </View>
          <View className="flex items-center justify-center rounded-full bg-[#FF0000] p-3">
            <AntDesign name="google" size={30} color="white" />
          </View>
          <View className="flex items-center justify-center rounded-full bg-[#1C99E7] p-3">
            <AntDesign name="twitter" size={30} color="white" />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;
