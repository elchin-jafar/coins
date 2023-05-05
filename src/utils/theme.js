import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: "red",
          fontSize: "2rem",
          border: "1px solid black",
          borderRadius: 0,
          "&:focus": {
            outline: "none",
            border: "1px solid black",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          outline: "none",
          "&:focus": {
            outline: "none",
            border: "1px solid black",
          },
        },
      },
    },
  },
});

export default theme;
