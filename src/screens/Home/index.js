import { Tela, Logo, Botao, Texto } from "./styles"

export default function Home({ navigation }) {
    return(
        <Tela>
            <Logo source={require("../../components/img/logo.png")}/>
            <Botao onPress={() => navigation.navigate('Login')}>
                <Texto>Login</Texto>
            </Botao>
            <Botao onPress={() => navigation.navigate('Cadastro')}>
                <Texto>Registrar</Texto>
            </Botao>
        </Tela>
    )
}