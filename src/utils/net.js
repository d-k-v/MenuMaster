import { verifyLogin } from "./dummy-data/data";

export function login(username, password) {
  return new Promise((resolve, reject) => {
    console.log("username", username);
    console.log("password", password);
    setTimeout(() => {
      const result = verifyLogin(username, password);
      if (result.status == "00") {
        resolve(result.token);
      } else {
        reject(result.message);
      }
    }, 2000);
  });
}
