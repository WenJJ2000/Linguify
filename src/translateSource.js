import { BASE_URL, API_HOST, API_KEY } from "./apiConfig";

export async function doTranslate(translateParams) {
  const url = BASE_URL;
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": API_HOST,
    },
    body: new URLSearchParams({
      q: translateParams.q,
      target: translateParams.target,
      source: translateParams.source,
    }),
  };

  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function doDetect(translateParams) {
  const url = BASE_URL + "/detect";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": API_HOST,
    },
    body: new URLSearchParams({
      q: translateParams.text,
    }),
  };
  try {
    const res = await fetch(url, options);
    const data = await res.text();
    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function getLanguages() {
  const url = BASE_URL + "/languages";
  const options = {
    method: "GET",
    headers: {
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": API_HOST,
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    return result;
  } catch (error) {
    console.error(error);
  }
}
