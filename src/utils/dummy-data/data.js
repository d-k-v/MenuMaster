export function verifyLogin(username, password) {
  if (username == "admin" && password == "admin") {
    return {
      status: "00",
      token: "011556b8-d6bf-11ed-afa1-0242ac120002",
      message: "success",
    };
  } else {
    return { status: "01", message: "wrong username or password" };
  }
}
