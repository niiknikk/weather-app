const cityName = document.getElementById('cityName');
const changeCityName = document.getElementById('city_name');
const submitBtn = document.getElementById('submitBtn');

const tempStatus = document.getElementById('temp_status');
const temp = document.getElementById('temp');
const dataHide = document.querySelector('.middle_layer');


const getData = async(e) => {
    e.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === '') {
        changeCityName.innerHTML = `<p id="city_name" class="errColor">City Name Cannot Be Empty</p>`;
        dataHide.classList.add('data_hide');
    }else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=b14425a6554d189a2d7dc18a8e7d7263`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            changeCityName.innerHTML = `<p id="city_name">${arrData[0].name}, ${arrData[0].sys.country}</p>`;


            temp.innerHTML = `<p id="temp"><span>${arrData[0].main.temp}</span><sup>o</sup>C</p>`;

            const tempMood = arrData[0].weather[0].main;

            if(tempMood == 'Haze'){
                tempStatus.innerHTML = `<img src="./img/weather_haze.svg" alt="">`;
            }else if(tempMood == 'Clear'){
                tempStatus.innerHTML = `<img src="./img/weather_clear.svg" alt="">`;
            }else if(tempMood == 'Rain'){
                tempStatus.innerHTML = `<img src="./img/weather_rain.svg" alt="">`;
            }else if(tempMood == 'Clouds'){
                tempStatus.innerHTML = `<img src="./img/weather_cloud.svg" alt="">`;
            }
            else {
                    tempStatus.innerHTML = `<img src="./img/weather_sun.svg" alt="">`;
                }
    dataHide.classList.remove('data_hide');
            
        } catch {
            changeCityName.innerHTML =`<p id="city_name" class="errColor">Enter Correct City Name</p>`;
            dataHide.classList.add('data_hide');

        }
    }
}

submitBtn.addEventListener('click', getData);