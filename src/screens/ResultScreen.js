import { Text, Box, Image, Heading, Center, View } from '@gluestack-ui/themed'
import React, {useState, useEffect} from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { fetchMovieDetails } from '../services/api'

const ResultScreen = ({ navigation, route }) => {
    const {id, category, selectedValue, mediaType} = route.params
    const [movieDetails, setMovieDetails] = useState('');

    useEffect(() => {
        // fetch movie, tv, search
        fetchMovieDetails({category: category, id: id, selectedValue: selectedValue, mediaType: mediaType})
        .then((details) => {
            setMovieDetails(details);
        })
        .catch(error => {
            console.log('API Request Error:', error)
        })

        navigation.setOptions({
            title: movieDetails.original_title ? movieDetails.original_title :  movieDetails.original_name,
            headerStyle: {
                backgroundColor: 'white'
            },
            headerTitleStyle: {
                color: 'black'
            },
        });
    }, [navigation, id, movieDetails, selectedValue, mediaType]);
    
    return (
        <ScrollView>
            <Box style={styles.container}>
                <Center>
                    <Heading style={styles.heading}>{movieDetails.original_title ? movieDetails.original_title :  movieDetails.original_name}</Heading>
                    <Image h={270} w={270} alt={movieDetails.original_title ? movieDetails.original_title :  movieDetails.original_name + 'poster'} source={{ uri: `https://media.themoviedb.org/t/p/w440_and_h660_face/${movieDetails.poster_path}` }}/>
                </Center>
                <Text style={styles.overview}>{movieDetails.overview}</Text>
                <Text size='sm'>Popularity: {movieDetails.popularity} | Release Date: {movieDetails.release_date ? movieDetails.release_date : movieDetails.first_air_date}</Text>
            </Box>     
        </ScrollView>  
    )
}

export default ResultScreen

const styles = StyleSheet.create({
    container: {
        padding: 40,
        width: '100%'
    },
    heading: {
        marginBottom: 30,
        textAlign: 'center'
    },
    overview: {
        marginTop: 20,
        marginBottom: 20
    }
})