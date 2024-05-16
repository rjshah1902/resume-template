'use client';

import React, { forwardRef, useEffect, useState } from 'react';
import { Template3DataType } from '../editors/Template3Editor';
import Img from '../Img';
import EditorText from '../shared/EditorText';

type Props = {
  data?: Template3DataType;
  isPremium?: boolean;
  handleChange: (name: string, value: any) => void;
  handleExperienceChange: (experience: Template3DataType['experience']) => void;
  handleEducationChange: (education: Template3DataType['education']) => void;
  handleSkillChange: (skills: Template3DataType['skills']) => void;
};

function Template3Design(
  {
    data,
    isPremium,
    handleChange,
    handleEducationChange,
    handleExperienceChange,
    handleSkillChange,
  }: Props,
  ref: any
) {
  function addMoreSkill() {
    let skills = [...(data?.skills ?? [])];
    skills.push('');
    handleSkillChange(skills);
  }

  function deleteSkill(i: number) {
    let skills = [...(data?.skills ?? [])];
    console.log('delete skill');
    skills.splice(i, 1);
    handleSkillChange(skills);
  }

  function addMoreEducation() {
    let education = [...(data?.education ?? [])];
    education.push({
      degree: '',
      institute: '',
      passingYear: '',
    });
    handleEducationChange(education);
  }

  function deleteEducation(i: number) {
    let education = [...(data?.education ?? [])];
    education.splice(i, 1);
    handleEducationChange(education);
  }

  function addMoreExperience() {
    let experience = [...(data?.experience ?? [])];
    experience.push({
      title: '',
      company: '',
      location: '',
      from: '',
      to: '',
      points: [``],
    });
    handleExperienceChange(experience);
  }

  function deleteExperience(i: number) {
    let experience = [...(data?.experience ?? [])];
    experience.splice(i, 1);
    handleExperienceChange(experience);
  }

  function onExperiencePointsDelete(expIdx: number, pointIdx: number) {
    let experience = [...(data?.experience ?? [])];
    experience[expIdx].points.splice(pointIdx, 1);
    handleExperienceChange(experience);
  }

  const [colorCode, setColorCode] = useState("white");
  const [headerColorCode, setHeaderColorCode] = useState("white");
  const [bgColorCode, setBgColorCode] = useState("white");
  const [fontName, setFontName] = useState("");

  useEffect(() => {
    getStorageData();
  }, []);

  const getStorageData = () => {
    const textCode = localStorage.getItem("colorCode");
    const header = localStorage.getItem("headerColorCode");
    const bg = localStorage.getItem("bgColorCode");
    const font = localStorage.getItem("fontName");

    if (textCode && textCode !== " ") setColorCode(textCode);
    if (header && header !== " ") setHeaderColorCode(header);
    if (bg && bg !== " ") setBgColorCode(bg);
    if (font && font !== " ") setFontName(font);
  }

  useEffect(() => {
    if (colorCode !== "white") localStorage.setItem("colorCode", colorCode);
    if (headerColorCode !== "white") localStorage.setItem("headerColorCode", headerColorCode);
    if (bgColorCode !== "white") localStorage.setItem("bgColorCode", bgColorCode);
    if (fontName !== "") localStorage.setItem("fontName", fontName);
  }, [colorCode, headerColorCode, bgColorCode, fontName]);


  return (
    <main
      ref={ref}
      id="template-3"
      className={`aspect-square min-h-[1123px] lg:min-h-[1123px] xl:min-h-[1123px] w-[794px] lg:w-[794px] xl:w-[794px] flex flex-col bg-white text-black relative ${fontName}`}
      style={{ backgroundColor: bgColorCode, color: colorCode }} >
      {isPremium && (
        <Img
          src="https://cdn-icons-png.flaticon.com/512/1478/1478930.png"
          alt="premium"
          className="w-16 absolute -top-6 -right-6"
        />
      )}

      <div className='p-7' style={{ backgroundColor: headerColorCode }}>
        <div className="flex flex-col gap-2 items-center">
          <EditorText
            dataId="info.name"
            onHandleChange={handleChange}
            placeholder="Your Name"
            className="text-4xl font-medium w-max">
            {data?.info?.name ?? 'Mohsin Alshammari'}
          </EditorText>
          <EditorText
            onHandleChange={handleChange}
            dataId="info.title"
            placeholder="Your Title"
            className="text-2xl w-max">
            {data?.info?.title ?? 'Product Manager'}
          </EditorText>
        </div>

        {/* Social Info */}
        <div className="mt-2 flex items-center gap-2 justify-center font-medium">
          <div className="text-[13px] text-black flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="w-3 h-3"
              viewBox="0 0 24 24">
              <path
                fill="#000"
                d="M22 3.47v17.06A1.47 1.47 0 0120.53 22H3.47A1.47 1.47 0 012 20.53V3.47A1.47 1.47 0 013.47 2h17.06A1.47 1.47 0 0122 3.47zM7.882 9.648h-2.94v9.412h2.94V9.647zm.265-3.235a1.694 1.694 0 00-1.682-1.706h-.053a1.706 1.706 0 000 3.412 1.694 1.694 0 001.735-1.653v-.053zm10.912 6.93c0-2.83-1.8-3.93-3.588-3.93a3.353 3.353 0 00-2.977 1.517h-.082V9.647H9.647v9.412h2.941v-5.006a1.953 1.953 0 011.765-2.106h.112c.935 0 1.63.588 1.63 2.07v5.042h2.94l.024-5.718z"></path>
            </svg>
            <div className="flex items-center">
              <p>in/</p>
              <EditorText
                placeholder="edit linkedin"
                onHandleChange={handleChange}
                dataId="socialInfo.linkedin">
                {data?.socialInfo?.linkedin ?? 'mohsinalshammari'}
              </EditorText>
            </div>
          </div>
          <p className="text-[11px]">•</p>
          <div className="text-[13px] text-black flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <EditorText
              placeholder="edit address"
              onHandleChange={handleChange}
              dataId="socialInfo.address">
              {data?.socialInfo?.address ?? 'Santa Monica, California'}
            </EditorText>
          </div>
          <p className="text-[11px]">•</p>
          <div className="text-[13px] text-black flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <EditorText
              placeholder="edit phone"
              onHandleChange={handleChange}
              dataId="socialInfo.phone">
              {data?.socialInfo?.phone ?? '7759978644'}
            </EditorText>
          </div>
          <p className="text-[11px]">•</p>
          <div className="text-[13px] text-black flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 shrink-0">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <EditorText
              placeholder="edit email"
              onHandleChange={handleChange}
              dataId="socialInfo.email">
              {data?.socialInfo?.email ?? 'mohsinalshammari.jobs@gmail.com'}
            </EditorText>
          </div>
        </div>
      </div>

      <div className='px-6 py-4'>
        {/* SUMMARY */}
        <section className="mt-5">
          <h1 className="font-bold border-b-2 border-b-black text-base">
            SUMMARY
          </h1>
          <EditorText
            onHandleChange={handleChange}
            dataId="summary"
            placeholder="Add your summary"
            className="border-b-2 w-full text-sm"
            containerClassName="w-full">
            {data?.summary ??
              `Experienced Product Manager with a proven track record of successfully
          launching and managing products from ideation to market. Skilled in
          conducting market research, analyzing data, and developing product
          strategies that align with business objectives. Adept at collaborating
          cross-functionally with teams such as engineering, design, sales, and
          marketing to ensure product success. Strong communication skills and
          ability to lead teams towards achieving goals.`}
          </EditorText>
        </section>

        {/* Experience */}
        <section className="mt-5 group relative">
          <h1 className="font-bold border-b-2 border-b-black text-base">
            EXPERIENCE
          </h1>
          <button
            onClick={addMoreExperience}
            className="hidden group-hover:block absolute cursor-pointer active:scale-110 transition-all -top-[10px] -left-[10px] bg-gray-700 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="w-5 h-5 stroke-white">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
          <ul>
            {data?.experience ? (
              data?.experience.map((exp, expIdx) => (
                <ExperienceContainer
                  key={`Experience-Design-${expIdx}`}
                  exp={exp}
                  handleChange={handleChange}
                  expIdx={expIdx}
                  onDelete={deleteExperience}
                  onExperiencePointsDelete={onExperiencePointsDelete}
                />
              ))
            ) : (
              // DEMO DATA
              <>
                <li>
                  <div className="flex items-center gap-1 font-bold ">
                    <p>Founder</p>
                    <p>|</p>
                    <p>Magical Resume</p>
                    <p>|</p>
                    <p>San Francisco, California, United States</p>
                    <p>|</p>
                    <p>1 2022-4/2023</p>
                  </div>

                  <ul className="ml-10 list-disc mt-1">
                    <li>
                      Partnered in the development of an AI-enabled resume writing
                      software, improving resume generation, personal branding,
                      and ATS compatibility.
                    </li>
                    <li>
                      Guided the product journey from conception to launch,
                      maintaining alignment with market needs and company goals.
                    </li>
                    <li>
                      Facilitated the creation of more than 3000 personalized
                      resumes using AI technology.
                    </li>
                    <li>
                      Administered A/B testing and optimized UI designs,
                      contributing to a 20% enhancement in user experience scores
                      and a 15% lift in conversion rates.
                    </li>
                    <li>
                      Orchestrated product development using visual roadmaps,
                      ensuring timely introduction of new features while
                      continually refining them based on customer feedback and API
                      integration.
                    </li>
                  </ul>
                </li>

                <li>
                  <div className="flex items-center gap-1 font-bold ">
                    <p>Product Manager</p>
                    <p>|</p>
                    <p>Claimyr</p>
                    <p>|</p>
                    <p>San Francisco, California, United States</p>
                    <p>|</p>
                    <p>2021-/2021</p>
                  </div>

                  <ul className="ml-10 list-disc mt-1">
                    <li>
                      Oversaw the introduction of digital products in 15 states,
                      thereby expanding market reach and achieving over a million
                      dollars in monthly revenue
                    </li>
                    <li>
                      Streamlined strategic business operations and planning,
                      leading to improved team collaboration, prioritization, and
                      customer satisfaction
                    </li>
                    <li>
                      Directed business software products, incorporating client
                      feedback into product enhancements that increased cross-team
                      collaboration by 30%.
                    </li>
                    <li>
                      Coordinated diverse teams, practicing agile methodologies,
                      which led to clear project objectives and transparent
                      deliverables
                    </li>
                    <li>
                      Hired and trained team members, advocating for an
                      employee-centric approach and open-door policy.
                    </li>
                  </ul>
                </li>

                <li>
                  <div className="flex items-center gap-1 font-bold ">
                    <p>Product Manager</p>
                    <p>|</p>
                    <p>Network Operation Telecom CO.</p>
                    <p>|</p>
                    <p>Riyad, Saudi Arabia</p>
                    <p>|</p>
                    <p>2019-/2021</p>
                  </div>

                  <ul className="ml-10 list-disc mt-1">
                    <li>
                      Developed and executed product strategies as a Senior
                      Product Manager, gaining a strong understanding of
                      Riyadh&apos;s tech industry trends.
                    </li>
                    <li>
                      Adopted agile development practices, enhancing team
                      knowledge and expediting the software development
                      environment.
                    </li>
                    <li>
                      Utilized my degree in Economics and technical expertise to
                      collaborate with tech teams in creating innovative
                      construction management solutions.
                    </li>
                    <li>
                      Conducted economic feasibility studies for future planning,
                      attracting more investments into the area and fostering a
                      thriving business ecosystem.
                    </li>
                    <li>
                      Cooperated with cross-functional teams in a matrix
                      organization to ensure successful program management and
                      delivery of complex, scalable products.
                    </li>
                  </ul>
                </li>

                <li>
                  <div className="flex items-center gap-1 font-bold ">
                    <p>Project Manager</p>
                    <p>|</p>
                    <p>Network Operation Telecom CO.</p>
                    <p>|</p>
                    <p>Saudi Arabia</p>
                    <p>|</p>
                    <p>2014-/2016</p>
                  </div>

                  <ul className="ml-10 list-disc mt-1">
                    <li>
                      Managed project personnel to ensure on-time and
                      within-budget project progression.
                    </li>
                    <li>
                      Formulated detailed project plans, including scope, budget,
                      and schedule, and monitored project performance to meet all
                      objectives.
                    </li>
                    <li>
                      Cultivated relationships with all stakeholders, maintaining
                      clear communication and alignment on project goals.
                    </li>
                    <li>
                      Established risk management processes to identify, assess,
                      and mitigate project risks.
                    </li>
                    <li>
                      Conducted post-project evaluations to glean insights for
                      future initiatives.
                    </li>
                  </ul>
                </li>

                <li>
                  <div className="flex items-center gap-1 font-bold ">
                    <p>Interpreter</p>
                    <p>|</p>
                    <p>Northern Nevada International Center</p>
                    <p>|</p>
                    <p>Reno, Nevada</p>
                    <p>|</p>
                    <p>2011-/2012</p>
                  </div>

                  <ul className="ml-10 list-disc mt-1">
                    <li>
                      Translated complex English documents into Arabic and vice
                      versa, providing the highest level of accuracy and cultural
                      relevance.
                    </li>
                    <li>
                      Performed simultaneous interpretation for high-level
                      meetings and conferences.
                    </li>
                    <li>
                      Worked closely with clients to understand their needs,
                      delivering tailored interpretation services to enhance
                      cross-cultural interactions.
                    </li>
                    <li>
                      Provided written translation services for various materials
                      including legal documents, technical manuals, and business
                      correspondences.
                    </li>
                    <li>
                      Conducted language proficiency training sessions, sharing
                      strategies to improve bilingual communication skills within
                      the organization.
                    </li>
                  </ul>
                </li>
              </>
            )}
          </ul>
        </section>

        {/* Education */}
        <section className="group relative mt-5">
          <h1 className="font-bold border-b-2 border-b-black text-base">
            EDUCATION
          </h1>
          <button
            onClick={addMoreEducation}
            className="hidden group-hover:block absolute cursor-pointer active:scale-110 transition-all -top-[10px] -left-[10px] bg-gray-700 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="w-5 h-5 stroke-white">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
          <ul className="max-w-[400px]">
            {data?.education ? (
              data?.education?.map((ed, i) => (
                <EducationContainer
                  onDelete={deleteEducation}
                  ed={ed}
                  handleChange={handleChange}
                  i={i}
                  key={`Education-Design-${i}`}
                />
              ))
            ) : (
              // DEMO DATA
              <>
                <li>
                  <div className="w-full flex items-center justify-between">
                    <p className="font-bold">University of Nevada, Reno</p>
                    <p>2018</p>
                  </div>
                  <p className="ml-2">
                    Master of Business Administration - MBA (GPA: 3.8)
                  </p>
                </li>
                <li>
                  <div className="w-full flex items-center justify-between">
                    <p className="font-bold">University of Nevada, Reno</p>
                    <p>2014</p>
                  </div>
                  <p className="ml-2">Bachelor of Science (B.S.)</p>
                </li>
                <li>
                  <div className="w-full flex items-center justify-between">
                    <p className="font-bold">University of Nevada, Reno</p>
                    <p>2014</p>
                  </div>
                  <p className="ml-2">Bachelor of Arts (B.A.)</p>
                </li>
                <li>
                  <div className="w-full flex items-center justify-between">
                    <p className="font-bold">University of Nevada, Reno</p>
                    <p>2014</p>
                  </div>
                  <p className="ml-2">Bachelor of Science (B.S.)</p>
                </li>
              </>
            )}
          </ul>
        </section>

        {/* Skills */}
        <section className="group relative mt-5">
          <h1 className="font-bold border-b-2 border-b-black text-base">
            SKILLS
          </h1>
          <button
            onClick={addMoreSkill}
            className="hidden group-hover:block absolute cursor-pointer active:scale-110 transition-all -top-[1.5%] -left-[1.5%] bg-gray-700 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="w-5 h-5 stroke-white">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>

          <div className="grid grid-cols-3 mt-1">
            {data?.skills ? (
              data?.skills?.map((skill, i) => (
                <EditorText
                  arrayKey={i}
                  placeholder="edit skill"
                  isArray={true}
                  onDelete={deleteSkill}
                  onHandleChange={handleChange}
                  dataId={`skills.${i}`}
                  key={`Skill-Design-${i}`}
                  containerClassName="w-max"
                  className="w-max text-sm">
                  {skill}
                </EditorText>
              ))
            ) : (
              // DEMO DATA
              <>
                <p>Ai Applications</p>
                <p>Agile Management</p>
                <p>JavaScript</p>
                <p>Ai programming and content writing</p>
                <p>MongoDB</p>
                <p>Roadmaps</p>
                <p>OpenAi and Anthropic Api</p>
                <p>Financial Analysis</p>
                <p>Software as a Service (SaaS)</p>
                <p>Operations Management</p>
                <p>React.js</p>
                <p>Process Improvement</p>
                <p>Team Leadership</p>
                <p>Nextjs</p>
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default forwardRef(Template3Design);

function EducationContainer({
  ed,
  i,
  handleChange,
  onDelete,
}: {
  ed: Template3DataType['education'][0];
  i: number;
  handleChange: (name: string, value: any) => void;
  onDelete: (i: number) => void;
}) {
  const [contextMenu, setContextMenu] = useState(false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setContextMenu(true)}
      onMouseLeave={() => setContextMenu(false)}>
      <button
        onClick={() => {
          onDelete(i);
        }}
        className={`${contextMenu ? 'block' : 'hidden'
          } absolute cursor-pointer active:scale-110 transition-all -top-[12px] -right-[25px] z-50 text-red-500 shadow-lg p-1 border bg-white rounded-full`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>
      <div className="w-full flex items-center justify-between">
        <EditorText
          placeholder="edit institute"
          onHandleChange={handleChange}
          dataId={`education.${i}.institute`}
          className="font-bold text-sm">
          {ed?.institute}
        </EditorText>
        <EditorText
          placeholder="edit passing year"
          onHandleChange={handleChange}
          className="text-sm"
          dataId={`education.${i}.passingYear`}>
          {ed?.passingYear}
        </EditorText>
      </div>
      <EditorText
        placeholder="edit certificate or degree"
        onHandleChange={handleChange}
        dataId={`education.${i}.degree`}
        className="ml-2 text-sm">
        {ed?.degree}
      </EditorText>
    </li>
  );
}

function ExperienceContainer({
  exp,
  expIdx,
  handleChange,
  onDelete,
  onExperiencePointsDelete,
}: {
  exp: Template3DataType['experience'][0];
  expIdx: number;
  handleChange: (name: string, value: any) => void;
  onDelete: (i: number) => void;
  onExperiencePointsDelete: (expIdx: number, pointIdx: number) => void;
}) {
  const [contextMenu, setContextMenu] = useState(false);

  return (
    <li
      className="relative w-fit flex flex-col"
      onMouseEnter={() => setContextMenu(true)}
      onMouseLeave={() => setContextMenu(false)}>
      <button
        onClick={() => {
          onDelete(expIdx);
        }}
        className={`${contextMenu ? 'block' : 'hidden'
          } absolute cursor-pointer active:scale-110 transition-all -top-[12px] -right-[25px] z-50 text-red-500 shadow-lg p-1 border bg-white rounded-full`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>

      <button
        onClick={() => {
          // adding new point *this handleChange method add the value if it doesn't exists already
          handleChange(
            `experience.${expIdx}.points.${exp.points.length + 1}`,
            ''
          );
        }}
        className={`${contextMenu ? 'block' : 'hidden'
          } absolute cursor-pointer active:scale-110 transition-all top-[25px] left-[0%] bg-gray-700 rounded-full`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className="w-5 h-5 stroke-white">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>

      <div className="flex items-center gap-1 font-bold w-full">
        <EditorText
          placeholder="edit title"
          onHandleChange={handleChange}
          className="text-sm"
          dataId={`experience.${expIdx}.title`}>
          {exp?.title}
        </EditorText>
        <p>|</p>
        <EditorText
          placeholder="edit company/project"
          onHandleChange={handleChange}
          className="text-sm"
          dataId={`experience.${expIdx}.company`}>
          {exp?.company}
        </EditorText>
        <p>|</p>
        <EditorText
          placeholder="edit location"
          onHandleChange={handleChange}
          className="text-sm"
          dataId={`experience.${expIdx}.location`}>
          {exp?.location}
        </EditorText>
        <p>|</p>
        <EditorText
          placeholder="edit from date"
          onHandleChange={handleChange}
          className="text-sm"
          dataId={`experience.${expIdx}.from`}>
          {exp?.from}
        </EditorText>
        <p>-/</p>
        <EditorText
          placeholder="edit to date"
          onHandleChange={handleChange}
          className="text-sm"
          dataId={`experience.${expIdx}.to`}>
          {exp?.to}
        </EditorText>
      </div>

      <ul className="relative ml-10 list-disc mt-1">
        {exp?.points?.map((point, pointIdx) => (
          <ExperiencePoints
            key={`experience.${expIdx}.points.${pointIdx}`}
            handleChange={handleChange}
            expIdx={expIdx}
            pointIdx={pointIdx}
            onExperiencePointsDelete={onExperiencePointsDelete}
            point={point}
          />
        ))}
      </ul>
    </li>
  );
}

function ExperiencePoints({
  handleChange,
  expIdx,
  pointIdx,
  point,
  onExperiencePointsDelete,
}: {
  point: Template3DataType['experience'][0]['points'][0];
  expIdx: number;
  pointIdx: number;
  handleChange: (name: string, value: any) => void;
  onExperiencePointsDelete: (expIdx: number, pointIdx: number) => void;
}) {
  return (
    <>
      <li className="w-full" key={`Point-Design-${pointIdx}`}>
        <EditorText
          placeholder="edit point"
          dataId={`experience.${expIdx}.points.${pointIdx}`}
          onHandleChange={handleChange}
          isArray
          className="align-text-top text-sm"
          onDelete={(pointIdx) => {
            onExperiencePointsDelete(expIdx, pointIdx);
          }}
          arrayKey={pointIdx}>
          {point}
        </EditorText>
      </li>
    </>
  );
}
