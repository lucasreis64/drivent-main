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
    const userId = req.userId;
    const { ticketTypeId } = req.body;

    const userTicket = await ticketService.postUserTickets(ticketTypeId, userId);

    return res.status(httpStatus.CREATED).send(userTicket);
  }catch (err) {
    if (err.name === "NotFoundError") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
    res.status(httpStatus.BAD_REQUEST).send(err);
  }
}
