import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1ea79699a51d43d09cb3a1247f93cd44",
  },
});
