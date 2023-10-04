import { View, Text, StyleSheet, ActivityIndicator, Alert } from "react-native";
import React, { useState } from "react";
import WebView from "react-native-webview";

const WebViewScreen = () => {
  const [isLoading, setLoading] = useState(true);

  let checkIfLoading = () => {
    //console.log(isLoading)
    if (isLoading) return <ActivityIndicator />;
  };

  return (
    <View style={{ flex: 1 }}>
      {checkIfLoading()}

      <WebView
        source={{ uri: "http://caodang.fpt.edu.vn/" }}
        javaScriptEnabled={true}
        scalesPageToFit={true}
        onLoadEnd={() => {
          console.log("load end");
          setLoading(false);
        }}
      />
    </View>
  );
};

export default WebViewScreen;
