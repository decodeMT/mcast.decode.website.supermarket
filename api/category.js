export default function (req, res) {
  const categories = [
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
  res.status(200).json({ categories: categories });
}
