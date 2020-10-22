import React from 'react';
import styled from 'styled-components';

const colorStandard = {
    corPincipal: '#0264c7'
}

export const Main = styled.View`
    flex: 1;
    flex-direction: column;
    padding: 20px;
    align-items: center;
    justify-content: flex-start;
    background-color: #222;
`;

export const HeaderView = styled.View`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

export const ButtonBack = styled.TouchableOpacity`
    width: 25px;
    height: 25px;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
`;

export const TextAnime = styled.Text`
    color: #fff;
    font-size: 24px;
    font-weight: bold;
`;

export const ContainerMain = styled.SafeAreaView`
    flex: 1;
    width: 100%;
    margin-top: 20px;
`;

export const ScrollIntern = styled.ScrollView.attrs(() => ({
    showsVerticalScrollIndicator: false
}))`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const ContainerAnime = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    border-bottom-width: 1px;
    border-bottom-color: #333;
    padding-bottom: 15px;
`;

export const ImageAnime = styled.Image`
    width: 130px;
    height: 200px;
    border-radius: 5px;
    margin-right: 10px;
    border: solid 1px ${colorStandard.corPincipal};
`;

export const Pontuation = styled.Text`
    width: 80px;
    background-color: #666;
    padding: 12px 20px;
    border-radius: 3px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const SideRight = styled.View`
    display: flex;
    flex-direction: column;
`;

export const StarPontuation = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const VotesContainer = styled.View`
    width: 100%;
    display: flex;
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const Votes = styled.Text`
    color: #fff;
    width: 100%;
    flex: 1;
`;