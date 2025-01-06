import type { About } from "@/types/about";
import type { Resume } from "@/types/resume";
import type { NavItem } from "@/types/nav-bar";
import { OpenGraph } from "./open-graph";
import type { GiscusProps } from "@giscus/react";
import type { Icon } from "@primer/octicons-react";
import type { IconType } from "react-icons";

/**
 * Type definition for the Web app configuration.
 * 
 * @param {About} about
 * @param {Resume} resume
 */

type SocialLink = {
  url: string;
  icon: Icon | IconType | React.FC;
  name: string;
}

export type Config = {
  avatar: string;
  title: string;
  description: string;
  author: string;
  keywords: string[];
  status: string;
  siteURL: string;
  openGraph: OpenGraph
  navItems: NavItem[];
  socialLinks: SocialLink[];
  about: About;
  resume: Resume;
  giscusConfig: GiscusProps;
  googleAnalyticId: string;
  googleTagManagerId: string;
}
