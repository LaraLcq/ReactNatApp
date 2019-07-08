import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';


class Search extends React.Component{
    render() {
        return (
            <View style={{ marginTop: 20, backgroundColor: 'red'}}>
                <TextInput style={styles.textinput} placeholder='Titre du film' />
                <Button style={styles.textinput} title='Rechercher' onPress={() => {}} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
})

export default Search 
