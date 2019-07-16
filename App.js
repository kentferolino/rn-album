import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/albumList';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Header title={'Albums'} />
      <AlbumList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
