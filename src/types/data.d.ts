declare module "data-types" {
    export interface Time {
        days: number;
        months?: number;
        years?: number;
    }

    export interface DeathRate {
        days: number;
        totalDeaths: number;
        avgDeaths: number;
    }

    export interface FooterNote {
        num: number;
        text: string;
    }

    export interface CityPopulation {
        name: string;
        population: number;
    }
}
