const express = require("express");
const router = express.Router();

// Import controller functions
const {
  createEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

// Import protect middleware
const { protect } = require("../middleware/authMiddleware");

// ✅ Public test route (should be before router.use(protect))
router.get("/test", (req, res) => {
  res.json({ message: "Employee route is working ✅" });
});

// ✅ Protect all routes below
router.use(protect);

// All routes below require authentication
router.post("/", createEmployee);
router.get("/", getEmployees);
router.get("/:id", getEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

module.exports = router;
