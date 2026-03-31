import {View, Text, Image, TextInput, Button, TouchableOpacity, StyleSheet} from 'react-native';
import Logo from '../assets/Meme_Sagat.png';
import {useState} from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import Aula02_FlexBox from './Aula02_FlexBox';
import Hr from './Hr';

const Aula02 = () => {
const [nome,setNome] = useState ('')


    return(
        <View>
            <Hr />
            <Text>Aula 02 - Componentes Básicos</Text>
            <Text>Conhecendo os principais componentes do React Native</Text>

            <Image source={{uri: 'https://picsum.photos/300/200'}} style={{width: 300, height: 200}} />
            <Image source={{uri: '../../assets/icon.png'}} style={{width: 50, height: 50}} />
            <Image source={Logo} style={{width: 50, height: 50}} />

            <TextInput placeholder="Digite seu nome" style={{borderWidth: 1, padding: 10, marginBottom: 10}} 
            onChangeText={setNome} />
            <Text>Seu nome é {nome}</Text>

            {/*Botão com poucas possibilidades de estilização*/}
            <Button title='Clique aqui!' onPress={() =>console.log(nome)} />

            {/*Botão com mais possibilidades de estilização*/}
            <TouchableOpacity onPress={() => console.log(nome)} style={estilos.botao}>

                <Text style={estilos.botaoTexto}>Botão TouchableOpacity</Text>
            </TouchableOpacity>

            <LinearGradient colors={['blue', 'red', 'green', 'yellow']} style={{height: 50}}>
            </LinearGradient>

            <Aula02_FlexBox />
        </View>
    )
}
//utilizamos o StyleSheet do react native para criar estilos mais organizados e reaproveitáveis,
//  mas nesse exemplo estamos utilizando estilos inline para simplificar o código
const estilos = StyleSheet.create({
    botao: {padding:12, borderRadius: 8, alignItems: 'center',
    backgroundColor: '#8400ff'},
    botaoTexto: {color: 'white', fontWeight: 'bold', fontSize: 16}

})
 
export default Aula02;