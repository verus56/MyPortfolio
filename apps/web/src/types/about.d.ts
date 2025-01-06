
import type { Icon } from '@primer/octicons-react';
import type { IconType } from 'react-icons';

export type LifeStyle = {
  icon: Icon;
  title: string;
  text: string;
}

export type TechStack = {
  name: string;
  icon: Icon | IconType;
};

interface TechStacks {
  programmingLanguages: TechStack[];
  frameworks: TechStack[];
}

/**
 * Type definition for the About component.
 *
 * @example
 * about: {
 *   "firstName": 'Chun-Ho',
 *   "lastName": 'Lin',
 *   "middleName": "",
 *   "preferredName": "Hugo",
 *   "additionalName": "Hugo",
 *   "pronouns": 'He/Him',
 *   ...
 * }
 * @returns {About} The About component.
 */
export type About = {
  firstName: string;
  lastName: string;
  middleName: string;
  preferredName: string;
  additionalName: string;
  pronouns: string;
  githubUsername: string;
  introduction: string;
  lifestyles: LifeStyle[];
  techStacks: TechStacks;
}
