import { Router } from "express";
import { authenticateToken, validateBody } from "@/middlewares";
import { findTicketType, findUserTicket, insertUserTicket } from "@/controllers";
import { ticketSchema } from "@/schemas";

const ticketsRouter = Router();

ticketsRouter
  .all("/*", authenticateToken)
  .get("/types", findTicketType)
  .get("/", findUserTicket)
  .post("/", validateBody(ticketSchema), insertUserTicket);
  
export { ticketsRouter };
