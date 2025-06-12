var product = {
  async create({ name, price, description, variants, category, images, originalPrice, features }) {
    const res = await fetch("https://chocobebe.xyz/product/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price,
        variants,
        category,
        images,
        description, originalPrice, features
      }),
    });

    const result = await res.json();
    return result;
  },
  async uploadImages() {
    const formData = new FormData();
    this.imageFiles.forEach((file) => {
      formData.append('images', file);
    });

    const res = await fetch("https://chocobebe.xyz/product/upload/multiple", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();
    return result?.imageUrls || []; // Adjust based on your backend's return
  }
  ,

  async all() {
    const res = await fetch("https://chocobebe.xyz/product/all", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    const result = await res.json();
    console.log("Fetched products:", result.data);

    return result?.data?.length ? result.data : [];
  }
  ,
  async edit(id, { name, price, shortDesc, fullDesc, variants, category, images }) {
    const res = await fetch(`https://chocobebe.xyz/product/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price,
        shortDesc,
        fullDesc,
        variants,
        category,
        images,
      }),
    });

    const result = await res.json();
    return result;
  },
  async getById(id) {
    const res = await fetch(`https://chocobebe.xyz/product/${id}`);
    const result = await res.json();
    return result;
  }

};

export default product;
