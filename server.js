process.env.N8N_PORT = process.env.N8N_PORT || '3000';

// Use the database login Cloudways created
if (process.env.DATABASE_NAME) process.env.DB_POSTGRESDB_DATABASE = process.env.DATABASE_NAME;
if (process.env.DATABASE_USER) process.env.DB_POSTGRESDB_USER = process.env.DATABASE_USER;
if (process.env.DATABASE_PASSWORD) process.env.DB_POSTGRESDB_PASSWORD = process.env.DATABASE_PASSWORD;

require('n8n/bin/n8n');
