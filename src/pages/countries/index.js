import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import apiPaises from '../../services/apiPaises';

export default function Coutries(){

    const [paises, setPaises] = useState([]);

    const navigation = useNavigation();

    function toBack(){
        navigation.goBack();
    }

    function navigateToPais(paises){
        navigation.navigate('Pais', { paises });
    }    

    async function loadPaises(){
        await apiPaises.get('countries').then( res => {
            setPaises(res.data.countries);
            //console.log(res.data.countries);
        }).catch(err => 
            console.log(err.response)    
        )
    }    

    useEffect(() => {
        loadPaises();
    }, []);    

    return (
        <View style={styles.container}>


            <View style={styles.buttons}>
                <TouchableOpacity style={styles.buttonGeral} onPress={toBack}>
                        <Text style={styles.textButton}>Geral</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonPais} onPress={() => {}}>
                        <Text style={styles.textButton}>Paises</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.buttonGrafico}onPress={() => {}}>
                        <Text style={styles.textButton}>Grafico</Text>
                </TouchableOpacity>                              
            </View> 

            <View style={styles.dadosGeral}>
               <Text style={styles.Global}>PAISES AFETADOS</Text>
            </View>

            <FlatList 
                data={paises}
                style={styles.listPaises}
                keyExtractor={paises => String(paises.name)}
                showsVerticalScrollIndicator={false}
                renderItem={( {item: paises }) => (
                    <View style={styles.seguraPaises}>
                        <TouchableOpacity style={styles.Button} 
                            onPress={() => navigateToPais(paises)}>
                            <Text style={styles.pais}>{paises.name}</Text>
                        </TouchableOpacity>  
                    </View> 

                )}
                

            />


        </View>
    );
}