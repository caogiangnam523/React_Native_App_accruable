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
import { ImageBackground, View } from "react-native";

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
    getData();
  }, []);

  return (
    <MyStack padding="$0">
      <ImageBackground source={require('../assets/background.png')} style={{ width: '100%', height: '100%' }}>        
        <MyStack backgroundColor={'$colorTransparent'}>
          <YStack space="$2" maxWidth={600}>
            <View style={{ height: 200 }}></View>
            <Image source={require('../assets/title_white.png')} style={{ alignSelf: "center", height: 60, width: 322 }} />
          </YStack>

          <YStack space="$4">
            <Button onPress={() => routerPush("/shiftmate")} backgroundColor="#00b0f0" color="white" fontWeight="bold">
              TIME AND ATTENDANCE
            </Button>
            <Button onPress={() => routerPush("/accruabl")} backgroundColor="#ffd24e" color="black" fontWeight="bold">
              RECRUITMENT
            </Button>
          </YStack>

          <YStack space="$2">
            <H4 textAlign="center" color="white">Powered by Accruabl</H4>
            <View style={{ height: 110 }}></View>
          </YStack>
        </MyStack>      
      </ImageBackground>
    </MyStack>
  );
}
