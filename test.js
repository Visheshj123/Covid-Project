var unirest = require("unirest");


const test = async(country='US') => {
let stats = await unirest.get(`https://coronavirus-monitor-v2.p.rapidapi.com/coronavirus/cases_by_particular_country.php?country=${country}`)
.headers({	"x-rapidapi-host": "coronavirus-monitor-v2.p.rapidapi.com",
  "x-rapidapi-key": "1c508f3830msh68833be7ca820ddp1de664jsn83938a543d37"})

 stats = JSON.parse(stats.body)
  console.log(stats)
}

test()
