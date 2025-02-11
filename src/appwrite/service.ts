import { Account, Client, OAuthProvider } from "appwrite";

export const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

export const account = new Account(client);

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
}

export const appwriteService = new AppwriteService();
