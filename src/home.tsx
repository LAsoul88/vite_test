import { useState, FormEvent } from 'react';

import { title, github } from "./config";
import countries from "countries-list";

interface Country {
  name: string;
  capital: string;
  emoji: string;
}

export default () => {

  const [countryList, setCountryList] = useState<Country[]>(Object.values(countries.countries));


  const handleChange = (event: FormEvent): void => {
    const result = (event.target as HTMLInputElement).value.toLowerCase();
    if (!result) {
      setCountryList(Object.values(countries.countries));
      return;
    }
    const newList = [] as Country[];
    for (const country of countryList) {
      if (country.name.toLowerCase().includes(result)) {
        newList.push(country);
      }
    }
    setCountryList(newList);
  }
  return (
    <>
      <h1>{title}</h1>
      <p>
        <a href={github.url}>
          <i className="fa fa-code"></i> Source
        </a>
        &nbsp;available under MIT license. Contributions are welcome.
      </p>
      <input 
        type="text"
        placeholder="Search for a country"
        onChange={handleChange}
      />
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Capital</td>
            <td>Flag</td>
            <td>Wiki Page</td>
          </tr>
        </thead>
        <tbody>
          { countryList.map((country: Country) => {
            return (
              <tr key={country.name}>
                <td>{country.name}</td>
                <td>{country.capital ? country.capital : "N/A"}</td>
                <td>{country.emoji}</td>
                <td><a 
                  href={"https://en.wikipedia.org/wiki/"+country.name} target="_blank">Wiki Page</a></td>
              </tr>
            )})
          }
        </tbody>
      </table>
    </>
  );

}

