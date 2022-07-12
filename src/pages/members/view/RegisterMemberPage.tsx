import {
  Stack,
  Container,
  Typography,
  Box,
  Divider,
  TextField,
  Button,
  Switch,
  MenuItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { CustomLabeledTextField } from "../../../components";
import colors from "../../../constants/colors";
import { GetRegionsThunk } from "../../../functions/thunk";
import { MemberCardBackView, MemberCardFrontView } from "../../../views";

export default function RegisterMemberPage() {
  const [cardView, setCardView] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { regions } = useAppSelector((state) => state.regionsReducer);

  useEffect(() => {
    dispatch(GetRegionsThunk());
  }, []);
  return (
    <Box
      sx={(theme) => ({
        [theme.breakpoints.down("sm")]: {
          width: "100%",
          padding: 0,
        },
        height: "100vh",
      })}
    >
      <Container
        sx={(theme) => ({
          [theme.breakpoints.down("sm")]: {
            width: "100%",
            padding: 0,
          },
        })}
      >
        <Stack
          divider={<Divider />}
          sx={(theme) => ({
            padding: theme.spacing(2),
            borderRadius: theme.spacing(0),
            boxShadow: theme.shadows[1],
            [theme.breakpoints.down("sm")]: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            },
            margin: theme.spacing(2, 0),
            background: "#f5f5f5",
          })}
          direction="row"
          spacing={1}
        >
          <Stack
            spacing={0.85}
            sx={(theme) => ({
              padding: theme.spacing(1),
              flex: 1,
              [theme.breakpoints.down("sm")]: { width: "100%" },
            })}
          >
            <Box>
              <Typography variant="body1">Personal Information</Typography>
            </Box>
            <CustomLabeledTextField label="Full Name" />
            <CustomLabeledTextField label="ID Number" />
            <CustomLabeledTextField select label="Region">
              <React.Fragment>
                {regions.map((region) => (
                  <MenuItem key={region.region} value={region.region}>
                    {region.region}
                  </MenuItem>
                ))}
              </React.Fragment>
            </CustomLabeledTextField>
            <CustomLabeledTextField select label="Constituency" />
            <CustomLabeledTextField label="Branch" />
            <Button size="small" variant="outlined">
              Choose Passport Picture
            </Button>
          </Stack>
          <Stack
            sx={(theme) => ({
              [theme.breakpoints.down("sm")]: {
                display: "none",
              },
              flex: 1,
              overflow: "hidden",
              display: "flex",
            })}
          >
            <Box
              sx={(theme) => ({
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
              })}
            >
              <Typography variant="body1">Information Preview</Typography>
            </Box>
            <Box
              sx={(theme) => ({
                width: "100%",
                position: "relative",
                height: "260px",
                marginBottom: theme.spacing(2.5),
              })}
            >
              <Box
                sx={(theme) => ({
                  position: "absolute",
                  transition: "all 0.45s ease-in-out",
                  top: 0,
                  width: "100%",
                  left: !cardView ? 0 : "100%",
                })}
              >
                <MemberCardFrontView />
              </Box>
              <Box
                sx={(theme) => ({
                  position: "absolute",
                  transition: "all 0.45s ease-in-out",
                  top: 0,
                  width: "100%",
                  left: cardView ? 0 : "100%",
                })}
              >
                <MemberCardBackView />
              </Box>
            </Box>

            <Divider />
            <Box
              sx={(theme) => ({
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                padding: theme.spacing(1),
              })}
            >
              <Typography variant="body1">Front View</Typography>
              <Switch
                value={cardView}
                onChange={() => setCardView(!cardView)}
              />
              <Typography variant="body1">Back View</Typography>
            </Box>
            <Button size="small" variant="contained" color="primary">
              Submit
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
