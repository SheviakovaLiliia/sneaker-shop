import axios from "axios";

export const fetchProducts = async (url) => {
  try {
    return await axios.get(
      `https://66aa68ce613eced4eba8b3b5.mockapi.io/api/${url}`
    );
  } catch (err) {
    throw new Error("Fetch error");
  }
};

export const addToCart = async (product) => {
  try {
    await axios.post(
      "https://66aa68ce613eced4eba8b3b5.mockapi.io/api/articles",
      product
    );
  } catch (err) {
    throw new Error("Couldn't add product to cart");
  }
};

export const deleteFromCart = async (id) => {
  try {
    await axios.delete(
      `https://66aa68ce613eced4eba8b3b5.mockapi.io/api/articles/${id}`
    );
  } catch (err) {
    throw new Error("Couldn't remove product from cart");
  }
};
