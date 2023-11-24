import { Itens, NomeVacina, Tela, FlatVacinas, Botao, TextoBotao } from "./styles";
import { db } from "../../../firebase-config"
import { updateDoc, doc } from "firebase/firestore";
//https://github.com/WrathChaos/react-native-bouncy-checkbox
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from "react";
import { data } from "./vacinas";

export default function Vacinas({ route }) {
    const {id} = route.params.params
    console.log(id)

    const [vacinas, setVacinas] = useState(data);

    //https://www.nicesnippets.com/blog/how-to-create-multiple-select-checkbox-in-react-native
    const handleChange = (id) => {
        let temp = vacinas.map((vacina) => {
            if (id === vacina.id) {
                return { ...vacina, status: !vacina.status };
            }
            return vacina;
        });
        setVacinas(temp);
    };

    async function atualizaVacinas() {
        await updateDoc(doc(db, "usuarios", id), {
            vacina: {
                tuberculose: vacinas[0].status,
                poliomelite: vacinas[1].status,
                tetravalente: vacinas[2].status,
                tripliceViral: vacinas[3].status,
                hepatiteB: vacinas[4].status,
                febreAmarela: vacinas[5].status,
                duplaViral: vacinas[6].status,
                influenza: vacinas[7].status,
                pneumococo: vacinas[8].status,
                covid19: vacinas[9].status
            }
        })
    }

    // function status(){
    //     console.log(vacinas[1])
    //     vacinas.forEach((vacina) => {
    //         console.log(vacina.status)
    //     })
    // }

    const ListaVacinas = (renderData) => {
        return(
            <FlatVacinas
            data={renderData}
            renderItem={({ item }) => (
                <Itens>
                    <NomeVacina>{item.title}</NomeVacina>
                    <BouncyCheckbox
                        size={40}
                        fillColor="green"
                        onPress={(isChecked) => {handleChange(item.id)}}
                    />                    
                </Itens>
                )}
            />
        )
    }

    return(
        <Tela>
            {ListaVacinas(vacinas)}
            <Botao onPress={() => atualizaVacinas()}>
                <TextoBotao>Atualizar</TextoBotao>
            </Botao>
        </Tela>
    )
}