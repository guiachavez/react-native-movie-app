import React from 'react'
import { FlatList, VStack, View } from '@gluestack-ui/themed'
import { StyleSheet } from 'react-native'
import Card from '../../base/Card'

const ResultsList = (props) => {
  const { movies, category, navigation, selectedValue } = props
  return (
    <View>
      <FlatList 
        data={movies}
        renderItem={({item}) => (
          <VStack space="md">
            <Card 
              id={item.id}
              image={item.poster_path}
              title={item.name ? item.name : item.title}
              popularity={item.popularity}
              date={item.release_date}
              uri={item.id}
              overview={item.overview}
              mediaType={item.media_type ? item.media_type : ''}
              category={category}
              navigation={navigation}
              selectedValue={selectedValue}
            />
          </VStack>
        )}
      />
    </View>
  )
}

export default ResultsList

const styles = StyleSheet.create({
  container: {

  }
})
