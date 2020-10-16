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
    listPaises:{
        backgroundColor:'#f4f4f4',
        flexDirection:'column',
        padding:5,
        borderRadius:3,
        marginBottom:5,
        marginTop:5,        
    },
    seguraPaises:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    Button:{
        backgroundColor:'#f4f4f4',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        borderRadius:3,
        borderWidth:1,
        borderColor:'#ccc',
        marginTop:10,
        marginBottom:10,
    },
    pais:{
        fontWeight:'bold',
        fontSize:25,
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
        color:'#FF8C00',
    },
    dadoconfirmed:{
        fontSize:60,
        fontWeight: 'bold',
        color:'#FF8C00',
    },
    namerecovered:{
        color:'#060',
    },
    dadorecovered:{
        fontSize:60,
        fontWeight: 'bold',
        color:'#060',
    },
    namedeaths:{
        color:'#f00',
    },
    dadosdeaths:{
        fontSize:60,
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
        width:'33%',
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
    },
    buttonPais:{
        backgroundColor:'#060',
        width:'33%',
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
    },
    buttonGrafico:{
        backgroundColor:'#f00',
        width:'33%',
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
    },
    buttonVoltar:{
        backgroundColor:'#333',
        width:'33%',
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
    },            
    textButton:{
        fontSize:16,
        fontWeight:'bold',
        color:'#fff',
    }         
});