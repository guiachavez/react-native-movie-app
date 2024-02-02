import React, {useEffect, useState} from 'react'
import { Box, Button, Center } from '@gluestack-ui/themed';
import { StyleSheet } from 'react-native';
import DropDown from '../components/base/DropDown';
import {getResults} from '../services/api';
import ResultsList from '../components/layout/containers/ResultsList';


const MovieScreen = (props) => {
    const { navigation } = props
    const [selectedValue, setSelectedValue] = useState('popular')
    const [movies, setMovies] = useState([])
    const category = 'movie'

    const items = [
        { label: 'Now Playing', value: 'now_playing' },
        { label: 'Popular', value: 'popular' },
        { label: 'Top Rated', value: 'top_rated' },
        { label: 'Upcoming', value: 'upcoming' },
    ];

    const handleClick = (itemValue) => {
        setSelectedValue(itemValue)
        getResults({ category: category, type: itemValue })
            .then(movieResults => {
                setMovies(movieResults)
            })
            .catch(error => {
                console.log('Error', error)
            })
    }

    useEffect(() => {
        handleClick(selectedValue);
    }, []); 

    return (
        <Box style={styles.container}>
            <Center style={styles.dropdown}>
                <DropDown 
                    isHovered={true} 
                    style={{ width: '50%' }} 
                    items={items} placeholder='Select Option'
                    selectedValue={selectedValue}
                    onValueChange={handleClick}
                />
            </Center>
            <ResultsList movies={movies} category={category} selectedValue={selectedValue} navigation={navigation}/>
        </Box>
    )
}

export default MovieScreen

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: '100%'
    },
    dropdown: {
        marginTop: 10,
        marginBottom: 20
    }
})