// import axios from "axios";
// const BASE_URL = "http://localhost:8000";
//
// const LOGIN_URL = `${BASE_URL}login/`;
// const REGISTER_URL = `${BASE_URL}register/`;
// const LOGOUT_URL = `${BASE_URL}logout/`;
//
// axios.default.withCredentials = true;
//
// export const login = async (username, password) => {
//     try {
//         const response = await axios.post(LOGIN_URL, {
//             username,
//             password,
//         }, { withCredentials: true });
//         return response.data;
//     } catch (error) {
//         console.error("Login error", error);
//         return false;
//     }
// };
//
