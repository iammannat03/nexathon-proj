// types/auth.ts
export interface User {
    id: string;
    name: string;
    email: string;
    company_name: string;
    is_verified: boolean;
    is_premium: boolean;
    is_admin: boolean;

    [key: string]: any;
}

export interface RegisterData {
    name: string,
    email: string,
    password: string,
    company_name: string,
}

export interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (data: RegisterData) => Promise<void>;
    logout: () => Promise<void>;
    refreshAccessToken: () => Promise<void>;
    verifyEmail: (token: string) => Promise<void>;
    forgotPassword: (email: string) => Promise<void>;
    sendVerificationEmail: () => Promise<void>;
}
