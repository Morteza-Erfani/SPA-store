import axios from "axios";

const BASE_URL = "https://api.escuelajs.co/api/v1";

const getProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  // console.log(response.data);
  return response.data
};

export { getProducts };
