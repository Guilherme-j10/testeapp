import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation, Feather } from '@expo/vector-icons';

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
    ScrollVertical,
    ButtonMenu,
    ContainerMainHeader
} from './style';

export default function Home({ navigation }){
    return (
        <Main>
            <ContainerMainHeader>
                <ButtonMenu>
                    <Feather name="menu" size={30} color="white" />
                </ButtonMenu>
                <InputField
                    placeholder="pesquise aqui um anime"
                    placeholderTextColor="#999"
                    horizontal={true}
                />
            </ContainerMainHeader>
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
                                imageSource: require('../../../src/assets/img/background.jpg'),
                                pontuation: 5,
                                votes: 4336,
                                lancamento: 'Oct. 03, 2017',
                                tag: 'Ação, Comédia, Fantasia, Magia, Shounen',
                                animeName: 'Black Clover'
                            })} >
                                <Imagem
                                    source={require('../../../src/assets/img/background.jpg')}
                                />
                            </Button>
                            <Button onPress={() => navigation.navigate('Preview', {
                                imageSource: require('../../../src/assets/img/boku.jpg'),
                                pontuation: 4.8,
                                votes: 340,
                                lancamento: 'Oct. 07, 2020',
                                tag: 'Ação, Fantasia, Militar, Romance',
                                animeName: 'Kimi to Boku no Saigo...'
                            })} >
                                <Imagem
                                    source={require('../../../src/assets/img/boku.jpg')}
                                />
                            </Button>
                            <Button onPress={() => navigation.navigate('Preview', {
                                imageSource: require('../../../src/assets/img/boruto.jpg'),
                                pontuation: 3,
                                votes: 2167,
                                lancamento: 'Oct. 07, 2020',
                                tag: 'Ação, Aventura, Shounen',
                                animeName: 'Boruto'
                            })}>
                                <Imagem
                                    source={require('../../../src/assets/img/boruto.jpg')}
                                />
                            </Button>
                            <Button onPress={() => navigation.navigate('Preview', {
                                imageSource: require('../../../src/assets/img/jujutsu.jpg'),
                                pontuation: 4.9,
                                votes: 391,
                                lancamento: 'Oct. 03, 2020',
                                tag: 'Ação, Demônios, Escolar, Horror, Shounen, Sobrenatural',
                                animeName: 'Jujutsu kaisen'
                            })}>
                                <Imagem
                                    source={require('../../../src/assets/img/jujutsu.jpg')}
                                />
                            </Button>
                            <Button onPress={() => navigation.navigate('Preview', {
                                imageSource: require('../../../src/assets/img/claymore.jpg'),
                                pontuation: 4.7,
                                votes: 128,
                                lancamento: 'Apr. 03, 2007',
                                tag: 'Ação, Fantasia, Horror, Sobrenatural, Demônios',
                                animeName: 'Calymore'
                            })}>
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