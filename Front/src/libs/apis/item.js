var item = {
  async create({ name, desc, category }) {
    const res = await fetch("http://139.162.3.208:1020/item/create", {
      method: "POST",
      credentials: "include",
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

export default item
