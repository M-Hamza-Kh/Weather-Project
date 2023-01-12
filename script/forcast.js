const key='2bRjJeht5hjAFWhP9PPFhvlBztXbItH8';
//get weather information
const getweather=async (id)=>{
const base='http://dataservice.accuweather.com/currentconditions/v1/';
const query=`${id}?apikey=${key}`;
const responce=await fetch(base+query);
const data=await responce.json();
return data[0];


};
//get city information
const GetCity=async (city)=>{
const base= 'http://dataservice.accuweather.com/locations/v1/cities/search';
const query=`?apikey=${key}&q=${city}`;
const responce=await fetch(base+query);
const data=await responce.json();
return data[0];
};
// GetCity('london').then(data=>{
//         return getweather(data.Key);
// }).then(data=>{
//         console.log(data);
// }).catch(err=>{
//         console.log(err);
// });