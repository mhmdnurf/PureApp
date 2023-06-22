import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default function Pengumuman() {
  return (
    <View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 48,
          flexDirection: 'row',
        }}>
        <Icon name="bell" size={36} color="white" />
        <Text
          style={{
            fontSize: 36,
            fontWeight: 'bold',
            color: 'white',
            marginLeft: 8,
          }}>
          Pengumuman
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          padding: 16,
          borderRadius: 10,
          marginHorizontal: 16,
        }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Icon name="info" size={16} color="#30A2FF" />
          <Text style={styles.judulPengumuman}>
            INFORMASI SEMINAR PROPORSAL !
          </Text>
        </View>
        <Text style={styles.textPengumuman}>
          Diberitahukan kepada mahasiswa/i Seminar Proporsal akan diadakan pada
          tanggal : Jumat,23-06-2023
        </Text>
        <Text style={styles.textPengumuman}>
          Pendaftaran dibuka Tanggal : Selasa,13-06-2023
        </Text>
        <Text style={styles.textPengumuman}>
          Pendaftaran ditutup Tanggal : Senin,19-06-2023
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          padding: 16,
          borderRadius: 10,
          marginHorizontal: 16,
          marginTop: 16,
        }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Icon name="info" size={16} color="#30A2FF" />
          <Text style={styles.judulPengumuman}>
            INFORMASI SIDANG AKHIR SKRIPSI !
          </Text>
        </View>
        <Text style={styles.textPengumuman}>
          Diberitahukan kepada mahasiswa/i Seminar Proporsal akan diadakan pada
          tanggal : Jumat,23-06-2023
        </Text>
        <Text style={styles.textPengumuman}>
          Pendaftaran dibuka Tanggal : Selasa,13-06-2023
        </Text>
        <Text style={styles.textPengumuman}>
          Pendaftaran ditutup Tanggal : Senin,19-06-2023
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          padding: 16,
          borderRadius: 10,
          marginHorizontal: 16,
          marginTop: 16,
        }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Icon name="info" size={16} color="#30A2FF" />
          <Text style={styles.judulPengumuman}>
            INFORMASI SIDANG KERJA PRAKTEK !
          </Text>
        </View>
        <Text style={styles.textPengumuman}>
          Diberitahukan kepada mahasiswa/i Seminar Proporsal akan diadakan pada
          tanggal : Jumat,23-06-2023
        </Text>
        <Text style={styles.textPengumuman}>
          Pendaftaran dibuka Tanggal : Selasa,13-06-2023
        </Text>
        <Text style={styles.textPengumuman}>
          Pendaftaran ditutup Tanggal : Senin,19-06-2023
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          padding: 16,
          borderRadius: 10,
          marginHorizontal: 16,
          marginTop: 16,
          marginBottom: 16,
        }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Icon name="info" size={16} color="#30A2FF" />
          <Text style={styles.judulPengumuman}>
            INFORMASI SIDANG KOMPREHENSIF !
          </Text>
        </View>
        <Text style={styles.textPengumuman}>
          Diberitahukan kepada mahasiswa/i Seminar Proporsal akan diadakan pada
          tanggal : <Text style={styles.judulPengumuman}>Jumat,23-06-2023</Text>
        </Text>
        <Text style={styles.textPengumuman}>
          Pendaftaran dibuka Tanggal : Selasa,13-06-2023
        </Text>
        <Text style={styles.textPengumuman}>
          Pendaftaran ditutup Tanggal : Senin,19-06-2023
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textPengumuman: {
    fontSize: 16,
    color: '#30A2FF',
    fontWeight: '400',
  },
  judulPengumuman: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#30A2FF',
    marginLeft: 4,
  },
});
