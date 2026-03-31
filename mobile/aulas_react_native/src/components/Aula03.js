import {View, Text} from 'react-native';
import Hr from './Hr';
import { FlatList } from 'react-native-web';
import Aula03_Exercicio from './Aula03_Exercicio';
import Aula03_Exercicio2 from './Aula03_Exercicio2';

const Aula03 = () => {
    //Definindo vetor de turmas com fonte de dados para lista
    const turmas = [
        {id: 1, turma: '3° A', pg: '12'},
        {id: 2, turma: '3° B', pg: '9'},
        {id: 3, turma: '2° A', pg: '4'},
        {id: 4, turma: '2° B', pg: '5'}
    ]

    //function
    const exibirItensLista = ({item}) => {
        <Text>{item.turma}</Text>     
    }

    const exibirItensListaInterclasse = ({item}) => {
        return(
            <View style={{flexDirection: 'row', justifyContent: 'space-between', padding:10}}>
                <Text>{item.id}°</Text>
                <Text>{item.turma}</Text>
                <Text>{item.pg}</Text>
            </View>
        )
    }

    return (
        <View>
            <Hr />
            <Text>Aula 03 - Lista com Flatlist</Text>
            <Text>Aprendendo a manipular listas em React Native</Text>
            <Hr />
            <Text>Lista de turmas</Text>
            {
                turmas.map((linha) => (
                    <Text key={linha.id}>{linha.turma}</Text>
                ))
            }
            <Text>Lista com Flatlist</Text>
            <FlatList
                data={turmas} //Passando para o vetor de turmas para o Flat como props
                renderItem={exibirItensLista} //Função de renderização para cada item da lista
                keyExtractor={(item) => item.id} //Função para gerenciar a chave de cada item da lista
            />
            <Hr />
            <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
                Interclasse SESI 2026
            </Text>
            <FlatList
                data={turmas}
                renderItem={exibirItensListaInterclasse}
                keyExtractor={(item) => item.id}
            />
            <Hr />
            <Aula03_Exercicio />
             <Hr />
             <Aula03_Exercicio2 />

        </View>
    )

}

export default Aula03;