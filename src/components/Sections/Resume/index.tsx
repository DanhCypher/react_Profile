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
              <strong>Smart Printing Service</strong> (20/09/2024 - 06/12/2024)
              <ul className="pl-6">
                <li><strong>Developer (group)</strong></li>
                <li><strong>Objective:</strong> Develop an intelligent printing system for students and administrators.</li>
                <li><strong>Role:</strong> Built user interface and implemented features like login, printing, payments, and printer management.</li>
                <li><strong>Tech Stack:</strong> Node.js, Express, MongoDB, HTML/CSS/JavaScript.</li>
                <li><strong>Achievements:</strong>
                  <ul className="pl-6">
                    <li>Completed a fully functional printing system with login, print settings, history, and payment features.</li>
                    <li>Developed a user-friendly interface with stable performance.</li>
                    <li>Ensured security and 30-day file storage for students.</li>
                  </ul>
                </li>
                <li><strong>Github:</strong> <a href="https://github.com/ThaiThiYenNhiBA/SSPS" target="_blank" rel="noopener noreferrer">https://github.com/ThaiThiYenNhiBA/SSPS</a></li>
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
              <strong>Real-Time Social Network</strong> (18/09/2024 - 04/12/2024)
              <ul className="pl-6">
                <li><strong>Developer</strong></li>
                <li><strong>Goal:</strong> Develop a real-time social media platform with interactive user features.</li>
                <li><strong>Role:</strong> Built core features including authentication, messaging, posting, commenting, reactions, and friend management.</li>
                <li><strong>Technologies:</strong> Node.js, Express, WebSocket, MongoDB, LocalStorage.</li>
                <li><strong>Achievements:</strong>
                  <ul className="pl-6">
                    <li>Delivered a functional and engaging platform with real-time messaging, file sharing, post interactions, and social connectivity.</li>
                  </ul>
                </li>
                <li><strong>Github:</strong> <a href="https://github.com/ThaiThiYenNhiBA/SSPS" target="_blank" rel="noopener noreferrer">https://github.com/ThaiThiYenNhiBA/SN.git</a></li>
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
