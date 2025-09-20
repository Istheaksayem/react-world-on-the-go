import React, { use } from 'react';
import Country from './Country/country';
import './countries.css'

const Countries = ({countriesPromies}) => {

    const CountriesData = use(countriesPromies);
    const countries =CountriesData.countries;
 
    return (
        <div>
            <h1>In the countries: {countries.length}</h1>
      <div id='countries'>
          {
            countries.map(country => <Country key={country.cca3.cca3} country={country}></Country>)
        }
      </div>
        </div>
    );
};

export default Countries;