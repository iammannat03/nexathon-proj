import { Account, Client, OAuthProvider, ID, Databases } from "appwrite";

export const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

export const account = new Account(client);
const databases = new Databases(client);

interface Job {
  id: string;
  key: string;
  title: string;
  company: string;
  location: string;
  isActive: boolean;
  startDate: string;
  salary: string;
  experience: string;
  applyBy: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  companyDescription: string;
  companyLogo: string;
}

interface AppwriteJobDocument {
  $id: string;
  $key: string;
  title: string;
  company: string;
  location: string;
  isActive: boolean;
  startDate: string;
  salary: string;
  experience: string;
  applyBy: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  companyDescription: string;
  companyLogo: string;
}

export class AppwriteService {
  //get current user
  async getCurrentUser() {
    try {
      const user = await account.get();
      return user;
    } catch (error) {
      console.log("getCurrentUser error: ", error);
      return null;
    }
  }

  async handleLogin() {
    try {
      await account.createOAuth2Session(
        OAuthProvider.Google,
        "http://localhost:3000/seeker",
        "http://localhost:3000/fail",
      );
    } catch (error) {
      console.log("handleLoginError", error);
    }
  }

  async getAllJobs() {
    try {
      const response = await databases.listDocuments(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!,
      );

      const jobs: Job[] = response.documents.map((doc) => {
        const typedDoc = doc as unknown as AppwriteJobDocument;
        return {
          id: typedDoc.$id,
          key: typedDoc.$key,
          title: typedDoc.title,
          company: typedDoc.company,
          location: typedDoc.location,
          isActive: typedDoc.isActive,
          startDate: typedDoc.startDate,
          salary: typedDoc.salary,
          experience: typedDoc.experience,
          applyBy: typedDoc.applyBy,
          description: typedDoc.description,
          responsibilities: typedDoc.responsibilities,
          skills: typedDoc.skills,
          companyDescription: typedDoc.companyDescription,
          companyLogo: typedDoc.companyLogo,
        };
      });

      return jobs;
    } catch (error) {
      console.error("getAllJobs error: ", error);
      return [];
    }
  }

  async getDoc(docId: string) {
    try {
      const doc = await databases.getDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!,
        docId,
      );
      return doc;
    } catch (error) {
      console.error(error);
    }
  }
}

export const appwriteService = new AppwriteService();
