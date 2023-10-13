import * as React from 'react';
import { WebView } from 'react-native-webview';
import { FAB } from '@rneui/themed';
import { router } from 'expo-router';
import ElasticBedLoader from '../../components/ElasticBedLoader';
import { View } from 'react-native';
import ElasticSplash from '../../components/ElasticSplash';


export default function Accruabl() {
  const [loading, setLoading] = React.useState(true);
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://accruabl.vercel.com' }}
        // onLoad={() => setLoading(false)}
      />
      {/* { loading && <ElasticSplash /> }
      <View style={{ height: loading ? 0 : '100%' }}>
      </View> */}
      <FAB
        size="small"
        icon={{
          name: "logout",
          color: "white",
        }}
        placement="right"
        onPress={() => router.back()}
      />
    </View>
  );
}