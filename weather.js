var API_key = '444d6a374a02f512ec294d726d2c65c7'
async function api(){
    v = fetch('https://restcountries.com/v3.1/all')
    //v= fetch(url)
    out1 = await v
    prom = out1.json()
    out11 = await prom
    var parent_data_all = document.querySelector('.weather-data')
    for(let i of out11){
        try{
            var data_cont = document.createElement('div')
            lat = i.latlng[0]
            lng = i.latlng[1]
            data_cont.setAttribute('lat',lat)
            data_cont.setAttribute('lng',lng)
            console.log(i.latlng);//li-11to 16 lat&lng get in element .
            //var data_cont = document.createElement('div')
            data_cont.classList.add('country_data')//apply stylish(weatherhtml) for data_cont
            data_cont.style.display = 'inline-block'//block level convert to inline level

            var contryName= document.createElement('p')
            contryName.innerText = i.name.common
            data_cont.append(contryName)
            console.log(i.name.common);
            //flag
            var flag= document.createElement('img')
            flag.setAttribute ('src',i.flags.png)
             console.log(i.flags.png);
             data_cont.append(flag)

                        //capital
            var capital = document.createElement('p')
            console.log(i.capital[0]);
            capital.innerText = i.capital[0]
            data_cont.append(capital)
            
            //region
            var region= document.createElement('p')
            console.log(i.region);
            region.innerText = i.region
            data_cont.append(region)
            
            //button
            var button_weather = document.createElement('button')
            button_weather.setAttribute('onclick','weatherapi(this)')
            button_weather.innerText='Click for weather'
            data_cont.append(button_weather)

            parent_data_all.append(data_cont)
        }catch{
            //


        }
    
    }
    
          
}

    
    api()

 async function weatherapi(e){
    console.log(e);
    console.log(e.parentElement);
    var parent = e.parentElement
    var lat = parent.getAttribute('lat')
    var lon = parent.getAttribute('lng')
    console.log(lat);
    console.log(lon);
    console.log('getting excuted');

    var weather_url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`
 v= fetch(weather_url)
 out1 = await v
 prom = out1.json()
 out11 = await prom
 console.log(out11);

    //getting  all the previous elements
    //console.log(e.previousElementSibling);
    //console.log(e.previousElementSibling.previousElementSibling);
    //console.log(e.previousElementSibling.previousElementSibling.previousElementSibling);
    //console.log(e.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling);
    //lat = out11[0].latlng[0]
  //  lon = out11[0].latlng[1]
    //url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`
   //let v1 =  await fetch(url)
      //  prom1 = v1.json()
    //out12 = await prom1
    //console.log('getting excuted');
   //var weather= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`
 
 }
