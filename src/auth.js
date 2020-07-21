export const signup = (user) => {
  return fetch(process.env.REACT_APP_API_URL + `/user`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signin = (user) => {
  return fetch(process.env.REACT_APP_API_URL + "/user/auth", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signout = (next) => {
  if (typeof window !== undefined) {
    var valId = JSON.parse(localStorage.getItem("jwt"));
    console.log(valId);
    localStorage.removeItem("jwt");
  }
  next();
  return fetch(
    process.env.REACT_APP_API_URL + `/user/signout/?userId=${valId.userRes.id}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + valId.token,
      },
    }
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((err) => {
      console.log("Error", err);
    });
};

export const getAllItems = (userId, token) => {
  return fetch(process.env.REACT_APP_API_URL + `/sites/list?userId=${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((err) => {
      console.log("Error", err);
    });
};

export const isAuthenticated = () => {
  if (typeof window == undefined) return false;
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else return false;
};

export const addItem = (userId, token, data) => {
  return fetch(process.env.REACT_APP_API_URL + `/sites?userId=${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((err) => {
      console.log("Error", err);
    });
};
