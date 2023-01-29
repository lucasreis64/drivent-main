import { prisma } from "@/config";

async function getTicketType() {
  return prisma.ticketType.findFirst();
}

async function getUserTicket() {
  return prisma.ticket.findFirst({
    select: {
      id: true,
      status: true, //RESERVED | PAID
      ticketTypeId: true,
      enrollmentId: true,
      TicketType: {
        select: {
          id: true,
          name: true,
          price: true,
          isRemote: true,
          includesHotel: true,
          createdAt: true,
          updatedAt: true
        }
      },
      createdAt: true,
      updatedAt: true,
    }
  });
}

async function getTicketTypeById(id: number) {
  return prisma.ticketType.findFirst({
    where: { id }
  });
}

async function postUserTicket(ticket: any) {
  return prisma.ticket.create({
    data: ticket
  });
}

const ticketRepository = {
  getTicketType,
  getUserTicket,
  getTicketTypeById,
  postUserTicket
};

export default ticketRepository;

