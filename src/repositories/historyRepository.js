import { query } from "../db/index.js";

class HistoryRepository {
  async create(action, productId, shopId, stockOnShelf, stockInOrder) {
    const result = await query(
      `INSERT INTO history (action, product_id, shop_id, stock_on_shelf, stock_in_order)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [action, productId, shopId, stockOnShelf, stockInOrder]
    );
    return result.rows[0];
  }

  async getAll(page = 1, limit = 10) {
    const offset = (page - 1) * limit;

    const result = await query(
      `SELECT * FROM history ORDER BY timestamp DESC LIMIT $1 OFFSET $2`,
      [limit, offset]
    );

    return result.rows;
  }

  async getExisting(action, productId, shopId, stockOnShelf, stockInOrder) {
    const result = await query(
      `SELECT * FROM history 
       WHERE action = $1 AND product_id = $2 AND shop_id = $3 
         AND stock_on_shelf = $4 AND stock_in_order = $5`,
      [action, productId, shopId, stockOnShelf, stockInOrder]
    );
    return result.rows[0];
  }
}

export default new HistoryRepository();
