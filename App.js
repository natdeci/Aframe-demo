import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';

export default function App() {
  const [aFrameHTML, setAFrameHTML] = useState(null);

  useEffect(() => {
    const loadHTML = async () => {
      const asset = Asset.fromModule(require('./index.html'));
      await asset.downloadAsync();

      const html = await FileSystem.readAsStringAsync(asset.localUri);
      setAFrameHTML(html);
    };

    loadHTML();
  }, []);

  if (!aFrameHTML) return null;

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{ html: aFrameHTML }}
        style={{ flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
