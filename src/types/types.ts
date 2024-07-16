export interface RUser {
    first_name: string;
    last_name: string;
    username: string;
    contact_phone: string;
    email: string;
    address: string;
    password: string;
}

export interface TUser {
    user_id: number;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    contact_phone: string;
    address: string;
    role: string;
    token: string;
}

export interface Luser {
    username: string;
    password: string;
    role: string;
    token: string;
}

export interface LoginResponse {
    username: string;
    role: string;
    password: string;
}

export interface UserAuthenticatedState {
    user: TUser | null;
    token: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
}

export type LoginForm = {
    username: string;
    password: string;
    role: string;
  };