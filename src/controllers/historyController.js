import historyService from "../services/historyServiceService.js";

export const logAction = async (req, res) => {
  const { action, productId, shopId, stockOnShelf, stockInOrder } = req.body;
  const log = await historyService.logAction(
    action,
    productId,
    shopId,
    stockOnShelf,
    stockInOrder
  );
  res.status(201).json(log);
};

export const getHistory = async (req, res) => {
  const { page, limit } = req.query;
  const history = await historyService.getHistory(page, limit);
  res.status(200).json(history);
};
