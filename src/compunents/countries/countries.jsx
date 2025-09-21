import React, { use, useState } from 'react';
import Country from './Country/country';
import './countries.css'

const Countries = ({countriesPromies}) => {

    const CountriesData = use(countriesPromies);
    const [VisitedCountries, setVisitedCountries] = useState([])
    const [visitedFlag,setVisitedFlag] = useState([])

    const handleVisitedCountries = (country) => {
        console.log('handle visited Country clicked',country)
        const newVisitedCountries =[...VisitedCountries,country]
        setVisitedCountries(newVisitedCountries)
    }


    const handleVisitedFlag = (flag) =>{
       const newVisitedFlag = [...visitedFlag, flag]
       setVisitedFlag(newVisitedFlag)
    }

    const countries =CountriesData.countries;
 
    return (
        <div>
            <h1>In the countries: {countries.length}</h1>
            <h3>Total Country Visited: {VisitedCountries.length}</h3>
            <h3>Total visited flag: {visitedFlag.length}</h3>
            <ol>
                {
                    VisitedCountries.map(country => <li
                    key={country.cca3.cca3}
                    >{country.name.common}</li>)
                }
            </ol>
                <div className='visited-flag-container'>
                    {
                        visitedFlag.map(flag => <img src={flag}></img>)
                    }
                </div>



      <div id='countries'>
          {
            countries.map(country => <Country
             key={country.cca3.cca3} 
             country={country}
             handleVisitedCountries={handleVisitedCountries}
              handleVisitedFlag ={ handleVisitedFlag}
             >
                 
            </Country>)
        }
      </div>
        </div>
    );
};

export default Countries;