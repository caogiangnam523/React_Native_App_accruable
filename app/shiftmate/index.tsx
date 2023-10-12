import * as React from 'react';
import { WebView } from 'react-native-webview';


export default function ShiftMate() {
  return (
    <WebView
      source={{ uri: 'https://dev.shiftmate.app' }}
    />
  );
}