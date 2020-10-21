import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

import { 
    Main, 
    InputField, 
    Scroll, 
    Imagem, 
    ContainerButtons, 
    Button,
    HeaderSection,
    TextHeader,
    LinkTo,
    Encape,
    GlobalSection,
    ScrollVertical
} from './style';

export default function Home({ navigation }){
    return (
        <Main>
            <InputField
                placeholder="pesquise aqui um anime"
                placeholderTextColor="#999"
                horizontal={true}
            />
            <ContainerButtons>
                <ScrollVertical>
                    <GlobalSection>
                        <HeaderSection>
                            <Encape>
                                <FontAwesome5 name="fire" size={20} color="#fff" />
                                <TextHeader>Animes do momento</TextHeader>
                            </Encape>
                            <LinkTo>
                                <Text style={{color: '#fff'}} >Ver mais</Text>
                            </LinkTo>
                        </HeaderSection>
                        <Scroll>
                            <Button onPress={() => navigation.navigate('Preview', {
                                imageSource: '../../../src/assets/img/background.jpg',
                                animeName: 'Black Clover'
                            })} >
                                <Imagem
                                    source={require('../../../src/assets/img/background.jpg')}
                                />
                            </Button>
                            <Button onPress={() => navigation.navigate('Preview', {
                                imageSource: '../../../src/assets/img/background.jpg',
                                animeName: 'Kimi to Boku'
                            })} >
                                <Imagem
                                    source={require('../../../src/assets/img/boku.jpg')}
                                />
                            </Button>
                            <Button>
                                <Imagem
                                    source={require('../../../src/assets/img/boruto.jpg')}
                                />
                            </Button>
                            <Button>
                                <Imagem
                                    source={require('../../../src/assets/img/jujutsu.jpg')}
                                />
                            </Button>
                            <Button>
                                <Imagem
                                    source={require('../../../src/assets/img/claymore.jpg')}
                                />
                            </Button>
                        </Scroll>
                    </GlobalSection>
                    <GlobalSection>
                        <HeaderSection>
                            <Encape>
                                <Foundation name="heart" size={24} color="#fff" />
                                <TextHeader>Novos da temporada</TextHeader>
                            </Encape>
                            <LinkTo>
                                <Text style={{color: '#fff'}} >Ver mais</Text>
                            </LinkTo>
                        </HeaderSection>
                        <Scroll>
                            <Button>
                                <Imagem
                                    source={require('../../../src/assets/img/background.jpg')}
                                />
                            </Button>
                            <Button>
                                <Imagem
                                    source={require('../../../src/assets/img/boruto.jpg')}
                                />
                            </Button>
                            <Button>
                                <Imagem
                                    source={require('../../../src/assets/img/jujutsu.jpg')}
                                />
                            </Button>
                            <Button>
                                <Imagem
                                    source={require('../../../src/assets/img/claymore.jpg')}
                                />
                            </Button>
                        </Scroll>
                    </GlobalSection>
                </ScrollVertical>
            </ContainerButtons>
        </Main>
    );
}