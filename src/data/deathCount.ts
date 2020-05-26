import { DeathRate, FooterNote } from "data-types";

export const deathCount: { date: string; deaths: number }[] = [
    {
        // TODO: verify 1st death date
        date: "February 01, 2020",
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

export const deathRateNote: FooterNote[] = [
    {
        num: 1,
        text:
            "A daily average does not reflect the change over time in the number of casualties. Clearly, the number of fatalities has been climbing. This estimate is useful mostly for understanding what this loss means to the United States.",
    },
];
