export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a026c115d2msh83df0a0e75b1d63p11dcecjsn7d87515f53a9',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'a026c115d2msh83df0a0e75b1d63p11dcecjsn7d87515f53a9',
  }
}
    

export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()

    return data
}

//process.env.REACT_APP_RAPID_API_KEY
//'116f4545e7msh49afd6a3ba191c8p1c7c8bjsnd56d9a242e6d'