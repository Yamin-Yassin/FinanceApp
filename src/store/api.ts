export const getUsers: any = async () => {
  try {
    const res = await fetch(
      'https://dx-bootcamp-api.azurewebsites.net/api/Accounts',
    );
    return await res.json();
  } catch (err) {
    console.log('api', err);
    throw err;
  }
};
