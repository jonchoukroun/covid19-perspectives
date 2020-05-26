import { Time } from "data-types";

export const cityPopulations: { name: string; population: number }[] = [
    {
        name: "New York",
        population: 8_390_000,
    },
    {
        name: "Los Angeles",
        population: 3_990_000,
    },
    {
        name: "Boston",
        population: 694_583,
    },
    {
        name: "Chicago",
        population: 2_706_000,
    },
    {
        name: "Miami",
        population: 470_914,
    },
    {
        name: "San Francisco",
        population: 883_305,
    },
    {
        name: "Laguna Hills",
        population: 31_024,
    },
    {
        name: "Zzyzx",
        population: 900,
    },
];

export const timeToWipe = (
    population: number,
    avgDeathsPerDay: number
): Time => {
    let days = Math.ceil(population / avgDeathsPerDay);

    const years = Math.floor(days / 365);
    if (years > 0) {
        days %= 365;
    }

    const months = Math.floor(days / 30);
    if (months > 0) {
        days %= 30;
    }

    return {
        days: days,
        months: months,
        years: years,
    };
};
