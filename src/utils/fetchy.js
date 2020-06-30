const request = async (url, method = "GET", payload = undefined) => {
  const API_URL = "/.netlify/functions/server";

  const options = {
    method,
    body: JSON.stringify(payload),
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    credentials: "include",
  };

  try {
    const result = await fetch(`${API_URL}${url}`, options);
    return result;
  } catch (err) {
    console.error(`API call failed: ${err}`);
    return err;
  }
};

export default {
  get: async (url) => await request(url),

  post: async (url, payload) => await request(url, "POST", payload),

  put: async (url, payload) => await request(url, "PUT", payload),

  delete: async (url) => await request(url, "DELETE"),
};
