import { addDoc, collection } from "firebase/firestore"
import { Tela, Input, Titulo, Botao, TextoBotao } from "./styles"
import { useState } from "react"
import { db } from "../../../firebase-config"
import { Alert } from "react-native"

export default function Cadastro({ navigation }) {
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [sus, setSus] = useState('')

    async function addFirestore() {
        //https://firebase.google.com/docs/firestore/quickstart?hl=pt-br#add_data
        try {
            const user = await addDoc(collection(db, "usuarios"), {
                email: email,
                senha: senha
            })
            console.log(`Usuário ${user.id} adicionado`)
            Alert.alert(
                'Conta criada!',
                'Siga para a página de login.',
                [
                    {
                        text: 'OK',
                        onPress: () => navigation.navigate('Login')
                    }
                ]
            )
        } catch (error) {
            console.error("Erro:", error)
        }
    }

    const adicionaConta = () => {
    
        if(email.length === 0 || senha.length === 0 || confirmarSenha.length === 0) Alert.alert('Erro', "Campos incompletos")
    
        else if(senha !== confirmarSenha) Alert.alert('Erro', 'Senha não corresponde')
    
        else addFirestore()
    };

    return(
        <Tela>
            <Titulo>Cadastro</Titulo>
            <Input
                placeholder="Nome completo"
                value={nome}
                onChangeText={setNome}
            />
            <Input
                placeholder="CPF"
                value={cpf}
                onChangeText={setCpf}
            />
            <Input
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <Input
                secureTextEntry
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
            />
            <Input
                secureTextEntry
                placeholder="Confirme sua Senha"
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
            />
            <Input
                placeholder="Data de Nascimento"
                value={dataNascimento}
                onChangeText={setDataNascimento}
            />
            <Input
                placeholder="Nº cartão SUS"
                value={sus}
                onChangeText={setSus}
            />
            <Botao onPress={() => adicionaConta()}>
                <TextoBotao>Registrar</TextoBotao>
            </Botao>
        </Tela>
    )
}