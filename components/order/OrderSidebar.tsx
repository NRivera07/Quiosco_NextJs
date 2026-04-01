import { prisma } from "@/src/generated/prisma/lib/prisma";
import CategoryIcon from "../ui/CategoryIcon";

async function getCategories() {
  return await prisma.category.findMany();
}

const categories = await getCategories();

console.log(categories);

export default async function OrderSidebar() {
  return (
    <aside className="md:w-72 md: h-screen bg-white">
      <nav className="mt-10">
        {categories.map((category) => (
          <CategoryIcon key={category.id} category={category} />
        ))}
      </nav>
    </aside>
  );
}
