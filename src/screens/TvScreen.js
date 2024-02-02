import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import DropDown from '../components/base/DropDown'
import { Box, Center } from '@gluestack-ui/themed'
import { getResults } from '../services/api'
import ResultsList from '../components/layout/containers/ResultsList'

const TvScreen = (props) => {
    const { navigation } = props
    const [selectedValue, setSelectedValue] = useState('airing_today')
    const [tvShow, setTvShow] = useState('')
    const category = 'tv'

    const items = [
        { label: 'airing today', value: 'airing_today' },
        { label: 'on the air', value: 'on_the_air' },
        { label: 'popular', value: 'popular' },
        { label: 'top rated', value: 'top_rated' },
    ]

    const handleSelect = (itemValue) => {
        setSelectedValue(itemValue)
        getResults({ category: category, type: itemValue })
        .then((tvSeries) => {
            setTvShow(tvSeries)
        })
        .catch(error => {
            console.log('API Request Error:', error)
        })
    }

    useEffect(() => {
        handleSelect(selectedValue);
    }, []); 

    return (
        <Box style={styles.container}>
            <Center style={styles.dropdown}>
                <DropDown 
                    isHovered={true} 
                    style={{ width: '50%' }} 
                    items={items} 
                    placeholder='Select option'
                    selectedValue={selectedValue}
                    onValueChange={handleSelect}
                />
            </Center>
            <ResultsList movies={tvShow} category={category} navigation={navigation} selectedValue={selectedValue} />
        </Box>
    )
}

export default TvScreen

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