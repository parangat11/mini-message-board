# Issues Faced
1. 'user' is reserved keyword in SQL.
2. SSL connection is required to connect to prod db (ssl=required in conn string or ssl: true in the object).
3. exporting router as an object causes middleware that calls it to throw error.