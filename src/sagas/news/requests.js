import axios from "axios";

export default function requestGetNews(query = "vue") {
  return axios.request({
    method: "GET",
    url: "https://hn.algolia.com/api/v1/search",
    params: {
      query,
    },
  });
}
