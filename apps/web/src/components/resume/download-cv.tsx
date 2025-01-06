import { IoCloudDownloadOutline } from "react-icons/io5";
import IconBox from "../icon-box";
import Link from "next/link";

function DownloadCV() {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <IconBox icon={IoCloudDownloadOutline} />
        <Link
          id="download-v56-cv"
          href="./cv.pdf"
          target="_blank"
          className="text-orange-yellow-crayola underline font-bold flex items-center gap-4 hover:text-opacity-70">
          Download Thameur full Curriculum Vitae/Resume (October 2024)
        </Link>
      </div>
    </section>
  );
}

export default DownloadCV;
