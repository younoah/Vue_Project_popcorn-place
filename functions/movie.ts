import { Handler } from "@netlify/functions";
import axios from "axios";

const { VUE_APP_API_KEY, VUE_APP_API_END_POINT } = process.env;

type RequestOptions = {
  i?: string;
  s?: string;
  page?: string;
};

const handler: Handler = async (event) => {
  const options: RequestOptions = JSON.parse(event.body);

  const { data } = await axios.get(VUE_APP_API_END_POINT, {
    params: {
      apiKey: VUE_APP_API_KEY,
      ...options,
    },
  });

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};

export { handler };
