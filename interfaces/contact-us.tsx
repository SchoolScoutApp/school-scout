export interface iContactUs {
  _id?: string;
  id?: string;
  name: string;
  email: string;
  phone: string;
  school_name: string;
  address: string;
  message: string;
  status: "new" | "contacted" | "closed";
  createdAt: string;
}
