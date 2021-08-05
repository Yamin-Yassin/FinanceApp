export const getUser = async (id: string) => {
  try {
    const res = await fetch(
      `https://dx-bootcamp-api.azurewebsites.net/api/Accounts/${id}`,
    );
    const users = await res.json();

    return users;
  } catch (err) {
    console.log('api', err);
    throw err;
  }
};
