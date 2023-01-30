import { prisma } from "@/config";
import { TicketStatus } from "@prisma/client";

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

async function postUserTicket(enrollmentId: number, ticketTypeId: number) {
  return await prisma.ticket.create({
    data: {
      ticketTypeId,
      status: TicketStatus.RESERVED,
      enrollmentId,
    },

    include: {
      TicketType: true,
    },
  });
}

const ticketRepository = {
  getTicketType,
  getUserTicket,
  getTicketTypeById,
  postUserTicket,
};

export default ticketRepository;

