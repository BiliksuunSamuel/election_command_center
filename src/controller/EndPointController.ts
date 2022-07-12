import Axios from "axios";
import configuration from "../configuration";

interface IProps {
  url: string;
  baseURL?: string;
}

export default function ({ url, baseURL }: IProps) {
  return new Promise(function (resolve, reject) {
    try {
      Axios({
        baseURL: baseURL ? baseURL : configuration.apiBaseUrl,
        url,
        method: "GET",
      })
        .then((response) => resolve(response.data))
        .catch((error) => reject(error?.response?.data || error?.message));
    } catch (error) {
      reject(error);
    }
  });
}
