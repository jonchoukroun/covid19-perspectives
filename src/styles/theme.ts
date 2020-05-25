const black = "#000000";
const darkGray = "#585858";
const gray = "#c0c0c0";
const lightGray = "#e7e7e7";
const red = "#8a0303";

export default {
    colors: {
        dark: darkGray,
        medium: gray,
        black: black,
        accent: red,
        light: lightGray,
    },
    borders: {
        default: `2px solid ${gray}`,
        accent: `2px solid ${red}`,
    },
    boxShadows: {
        default:
            "0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)",
        elevated:
            "0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.20)",
    },
    fonts: {
        heading: "Anton",
        body: "Montserrat",
    },
};
