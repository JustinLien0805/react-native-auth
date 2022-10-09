import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useState } from "react";
import thermometer from "../../assets/thermometer.png";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const SignInScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const signIn = () => {
    navigation.navigate("Home");
  };
  const signInWithFacebook = () => {};
  const signInWithGoogle = () => {};
  const forgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };
  const signUpPressed = () => {
    navigation.navigate("SignUp");
  };
  return (
    <SafeAreaView>
      <View className="flex items-center">
        <View className="flex items-center w-[85%] space-y-8 pt-20">
          <Image source={thermometer} className="w-40 h-40"></Image>
          <View className="flex flex-row w-full justify-center items-center space-x-1">
            <AntDesign name="user" size={24} color="black" />
            <TextInput
              placeholder="Username"
              onChangeText={(text) => setUsername(text)}
              className="border-black border-2 grow h-12 rounded-lg"
              value={username}
            />
          </View>
          <View className="flex flex-row w-full justify-center items-center space-x-1">
            <AntDesign name="lock" size={24} color="black" />
            <TextInput
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
              className="border-black border-2 grow h-12 rounded-lg"
              value={password}
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity
            className="bg-red-500 px-4 py-2 w-full items-center rounded-lg"
            onPress={signIn}
          >
            <Text className="text-white font-bold text-xl">Sign In</Text>
          </TouchableOpacity>
          <View className="flex flex-row space-x-2">
            <TouchableOpacity
              className="w-1/2 border-2 border-sky-500 px-4 py-2 justify-center items-center rounded-lg"
              onPress={signInWithFacebook}
            >
              <AntDesign name="facebook-square" size={24} color="#3b5998" />
            </TouchableOpacity>
            <TouchableOpacity
              className="flex flex-row space-x-2 w-1/2 border-2 border-red-600 px-4 py-2 justify-center items-center rounded-lg"
              onPress={signInWithGoogle}
            >
              <AntDesign name="google" size={24} color="#dc2626" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={forgotPassword}>
            <Text className="text-blue-500 font-semibold">
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={signUpPressed}>
            <Text className="text-gray-500 font-semibold">
              Don't have an account? Create one
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
