import stores from "../data/stores.js";

export const getStores = (req, res) => {
  res.json(stores);
};

export const getStoreById = (req, res) => {
  const requestedId = parseInt(req.params.id, 10);
  const store = stores.find((s) => s.id === requestedId);

  if (!store) {
    return res.status(404).json({ message: "Store not found" });
  }

  res.json(store);
};
