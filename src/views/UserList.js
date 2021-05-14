
import React, { useContext } from 'react'
import { View, Text, FlatList, Alert } from 'react-native'
import { Avatar, ListItem, Button, ButtonGroup } from 'react-native-elements';
import { Icon } from 'react-native-elements'

import UsersContext from '../context/UsersContext'


export default props => {
    // console.warn('error');
    const { state,dispatch } = useContext(UsersContext)


    function confirmDel(user) {
        Alert.alert("Excluir usuario", 'Deseja Excluir o Usuario?' + user.name + '?', [
            {
                text: 'Sim',
                onPress() {     
                    dispatch({
                        type:'deleteUser',
                        payload:user,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }


    function getUserItem({ item: user }) {
        return (
            <ListItem key={user.id}
                bottomDivider
                //  rightElement={getActions(user)}
                onPress={() => props.navigation.navigate('UserForm', user)}


            >
                <Avatar source={{ uri: user.avatar }} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <Icon
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    name="edit" size={25} color="orange"
                />
                <Icon
                    onPress={() => confirmDel(user)}
                    name="delete" size={25} color="red"
                />

            </ListItem>

        )

    }
    // onPress={()=>props.navigation.navigate('UserForm')}
    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />


        </View>
    )
}