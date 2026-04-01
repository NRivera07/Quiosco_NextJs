import "dotenv/config";
import { PrismaClient } from "@/src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { categories } from "./data/categories";
import { products } from "./data/products";

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
  }),
});

async function main() {
  try {
    await prisma.category.createMany({
      data: categories,
    });

    await prisma.product.createMany({
      data: products,
    });
    console.log("Data seeded successfully!");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error("Error in main function:", error);
    await prisma.$disconnect();
    process.exit(1);
  });
