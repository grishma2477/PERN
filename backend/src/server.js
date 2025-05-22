import app from "./app.js";
import { connectDB } from './database/dbConnection.js';

const PORT = process.env.PORT || 5000;
try {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
} catch (err) {
  console.error('❌ Could not connect to DB:', err.message);
  process.exit(1);
}
