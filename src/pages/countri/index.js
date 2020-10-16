import React, { useEffect, useState  } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
//import axios from 'axios';


import styles from './styles';

import apiPais from '../../services/apiPais';

export default function Countri(){

    const [paisConfirmed, setpaisConfirmed] = useState(0);
    const [covidRecovered, setCovidRecovered] = useState(0);
    const [covidDeaths, setCovidDeaths] = useState(0);



    const navigation = useNavigation();

    function toGeral(){
        navigation.navigate('Global');
    }

    function toPaises(){
        navigation.navigate('Paises');
    }    

    function toBack(){
        navigation.goBack();
    }    


    const route = useRoute();
    const pais = route.params.paises;
    console.log(pais.name+'-'+pais.iso2+'-'+pais.iso3);

      async function loadPaisSelecionado(){
          await apiPais.get(`${pais.iso2}`).then( res => {
            setpaisConfirmed(res.data.confirmed);
            setCovidRecovered(res.data.recovered);
            setCovidDeaths(res.data.deaths);            
              console.log(res.data.confirmed.value);
              console.log(res.data.recovered.value);
              console.log(res.data.deaths.value);              
          }).catch(err => 
              console.log(err.response)    
          )
      }

    useEffect(() => {
        loadPaisSelecionado();
    }, []);

    return (
        <View style={styles.container}>

            <View style={styles.dadosGeral}>
                    <Text style={styles.nome}>COVID-19</Text>
                    <Text style={styles.Global}>{pais.name}-{pais.iso2}</Text>
            </View>


                    <View style={styles.seguraDadosPaisa}>
                        <View style={styles.seguraDadosPais}>

                            <View style={styles.dadosAtuais}>
                                    <Text style={styles.namecofirmed}>CONFIRMADO</Text>
                                    <Text style={styles.dadoconfirmed}>{paisConfirmed.value}...</Text>
                            </View>

                            <View style={styles.dadosAtuais}>
                                    <Text style={styles.namerecovered}>RECUPERADO</Text>
                                    <Text style={styles.dadorecovered}>{covidRecovered.value}...</Text>
                            </View>

                            <View style={styles.dadosAtuais}>
                                    <Text style={styles.namedeaths}>MORTES</Text>
                                    <Text style={styles.dadosdeaths}>{covidDeaths.value}...</Text>
                            </View>

                            <View style={styles.dadosAtuais}>
                                    <Text style={styles.nameactive}>ATIVO</Text>
                                    <Text style={styles.active}>{paisConfirmed.value-(covidRecovered.value+covidDeaths.value)}...</Text>
                            </View>                            



                        </View>    
                    </View>

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.buttonGeral} onPress={toGeral}>
                        <Text style={styles.textButton}>Geral</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonPais} onPress={toPaises}>
                        <Text style={styles.textButton}>Paises</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.buttonGrafico}onPress={() => {}}>
                        <Text style={styles.textButton}>Grafico</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.buttonVoltar}onPress={toBack}>
                        <Text style={styles.textButton}>Voltar</Text>
                </TouchableOpacity>                                
            </View>                                                       

        </View>
    );
}