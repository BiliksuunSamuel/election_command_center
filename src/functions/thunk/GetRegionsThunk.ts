import { createAsyncThunk } from "@reduxjs/toolkit";
import endpoints from "../../api/endpoints";
import configuration from "../../configuration";
import EndPointController from "../../controller/EndPointController";
import RegionModel from "../../model/RegionModel";

export default createAsyncThunk("api/ec-data/regions", async () => {
  try {
    return <RegionModel[]>await EndPointController({
      url: endpoints.regions("new"),
    });
  } catch (error) {
    throw error;
  }
});
