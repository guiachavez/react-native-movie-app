import axios from 'axios'

export const getResults = async ({category, type}) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/${category}/${type}?api_key=15a5290d8da7e9f6f2aca4c3f0479ba7`);
        
        const movieResults = response.data.results;
        return movieResults
    } catch(error) {
        console.error('API Request Error:', error);
    }
}

export const getSearchResult = async ({type, query}) => {
    try {
        console.log(type)
        const response = await axios.get(`https://api.themoviedb.org/3/search/${type}?query=${query}&api_key=15a5290d8da7e9f6f2aca4c3f0479ba7`);
        const searchResults = response.data.results;
        return searchResults
    } catch(error) {
        console.error('API Request Error:', error);
    }
}



