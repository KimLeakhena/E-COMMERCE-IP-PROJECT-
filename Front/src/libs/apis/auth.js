var auth = {
  async getMe() {
    const res = await fetch("https://api.ahna.store/auth/me", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-type": "application/json",

      },
    });

    const result = await res.json();
    if (result?.success == false) return false
    return result;
  },
  async logout() {
    const res = await fetch("https://api.ahna.store/auth/logout", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",

      },
    });

    const result = await res.json();
    if (result?.success == false) return false
    return result;
  },
}

export default auth
