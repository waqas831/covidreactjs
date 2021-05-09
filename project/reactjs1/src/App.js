import React,{useEffect, useState} from 'react';
import {MenuItem,FormControl,Select,Card, CardContent}  from "@material-ui/core";
import InfoBox from './covidproject/InfoBox';
import Maps from './covidproject/Maps';
import './App.css';
import Table from './covidproject/Table';
import {sortData} from './covidproject/util';
import LineGraph from './covidproject/LineGraph';

const App=()=>{
 // https://disease.sh/v3/covid-19/countries
 //useeffrct code runds once when component load and not again
 
const [countries,newcountries]=useState([])
const [mycountry,mynewcountry]=useState("Worldwide");
const [countryinfo,newcountryinfo]=useState({})
const [tabledata,settabledata]=useState([])

useEffect(()=>{
  fetch('https://disease.sh/v3/covid-19/all').then((responde)=>responde.json()).then((data)=>{
    newcountryinfo(data);
  
  })
},[])

useEffect(()=>{
  const getcoutriesdata=async ()=>{
    await fetch ("https://disease.sh/v3/covid-19/countries").then((response)=>response.json()).then((data)=>{
      const countries=data.map((country)=>(
      {
        name:country.country,
        value:country.countryInfo.iso2
      }))
      const sortedData=sortData(data);
      settabledata(sortedData);
      newcountries(countries)
     
    })
  }
  getcoutriesdata();
},[])


const onCountryChange= async (event)=>{
  const countrycode=event.target.value;
  const url=countrycode==='worldwide' ? 'https://disease.sh/v3/covid-19/all':`https://disease.sh/v3/covid-19/countries/${countrycode}`;
  await fetch(url).then((response)=>response.json()).then((data)=>{
    mynewcountry(countrycode);
    newcountryinfo(data);
  })
  //newcountries(countrycode);
}

console.log('haaaaaaaaaaaa',countryinfo);

  return (
    <div className="app">
      <div className="left_side">
      <div className="app_header">
      <h1> covid 19 tracker app</h1>
      <FormControl className="app_dropdown">
        <Select variant='outlined' onChange={onCountryChange} value={mycountry}>
       < MenuItem value="worldwide">Worldwide</MenuItem>
       {countries.map((country)=>{
         return(
          <MenuItem value={country.value}>{country.name}</MenuItem>
         )
       })}
        </Select>
      </FormControl>
      </div>
       <div className="app_status">
       <InfoBox title="Caronaviris cases" cases={countryinfo.todayCases} death={countryinfo.cases}/>
       <InfoBox title="recovers" cases={countryinfo.todayRecovered} death={countryinfo.recovered}/>
       <InfoBox title="deaths" cases={countryinfo.todayDeaths} death={countryinfo.deaths}/>
       </div>
       <div className="maps">
       <Maps />
       </div>
       </div>
      <Card className="right_side">
        <CardContent>
       <h3>live cases in country</h3>
       <Table countries={tabledata}/>
       <h3>live cases in worldwide</h3>
       <LineGraph />
        </CardContent>
      </Card>

   
    </div>
  )
  }
export default App;
