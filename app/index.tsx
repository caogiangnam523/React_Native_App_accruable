import { useEffect } from "react";
import { Github, Twitter } from "@tamagui/lucide-icons";
import { Link, useRouter } from "expo-router";
import {
  Button,
  H2,
  H4,
  Image,
  ListItem,
  Paragraph,
  Separator,
  YGroup,
  YStack
} from "tamagui";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { MyStack } from "../components/MyStack";
import { View } from "react-native";

export default function Home() {
  const CHOSEN_APP = "chosen-app";
  const router = useRouter();
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem(CHOSEN_APP, value);
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem(CHOSEN_APP);
      if (value !== null) {
        // value previously stored
        router.push(value)
      }
    } catch (e) {
      // error reading value
    }
  };

  const routerPush = (path: string) => {
    router.push(path);
    storeData(path);
  }

  useEffect(() => {
    // getData();
  }, []);

  return (
    <MyStack>
      <YStack space="$1"></YStack>
      <YStack space="$2" maxWidth={600}>
        <H2 textAlign="center" color="#00b0f0" style={{ fontWeight: 'bold' }}>WELCOME TO</H2>
        <Image source={require('../assets/title.png')} style={{ alignSelf: "center", height: 60, width: 322 }} />
      </YStack>

      <YStack space="$4">
        <Button onPress={() => routerPush("/shiftmate")} backgroundColor="#00b0f0" color="white" fontWeight="bold">
          TIME AND ATTENDANCE
        </Button>
        <Button onPress={() => routerPush("/accruabl")} backgroundColor="#00b0f0" color="white" fontWeight="bold">
          RECRUITMENT
        </Button>
      </YStack>

      <YStack space="$2">
        <H4 textAlign="center" color="gray">Powered by Accruabl</H4>
        <View style={{ height: 70 }}></View>
      </YStack>
    </MyStack>
  );
}
