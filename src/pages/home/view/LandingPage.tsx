import { Box, Typography } from "@material-ui/core";
import { Button, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import colors from "../../../constants/colors";
import { FlagStrips, Overlay, Strip } from "../../../shared/view";
import { landing_page_styles } from "../styles";

export default function LandingPage() {
  const classes = landing_page_styles();
  const navigation = useNavigate();
  return (
    <Box className={classes.root}>
      <Overlay />
      <Typography className={classes.header} variant="body1">
        Election Command Center
      </Typography>
      <Box className={classes.input_container}>
        <Box className={classes.input_group}>
          <TextField
            label="Constituency ID"
            variant="outlined"
            size="small"
            className={classes.input}
            sx={{ margin: (theme) => theme.spacing(0.5, 0) }}
          />
          <TextField
            variant="outlined"
            size="small"
            label="MemberShip ID"
            className={classes.input}
            sx={{ margin: (theme) => theme.spacing(0.5, 0) }}
          />
          <Button
            onClick={() => navigation("/ndc-ecm")}
            sx={{
              margin: (theme) => theme.spacing(1, 0),
              padding: (theme) => theme.spacing(0.85),
            }}
            size="small"
            className={classes.button}
            variant="contained"
          >
            Submit
          </Button>
        </Box>
        <FlagStrips />
      </Box>
    </Box>
  );
}
