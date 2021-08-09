export const fetchUsers = async () => {
  try {
    const res = await fetch(
      'https://dx-bootcamp-api.azurewebsites.net/api/Accounts',
    );
    const users = await res.json();

    return users;
  } catch (e) {
    console.error('api', e);
    throw e;
  }
};

export const fetchUser = async (id: string) => {
  try {
    const res = await fetch(
      `https://dx-bootcamp-api.azurewebsites.net/api/Accounts/${id}`,
    );
    const users = await res.json();

    return users;
  } catch (e) {
    console.error('api', e);
    throw e;
  }
};
