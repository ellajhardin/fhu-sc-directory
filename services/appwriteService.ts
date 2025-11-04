import { Person } from "@/components/types";
import { Client, Storage } from "appwrite";

const client = new Client()
  .setEndpoint("https://nyc.cloud.appwrite.io/v1")
  .setProject("68f8ed01000f695d35b0");              
const storage = new Storage(client);


const bucketId = "68f8ed1c002b1e260b7c"; 
const fileId = "690953e50024a60aa15b"; 


export async function getPeople(): Promise<Person[]> {
  try {
    // Get the public view URL for the file
    const fileUrl = storage.getFileView(bucketId, fileId);

    // Fetch the JSON from that URL
    const response = await fetch(fileUrl);
    if (!response.ok) throw new Error("Failed to fetch people file");

    const data = await response.json();
    return data as Person[];
  } catch (error) {
    console.error("Appwrite fetch error:", error);
    return [];
  }
}
