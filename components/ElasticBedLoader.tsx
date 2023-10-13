import { Dimensions } from "react-native";
import WebView from "react-native-webview";

export default function ElasticBedLoader() {
  const SplashHTML = require('./splash.html');
  return (
    <WebView
      source={SplashHTML}
      style={{ 
        position: 'absolute', 
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        // width: Dimensions.get("window").width, 
        // height: Dimensions.get("window").height,
        flex: 1,
        justifyContent: 'center',
        zIndex: 9999,
      }}
      cacheEnabled={true}
    />
  )
}