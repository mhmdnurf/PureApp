import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import DataPendaftar from '../components/DataPendaftar';
import Pengumuman from '../components/Pengumuman';

export default function Dashboard() {
  return (
    <ScrollView style={{backgroundColor: '#30A2FF'}}>
      <View>
        <Text
          style={{
            padding: 16,
            marginTop: 16,
            color: 'white',
            fontSize: 24,
            fontWeight: 'bold',
          }}>
          Dashboard
        </Text>
        <Text
          style={{
            paddingBottom: 16,
            paddingHorizontal: 16,
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Welcome Back, Muhammad Nurfatkhur Rahman
        </Text>
      </View>
      <DataPendaftar />
      <Pengumuman />
    </ScrollView>
  );
}
