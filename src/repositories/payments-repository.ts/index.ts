import { prisma } from "@/config";
import { paymentEntity } from "@/protocols";

async function getPayment(ticketId: number) {
  return prisma.payment.findFirst({
    where: { ticketId },
  });
}

async function postPayment(data: paymentEntity) {
  return await prisma.payment.create({
    data,
  });
}

const paymentsRepository = {
  getPayment,
  postPayment
};

export default paymentsRepository;

