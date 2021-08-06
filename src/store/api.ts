export const fetchUser = async (id: string) => {
  try {
    const res = await fetch(
      `https://dx-bootcamp-api.azurewebsites.net/api/Accounts/${id}`,
    );
    const users = await res.json();
    console.log(users);
    return users;
  } catch (err) {
    console.log('api', err);
    throw err;
  }
};

export const fetchUsers = async () => {
  try {
    const res = await fetch(
      'https://dx-bootcamp-api.azurewebsites.net/api/Accounts/',
    );
    const users = await res.json();
    console.log(users);
    return users;
  } catch (err) {
    console.log('api', err);
    throw err;
  }
};
