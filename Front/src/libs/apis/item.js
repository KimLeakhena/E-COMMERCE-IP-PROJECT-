var item = {
  async create({ name, desc, category }) {
    const res = await fetch("https://api.ahna.store/item/create", {
      method: "POST",
 
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, desc, category }),
    });

    const result = await res.json();
    return result;
  },
  async all() {
    const res = await fetch("https://api.ahna.store/item/all", {
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

export default item
