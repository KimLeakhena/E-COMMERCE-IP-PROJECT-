var category = {
  async create({ name, desc, imageUrl }) {
    const res = await fetch("http://139.162.3.208:1020/category/create", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, desc, imageUrl }),
    });

    const result = await res.json();
    return result;
  },
  async all() {
    const res = await fetch("hhttps://api.ahna.store/category/categorized-items", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
       
      },
    });

    const result = await res.json();
    if (!result?.length) return [];

    return result;
  }
}

export default category
