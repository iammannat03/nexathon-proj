"use client";

import { appwriteService } from "@/appwrite/service";

export default function SignUpPage() {
  return (
    <div>
      <button onClick={() => appwriteService.handleLogin()}>
        Login with Google
      </button>
    </div>
  );
}
