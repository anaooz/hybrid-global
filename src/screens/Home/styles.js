import styled from 'styled-components/native'

const tamanho = 300

export const Tela = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #009377;
`

export const Logo = styled.Image`
    height: ${tamanho}px;
    width: ${tamanho}px;
    margin-bottom: 50px;
`

export const Botao = styled.TouchableOpacity`
    padding: 10px 30px;
    width: 400px;
    background-color: #1c463e;
    margin: 7px 0;
    border-radius: 15px;
    align-items: center;
`

export const Texto = styled.Text`
    color: #FFFFFF;
    font-size: 25px;
`