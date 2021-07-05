import './App.css'
import React, {useState, useEffect} from 'react'
import {Casebox} from "./Box/Casebox";
import {Head} from "./Box/Head";
import {Table} from "./Box/Table";
import {Graph} from "./Box/Graph";
import "leaflet/dist/leaflet.css";
import Map from "./Box/Map";
import Footer from "./Box/Footer";
import {MenuItem, FormControl, Select, Card, CardContent} from "@material-ui/core";

export default function App () {

  const [countries, setCountries] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const [mapCountries, setMapCountries] = useState([]);
  const [stateCode, setStateCode] = useState([]);
  const mapCenter = [34.80746, 5.4796];
  const zoom = (1.5);


  useEffect(() => {
    const getCountriesData = async () => {
      const data = await fetch("https://api.covid19india.org/data.json");
      const upData = await data.json();
      setCountries(upData.statewise);
      setTableData(upData.statewise);
      setStateCode(upData.statewise[0])

    };

    getCountriesData();
}, []);

useEffect(() => {
  const getCountries= async () => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => ({
          name: country.country,
          value: country.countryInfo.iso2,
        }));
        setMapCountries(data);
      });
  };

  getCountries();
}, []);


  return (
    <>
      <Head/>

      <div className = "track">
        <div className="track-left">
          <div className="aa">

            <div className="status">
              <Casebox onClick={(e) => setCasesType("cases")}
              title = "Corona cases" 
              cases = {stateCode.active} 
              total = {stateCode.confirmed}/>

              <Casebox onClick={(e) => setCasesType("recovered")}
              title = "Corona Recovery" 
              cases = {stateCode.recovered} 
              total = {stateCode.confirmed}/>

              <Casebox onClick={(e) => setCasesType("deaths")}
              title = "Corona Deaths" 
              cases = {stateCode.deaths} 
              total = {stateCode.confirmed}/>
            </div>

            <div className="dropdown">
              <FormControl className = "state">
                <Select variant = "outlined"   onChange = {(e) => {
                  const code = e.target.value;
                  setStateCode(code);
                }}>
                  {countries.map((country, key) => (
                      <MenuItem value={countries[key]}>{country.state}</MenuItem>
                  ))}

                </Select>
              </FormControl>
            </div>
    

          </div><br/><br/>
          <Map 
          countries={mapCountries}
          casesType={casesType}
          center={mapCenter} 
          zoom={zoom}/>
        </div>

        <Card className="track-right">
          <CardContent>
            <h3>All States Cases : </h3>
            <Table countries = {tableData}/><br/><br/>
            <h3>Graph for Cases</h3><br/>
            <Graph casesType = {casesType}/>
          </CardContent>
        </Card>

      </div>

      <Footer/>
    </>
  )
}
