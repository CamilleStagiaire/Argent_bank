const AUTH_DATA_KEYS = {
    isAuthenticated: 'isAuthenticated',
    username: 'username',
    token: 'token',
    firstName: 'firstName',
};

const localStorageService = {
    setAuthData(username, token, firstName) { 
        localStorage.setItem(AUTH_DATA_KEYS.isAuthenticated, 'true');
        localStorage.setItem(AUTH_DATA_KEYS.username, username);
        localStorage.setItem(AUTH_DATA_KEYS.token, token);
        localStorage.setItem(AUTH_DATA_KEYS.firstName, firstName);
    },
    clearAuthData() {
        localStorage.removeItem(AUTH_DATA_KEYS.isAuthenticated);
        localStorage.removeItem(AUTH_DATA_KEYS.username);
        localStorage.removeItem(AUTH_DATA_KEYS.token);
        localStorage.removeItem(AUTH_DATA_KEYS.firstName);
    },
    getAuthData() {
        return {
            isAuthenticated: localStorage.getItem(AUTH_DATA_KEYS.isAuthenticated),
            username: localStorage.getItem(AUTH_DATA_KEYS.username),
            token: localStorage.getItem(AUTH_DATA_KEYS.token),
            firstName: localStorage.getItem(AUTH_DATA_KEYS.firstName),
        };
    }
};

export default localStorageService;