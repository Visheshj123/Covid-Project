
const axios = require('axios')
const getData = async () => {
  const res = await axios.get('https://coronavirus-monitor-v2.p.rapidapi.com/coronavirus/cases_by_particular_country.php?country=USA',
    {
      headers: {
        "x-rapidapi-host": "coronavirus-monitor-v2.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY
      }
    })

    return res.data.stat_by_country

}

getData().then(res => {
   console.log(res[0].toDateString())
})
