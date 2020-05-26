import React, { FC } from "react";

import { cityPopulations, timeToWipe } from "../data/populations";
import { deathRate } from "../data/deathCount";
import { formatNumber, formatTime } from "../utils/numbers";
import { Time } from "data-types";

const Cities: FC = () => {
    const { avgDeaths } = deathRate();

    const list = cityPopulations.map((city) => {
        const { avgDeaths } = deathRate();
        const time: Time = timeToWipe(city.population, avgDeaths);
        return (
            <li key={city.name}>
                <b>{city.name}:</b> {formatTime(time)}
                <em>
                    (<small>pop: {formatNumber(city.population)}</small>)
                </em>
            </li>
        );
    });

    return (
        <div className="content">
            <h2>City Populations</h2>
            <p>
                With an average death rate of {formatNumber(avgDeaths)} people
                per day, it wouldn't take long to wipe out the populations of
                these major cities:
            </p>
            <ul>{list}</ul>
        </div>
    );
};

export default Cities;
