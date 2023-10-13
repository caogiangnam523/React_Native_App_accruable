import { useEffect } from "react";
import { Github, Twitter } from "@tamagui/lucide-icons";
import { Link, useRouter } from "expo-router";
import {
  Button,
  H1,
  ListItem,
  Paragraph,
  Separator,
  YGroup,
  YStack
} from "tamagui";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { MyStack } from "../components/MyStack";

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
    <MyStack>
      <YStack space="$4"></YStack>

      <YStack space="$2.5">
        <Button onPress={() => routerPush("/shiftmate")}>
          ShiftMate
        </Button>
        <Button onPress={() => routerPush("/accruabl")}>
          Accruabl
        </Button>
      </YStack>

      <YStack space="$5"></YStack>
    </MyStack>
  );
}
