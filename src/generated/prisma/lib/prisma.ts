import { PrismaClient } from "@/src/generated/prisma/client";
import { prismaClient } from "../utils/constanst";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || prismaClient;
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
