import React, { FC } from "react";

import { deathRate } from "../../data/deathCount";
import { cityPopulations } from "../../data/populations";

const { avgDeaths } = deathRate();

const daysToWipe = (population: number): number => {
    return Math.floor(population / avgDeaths);
};

const Cities: FC = () => {
    const list = cityPopulations.map((city) => {
        return (
            <li key={city.name}>
                <b>{city.name}:</b> {daysToWipe(city.population)} days
            </li>
        );
    });

    return (
        <div>
            <h1>City Populations</h1>
            <h4>
                With an average death rate of {avgDeaths} people, it wouldn't
                take long to wipe out the populations of these major cities:
            </h4>
            <ul>{list}</ul>
        </div>
    );
};

export default Cities;
