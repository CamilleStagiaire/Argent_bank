const AUTH_DATA_KEYS = {
    isAuthenticated: 'isAuthenticated',
    username: 'username',
    token: 'token',
    firstName: 'firstName',
    lastName: 'lastName',
};

const localStorageService = {
    /**
     * Enregistre les données d'authentification dans la mémoire de session
     * @param {string} username 
     * @param {string} token 
     * @param {string} firstName 
     * @param {string} lastName 
     */
    setAuthData(username, token, firstName, lastName) { 
        sessionStorage.setItem(AUTH_DATA_KEYS.isAuthenticated, 'true');
        sessionStorage.setItem(AUTH_DATA_KEYS.username, username);
        sessionStorage.setItem(AUTH_DATA_KEYS.token, token);
        sessionStorage.setItem(AUTH_DATA_KEYS.firstName, firstName);
        sessionStorage.setItem(AUTH_DATA_KEYS.lastName, lastName);
    },
    //Efface les données d'authentification de la mémoire de session
    clearAuthData() {
        sessionStorage.clear();
    },
    //Récupère les données d'authentification dans la mémoire de session
    getAuthData() {
        return {
            isAuthenticated: sessionStorage.getItem(AUTH_DATA_KEYS.isAuthenticated),
            username: sessionStorage.getItem(AUTH_DATA_KEYS.username),
            token: sessionStorage.getItem(AUTH_DATA_KEYS.token),
            firstName: sessionStorage.getItem(AUTH_DATA_KEYS.firstName),
            lastName: sessionStorage.getItem(AUTH_DATA_KEYS.lastName),
        };
    }
};

export default localStorageService;