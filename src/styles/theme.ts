const green = "#008080";
const blue = "#000080";
const black = "#252525";
const lightGray = "#e7e7e7";
const gray = "#c0c0c0";
const darkGray = "#585858";
const white = "#fff";

export default {
    colors: {
        green: green,
        blue: blue,
        black: black,
        lightGray: lightGray,
        gray: gray,
        darkGray: darkGray,
        white: white,
    },
    header: {
        fontWeight: "500",
        transform: "scaleX(1.1),",
    },
    body: {
        fontSize: "18px",
    },
    border: {
        defaultWidth: "2px",
        thin: "1px",
        edge: "solid",
        inner: "groove",
        radius: "0",
        defaultColor: "lightGray darkGray darkGray lightGray",
        insetColor: "black lightGray lightGray black",
    },
    defaultDropShadow: "3px 3px 0px 1px rgba(0, 0, 0, 0.6)",
    thinDropShadow: "1px 1px 0px 0px rgba(0, 0, 0, 0.6)",
    darkDropShadow: "1px 1px 0px 3px rgba(0, 0, 0, 0.7)",
};
