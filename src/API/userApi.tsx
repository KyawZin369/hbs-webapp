import { userRegisterandLoginType } from "@/type/account";

const apiName = "http://localhost:8000/users";

export const registerUser = async (userData : userRegisterandLoginType) => {
    const response = await fetch(`${apiName}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export const LoginUser = async (userData : userRegisterandLoginType) => {
    const response = await fetch(`${apiName}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};