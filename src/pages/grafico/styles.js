import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center'        
        //opacity:0.5,        
    },    
});