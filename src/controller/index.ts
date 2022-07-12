import Axios from "axios";
import configuration from "../configuration";

interface IProps {
  token?: any;
  url: string;
  data?: any;
  baseURL?: string;
  method?: any;
}
export default function ({ url, baseURL, data, token, method }: IProps) {
  return new Promise(function (resolve, reject) {
    try {
      Axios({
        baseURL: baseURL ? baseURL : configuration.baseURl,
        method: method ? method : "post",
        headers: {
          token: "Bearer " + token,
        },
        data,
        url,
      })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => reject(error?.response?.data || error?.message));
    } catch (error) {
      reject(error);
    }
  });
}
