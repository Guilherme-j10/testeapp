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
    const { 
        imageSource, 
        animeName,
        tag,
        lancamento,
        votes,
        pontuation
    } = route.params;

    return (
        <Main>
            <HeaderView>
                <ButtonBack onPress={() => navigation.goBack()}>
                    <Ionicons name="ios-arrow-back" size={24} color="#0264c7" />
                </ButtonBack>
                <TextAnime>
                    {animeName}
                </TextAnime>
            </HeaderView>
            <ContainerMain>
                <ScrollIntern>
                    <ContainerAnime>
                        <ImageAnime 
                            source={imageSource}
                        />
                        <SideRight>
                            <Pontuation>{pontuation}</Pontuation>
                            <StarPontuation>
                                <Ionicons style={{marginRight: 12}} name="md-star" size={24} color="#0264c7" />
                                <Ionicons style={{marginRight: 12}} name="md-star" size={24} color="#0264c7" />
                                <Ionicons style={{marginRight: 12}} name="md-star" size={24} color="#0264c7" />
                                <Ionicons style={{marginRight: 12}} name="md-star" size={24} color="#0264c7" />
                                <Ionicons name="md-star-half" size={24} color="#0264c7" />
                            </StarPontuation>
                            <VotesContainer>
                                <FontAwesome5 style={{marginRight: 12}} name="user-alt" size={16} color="white" />
                                <Votes>
                                    {votes}
                                </Votes>
                            </VotesContainer>
                            <VotesContainer>
                                <Entypo name="calendar" style={{marginRight: 12}} size={16} color="white" />
                                <Votes>
                                    {lancamento}
                                </Votes>
                            </VotesContainer>
                            <VotesContainer>
                                <AntDesign style={{marginRight: 12}} name="tag" size={16} color="white" />
                                <Votes>
                                    {tag}
                                </Votes>
                            </VotesContainer>
                        </SideRight>
                    </ContainerAnime>
                </ScrollIntern> 
            </ContainerMain>
        </Main>
    );
}