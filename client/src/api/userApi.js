import axios from "axios";

// const url = "https://secure-springs-23449.herokuapp.com";
// const url = "https://intiquerybackend.onrender.com";
const url ="http://localhost:8000" 


export const addUserData = async (data) => {
  return await axios.post(`${url}/user/addUserData`, data);
};

export const getUserData = async (id) => {
  return await axios.post(`${url}/user/getUserData`, id);
};
