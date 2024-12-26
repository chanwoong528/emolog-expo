import { Image, StyleSheet, Platform, Alert } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Button, Input, SizeTokens, TextArea, XStack, YStack } from "tamagui";
import DomComp from "@/components/dom/DomComp";

export default function HomeScreen() {
  const onClickDomComp = async (data: string) => {
    console.log("onClickDomComp", data);
    Alert.alert("onClickDomComp");
  };

  return (
    <>
      <YStack
        width={200}
        minHeight={250}
        overflow='hidden'
        space='$2'
        margin='$3'
        padding='$2'>
        <InputDemo size='$2' />

        <InputDemo size='$3' />
        <InputDemo size='$4' />
        <TextArea placeholder='Enter your details...' />
      </YStack>
      <XStack width={200} height={250} margin='$3' padding='$2'>
        <DomComp
          dom={{ matchContents: true }}
          name='Hello123'
          onClickProps={async (data: string) => {
            await onClickDomComp(data);
          }}
        />
      </XStack>
    </>
  );
}

function InputDemo(props: { size: SizeTokens }) {
  return (
    <XStack alignItems='center' space='$2'>
      <Input
        flex={1}
        size={props.size}
        placeholder={`Size ${props.size}...`}
        color={"$color2"}
      />
      <Button size={props.size}>Go</Button>
    </XStack>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
