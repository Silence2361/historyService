# historyService

# Install dependencies

npm install

# Set up the environment variables

PORT=4000
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=history

# Set up the database

CREATE DATABASE history

# Apply migrations

psql -U postgres -d history -f migrations/001-create-history.sql

# Start the server

npm run dev
