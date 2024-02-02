import React, { useState } from 'react'
import { Box, Button, ButtonIcon, ButtonText, FormControl, FormControlLabel, FormControlLabelText, HStack, Icon, Input, InputField, InputIcon, SearchIcon, Text, VStack } from '@gluestack-ui/themed'
import { StyleSheet } from 'react-native'
import DropDown from '../components/base/DropDown'
import { getSearchResult } from '../services/api'
import ResultsList from '../components/layout/containers/ResultsList'

const SearchScreen = (props) => {
    const { navigation } = props
    const [selectedValue, setSelectedValue] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [search, setSearch] = useState('')
    const [isInvalid, setIsInvalid] = useState(false)
    const [searchisInvalid, setSearchisInvalid] = useState(false)
    const category = 'search'

    const items = [
        { label: 'movie', value: 'movie' },
        { label: 'multi', value: 'multi' },
        { label: 'tv', value: 'tv' },
    ];

    const handleInputChange = (text) => {
        setInputValue(text)
        setSearchisInvalid(false)
    }

    const handleDropdownChange = (value) => {
        setSelectedValue(value)
        setIsInvalid(false)
    }
    
    const handleSubmit = () => {
        console.log(selectedValue)
        if (selectedValue !== '' && inputValue !== '') {
            getSearchResult({ type: selectedValue, query: inputValue })
              .then((searchResult) => {
                console.log(searchResult);
                setSearch(searchResult);
              })
              .catch((error) => {
                console.log(error);
              });
        } else {
            if (selectedValue === '') {
              setIsInvalid(true);
            }
            if (inputValue === '') {
              setSearchisInvalid(true);
            }
        }
    }

    return (
        <Box style={styles.container}>
            <VStack space='lg'>
                <FormControl isRequired>
                    <VStack space='md'>
                        <VStack>
                            <FormControlLabel>
                                <FormControlLabelText>Search Movie/TV Show Name</FormControlLabelText>
                            </FormControlLabel>
                            <HStack>
                                <Input style={styles.inputStyle} isInvalid={searchisInvalid}>
                                    <InputIcon>
                                        <Icon as={SearchIcon} m="$4" w="$4" h="$4" />
                                    </InputIcon>
                                    <InputField type='text' placeholder='i.e. James Bond, CSi' onChangeText={handleInputChange}/>
                                </Input>
                            </HStack>
                            {searchisInvalid && <Text size='xs'>Please input text</Text> }
                        </VStack>

                        <VStack>
                            <FormControlLabel>
                                <FormControlLabelText>Choose Search Type</FormControlLabelText>
                            </FormControlLabel>
                            <HStack space='md' style={styles.searchType}>
                                <DropDown 
                                    isHovered={true} 
                                    style={{width: '65%'}} 
                                    items={items} 
                                    placeholder='Select Option' 
                                    selectedValue={selectedValue}
                                    isInvalid={isInvalid}
                                    onValueChange={handleDropdownChange}
                                />
                                <Button 
                                    onPress={handleSubmit}
                                    style={{backgroundColor: '#02B7D7'}}
                                >
                                    <ButtonIcon as={SearchIcon} />
                                    <ButtonText>Search</ButtonText>
                                </Button>
                            </HStack>
                            {isInvalid && <Text size='xs'>Please select a search type</Text> }
                            
                        </VStack>
                    </VStack>
                </FormControl>
            
                <Box>
                    <ResultsList movies={search} category={category} navigation={navigation}/>
                </Box>
            </VStack>
        </Box>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        padding: 20,
        width: '100%'
    },
    inputStyle: {
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft: 10
    }
})
