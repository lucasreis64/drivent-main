import { Response } from "express";
import { AuthenticatedRequest } from "@/middlewares";
import httpStatus from "http-status";
import ticketService from "@/services/tickets-service";

export async function findTicketType(req: AuthenticatedRequest, res: Response) {
  try{
    const ticketTypes = await ticketService.getTicketTypes();

    res.status(httpStatus.OK).send(ticketTypes);
  } catch(err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
  }
}

export async function findUserTicket(req: AuthenticatedRequest, res: Response) {
  try{
    const userTicket = await ticketService.getUserTickets();

    if (!userTicket) return res.sendStatus(httpStatus.NOT_FOUND);

    return res.status(httpStatus.OK).send(userTicket);
  } catch(err) {
    res.status(500).send(err);
  }
}

export async function insertUserTicket(req: AuthenticatedRequest, res: Response) {
  try{
    return res.sendStatus(200);
  }catch (err) {
    res.status(500).send(err);
  }
}
