import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Aula01() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hello Word!</Text>
      <Text>Olá, este é meu primeiro App!</Text>
      <StatusBar style="auto" />
      
      <View style={styles.container2}>
        <Text style={styles.titulo2}>Esquerda</Text>
        <Text style={styles.titulo3}>Direita</Text>
        <Text style={styles.titulo4}>Centro</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 20
  },
  titulo2:{
    textAlign: 'left',
    color: 'blue'
  },
  titulo3:{
    //alinhamento à direita em negrito
    textAlign: 'right',
    fontWeight: 'bold'
  },
  titulo4:{
    textAlign: 'center',
    color: 'red'
  },
  container2:{
    //100% de largura
    width: '100%',
  }
});