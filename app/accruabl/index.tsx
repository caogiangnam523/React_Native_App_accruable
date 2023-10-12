import * as React from 'react';
import { WebView } from 'react-native-webview';


export default function Accruabl() {
  return (
    <WebView
      source={{ uri: 'https://accruabl.vercel.com' }}
    />
  );
}