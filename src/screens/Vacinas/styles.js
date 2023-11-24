import styled from 'styled-components/native'

export const Tela = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #009377;
`

export const Itens = styled.View`
    background-color: #FFFFFF;
    border-radius: 20px;
    align-items: center;
    padding: 10% 30%;
    margin: 10px 0px;
`

export const NomeVacina = styled.Text`
    font-size: 30px;
`

export const FlatVacinas = styled.FlatList``

export const Botao = styled.TouchableOpacity`
    padding: 25px;
    background-color: #173a33;
    margin: 10px;
    border-radius: 35px;
    align-items: center;
`

export const TextoBotao = styled.Text`
    color: #FFFFFF;
    font-size: 25px;
`