import React from 'react';
import {WebView} from 'react-native-webview';

export default function Midtrans(props) {
  const uri = props.route.params;
  return (
    <WebView
      source={{
        uri: `${uri}`,
      }}
      //   style={{marginTop: 20}}
    />
  );
}
