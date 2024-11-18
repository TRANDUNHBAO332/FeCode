import axios from "axios";

export const getAllProduct = async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/product/get-all`
    );
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
export const createProduct = async (data) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/product/create`,
      data // Truyền toàn bộ đối tượng data
    );
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
