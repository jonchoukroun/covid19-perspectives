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
}
