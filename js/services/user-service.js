const getUsers = async (urlUser) => {
    const response = await fetch(urlUser);
    const data = await response.json();
    return data;
};

export const usersServices = {
    getUsers,
};
