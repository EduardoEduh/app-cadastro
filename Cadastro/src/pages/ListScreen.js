import React from 'react';
import styled from 'styled-components/native';
import ListItems from '../Components/ListItems';
import { useRoute } from '@react-navigation/native';

const Body = styled.SafeAreaView`
    flex: 1;
    background-color: rgb(125, 32, 199);
`;

const Titulo = styled.Text`
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    padding-top: 22px;
    color: #fff;
`;

const Listagem = styled.FlatList`
    flex: 1;
`;

function ListScreen() {

    //useRoute para trazer os dados da outra tela
    const route = useRoute();

    const list = route.params.list;

    return(
        <Body>
            <Titulo>Usuários Cadastrados</Titulo>
            <Listagem
                //Data recebe o array da lista  
                data={list}
                renderItem = {({item}) => <ListItems data={item}/>}
                keyExtractor={(item) => item.id} 
                contentContainerStyle={{
                    padding: 20
                }}
            />
        </Body>
    );
};
export default ListScreen;