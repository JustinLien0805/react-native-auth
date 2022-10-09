import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const signUp = () => {
    navigation.navigate("Home");
  };
  const signInWithFacebook = () => {};
  const signInWithGoogle = () => {};
  const signInPressed = () => {
    navigation.navigate("SignIn");
  };
  return (
    <SafeAreaView>
      <View className="flex items-center">
        <View className="flex items-center w-[85%] space-y-8 pt-20">
          <Text className="font-bold text-3xl">CREAT AN ACCOUNT</Text>
          <TextInput
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
            className="w-full border-black border-2 grow h-12 rounded-lg"
            value={username}
          />
          <TextInput
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            className="w-full border-black border-2 grow h-12 rounded-lg"
            value={email}
          />
          <TextInput
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            className="w-full border-black border-2 grow h-12 rounded-lg"
            value={password}
          />
          <TextInput
            placeholder="Confirm Password"
            onChangeText={(text) => setConfirmPassword(text)}
            className="w-full border-black border-2 grow h-12 rounded-lg"
            value={confirmPassword}
          />

          <TouchableOpacity
            className="bg-red-500 px-4 py-2 w-full items-center rounded-lg"
            onPress={signUp}
          >
            <Text className="text-white font-bold text-xl">Sign Up</Text>
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

          <TouchableOpacity onPress={signInPressed}>
            <Text className="text-gray-500 font-semibold">
              Already have an account? Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
