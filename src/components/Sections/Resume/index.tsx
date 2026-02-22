import Image from 'next/image';
import {FC, memo} from 'react';

import {education, experience, SectionId, skills} from '../../../data/data';
import Cer1 from '../../../images/Cer1.jpg';
import Cer2 from '../../../images/Cer2.png';
import Cer3 from '../../../images/Cer3.png';
import Cer4 from '../../../images/Cer4.png';
import Cer5 from '../../../images/Cer5.png';
import Cer6 from '../../../images/Cer6.png'; // Đảm bảo tệp Cer2.png tồn tại ở đường dẫn này
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Education">
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Work">
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Skills">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
        <ResumeSection title="Sort Skills">
          <ul className="list-disc pl-6">
            <li>Teamwork and clear technical communication.</li>
            <li>Self-learning and researching new technologies.</li>
            <li>Proficient in reading and understanding technical documentation in English.</li>
          </ul>
        </ResumeSection>
        <ResumeSection title="Project">
          <ul className="list-disc pl-6">
            <li>
              <strong>CellphoneS Audit Admin Portal (PIX Interaction)</strong> (06/09/2025 - 10/01/2026)
              <ul className="pl-6">
                <li>
                  <strong>Full-Stack Developer</strong>
                </li>
                <li>
                  <strong>Objective:</strong> Build a comprehensive administration dashboard for managing audit plans, tracking store performance, and streamlining the quality control (QC) workflows for the CellphoneS retail chain.
                </li>
                <li>
                  <strong>Role:</strong> Developed core frontend features, focusing on plan management, complex data processing, and reporting systems.
                </li>
                <li>
                  <strong>Tech Stack:</strong> React 19, TypeScript, Vite, Tailwind CSS, Shadcn UI, Directus SDK, TanStack Query, Zustand, SheetJS
                </li>
                <li>
                  <strong>Achievements:</strong>
                  <ul className="pl-6">
                    <li>
                      <strong>Advanced Plan Management:</strong> Implemented a high-performance data table with server-side filtering and bulk actions (e.g., Bulk QC Manager Status Update), enabling efficient management of thousands of audit records.
                    </li>
                    <li>
                      <strong>Complex Reporting Engine:</strong> Engineered a robust Excel export feature capable of handling large datasets and dynamically grouping templates (Trade Audit, DTV, Mystery Audit), resolving critical constraints like Excel's character limits.
                    </li>
                    <li>
                      <strong>Seamless Backend Integration:</strong> Integrated Directus Headless CMS using React Query for real-time data synchronization, optimistic updates, and efficient state management.
                    </li>
                    <li>
                      <strong>Modern UI/UX:</strong> Designed a responsive and accessible interface using Shadcn UI and Tailwind CSS, improving the workflow experience for auditors and managers.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Github:</strong> (Private)
                </li>
              </ul>
            </li>

            <li>
              <strong>Integrating OCR and Enhancing System Functionality (Cohota)</strong> (01/07/2024 - 01/12/2024)
              <ul className="pl-6">
                <li>
                  <strong>Full-Stack Developer</strong>
                </li>
                <li>
                  <strong>Objective:</strong> Integrate OCR and enhance the system for handling matching questions.
                </li>
                <li>
                  <strong>Role:</strong> Developed OCR functionality, implemented matching question processing, resolved
                  related issues, and integrated third-party APIs.
                </li>
                <li>
                  <strong>Technologies:</strong> Node.js, Express, RESTful API, OCR tools (Mathpix).
                </li>
                <li>
                  <strong>Achievements:</strong>
                  <ul className="pl-6">
                    <li>
                      Successfully integrated OCR, accurately handled matching questions, and improved system
                      performance and flexibility.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Gitlab:</strong> (Private)
                </li>
              </ul>
            </li>
            <li>
              <strong>E_Learning (personal project)</strong> (18/08/2025 - 22/08/2025)
              <ul className="pl-6">
                <li>
                  <strong>Full-Stack Developer</strong>
                </li>
                <li>
                  <strong>Goal:</strong> Develop an e-learning system for organizing and managing online examinations.
                  The system enables users to register, log in, take exams, and view their results, while providing
                  administrators with functionalities to manage users, exams, questions, and exam results.
                </li>
                <li>
                  <strong>Role:</strong> Implemented authentication, exam creation, question management, and result
                  tracking features.
                </li>
                <li>
                  <strong>Technologies:</strong> Node.js, Express, MongoDB, JWT, HTML, CSS, JavaScript.
                </li>
                <li>
                  <strong>Achievements:</strong>
                  <ul className="pl-6">
                    <li>Successfully developed an online exam platform following the MVC architecture.</li>
                    <li>
                      Delivered core functionalities including user management, exam/question handling, and secure
                      result storage.
                    </li>
                    <li>Deployed the system on Vercel with a clear and maintainable project structure.</li>
                  </ul>
                </li>
                <li>
                  <strong>Github:</strong>{' '}
                  <a href="https://github.com/DanhCypher/E_Learning" rel="noopener noreferrer" target="_blank">
                    Click Me
                  </a>
                </li>
                <li>
                  <strong>Link Deploy:</strong>{' '}
                  <a href="https://e-learning-beta-nine.vercel.app/" rel="noopener noreferrer" target="_blank">
                    https://e-learning-beta-nine.vercel.app/
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </ResumeSection>
        <ResumeSection title="Certificates">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex justify-center">
              <Image alt="Certificate 1" className="w-full max-w-md rounded-xl shadow-lg" src={Cer1} />
            </div>
            <div className="flex justify-center">
              <Image alt="Certificate 2" className="w-full max-w-md rounded-xl shadow-lg" src={Cer2} />
            </div>
            <div className="flex justify-center">
              <Image alt="Certificate 3" className="w-full max-w-md rounded-xl shadow-lg" src={Cer3} />
            </div>
            <div className="flex justify-center">
              <Image alt="Certificate 4" className="w-full max-w-md rounded-xl shadow-lg" src={Cer4} />
            </div>
            <div className="flex justify-center">
              <Image alt="Certificate 5" className="w-full max-w-md rounded-xl shadow-lg" src={Cer5} />
            </div>
            <div className="flex justify-center">
              <Image alt="Certificate 6" className="w-full max-w-md rounded-xl shadow-lg" src={Cer6} />
            </div>
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
