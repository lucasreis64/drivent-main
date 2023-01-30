import { notFoundError, unauthorizedError } from "@/errors";
import { PaymentInfo } from "@/protocols";
import enrollmentRepository from "@/repositories/enrollment-repository";
import paymentsRepository from "@/repositories/payments-repository.ts";
import ticketRepository from "@/repositories/tickets-repository.ts";

async function getPayment(ticketId: number, userId: number) {
  await validateTicket(ticketId, userId);

  const payment = await paymentsRepository.getPayment(ticketId);

  return payment;
}

async function validateTicket(ticketId: number, userId: number) {
  const ticket = await ticketRepository.getTicketById(ticketId);

  if (!ticket) {
    throw notFoundError();
  }

  const enrollment = await enrollmentRepository.findById(ticket.enrollmentId);

  if (enrollment.userId !== userId) {
    throw unauthorizedError();
  } 
  return ticket;
}

async function postPayment(paymentInfo: PaymentInfo, userId: number) {
  const ticket = await validateTicket(paymentInfo.ticketId, userId);

  const { price } = await ticketRepository.getTicketTypeById(ticket.ticketTypeId);

  const paymentData = {
    ticketId: paymentInfo.ticketId,
    value: price,
    cardIssuer: paymentInfo.cardData.issuer,
    cardLastDigits: paymentInfo.cardData.number.toString().slice(-4),
  };

  const payment = await paymentsRepository.postPayment(paymentData);

  await ticketRepository.updateStatus(paymentInfo.ticketId);

  return payment;
}

const paymentsService = {
  getPayment,
  postPayment,
};

export default paymentsService;
