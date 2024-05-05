import axios from "axios";

// const url = "https://secure-springs-23449.herokuapp.com";
// const url = "https://intiquerybackend.onrender.com";
 const url ="http://localhost:8000"
export const registerUser = async (userData) => {
  return await axios.post(`${url}/auth/register`, userData);
};

export const loginUser = async (userData) => {
  return await axios.post(`${url}/auth/login`, userData);
};

export const googleLogin = async (userData) => {
  return await axios.post(`${url}/auth/googleLogin`, userData);
};
