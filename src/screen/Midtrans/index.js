import React, {useEffect} from 'react';
import {WebView} from 'react-native-webview';
import {useSelector} from 'react-redux';

export default function Midtrans(props) {
  let dataBooking = useSelector(state => state.booking);
  console.log(dataBooking);
  return (
    <WebView
      source={{
        uri: `${dataBooking.data.redirectUrl}`,
      }}
      //   style={{marginTop: 20}}
    />
  );
}
