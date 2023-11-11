const AUTH_DATA_KEYS = {
    isAuthenticated: 'isAuthenticated',
    username: 'username',
    token: 'token',
    firstName: 'firstName',
    lastName: 'lastName',
};

const localStorageService = {
    /**
     * Enregistre les données d'authentification dans le localStorage
     * @param {string} username 
     * @param {string} token 
     * @param {string} firstName 
     * @param {string} lastName 
     */
    setAuthData(username, token, firstName, lastName) { 
        localStorage.setItem(AUTH_DATA_KEYS.isAuthenticated, 'true');
        localStorage.setItem(AUTH_DATA_KEYS.username, username);
        localStorage.setItem(AUTH_DATA_KEYS.token, token);
        localStorage.setItem(AUTH_DATA_KEYS.firstName, firstName);
        localStorage.setItem(AUTH_DATA_KEYS.lastName, lastName);
    },
    //Efface les données d'authentification du localStorage
    clearAuthData() {
        localStorage.removeItem(AUTH_DATA_KEYS.isAuthenticated);
        localStorage.removeItem(AUTH_DATA_KEYS.username);
        localStorage.removeItem(AUTH_DATA_KEYS.token);
        localStorage.removeItem(AUTH_DATA_KEYS.firstName);
        localStorage.removeItem(AUTH_DATA_KEYS.lastName);
    },
    //Récupère les données d'authentification depuis le localStorage
    getAuthData() {
        return {
            isAuthenticated: localStorage.getItem(AUTH_DATA_KEYS.isAuthenticated),
            username: localStorage.getItem(AUTH_DATA_KEYS.username),
            token: localStorage.getItem(AUTH_DATA_KEYS.token),
            firstName: localStorage.getItem(AUTH_DATA_KEYS.firstName),
            lastName: localStorage.getItem(AUTH_DATA_KEYS.lastName),
        };
    }
};

export default localStorageService;