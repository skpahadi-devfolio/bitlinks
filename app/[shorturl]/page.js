import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

function normalizeSlug(slug) {
  if (!slug) return "";
  return slug
    .trim()               // starting/ending spaces remove
    .toLowerCase()        // lowercase
    .replace(/\s+/g, "-") // spaces ko hyphen me convert
    .replace(/[^\w-]/g, "");
}
export default async function Page({ params }) {
  const { shorturl } = params;
  shorturl = normalizeSlug(shorturl);
  const client = await clientPromise;
  const db = client.db("Bitlinks");
  const collection = db.collection("url");


  const doc = await collection.findOne({ shorturl })
  if (doc) {
    redirect(doc.url)
    return null;
  }
  else {
    redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    return null
  }
}