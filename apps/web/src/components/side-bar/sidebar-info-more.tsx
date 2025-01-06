import React from 'react';
import ContactsList from './contact-list';
import SocialList from './social-list';
import Footer from './footer';

import config from "@/config";

const { socialLinks } = config;

function SideBarInfoMore() {
  return (
    <div className="sidebar-info-more">
      <div className="separator"></div>
      <ContactsList />
      <div className="separator-no-line"></div>
      <SocialList socialLinks={socialLinks} />
      <div className="separator-footer"></div>
      <Footer />
    </div>
  );
};

export default SideBarInfoMore;
