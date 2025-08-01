import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
  ViroARScene,
  ViroText,
  ViroImage,
  ViroTrackingStateConstants,
  ViroARSceneNavigator,
  ViroTrackingReason,
} from "@reactvision/react-viro";

const HelloWorldSceneAR = () => {
  const [text, setText] = useState("Hello World!");

  function onInitialized(state: any, reason: ViroTrackingReason) {
    console.log("AR tracking state:", state, reason);
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setText("AR Ready!");
    } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      setText("AR Unavailable");
    } else {
      setText("Initializing AR...");
    }
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      />
      {/* <ViroImage */}
      {/*   source={require("./assets/Chester.png")} */}
      {/*   // position={[0.5, -0.5, -1.5]} */}
      {/*   // scale={[0.3, 0.3, 0.3]} */}
      {/*   width={1} */}
      {/*   height={1} */}
      {/* /> */}
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
});
