import ticketRepository from "@/repositories/tickets-repository.ts";

async function getTicketTypes() {
  const types = ticketRepository.getTicketType();
  return types;
}

const ticketService = {
  getTicketTypes
};

export default ticketService;
