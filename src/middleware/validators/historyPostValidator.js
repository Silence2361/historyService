import { body, validationResult } from "express-validator";

export const validateLogAction = [
  body("action")
    .isIn(["create", "update"])
    .withMessage('Action must be "create" or "update"'),

  body("productId")
    .isInt({ min: 1 })
    .withMessage("Product ID must be a positive integer"),

  body("shopId")
    .isInt({ min: 1 })
    .withMessage("Shop ID must be a positive integer"),

  body("stockOnShelf")
    .isInt({ min: 0 })
    .withMessage("Stock on shelf must be a non-negative integer"),

  body("stockInOrder")
    .isInt({ min: 0 })
    .withMessage("Stock in order must be a non-negative integer"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
