export const deathCount: { date: string; deaths: number }[] = [
    {
        date: "Feb 01, 2020",
        deaths: 1,
    },
    {
        date: "May 19, 2020",
        deaths: 90_694,
    },
];

export type DeathRate = {
    days: number;
    totalDeaths: number;
    avgDeaths: number;
};

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
