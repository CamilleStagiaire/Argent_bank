const AUTH_DATA_KEYS = {
    isAuthenticated: 'isAuthenticated',
    username: 'username',
};

const localStorageService = {
    setAuthData(username) {
        localStorage.setItem(AUTH_DATA_KEYS.isAuthenticated, 'true');
        localStorage.setItem(AUTH_DATA_KEYS.username, username);
    },
    clearAuthData() {
        localStorage.removeItem(AUTH_DATA_KEYS.isAuthenticated);
        localStorage.removeItem(AUTH_DATA_KEYS.username);
    },
    getAuthData() {
        return {
            isAuthenticated: localStorage.getItem(AUTH_DATA_KEYS.isAuthenticated),
            username: localStorage.getItem(AUTH_DATA_KEYS.username),
        };
    }
};

export default localStorageService;