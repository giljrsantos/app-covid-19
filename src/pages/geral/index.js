import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';

import apiGlobal from '../../services/apiGlobal';

export default function Geral(){

    const [covidConfirmed, setCovidConfirmed] = useState(0);
    const [covidRecovered, setCovidRecovered] = useState(0);
    const [covidDeaths, setCovidDeaths] = useState(0);

    const navigation = useNavigation();

    function toPaises(){
        navigation.navigate('Paises');
    }

    

    async function loadDataCovid(){
        await apiGlobal.get('api').then( res => {
            setCovidConfirmed(res.data.confirmed);
            setCovidRecovered(res.data.recovered);
            setCovidDeaths(res.data.deaths);
            //console.log(res.data.confirmed.value);
            //console.log(res.data.recovered.value);
            //console.log(res.data.deaths.value);
        }).catch(err => 
            console.log(err.response)    
        )
    }

    useEffect(() => {
        loadDataCovid();
    }, []);

    return (
        <View style={styles.container}>

          
            
            <View style={styles.dadosGeral}>
                    <Text style={styles.nome}>COVID-19</Text>
                    <Text style={styles.Global}>GLOBAL</Text>
            </View>

            <View style={styles.dadosAtuais}>
                    <Text style={styles.namecofirmed}>CONFIRMADO</Text>
                    <Text style={styles.dadoconfirmed}>{covidConfirmed.value}</Text>
            </View>

            <View style={styles.dadosAtuais}>
                    <Text style={styles.namerecovered}>RECUPERADO</Text>
                    <Text style={styles.dadorecovered}>{covidRecovered.value}</Text>
            </View>

            <View style={styles.dadosAtuais}>
                    <Text style={styles.namedeaths}>MORTES</Text>
                    <Text style={styles.dadosdeaths}>{covidDeaths.value}</Text>
            </View>

            <View style={styles.dadosAtuais}>
                    <Text style={styles.nameactive}>ATIVOS</Text>
                    <Text style={styles.active}>{covidConfirmed.value-(covidRecovered.value+covidDeaths.value)}</Text>
            </View>            

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.buttonGeral} onPress={() => {}}>
                        <Text style={styles.textButton}>Geral</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonPais} onPress={toPaises}>
                        <Text style={styles.textButton}>Paises</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.buttonGrafico}onPress={() => {}}>
                        <Text style={styles.textButton}>Grafico</Text>
                </TouchableOpacity>                
            </View>                         

        </View>
    );
}