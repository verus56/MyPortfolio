import { IconType } from "react-icons";

export type Resume = {
  educations: Education;
  awardLeaderships: AwardLeaderships;
  teachingExperiences: TeachingExperience;
  professionalExperiences: ProfessionalExperience;
};


export type ResumeProps = {
  name: string;
  title: string;
  items: {
    icon: IconType;
    title: string;
    text: string;
  }[];
};

export type Education = {
  icon: IconType;
  title: string;
  items: {
    company: string;
    location: string;
    role: string;
    duration: string;
    tasksMarkdown: string;
  }[];
};

export type AwardLeaderships = {
  icon: IconType;
  title: string;
  items: {
    company: string;
    location: string;
    role: string;
    duration: string;
    tasksMarkdown: string;
  }[];
};

export type TeachingExperience = {
  icon: IconType;
  title: string;
  items: {
    company: string;
    location: string;
    role: string;
    duration: string;
    tasksMarkdown: string;
  }[];
};

export type ProfessionalExperience = {
  icon: IconType;
  title: string;
  items: {
    company: string;
    location: string;
    role: string;
    duration: string;
    tasksMarkdown: string;
  }[];
};
