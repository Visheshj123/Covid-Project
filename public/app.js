const socket = io();

socket.on('data', (response) => {
  const data = JSON.parse(response);
  console.log(data)
})

socket.on('stats', (stats) => {
  //create component for modern data (total cases, new_cases, active_cases, total deaths, new_deaths, total_recovered, serious_critical)
  console.log(stats.country)

  //create component for line graph

})

document.addEventListener('DOMContentLoaded', (event) => {
  event.preventDefault();
  if(!navigator.geolocation){
     socket.emit('location', { lat: 40, lng: -77 })
  }else{
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position)
      socket.emit('location', { lat: position.coords.latitude, lng: position.coords.longitude })
    })
  }
})
