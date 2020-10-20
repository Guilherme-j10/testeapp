import React from 'react';
import { View, Text } from 'react-native';

import { Main, InputField } from './style';

export default function Home({ Navigation }){
    return (
        <Main>
            <InputField
                placeholder="pesquise aqui um anime"
                placeholderTextColor="#999"
            />
        </Main>
    );
}