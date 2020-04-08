var express = require('express')
app = express()
var http = require('http').createServer(app);
var io = require('socket.io')(http); //socket.io(http)
var unirest = require("unirest");
const { getStats } = require('./covid-api')
const { google_api_key } = require('./apikey')


app.use(express.static('public'))

io.on('connection', function(socket){
  console.log('a user connected');
  /*unirest
    .get('https://coronavirus-monitor-v2.p.rapidapi.com/coronavirus/worldstat.php')
    .headers({	"x-rapidapi-host": "coronavirus-monitor-v2.p.rapidapi.com",
    	"x-rapidapi-key": "1c508f3830msh68833be7ca820ddp1de664jsn83938a543d37"})
      .send({})
      .then(response => {
          socket.emit('data', response.body)
      })*/

//Get Country of user from there location
      socket.on('location', async ({lat, lng}) => {
        console.log(lat, lng)
        const response = await unirest.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${google_api_key}&}`)
        let data = response.body.results[0].address_components.filter(component => component.types[0] == 'country')
        let countryName = {
          short_name: data[0].short_name,
          long_name: data[0].long_name
        }
        console.log(countryName)

//TODO: Won't actually throw error, will return empty array
//{"country":"ROC","stat_by_country":[]}
        try{
          let stats = await getStats(countryName.long_name)
          socket.emit('stats', stats)
          console.log(stats)
        } catch(err){
          console.log(err)
          let stats = await getStats()
          socket.emit('stats', stats)
        }
      })
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});
//websocket, on request, you'll fetch the api
