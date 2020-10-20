import React from 'react';
import { View, TextInput } from 'react-native'
import styled from 'styled-components';

export const Main = styled.View`
    flex: 1;
    flex-direction: column;
    padding: 20px;
    align-items: center;
    justify-content: flex-start;
    background-color: #111;
`;

export const InputField = styled.TextInput`
    background-color: #fff;
    width: 100%;
    background-color: #222;
    border-radius: 50px;
    border: solid 1px #891594;
    padding: 12px 24px;
    color: #fff;
`;