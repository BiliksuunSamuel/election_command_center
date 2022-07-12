import { makeStyles } from "@material-ui/core";
import { images } from "../../../resources/resources";

export default makeStyles(
  (theme) => ({
    root: {
      width: "100vw",
      height: "100vh",
      padding: theme.spacing(0),
      margin: theme.spacing(0),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${images.logo})`,
      backgroundPosition: "center",
      backgroundRepeat: "repeat",
      backgroundAttachment: "fixed",
      backgroundSize: 80,
    },
    input_container: {
      width: 350,
      borderRadius: theme.spacing(1),
      boxShadow: theme.shadows[2],
      minHeight: 300,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      background: "rgba(255,255,255,0.85)",
      [theme.breakpoints.down("sm")]: {
        width: "85%",
      },
      zIndex: 4,
    },
    input_group: {
      width: "100%",
      margin: theme.spacing(1),
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(2),
      alignItems: "center",
    },
    input: {
      width: "90%",
      margin: theme.spacing(1, 0),
    },
    button: {
      width: "90%",
      margin: theme.spacing(1, 0),
    },
    header: {
      width: "100%",
      textAlign: "center",
      zIndex: 4,
      color: theme.palette.common.white,
      marginBottom: theme.spacing(3),
      fontSize: theme.spacing(4.5),
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.spacing(3),
      },
    },
  }),
  { index: 1 }
);
