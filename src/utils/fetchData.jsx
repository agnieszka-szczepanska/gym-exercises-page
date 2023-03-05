export const exerciseOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "16ff1c23b4msh14376719c058a89p1e550cjsn21b87651dfda", //env dont work -> import.meta.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
