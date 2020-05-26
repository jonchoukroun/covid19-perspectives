import { DeathRate } from "data-types";

export const deathCount: { date: string; deaths: number }[] = [
    {
        // TODO: verify 1st death date
        date: "Feb 01, 2020",
        deaths: 1,
    },
    {
        // TODO: query API and update daily
        date: "May 19, 2020",
        deaths: 90_694,
    },
];

export const deathRate = (): DeathRate => {
    const firstDay = Date.parse(deathCount[0].date);
    const lastDay = Date.parse(deathCount[deathCount.length - 1].date);
    const totalDays = Math.floor((lastDay - firstDay) / (1000 * 60 * 60 * 24));

    const deaths = deathCount.reduce((deaths, curr) => {
        return deaths + curr.deaths;
    }, 0);

    return {
        days: totalDays,
        totalDeaths: deaths,
        avgDeaths: Math.floor(deaths / totalDays),
    };
};
