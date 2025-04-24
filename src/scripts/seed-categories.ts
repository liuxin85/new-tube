import { db } from "@/db";
import { categories } from "@/db/schema";

// TODO: Create a script to seed categories
const categoryNames = [
  "Cars and vechicles",
  "Comedy",
  "Education",
  "Gaming",
  "Enterainment",
  "Film and animation",
  "How-to and style",
  "Music",
  "News and politics",
  "People and blogs",
  "Pets and animals",
  "Science and technology",
  "Sports",
  "Travel and events",
];

async function main() {
  console.log("Seending categories...");

  const values = categoryNames.map((name) => ({
    name,
    description: `Vides related to ${name.toLowerCase()}`,
  }));

  await db.insert(categories).values(values);
  console.log("Categores seeded successfuly!");

  try {
  } catch (error) {
    console.error("Error seeding categoires: ", error);
    process.exit(1);
  }
}

main();
