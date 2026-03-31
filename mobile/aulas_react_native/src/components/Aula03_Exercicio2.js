import { View, Text, FlatList, Image } from 'react-native'
import Hr from './Hr'

const Aula03_Exercicio2 = () => {
   
    const produtos = [
        { id: 1, produto: "PRODUTOS", foto: 'FOTO', preco: 'PREÇO', estoque: 'ESTOQUE'  },
        { id: 2, produto: "Tenis nike", foto: 'https://static.netshoes.com.br/produtos/tenis-nike-downshifter-13-masculino/40/JD8-6466-240/JD8-6466-240_zoom1.jpg?ts=1777532566&ims=1088x', preco: 140.00, estoque: 81  },
        
    ]

    const exibirItensListaProduto = ({ item }) => {
        return (
            <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
                <Text>{item.id}º</Text>
                <Text>{item.produto}</Text>
                <Image source={{ uri: item.foto }} style={{ width: 50, height: 50 }} />
                <Text>{item.preco}</Text>
                <Text>{item.estoque}</Text>
            </View>
        )
    }

    return (
        <View>
            <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}>
                Produtos
            </Text>
            <FlatList
                data={produtos}  
                renderItem={exibirItensListaProduto}
            />
        </View>
    )
}

export default Aula03_Exercicio2;