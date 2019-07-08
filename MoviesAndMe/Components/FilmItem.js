import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class FilmItem extends React.Component {
    render(){
        return(
            <View style={styles.main_contenair}>
                <Text style={styles.title_text}>Titre du film</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_contenair: {
        height: 190
    },
    title_text: {

    }
})

export default FilmItem