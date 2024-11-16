import historyRepository from "../repositories/historyRepository.js";

class HistoryService {
  async logAction(action, productId, shopId, stockOnShelf, stockInOrder) {
    const existing = await historyRepository.getExisting(
      action,
      productId,
      shopId,
      stockOnShelf,
      stockInOrder
    );

    if (existing) {
      console.warn("Duplicate entry detected. Skipping log action.");
      return existing;
    }
    if (!action || !["create", "update"].includes(action)) {
      throw new Error(
        'Invalid or missing action. Must be "create" or "update".'
      );
    }

    if (!productId || typeof productId !== "number") {
      throw new Error("Invalid or missing productId. Must be a number.");
    }

    if (!shopId || typeof shopId !== "number") {
      throw new Error("Invalid or missing shopId. Must be a number.");
    }

    if (stockOnShelf < 0 || typeof stockOnShelf !== "number") {
      throw new Error("Invalid stockOnShelf. Must be a non-negative number.");
    }

    if (stockInOrder < 0 || typeof stockInOrder !== "number") {
      throw new Error("Invalid stockInOrder. Must be a non-negative number.");
    }

    return await historyRepository.create(
      action,
      productId,
      shopId,
      stockOnShelf,
      stockInOrder
    );
  }

  async getHistory(page = 1, limit = 10) {
    if (isNaN(page) || page < 1) {
      throw new Error("Invalid page. Must be a positive number.");
    }
    if (isNaN(limit) || limit < 1) {
      throw new Error("Invalid limit. Must be a positive number.");
    }

    return await historyRepository.getAll(page, limit);
  }
}

export default new HistoryService();
