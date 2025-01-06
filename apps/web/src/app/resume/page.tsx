import type { Metadata } from "next";
import React from "react";
import DownloadCV from '@/components/resume/download-cv';
import TimeLine from '@/components/resume/timeline';
import PageHeader from '@/components/page-header';
import config from '@/config';

const { title } = config;

const { resume } = config;
const { professionalExperiences } = resume;
const { educations } = resume;
const { awardLeaderships } = resume;
const { teachingExperiences } = resume;

export const metadata: Metadata = {
  title: `Resume | ${title}`,
};

const profExp = <TimeLine data={professionalExperiences} />;
const education = <TimeLine data={educations} />;
const awardLeadership = <TimeLine data={awardLeaderships} />;
const teachingExp = <TimeLine data={teachingExperiences} />;

function Resume() {
  return (
    <article>
      <PageHeader header="Thameur Resume" />
      <DownloadCV />
      {profExp}
      {education}
      {teachingExp}
      {awardLeadership}
    </article >
  );
}

export default Resume
