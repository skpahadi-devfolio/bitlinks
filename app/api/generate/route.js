import clientPromise from "@/lib/mongodb"
export async function POST(request) {

    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("Bitlinks");
    const collection = db.collection("url");

    const shorturl = body.shorturl
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "");


    //check if the the short url exists
    const doc = await collection.findOne({shorturl})
    if(doc){
return Response.json({ success: false,  error: true,  message: 'URL Already Exists' })
    }

   const result =  await collection.insertOne({
        url:  body.url,
        shorturl: body.shorturl
    })
  return Response.json({ success: true,  error: false,  message: 'URL Generated sucessfullY' })
}