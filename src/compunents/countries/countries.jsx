import React, { use, useState } from 'react';
import Country from './Country/country';
import './countries.css'

const Countries = ({countriesPromies}) => {

    const CountriesData = use(countriesPromies);
    const [VisitedCountries, setVisitedCountries] = useState([])

    const handleVisitedCountries = (country) => {
        console.log('handle visited Country clicked',country)
        const newVisitedCountries =[...VisitedCountries,country]
        setVisitedCountries(newVisitedCountries)
    }

    const countries =CountriesData.countries;
 
    return (
        <div>
            <h1>In the countries: {countries.length}</h1>
            <h3>Total Country Visited: {VisitedCountries.length}</h3>
            <ol>
                {
                    VisitedCountries.map(country => <li
                    key={country.cca3.cca3}
                    >{country.name.common}</li>)
                }
            </ol>
      <div id='countries'>
          {
            countries.map(country => <Country
             key={country.cca3.cca3} 
             country={country}
             handleVisitedCountries={handleVisitedCountries}>
                 
            </Country>)
        }
      </div>
        </div>
    );
};

export default Countries;