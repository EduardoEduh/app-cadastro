import React from 'react';
import styled from 'styled-components/native';

const ContainerItems = styled.View`
    flex: 1;
    width: 100%;
    background-color: #fff;
    border-radius: 30px;
    padding: 22px;
    margin-top: 17px;
`;

const ImageUser = styled.Image`
  width: 200px; 
  height: 200px;
  margin: 0 auto;
`;

const ItemText = styled.Text`
    flex: 1;
    font-weight: bold;
    font-size: 18px;
    color: #000;
`;


function ListItems(props) {
    return(
        <ContainerItems>
            <ImageUser
                source={{uri: props.data.image }}
            />
            <ItemText>Nome: {props.data.name}</ItemText>
            <ItemText>Sobrenome: {props.data.sobrenome}</ItemText>
            <ItemText>Data de Nascimento: {props.data.dataNascimento}</ItemText>
            <ItemText>E-mail: {props.data.email}</ItemText>
        </ContainerItems>
    );
};
export default ListItems;