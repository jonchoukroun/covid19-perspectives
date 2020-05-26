import React, { FC, ChangeEvent, useState, useEffect } from "react";

import { deathRate } from "../data/deathCount";
import { cityPopulations, timeToWipe } from "../data/populations";
import { formatNumber, formatTime } from "../utils/numbers";
import { Time, CityPopulation } from "data-types";

const Cities: FC = () => {
    const cityOptions = cityPopulations.map((city) => (
        <option key={city.name} value={city.name}>
            {city.name}
        </option>
    ));

    const [selectedCity, setCity] = useState<CityPopulation | undefined>(
        undefined
    );
    const [time, setTime] = useState<Time | undefined>(undefined);

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        const city = cityPopulations.filter(
            (c) => c.name === e.target.value
        )[0];
        setCity(city);
    };

    const { avgDeaths } = deathRate();

    useEffect(() => {
        if (!selectedCity) return;
        setTime(timeToWipe(selectedCity.population, avgDeaths));
    }, [avgDeaths, selectedCity]);

    return (
        <div className="content">
            <h4>
                Select a city from the menu or enter your zipcode to compare the
                death toll to a population.
            </h4>
            <select name="cities" id="city-selector" onChange={handleChange}>
                <option value="">-- City --</option>
                {cityOptions}
            </select>
            {selectedCity && time && (
                <p>
                    With a population of {formatNumber(selectedCity.population)}
                    , {selectedCity.name} would be wiped out in{" "}
                    {formatTime(time)}.
                </p>
            )}
        </div>
    );
};

export default Cities;
