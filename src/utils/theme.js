import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#F56A20",
            light: "#F9D7C0",
            lighter: "#FFB684",
        },
        secondary: {
            main: "#4081FF",
            light: "#D6E5FC",
        },
        success: {
            main: "#00C853",
            light: "#D4FCD4",
            lighter: "#B5E9B5",
        },
    },
    typography: {
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontSize: 18,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 600,
        fontWeightHeavy: 900,
        h1: {
            fontWeight: 600,
            fontSize: "22px",
            lineHeight: "auto",
        },
        h2: {
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "auto",
        },
        h3: {
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "auto",
        },
        h4: {
            fontSize: "18px",
            fontWeight: 500,
            lineHeight: "auto",
        },
        h6: {
            fontSize: "16px",
            fontWeight: 500,
        },
        subtitle1: {
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "auto",
        },
        subtitle2: {
            fontWeight: 400,
            fontSize: "10px",
            lineHeight: "auto",
        },
        subtitle3: {
            fontWeight: 400,
            fontSize: "13px",
            lineHeight: "auto",
        },
        button: {
            fontSize: "14px",
            fontWeight: 500,
        },
    },
});

export default theme;