CREATE TABLE history (
  id SERIAL PRIMARY KEY,
  product_id INT NOT NULL,
  shop_id INT NOT NULL,
  action VARCHAR(50) NOT NULL, 
  stock_on_shelf INT NOT NULL,
  stock_in_order INT NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
