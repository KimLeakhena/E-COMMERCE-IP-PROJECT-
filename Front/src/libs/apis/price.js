var price = {
  async add({ price, source, product }) {
    const res = await fetch("https://chocobebe.xyz/price/create", {
      method: "POST",

      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ price, source, product }),
    });

    const result = await res.json();
    return result;
  }
}

export default price
