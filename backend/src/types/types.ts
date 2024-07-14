export interface RUser {
    first_name: string;
    last_name: string;
    username: string;
    contact_phone: string;
    email: string;
    address: string;
    password: string;
  }

  // Login User
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

  // User
 export type TUser = {
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

// Inference
export interface TIUser {
  user_id: number
  first_name: string
  last_name: string
  username: string
  email: string
  contact_phone: string
  address: string
} 

export interface UserAuthenticatedState {
    user:{
        user_id: number
        first_name: string
        last_name: string
        username: string
        email: string
        contact_phone: string
        address: string
        role: string
    } | null
    token: string | null
    isAuthenticated: boolean
    loading: boolean
    error: string | null
  }
  export interface UserState {
    user: TUser | null;
    loading: boolean;
    error: string | null;
  }