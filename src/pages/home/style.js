import React from 'react';
import styled from 'styled-components';

const colorStandard = {
    corPincipal: '#ff5c08'
}

export const Main = styled.View`
    flex: 1;
    flex-direction: column;
    padding: 20px;
    align-items: center;
    justify-content: flex-start;
    background-color: #111;
`;

export const InputField = styled.TextInput`
    width: 100%;
    background-color: #111;
    border-radius: 50px;
    border: solid 1px ${colorStandard.corPincipal};
    padding: 12px 24px;
    color: #fff;
`;

export const ContainerButtons = styled.SafeAreaView`
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const GlobalSection = styled.View`
    width: 100%;
    margin-bottom: 20px;
`;

export const Scroll = styled.ScrollView.attrs(() => ({
    horizontal: true, 
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        alignItems: 'center',
        //paddingLeft: 16
    }
}))`
    width: 100%;
`;

export const ScrollVertical = styled.ScrollView.attrs(() => ({
    horizontal: false, 
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        alignItems: 'center',
        //paddingLeft: 16
    }
}))`
    width: 100%;
    margin-bottom: 20px;
`;


export const Button = styled.TouchableOpacity`
    background-color: #222;
    width: 135px;
    overflow: hidden;
    height: 205px;
    display: flex;
    border: solid 1px ${colorStandard.corPincipal};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-right: 20px;
`;

export const Imagem = styled.Image`
    width: 100%;
    height: 220px;
`;

export const HeaderSection = styled.View`
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Encape = styled.View`
    display: flex;
    flex-direction: row;
`;

export const TextHeader = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
    color: #fff;
`;

export const LinkTo = styled.TouchableOpacity`
    background-color: #ff5c08;
    color: #fff;
    border-radius: 3px;
    padding: 6px 12px;
`;
