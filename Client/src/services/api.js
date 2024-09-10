import React from 'react'
import axios from 'axios';

const URL = 'http://localhost:4000';
// const URL = 'http://74.208.226.181:5000';

// dilip api ----------

export const createTeam = async(data) => {
  try {
      console.log("dekh lo");
      return await axios.post(`${URL}/api/addteam`, data);
  } catch(error){
      console.log("Sorry bhai galti se bol diya, nhi ho rha", error);
  }
}

export const createTeam2 = async(data) => {
  try {
      console.log("dekh lo");
      return await axios.post(`${URL}/api/addteam2`, data);
  } catch(error){
      console.log("Sorry bhai galti se bol diya, nhi ho rha", error);
  }
}

export const addSptype = async(data) => {
  try {
      console.log("dekh lo");
      return await axios.post(`${URL}/api/addsponsertype`, data);
  } catch(error){
      console.log("Sorry bhai galti se bol diya, nhi ho rha", error);
  }
}
