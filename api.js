var button= document.querySelector('.button')
var inputValue= document.querySelector('.inputValue')
var name= document.querySelector('.name')
var desc= document.querySelector('.desc')
var temp= document.querySelector('.temp')

button.addEventListener('click',function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=52a9b1fa8e6dd79f0734b540073e2caa')
.then(response => response.json())
.then(data => {
var nameValue= data['name'];
var tempValue= data['main']['temp'];
var descValue= data['weather'][0]['description'];

name.innerHTML =nameValue;
temp.innerHTML =tempValue;
desc.innerHTML =descValue;
})

.catch(err => alert("Wrong city name!"))
})
