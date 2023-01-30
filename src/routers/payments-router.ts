import { Router } from "express";
import { authenticateToken, validateBody } from "@/middlewares";
import { paymentSchema } from "@/schemas";
import { findPayment, insertPayment } from "@/controllers";

const paymentsRouter = Router();

paymentsRouter
  .all("/*", authenticateToken)
  .get("/", findPayment)
  .post("/process", validateBody(paymentSchema), insertPayment);
  
export { paymentsRouter };
