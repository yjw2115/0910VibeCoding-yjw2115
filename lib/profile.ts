import profileData from "@/data/profile.json";

export interface ProfileLink {
  label: string;
  value: string;
  url: string;
}

export interface Profile {
  name: string;
  department: string;
  bio: string;
  interests: string[];
  hobbies: string[];
  links: ProfileLink[];
}

export const profile: Profile = profileData;
