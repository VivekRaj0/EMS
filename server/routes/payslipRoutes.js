import { Router } from "express"; 
import { protect, protectAdmin } from "../middleware/auth.js";
import { createPayslip, getPayslip, getPayslipById } from "../controllers/payslipController.js";

const payslipRouter = Router();

payslipRouter.post("/", protect, protectAdmin, createPayslip)
payslipRouter.get("/", protect, getPayslip)
payslipRouter.patch("/:id", protect, protectAdmin, getPayslipById)

export default payslipRouter