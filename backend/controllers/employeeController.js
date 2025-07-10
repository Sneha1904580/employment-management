const Employee = require("../models/Employee");

// @desc Create employee
exports.createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create({
      ...req.body,
      createdBy: req.user.id,
    });
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc Get all employees
exports.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};

// @desc Get single employee
exports.getEmployee = async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  if (!employee) {
    return res.status(404).json({ message: "Employee not found" });
  }
  res.json(employee);
};

// @desc Update employee
exports.updateEmployee = async (req, res) => {
  const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!employee) {
    return res.status(404).json({ message: "Employee not found" });
  }
  res.json(employee);
};

// @desc Delete employee
exports.deleteEmployee = async (req, res) => {
  const employee = await Employee.findByIdAndDelete(req.params.id);
  if (!employee) {
    return res.status(404).json({ message: "Employee not found" });
  }
  res.json({ message: "Employee deleted" });
};
