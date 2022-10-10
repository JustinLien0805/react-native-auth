import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";


const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const sendNewPassword = () => {
    navigation.navigate("SignIn");
  };

  const signInPressed = () => {
    navigation.navigate("SignIn");
  };
  return (
    <SafeAreaView>
      <View className="flex items-center">
        <View className="flex items-center w-[85%] space-y-8 pt-20">
          <Text className="font-bold text-3xl">New Password</Text>

          <TextInput
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            className="w-full border-black border-2 grow h-12 rounded-lg"
            value={email}
          />
          <TextInput
            placeholder="New Password"
            onChangeText={(text) => setNewPassword(text)}
            className="w-full border-black border-2 grow h-12 rounded-lg"
            value={newPassword}
          />

          <TouchableOpacity
            className="bg-red-500 px-4 py-2 w-full items-center rounded-lg"
            onPress={sendNewPassword}
          >
            <Text className="text-white font-bold text-xl">Send</Text>
          </TouchableOpacity>

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

export default ForgotPasswordScreen;
