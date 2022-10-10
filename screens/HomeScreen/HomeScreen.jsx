import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
const HomeScreen = () => {
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/sql", {
  //       headers: {
  //         "Content-Type": "application/json",
  //         db: "rn",
  //         ns: "rn",
  //         Accept: "application/json",
  //         Authorization: "root:root",
  //       },
  //     })
  //     .then((response) => {
  //       setData(response.result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <SafeAreaView>
      <ScrollView className="h-full border-2">
        <View className="flex items-center h-full border-2 mx-2">
          {data.map((item) => (
            <View className="flex items-center w-[85%] space-y-8 pt-20">
              <Text className="font-bold text-3xl">{item.username}</Text>
              <Text className="font-bold text-3xl">{item.password}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
