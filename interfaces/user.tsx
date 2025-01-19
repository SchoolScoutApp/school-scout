export interface iUser {
  _id?: string;
  id?: string;
  name: string;
  email: string;
  userType: "U" | "A";
  token: string;
}
