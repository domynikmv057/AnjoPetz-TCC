export const LocalStorageSaveToken = (token) => {
  const loginToken = JSON.stringify(token);
  localStorage.setItem("Token", loginToken);
};
