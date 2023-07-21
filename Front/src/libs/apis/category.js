var category = {
  async create({ name, desc, imageUrl }) {
    const res = await fetch("https://api.ahna.store/category/create", {
      method: "POST",
 
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, desc, imageUrl }),
    });

    const result = await res.json();
    return result;
  },
  async all() {
    const res = await fetch("https://api.ahna.store/category/categorized-items", {
      method: "GET",
 
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
