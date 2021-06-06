import { createMuiTheme } from "@material-ui/core/styles";
import { Typography } from "./_typography";
import { Palette } from "./_palette";

const aeonikPro = {
  fontFamily: "Aeonik Pro TRIAL",
};

// A custom theme for this app
const Theme = createMuiTheme({
  typography: Typography,
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [aeonikPro],
        html: {
          WebkitFontSmoothing: "auto",
        },
      },
    },
  },
  palette: Palette,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1200,
      lg: 1500,
      xl: 1920,
    },
  },
});

export default Theme;
