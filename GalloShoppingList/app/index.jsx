import {Link} from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={require('../assets/red.jpg')}
        style={styles.avatar}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Gallo Shopping List</Text>
        <Text style={styles.text}>Monte sua lista de comprar e não esqueça maiso que precisa comprar ao sair de casa!</Text>
        <Link style={styles.button} href={"/home"}>
          <Text style={styles.buttonText}>Acessar</Text>
        </Link>
      </View>
      <StatusBar style="light" backgroundColor='#000'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  containerImage: {
    flex:2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar:{
    width: 230,
    height: 230,
    resizeMode: 'cover',
    borderRadius: 115,
  },
  content: {
    flex: 1,
    backgroundColor: '#dadada',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: '5%'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: 'grey',
    alignSelf: 'center',
  },
  button: {
    position: 'absolte',
    backgroundColor: '#000',
    bottom: -20,
    alignSelf: 'center',
    borderRadius: 50,
    paddingVertical: 15,
    width: '60%',
    textAlign: 'center',
  },

  buttonText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold'
  },
});
