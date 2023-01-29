import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { findTicketType } from "@/controllers";

const ticketsRouter = Router();

ticketsRouter
  .get("/types", findTicketType)
  .all("/*", authenticateToken);
export { ticketsRouter };
