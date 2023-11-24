// import products from "../products.json" assert { type: "json" };
import { readFileSync } from "fs";
import path from "path";

export default function (req, res) {
  try {
    let { category, page } = req.query;

    page = Number(page);
    const pageSize = 20;

    if (!category)
      res.status(400).json({ message: `Must specify category query` });

    const file = path.join(process.cwd(), "data", "products.json");
    const stringified = readFileSync(file, "utf8");

    const products = JSON.parse(stringified);

    let prods = products.filter((el) => {
      return el.category === category;
    });

    const slicedProds = prods.slice(
      page * pageSize,
      page * pageSize + pageSize
    );

    res.status(200).json({
      products: slicedProds,
      page: page ?? 1,
      currentRecords: slicedProds.length,
      offset: page * pageSize,
      totalRecords: prods.length,
      totalPages: Math.floor(prods.length / pageSize) - 1,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
