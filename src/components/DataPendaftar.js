import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function () {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View
        style={{
          marginLeft: 16,
          padding: 16,
          backgroundColor: 'white',
          width: 300,
          height: 150,
          borderRadius: 15,
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            alignItems: 'flex-start',
          }}>
          <Icon name="user" size={48} color="#30A2FF" />
        </View>
        <View
          style={{
            alignItems: 'flex-end',
          }}>
          <Text style={{fontSize: 24, color: '#30A2FF', fontWeight: 'bold'}}>
            Pendaftar Sidang KP
          </Text>
          <Text style={{fontSize: 36, color: '#30A2FF', fontWeight: 'bold'}}>
            6
          </Text>
        </View>
      </View>
      <View
        style={{
          marginLeft: 16,
          padding: 16,
          backgroundColor: 'white',
          width: 300,
          height: 150,
          borderRadius: 15,
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            alignItems: 'flex-start',
          }}>
          <Icon name="user" size={48} color="#30A2FF" />
        </View>
        <View
          style={{
            alignItems: 'flex-end',
          }}>
          <Text style={{fontSize: 24, color: '#30A2FF', fontWeight: 'bold'}}>
            Pendaftar Seminar Proporsal
          </Text>
          <Text style={{fontSize: 36, color: '#30A2FF', fontWeight: 'bold'}}>
            28
          </Text>
        </View>
      </View>
      <View
        style={{
          marginLeft: 16,
          padding: 16,
          backgroundColor: 'white',
          width: 300,
          height: 150,
          borderRadius: 15,
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            alignItems: 'flex-start',
          }}>
          <Icon name="user" size={48} color="#30A2FF" />
        </View>
        <View
          style={{
            alignItems: 'flex-end',
          }}>
          <Text style={{fontSize: 24, color: '#30A2FF', fontWeight: 'bold'}}>
            Pendaftar Sidang Skripsi
          </Text>
          <Text style={{fontSize: 36, color: '#30A2FF', fontWeight: 'bold'}}>
            6
          </Text>
        </View>
      </View>
      <View
        style={{
          marginLeft: 16,
          padding: 16,
          backgroundColor: 'white',
          width: 300,
          height: 150,
          borderRadius: 15,
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            alignItems: 'flex-start',
          }}>
          <Icon name="user" size={48} color="#30A2FF" />
        </View>
        <View
          style={{
            alignItems: 'flex-end',
          }}>
          <Text style={{fontSize: 24, color: '#30A2FF', fontWeight: 'bold'}}>
            Pendaftar Sidang Komprehensif
          </Text>
          <Text style={{fontSize: 36, color: '#30A2FF', fontWeight: 'bold'}}>
            6
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
