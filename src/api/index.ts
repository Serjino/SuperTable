import axios from "axios";

export const GET_SCHOOL_LIST = {
  method: 'GET',
  url: 'https://realtor.p.rapidapi.com/schools/list',
  params: {
    state_code: '<REQUIRED>',
    limit: '10',
    offset: '0',
    education_level: 'elementary'
  },
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'realtor.p.rapidapi.com'
  }
};
