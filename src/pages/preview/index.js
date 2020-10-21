import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { FontAwesome5, Entypo, Ionicons, AntDesign } from '@expo/vector-icons';

import { 
    Main,
    HeaderView,
    ButtonBack,
    TextAnime,
    ContainerMain,
    ScrollIntern,
    ContainerAnime,
    ImageAnime,
    Pontuation,
    SideRight,
    StarPontuation,
    Votes,
    VotesContainer
} from './style';

export default function Preview({ route, navigation }){
    const { imageSource, animeName } = route.params;
    return (
        <Main>
            <HeaderView>
                <ButtonBack onPress={() => navigation.goBack()}>
                    <Ionicons name="ios-arrow-back" size={24} color="#ff5c08" />
                </ButtonBack>
                <TextAnime>
                    {animeName}
                </TextAnime>
            </HeaderView>
            <ContainerMain>
                <ScrollIntern>
                    <ContainerAnime>
                        <ImageAnime 
                            source={require('../../../src/assets/img/background.jpg')}
                        />
                        <SideRight>
                            <Pontuation>4.8</Pontuation>
                            <StarPontuation>
                                <Ionicons style={{marginRight: 12}} name="md-star" size={24} color="#ff5c08" />
                                <Ionicons style={{marginRight: 12}} name="md-star" size={24} color="#ff5c08" />
                                <Ionicons style={{marginRight: 12}} name="md-star" size={24} color="#ff5c08" />
                                <Ionicons style={{marginRight: 12}} name="md-star" size={24} color="#ff5c08" />
                                <Ionicons name="md-star-half" size={24} color="#ff5c08" />
                            </StarPontuation>
                            <VotesContainer>
                                <FontAwesome5 style={{marginRight: 12}} name="user-alt" size={16} color="white" />
                                <Votes>
                                    210 votos
                                </Votes>
                            </VotesContainer>
                            <VotesContainer>
                                <Entypo name="calendar" style={{marginRight: 12}} size={16} color="white" />
                                <Votes>
                                    Oct. 07, 2020
                                </Votes>
                            </VotesContainer>
                            <VotesContainer>
                                <AntDesign style={{marginRight: 12}} name="tag" size={16} color="white" />
                                <Votes>
                                    Ação, Comédia, Fantasia, Magia, Shounen
                                </Votes>
                            </VotesContainer>
                        </SideRight>
                    </ContainerAnime>
                </ScrollIntern> 
            </ContainerMain>
        </Main>
    );
}