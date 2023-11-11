const BASE_URL = 'http://localhost:3001/api/v1/user';

const apiService = {
  /**
   * Authentifie un utilisateur en utilisant l'e-mail et le mot de passe
   * @async
   * @param {string} email
   * @param {string} password
   * @returns {Promise<Object>}
   * @throws {Error}
   */
  async login(email, password) {
    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.status === 200) {
        return { success: true, token: data.body.token };
      } else {
        return {
          success: false,
          message: data.message,
        };
      }
    } catch (error) {
      console.error("Erreur lors de l'authentification:", error);
      return { success: false, message: 'Erreur lors de la connexion' };
    }
  },

  /**
   * Récupère le profil de l'utilisateur en utilisant le token
   * @async
   * @param {string} token
   * @returns {Promise<Object|null>}
   * @throws {Error}
   */
  async getUserProfile(token) {
    try {
      const response = await fetch(`${BASE_URL}/profile`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.status === 200) {
        return data.body;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération du profil:', error);
      return null;
    }
  },

  /**
   * Met à jour le profil de l'utilisateur en utilisant le token
   * @async
   * @param {string} token
   * @param {string} firstName
   * @param {string} lastName
   * @returns {Promise<Object>}
   * @throws {Error}
   */
  async updateUserProfile(token, firstName, lastName) {
    try {
      const response = await fetch(`${BASE_URL}/profile`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
        }),
      });

      const data = await response.json();

      if (response.status === 200) {
        return {
          success: true,
          body: data.body,
        };
      } else {
        return {
          success: false,
          message: data.message || `Erreur de status: ${response.status}`,
        };
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour:', error);
      return {
        success: false,
        message: `Erreur lors de la mise à jour: ${error}`,
      };
    }
  },
};

export default apiService;
