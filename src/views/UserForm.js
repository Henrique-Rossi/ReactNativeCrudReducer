import React, { useContext, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import UsersContext from '../context/UsersContext'


export default ({ route, navigation }) => {
    // console.warn(Object.keys(route.params));
    

    const [user, setUser] = useState(route.params ? route.params : {})
    const {dispatch}=useContext(UsersContext)
    return (
        <View style={style.form}>
            <Text>Nome</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setUser({ ...user, name })}
                placeholder="Informe o Nome"
                value={user.name}
            />

            <Text>Email</Text>
            <TextInput
                style={style.input}
                onChangeText={email => setUser({ ...user, email })}
                placeholder="Informe o Email"
                value={user.email}
            />
              <Text>Avatar  </Text>
             <TextInput
                style={style.input}
                onChangeText={avatar => setUser({ ...user, avatar })}
                placeholder="Informe o avatar"
                value={user.avatar}
            />
            <Button 
            title="Salvar"
            onPress={()=>{
                dispatch({
                    type:user.id? 'updateUser' : 'createUser',
                    payload:user,
                })
                navigation.goBack()
            }}
            />
        </View>
    )
}
const style = StyleSheet.create({
    form: {
        padding: 15
    },
    input: {
        height: 40,
      
        borderColor: 'gray',
        borderWidth: 1,
        borderTopColor: 'white',
        borderLeftColor: 'white',
        borderRightColor: 'white',
        marginBottom: 10,
    }
})