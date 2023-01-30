import { Response } from "express";
import { AuthenticatedRequest } from "@/middlewares";
import httpStatus from "http-status";
import paymentsService from "@/services/payments-service";

export async function findPayment(req: AuthenticatedRequest, res: Response) {
  try{
    const ticketId = req.query.ticketId;

    const userId = req.userId;

    if(!ticketId) return res.sendStatus(httpStatus.BAD_REQUEST);

    const payment = await paymentsService.getPayment(Number(ticketId), userId);

    return res.status(httpStatus.OK).send(payment);
  } catch(err) {
    if (err.name === "NotFoundError") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    } else if (err.name === "BadRequestError") {
      return res.sendStatus(httpStatus.BAD_REQUEST);
    } else if (err.name === "UnauthorizedError") {
      return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
  }
}

export async function insertPayment(req: AuthenticatedRequest, res: Response) {
  try{
    const userId = req.userId;
    const paymentInfo  = req.body;

    const payment = await paymentsService.postPayment(paymentInfo, userId);

    return res.status(httpStatus.OK).send(payment);
  }catch (err) {
    console.log(err);
    if (err.name === "NotFoundError") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
    else if (err.name === "UnauthorizedError") {
      return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
  }
}
