const BASE_URL = 'http://localhost:3001/api/v1/user';

const apiService = {
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
        return { success: true, token: data.token };
      } else {
        return { success: false, message: data.message || 'Erreur lors de la connexion' };
      }
    } catch (error) {
      console.error("Erreur lors de l'authentification:", error);
      return { success: false, message: 'Erreur lors de la connexion' };
    }
  },

  async getUserProfile(token) {
    try {
      const response = await fetch(`${BASE_URL}/profile`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
  
      const data = await response.json();
  
      if (response.status === 200) {
        return data.body;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du profil:", error);
      return null;
    }
  }
};

export default apiService;