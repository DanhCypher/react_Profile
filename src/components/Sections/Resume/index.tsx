import {FC, memo} from 'react';

import {education, experience, SectionId, skills} from '../../../data/data';
import Image from 'next/image';
import Cer1 from '../../../images/Cer1.jpg';
import Cer2 from '../../../images/Cer2.png';
import Cer3 from '../../../images/Cer3.png';
import Cer4 from '../../../images/Cer4.png';   // Đảm bảo tệp Cer2.png tồn tại ở đường dẫn này
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
        <ResumeSection title='Project'>
          <ul className="list-disc pl-6">
<li>
  <strong>Khanh Trinh Sliding Gate Motor</strong> (Individual Project Collaboration - 05/12/2024 - 25/01/2025 )
  <ul className="pl-6">
    <li><strong>Developer</strong></li>
    <li><strong>Objective:</strong> Build a product showcase website for sliding gate motors, serving both customers and administrators with seamless browsing and management experiences.</li>
    <li><strong>Role:</strong> Designed and implemented core pages, including product browsing for customers and product management for administrators.</li>
    <li><strong>Tech Stack:</strong> HTML, CSS, JavaScript, Node.js, Express.</li>
    <li><strong>Achievements:</strong>
      <ul className="pl-6">
        <li>Delivered a user-friendly interface for customers to explore detailed product information.</li>
        <li>Implemented efficient admin tools for adding, editing, and deleting products.</li>
        <li>Integrated third-party service for handling customer information and reviews securely.</li>
      </ul>
    </li>
    <li><strong>Github:</strong> <a href="https://github.com/DanhCypher/Nhom_kieng_new" target="_blank" rel="noopener noreferrer">https://github.com/DanhCypher/Nhom_kieng_new</a></li>
  </ul>
</li>

            <li>
              <strong>Integrating OCR and Enhancing System Functionality (Cohota)</strong> (01/07/2024 - 01/12/2024)
              <ul className="pl-6">
                <li><strong>Developer</strong></li>
                <li><strong>Objective:</strong> Integrate OCR and enhance the system for handling matching questions.</li>
                <li><strong>Role:</strong> Developed OCR functionality, implemented matching question processing, resolved related issues, and integrated third-party APIs.</li>
                <li><strong>Technologies:</strong> Node.js, Express, RESTful API, OCR tools (Mathpix).</li>
                <li><strong>Achievements:</strong>
                  <ul className="pl-6">
                    <li>Successfully integrated OCR, accurately handled matching questions, and improved system performance and flexibility.</li>
                  </ul>
                </li>
                <li><strong>Gitlab:</strong> (Private)</li>
              </ul>
            </li>
            <li>
  <strong>E_Learning</strong> (18/08/2025 - 22/08/2025)
  <ul className="pl-6">
    <li><strong>Developer</strong></li>
    <li><strong>Goal:</strong> Develop an e-learning system for organizing and managing online examinations. The system enables users to register, log in, take exams, and view their results, while providing administrators with functionalities to manage users, exams, questions, and exam results.</li>
    <li><strong>Role:</strong> Implemented authentication, exam creation, question management, and result tracking features.</li>
    <li><strong>Technologies:</strong> Node.js, Express, MongoDB, JWT, HTML, CSS, JavaScript.</li>
    <li><strong>Achievements:</strong>
      <ul className="pl-6">
        <li>Successfully developed an online exam platform following the MVC architecture.</li>
        <li>Delivered core functionalities including user management, exam/question handling, and secure result storage.</li>
        <li>Deployed the system on Vercel with a clear and maintainable project structure.</li>
      </ul>
    </li>
    <li><strong>Github:</strong> <a href="https://github.com/DanhCypher/E_Learning" target="_blank" rel="noopener noreferrer">https://github.com/DanhCypher/E_Learning</a></li>
    <li><strong>Link Deploy:</strong> <a href="https://e-learning-beta-nine.vercel.app/" target="_blank" rel="noopener noreferrer">https://e-learning-beta-nine.vercel.app/</a></li>
  </ul>
            </li>

          </ul>
        </ResumeSection>
                <ResumeSection title="Certificates">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex justify-center">
              <Image src={Cer1}
                alt="Certificate 1"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src={Cer2}
                alt="Certificate 2"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src={Cer3}
                alt="Certificate 3"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src={Cer4}
                alt="Certificate 4"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </div>
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
