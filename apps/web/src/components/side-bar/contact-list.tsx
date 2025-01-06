import React from "react";
import Link from "next/link";
import ContactItem from "@/components/side-bar/contact-item";
import { LuGithub, LuLinkedin, LuMail, LuMapPin } from "react-icons/lu";

import "@/styles/side-bar/contact-list.css";

function ContactsList() {
  return (
    <ul className="contacts-list">
      <ContactItem icon={LuMapPin} title="Location">
        <address className="text-white-2 text-sm font-light">Algeria</address>
      </ContactItem>

      <ContactItem icon={LuMail} title="Email">
        <Link
          href="mailto:thameurhamzaoui9@gmail.com"
          className="block text-white-2 text-sm font-light custom-lg:truncate"
          target="_blank"
          rel="noopener noreferrer"
        >
          thameurhamzaoui9@gmail.com
        </Link>
      </ContactItem>

      <ContactItem icon={LuGithub} title="Github">
        <Link
          href="https://github.com/verus56"
          className="contact-link block text-white-2 text-sm font-light custom-lg:truncate"
          target="_blank"
          rel="noopener noreferrer"
        >
          verus56
        </Link>
      </ContactItem>

      <ContactItem icon={LuLinkedin} title="Linkedin">
        <Link
          href="https://www.linkedin.com/in/hamzaoui-thameur/"
          className="contact-link block text-white-2 text-sm font-light custom-lg:truncate"
          target="_blank"
          rel="noopener noreferrer"
        >
          HAMZAOUI Thameur
        </Link>
      </ContactItem>
    </ul>
  );
};

export default ContactsList;
