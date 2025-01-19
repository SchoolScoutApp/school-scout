export interface iSiteSettings {
  _id?: string;
  business?: {
    logo?: string;
    name?: string;
    address?: string;
    business_email?: string;
    business_phones?: {
      type: string;
      number: string;
    }[];
  };
  social_media?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  header_image?: {
    desktop_image?: string;
    mobile_image?: string;
  };
  maintenance_mode?: boolean;
  meta?: { version?: string };
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}
