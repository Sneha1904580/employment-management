const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Mount the auth routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/employees", require("./routes/employee"));


// ✅ Print the loaded routes
console.log("✅ Auth routes loaded:", app._router.stack.map(r => r.route && r.route.path).filter(Boolean));

app.get("/", (req, res) => {
  res.send("Backend API is working ✅");
});

const PORT = 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
