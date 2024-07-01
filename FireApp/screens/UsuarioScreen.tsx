
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../config/Config';
import { ref, set, onValue } from "firebase/database";


export default function UsuarioScreen() {
    const [cedula, setcedula] = useState("")
    const [nombre, setnombre] = useState("")
    const [correo, setcorreo] = useState("")
    const [comentario, setcomentario] = useState("")

    const[usuarios,setusuarios]=useState([])

    //----------GUARDAR INFORMCIÓN---------//
    function guardarUsuario(cedula:string, name:string, email:string, comentario:string) {
        
        set(ref(db, 'usuarios/' + cedula), {
          name: nombre,
          email: correo,
          comentario : comentario
        });

        Alert.alert("Mensaje","Información")
        setcedula("")
        setnombre("")
        setcorreo("")
        setcomentario("")
      }

      useEffect(()=>{

      const starCountRef = ref(db, 'usuarios' + cedula);
      onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      //console.log(data);

      const dataTemp:any = Object.keys(data).map((key)=>({
        key, ...data[key]
      }))
      console.log(dataTemp);
      setusuarios(dataTemp)


      });

      },[])
      type Usuarios={
        name:string
      }

return (
    <View style={styles.container}>
        <Text>USUARIO</Text>
        <TextInput style={styles.input}
        placeholder='Ingresar cédula'
        onChangeText={(texto)=>setcedula(texto)}
        value={cedula}
        keyboardType='numeric'
        />
        <TextInput style={styles.input}
        placeholder='Ingresar nombre'
        onChangeText={(texto)=>setnombre(texto)}
        value={nombre}
        />
        <TextInput style={styles.input}
        placeholder='Ingrese correo'
        onChangeText={(texto)=>setcorreo(texto)}
        keyboardType='email-address'
        value={correo}
        />
        <TextInput style={styles.input}
        placeholder='Ingrese comentario'
        onChangeText={(texto)=>setcomentario(texto)}
        value={comentario}
        multiline
        />
        <Button title='Guardar'onPress={()=>guardarUsuario(cedula,nombre,correo,comentario)}/>
         <FlatList data={usuarios} 
         renderItem={({item}:{item:Usuarios})=>
        
        <View>
            <Text>{item.name}</Text>
        </View>   
}
        />
    </View>

  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#006989',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        backgroundColor:'#F3F7EC',
        width:'80%',
        height:60,
        borderRadius:80,
        margin:5,
        fontSize:20,
        textAlign:'center',
    },
})