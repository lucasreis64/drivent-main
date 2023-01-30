import { notFoundError } from "@/errors";
import enrollmentRepository from "@/repositories/enrollment-repository";
import ticketRepository from "@/repositories/tickets-repository.ts";

async function getTicketTypes() {
  const types = await ticketRepository.getTicketType();

  if(!types) return [];

  else return [types];
}

async function getUserTickets() {
  const userTicket = await ticketRepository.getUserTicket();

  if(!userTicket) return false;

  else return userTicket;
}

async function postUserTickets(ticketTypeId: number, userId: number) {
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);

  if (!enrollment) {
    throw notFoundError();
  }

  const enrollmentId = enrollment.id;

  const ticket = await ticketRepository.postUserTicket(enrollmentId, ticketTypeId);

  return ticket;
}

const ticketService = {
  getTicketTypes, getUserTickets, postUserTickets
};

export default ticketService;
