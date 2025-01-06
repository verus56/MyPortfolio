import React from 'react';
import config from '@/config';

import "@/styles/side-bar/info-content.css";

const { status } = config;
const { about } = config;
const {
  firstName,
  lastName,
  middleName,   
  preferredName
} = about;

function InfoContent() {
  return (
    <div className="info-content">
      <h1
        className="name"
        title={`${firstName} ${preferredName} ${lastName}`}
      >{firstName} {preferredName} {lastName}
      </h1>
      <p className="text-white-1 bg-onyx text-xs font-light max-w-max rounded-[8px] custom-lg:m-auto px-[12px] py-[3px] md:px-[18px] md:py-[5px]">
        <strong>{status}</strong>
      </p>
    </div>
  );
};

export default InfoContent;
