export async function handleLogin({ email, password }) {
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve(`user loged in sucssessfully email: ${email} ,password: ${password}`);
    }, 3000)
  );
}

export async function handleRegister({ userName, email, password }) {
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve(`${userName} registerd sucssessfully email: ${email} ,password: ${password}`);
    }, 3000)
  );
}

// to do
export async function handleSearchParams(key, value, setSearchParams) {
  setSearchParams();
  return null;
}
