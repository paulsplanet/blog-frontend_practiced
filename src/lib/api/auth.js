import client from "./client";

// LogIn
export const login = ({ username, password }) => client.post('/api/auth/login', { username, password });

// Register
export const register = ({ username, password }) => client.post('/api/auth/register', { username, password });

// Check Login Status
export const check = () => client.get('/api/auth/check');

// LogOut
export const logout = () => client.post('/api/auth/logout');