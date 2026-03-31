import { View, Text, FlatList } from 'react-native'
import Hr from './Hr'

const Aula03_Exercicio = () => {
   
    const boletim = [
        { id: 1, disciplina: "MATÉRIAS", nota: 'NOTAS', faltas: 'FALTAS'  },
        { id: 2, disciplina: "Português", nota: 10.0, faltas: 2 },
        { id: 3, disciplina: "História", nota: 10.0, faltas: 2 },
        { id: 4, disciplina: "Geografia", nota: 10.0, faltas: 4 },
        { id: 5, disciplina: "Ciências", nota: 10.0, faltas: 6 },
        { id: 6, disciplina: "Inglês", nota: 10.0, faltas: 1 },
        { id: 7, disciplina: "Educação Física", nota: 11.0, faltas: 0 },
        { id: 8, disciplina: "Matemática", nota: 10.0, faltas: 7 },
        { id: 9, disciplina: "SENAI", nota: 10.0, faltas: 7 },
        
    ]

    const exibirItensListaBoletim = ({ item }) => {
        return (
            <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
                <Text>{item.id}º</Text>
                <Text>{item.disciplina}</Text>
                <Text>{item.nota}</Text>
                <Text>{item.faltas}</Text>
            </View>
        )
    }

    return (
        <View>
            <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}>
                Boletim Escolar - 3º A Matheus Barreto
            </Text>
            <FlatList
                data={boletim}  
                renderItem={exibirItensListaBoletim}
            />
        </View>
    )
}

export default Aula03_Exercicio;