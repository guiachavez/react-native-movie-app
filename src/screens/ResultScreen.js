import { Text, Box, Image, Heading, Center, View } from '@gluestack-ui/themed'
import React, {useState, useEffect} from 'react'
import { StyleSheet, ScrollView } from 'react-native'

const ResultScreen = ({ navigation, route }) => {
    const {id, category} = route.params
    const [movieDetails, setMovieDetails] = useState('');

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
              const response = await fetch(`https://api.themoviedb.org/3/${category}/${id}?api_key=15a5290d8da7e9f6f2aca4c3f0479ba7`);
              const data = await response.json();
              setMovieDetails(data);
            } catch (error) {
              console.error('Error fetching movie details:', error);
            }
          };
      
        fetchMovieDetails();

        navigation.setOptions({
            title: movieDetails.original_title ? movieDetails.original_title :  movieDetails.original_name,
            headerStyle: {
                backgroundColor: 'white'
            },
            headerTitleStyle: {
                color: 'black'
            },
        });

    }, [navigation, id, movieDetails]);
    
    return (
        <ScrollView>
            <Box style={styles.container}>
                <Center>
                    <Heading style={styles.heading}>{movieDetails.original_title ? movieDetails.original_title :  movieDetails.original_name}</Heading>
                    <Image h={270} w={270} alt={movieDetails.original_title ? movieDetails.original_title :  movieDetails.original_name + 'poster'} source={{ uri: `https://media.themoviedb.org/t/p/w440_and_h660_face/${movieDetails.poster_path}` }}/>
                </Center>
                <Text style={styles.overview}>{movieDetails.overview}</Text>
                <Text size='sm'>Popularity: {movieDetails.popularity} | Release Date: {movieDetails.release_date}</Text>
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