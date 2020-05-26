import { Time } from "data-types";

export const formatNumber = (number: number): string => {
    return new Intl.NumberFormat().format(number);
};

export const formatTime = (time: Time): string => {
    let formattedTime = [];
    if (time.years) {
        const years =
            time.years > 1 ? `${time.years} years` : `${time.years} year`;
        formattedTime.push(years);
    }

    if (time.months) {
        const months =
            time.months > 1 ? `${time.months} months` : `${time.months} month`;
        formattedTime.push(months);
    }

    if (time.days) {
        let days = time.days > 1 ? `${time.days} days` : `${time.days} day`;
        formattedTime.push(days);
    }

    switch (formattedTime.length) {
        case 1:
            return formattedTime.join();
        case 2:
            return formattedTime.join(" and ");
        case 3:
            for (let i = 1; i < 5; i += 2) {
                formattedTime.splice(i, 0, ", ");
            }
            formattedTime.splice(formattedTime.length - 1, 0, "and ");
            return formattedTime.join("");
        default:
            return "It's already wiped out.";
    }
};
