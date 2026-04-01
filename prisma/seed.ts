import "dotenv/config";
import { categories } from "./data/categories";
import { products } from "./data/products";
import { prismaClient } from "@/src/generated/prisma/utils/constanst";

async function main() {
  try {
    await prismaClient.category.createMany({
      data: categories,
    });

    await prismaClient.product.createMany({
      data: products,
    });
    console.log("Data seeded successfully!");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
}

main()
  .then(async () => {
    await prismaClient.$disconnect();
  })
  .catch(async (error) => {
    console.error("Error in main function:", error);
    await prismaClient.$disconnect();
    process.exit(1);
  });
