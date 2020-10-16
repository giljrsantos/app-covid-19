import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#ccc',
        //opacity:0.5,        
    },
    dadosGeral:{
        backgroundColor:'#f4f4f4',
        flexDirection:'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:20,
        borderRadius:3,
        marginBottom:5,
        marginTop:5,
    },
    dadosAtuais:{
        backgroundColor:'#f4f4f4',
        flexDirection:'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:20,
        borderRadius:3,
        marginBottom:5,
        marginTop:5,        
    },
    nome:{
        fontSize:15,
        //fontWeight: 'bold',
        backgroundColor:'#f4f4f4',

    },
    Global:{
        fontSize:30,
        fontWeight: 'bold',
        backgroundColor:'#f4f4f4',
    },
    namecofirmed:{
        color:'#000',
    },
    dadoconfirmed:{
        fontSize:50,
        fontWeight: 'bold',
        color:'#000',
    },
    namerecovered:{
        color:'#060',
    },
    dadorecovered:{
        fontSize:50,
        fontWeight: 'bold',
        color:'#060',
    },
    namedeaths:{
        color:'#f00',
    },
    dadosdeaths:{
        fontSize:50,
        fontWeight: 'bold',
        color:'#f00',
    },
    buttons:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
    },
    buttonGeral:{
        backgroundColor:'#FF8C00',
        width:'24%',
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
    },
    buttonPais:{
        backgroundColor:'#060',
        width:'24%',
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
    },
    buttonGrafico:{
        backgroundColor:'#f00',
        width:'24%',
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
    },
    buttonVoltar:{
        backgroundColor:'#333',
        width:'24%',
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
    },            
    textButton:{
        fontSize:16,
        fontWeight:'bold',
        color:'#fff',
    },
    nameactive:{
        color:'#FF8C00',
    },
    active:{
        fontSize:50,
        fontWeight: 'bold',
        color:'#FF8C00',
    },           
});