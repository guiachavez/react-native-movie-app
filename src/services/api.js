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
        const response = await axios.get(`https://api.themoviedb.org/3/search/${type}?query=${query}&api_key=15a5290d8da7e9f6f2aca4c3f0479ba7`);
        const searchResults = response.data.results;
        return searchResults
    } catch(error) {
        console.error('API Request Error:', error);
    }
}

export const fetchMovieDetails = async ({category, id, selectedValue, mediaType}) => {
    try {
        let apiUrl;
        let response;

        if (category !== 'search') {
            apiUrl = `https://api.themoviedb.org/3/${category}/${id}?api_key=15a5290d8da7e9f6f2aca4c3f0479ba7`;
        } else {
            if (selectedValue === 'multi') {
                apiUrl = `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=15a5290d8da7e9f6f2aca4c3f0479ba7`;
            } else {
                apiUrl = `https://api.themoviedb.org/3/${selectedValue}/${id}?api_key=15a5290d8da7e9f6f2aca4c3f0479ba7`;
            }
        } 

        if(apiUrl) {
            response = await fetch(apiUrl);
        } else {
            console.error('API Request Error:', error);
        }
      
        const data = await response.json();
        return data
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
};



