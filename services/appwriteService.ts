import { Person } from "@/components/types";
import { Account, TablesDB, Client, Storage, Models, Query,  } from "appwrite";

const client = new Client()
  .setEndpoint("https://nyc.cloud.appwrite.io/v1")
  .setProject("68f8ed01000f695d35b0");              
const storage = new Storage(client);


const bucketId = "68f8ed1c002b1e260b7c"; 
const fileId = "690953e50024a60aa15b"; 
const membersTableId = "members";
const databaseId = "social-club-db"

export interface type MemberRow = {
  firstName: string,
  lastName: string,
  email: string,
  club?: string,
  userID: string,
  phone?: string,
  email?: string,
}


export function createAppWriteService(config) {
  const account = new Account(client)
  const tables = new TablesDB(client)

  // AUTH
  const reigsterWithEmail = async ({

  });

  //OTHER FUNCTIONS


  //MEMBERS DATABASE STUFF
  const getMemberByUserID = async( userID: string):Promise<MemberRow> => {

    const response = await tables.listRows<MemberRow>( {
      databaseId: databaseId,
      tableId: membersTableId,
      queries: [Query.equal('userID', userID), Query.limit(1)]
    })

    return response.rows[0] ?? null
  }


  return {
    // low-level objects
    client,
    account,
    tables,

    // high-level helpers
    getCurrentUser,
    registerWithEmail,
    loginWithEmail,
    logoutCurrentDevice,

    getMemberByUserID
  }

}

/*export async function getPeople(): Promise<Person[]> {
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
}*/
