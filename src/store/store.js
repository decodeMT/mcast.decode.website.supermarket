import products from "./products.json";

export const getCategories = () => {
  return [
    { display: "Confectionery", key: "confectionery" },
    { display: "Delicatessen", key: "delicatessen" },
    { display: "Household", key: "household" },
    { display: "Wine Cellar", key: "winecellar" },
    { display: "Fruits & Vegetables", key: "fruitsandvegetables" },
    { display: "Organic", key: "organic" },
    { display: "Pets", key: "pets" },
    { display: "Chilled & Dairy", key: "chilledanddairy" },
    { display: "Fish", key: "fish" },
    { display: "Butcher", key: "butcher" },
  ];
};

export const getProducts = (category, page) => {
  if (!category || !page) return null;

  const numPage = Number(page);
  const pageSize = 25;

  let prods = products.filter((el) => {
    return el.category === category;
  });

  const slicedProds = prods.slice(
    numPage * pageSize,
    numPage * pageSize + pageSize
  );

  return {
    products: slicedProds,
    page: numPage ?? 1,
    currentRecords: slicedProds.length,
    offset: numPage * pageSize,
    totalRecords: prods.length,
    totalPages: Math.floor(prods.length / pageSize),
  };
};
