import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { findTicketType, findUserTicket, insertUserTicket } from "@/controllers";

const ticketsRouter = Router();

ticketsRouter
  .all("/*", authenticateToken)
  .get("/types", findTicketType)
  .get("/", findUserTicket)
  .post("/", insertUserTicket);
  
export { ticketsRouter };
