export const fetchAccounts = async () => {
  try {
    const response = await fetch(
      'https://dx-bootcamp-api.azurewebsites.net/api/Accounts',
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
