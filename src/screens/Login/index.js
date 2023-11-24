import { useEffect, useState } from "react";
import { Input, Tela, Titulo, Botao, TextoBotao } from "./styles";
import { query, collection, where, getDoc, getDocs } from "firebase/firestore"
import { db } from "../../../firebase-config"
import { Alert } from "react-native";


export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [contaId, setContaId] = useState(null)
    const [usuarioEncontrado, setUsuarioEncontrado] = useState(false)

    async function achaConta() {
        //https://firebase.google.com/docs/firestore/query-data/queries?hl=pt-br#execute_a_query
        const user = collection(db, "usuarios")
        //https://firebase.google.com/docs/firestore/query-data/queries?hl=pt-br#compound_and_queries
        const queryConta = query(user, where("email", "==", email), where("senha", "==", senha))

        const achaConta = await getDocs(queryConta)

        achaConta.forEach((doc) => {
            console.log(doc.id, doc.data())
            setContaId(doc.id)
            setUsuarioEncontrado(true)
        })
        
        if(!usuarioEncontrado) Alert.alert("Usuário não encontrado", "E-mail ou senha incorretos.")
    }

    useEffect(() => {
        if(usuarioEncontrado) {
            navigation.navigate('Vacinas', {
                params: {
                    id: contaId
                }
            })
        }
    })

    return(
        <Tela>
            <Titulo>Login</Titulo>
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
            <Botao title="Login" onPress={() => achaConta()}>
                <TextoBotao>Login</TextoBotao>
            </Botao>
        </Tela>
    )
}