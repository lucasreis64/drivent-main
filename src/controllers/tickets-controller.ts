import { Response } from "express";
import { AuthenticatedRequest } from "@/middlewares";
import httpStatus from "http-status";
import ticketService from "@/services/tickets-service";

export async function findTicketType(req: AuthenticatedRequest, res: Response) {
  const ticketTypes = ticketService.getTicketTypes();
  res.status(httpStatus.OK).send(ticketTypes);
}
