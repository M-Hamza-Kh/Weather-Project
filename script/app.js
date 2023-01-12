const form=document.querySelector('.form');
const content=document.querySelector('.contenta');
const image=document.querySelector('.combine');
let imageset=document.querySelector('.img');
const UI=(data)=>{
    // shortcut of this is below
    // const citydet=data.citydet;
    // const weatherdet=data.weatherdet;
   const {citydet,weatherdet}=data;

    content.innerHTML=` 
    <p class="display-7 p3">${citydet.EnglishName}</p>
<p class="display-8 wc p4">${weatherdet.WeatherText}</p>
<span class="display-5 temp p5">${weatherdet.Temperature.Metric.Value}</span>
<span  class="display-5 p5">&#8451</span>
 `;
if(image.classList.contains('d-none')){
   image.classList.remove('d-none');
}
let imagechan=null;
if(weatherdet.IsDayTime){
    imagechan='image/morning.jpg';
}
else{
    imagechan='image/night.jpg';
}

imageset.setAttribute('src',imagechan);
};

const updatecity=async(forminp)=>{
const citydet=await GetCity(forminp);
const weatherdet=await getweather(citydet.Key);
return{
    citydet,weatherdet
};

};
form.addEventListener('submit',e=>{
e.preventDefault();
let forminp=form.text.value.trim();
form.reset();
updatecity(forminp).then(data=>{
    UI(data);
}).catch(err=>{
    console.log(err);
})
});