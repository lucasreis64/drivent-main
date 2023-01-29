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

async function postUserTickets(ticketTypeId: number, enrollmentId: number) {
  const ticketType = ticketRepository.getTicketTypeById(ticketTypeId);
  const ticket = {
    ticketTypeId: ticketTypeId,
    enrollmentId: enrollmentId,
    status: "RESERVED",
  };
}

const ticketService = {
  getTicketTypes, getUserTickets
};

export default ticketService;
