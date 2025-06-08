var product = {
  async create({ title, category, item, imageUrl, desc }) {
    const res = await fetch("https://chocobebe.xyz/product/create", {
      method: "POST",

      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title, category, item, imageUrl, desc }),
    });

    const result = await res.json();
    return result;
  },
  async all() {
    const res = await fetch("https://chocobebe.xyz/product/all", {
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

export default product
