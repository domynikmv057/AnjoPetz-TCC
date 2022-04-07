export const LocalStorageSaveToken = (token) => {
  const loginToken = JSON.stringify(token);
  console.log(loginToken);
  localStorage.setItem("Token", loginToken);
};
