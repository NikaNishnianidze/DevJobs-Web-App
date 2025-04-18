export type JobInfo = {
  id: any | number;
  company?: string;
  logo?: string;
  logoBackground?: string;
  position?: string;
  postedAt?: string;
  contract?: string;
  location?: string;
  website?: string;
  apply?: string;
  description?: string;
  requirements?: { content: string; items: string[] };
  role?: { content: string; items: string[] };
};
