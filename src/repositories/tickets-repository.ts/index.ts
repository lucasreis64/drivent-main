import { prisma } from "@/config";

async function getTicketType() {
  return prisma.ticketType.findFirst();
}

const ticketRepository = {
  getTicketType
};

export default ticketRepository;

