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

export const fetchAccount = async (id: string) => {
  console.log('API FETCH ACCOUNT');
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

export const postTransactions = async (
  id: string,
  name: string,
  value: number,
) => {
  console.log('API POST TRANSACTION');
  try {
    const res = await fetch(
      `https://dx-bootcamp-api.azurewebsites.net/api/Accounts/${id}/transactions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          transactionType: 'Income',
          name: name,
          value: value,
        }),
      },
    );
    const users = await res.json();
    console.log(users);
    return users;
  } catch (e) {
    console.error('api', e);
    throw e;
  }
};
