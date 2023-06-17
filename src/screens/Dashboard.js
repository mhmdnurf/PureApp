import React from 'react';
import {ScrollView, Image, View, Text} from 'react-native';

export default function Dashboard() {
  return (
    <ScrollView>
      <View style={{backgroundColor: '#159895'}}>
        <Text style={{padding: 16, color: 'white'}}>Dashboard</Text>
      </View>
      <View style={{backgroundColor: 'white', height: 200, padding: 16}}>
        <Text style={{textDecorationLine: 'underline'}}>
          Jadwal Sidang yang akan dilaksanakan.
        </Text>
      </View>
      <View style={{backgroundColor: 'white', padding: 16, margin: 16}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../assets/icons/light-emergency-on.png')}
            style={{width: 24, height: 24, marginRight: 8}}
          />
          <Text>Pengumuman</Text>
        </View>
      </View>
    </ScrollView>
  );
}
