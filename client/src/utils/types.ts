export type UserType = {
  _id: string;
  name: string;
  lastName?: string;
  email: string;
  phone?: string;
  department?: string;
  jobTitle?: string;
  role: string;
  image?: string;
};

export type roleType = 'admin' | 'moderator' | 'user';
