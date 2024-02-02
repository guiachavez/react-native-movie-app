import React from 'react'
import { Button, ButtonText, HStack, Heading, Image, VStack, View, Text } from '@gluestack-ui/themed'
import { StyleSheet } from 'react-native';

const Card = (props) => {
    const { id, image, title, popularity, date, category, navigation, selectedValue, mediaType } = props
    const truncateTitle = (title, maxLength) => {
        return title.length > maxLength ? title.slice(0, maxLength) + '...' : title;
    };
    return (
        <View style={styles.container}>
            <VStack space="lg">
                <HStack space="md" style={styles.content}>
                    <Image h={100} w={100} resizeMode="cover" alt='Movie Poster' size="md" source={{ uri: `https://media.themoviedb.org/t/p/w440_and_h660_face/${image}` }}/>
                    <VStack style={styles.details}>
                        <Heading size='sm'>{truncateTitle(title, 27)}</Heading>
                        <Text>Popularity: {popularity}</Text>
                        <Text>Release Date: {date}</Text>
                        <Button
                            style={{backgroundColor: '#02B7D7'}}
                            onPress={() => {
                                navigation.navigate('Result', {
                                    id: id,
                                    category: category,
                                    selectedValue: selectedValue,
                                    mediaType: mediaType
                                })
                            }}
                        >
                            <ButtonText>More Details</ButtonText>
                        </Button>
                    </VStack>
                </HStack>
            </VStack>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        width: '100%'
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        width: 'auto'
    },
    details: {
        width: '68%'
    }
  })
