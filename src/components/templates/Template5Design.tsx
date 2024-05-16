'use client';

import React, { forwardRef, useEffect, useState } from 'react';
import { Template5DataType } from '../editors/Template5Editor';
import Img from '../Img';
import EditorText from '../shared/EditorText';

type Props = {
  data?: Template5DataType;
  isPremium?: boolean;
  handleChange: (name: string, value: any) => void;
  handleExperienceChange: (experience: Template5DataType['experience']) => void;
  handleEducationChange: (education: Template5DataType['education']) => void;
  handleSkillChange: (skills: Template5DataType['skills']) => void;
};

function Template5Design(
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
      className={`w-full max-w-[800px] h-max flex flex-col relative cv-5 ${fontName}`}
      style={{ backgroundColor: bgColorCode, color: colorCode }} >
      {isPremium && (
        <Img
          src="https://cdn-icons-png.flaticon.com/512/1478/1478930.png"
          alt="premium"
          className="w-16 absolute -top-6 -right-6"
        />
      )}

      {/* INFO */}
      <section className={`flex justify-between gap-5  px-5 py-7 pb-6`} style={{ backgroundColor: headerColorCode }}>
        {/* USER INFO */}
        <div>
          <h1 className="text-4xl text-white">
            <EditorText
              dataId="info.name"
              onHandleChange={handleChange}
              placeholder="Your Name"
              className="font-medium w-max">
              {data?.info?.name ?? 'User Name'}
            </EditorText>
          </h1>

          <p className="text-[#F26464] mt-2">
            <EditorText
              onHandleChange={handleChange}
              dataId="info.title"
              placeholder="Your Title">
              {data?.info?.title ?? 'Product Manager'}
            </EditorText>
          </p>
          <p className="text-white text-[13px] mt-3">
            <EditorText
              onHandleChange={handleChange}
              dataId="summary"
              placeholder="Add your summary"
              className="border-b-2 w-full text-sm"
              containerClassName="w-full">
              {data?.summary ?? ``}
            </EditorText>
          </p>
        </div>
        {/* USER PROFILE */}
        {/* <div className="w-[120px] h-[120px] rounded-full border-[5px] border-[#F26464] overflow-hidden">
          <Img
            src="/profile.webp"
            alt="profile"
            className="w-full h-full rounded-full"
          />
        </div> */}
      </section>
      {/* SOCIAL INFO */}
      <section className="bg-[#2B5670] flex items-center gap-5 text-[12px] text-white justify-center py-2">
        <div className="text-[13px] flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="w-3 h-3"
            viewBox="0 0 24 24">
            <path
              fill="#fff"
              d="M22 3.47v17.06A1.47 1.47 0 0120.53 22H3.47A1.47 1.47 0 012 20.53V3.47A1.47 1.47 0 013.47 2h17.06A1.47 1.47 0 0122 3.47zM7.882 9.648h-2.94v9.412h2.94V9.647zm.265-3.235a1.694 1.694 0 00-1.682-1.706h-.053a1.706 1.706 0 000 3.412 1.694 1.694 0 001.735-1.653v-.053zm10.912 6.93c0-2.83-1.8-3.93-3.588-3.93a3.353 3.353 0 00-2.977 1.517h-.082V9.647H9.647v9.412h2.941v-5.006a1.953 1.953 0 011.765-2.106h.112c.935 0 1.63.588 1.63 2.07v5.042h2.94l.024-5.718z"></path>
          </svg>
          <div className="flex items-center">
            {/* <p>in/</p> */}
            <EditorText
              placeholder="Edit linkedin"
              onHandleChange={handleChange}
              dataId="socialInfo.linkedin">
              {data?.socialInfo?.linkedin ?? 'linkedin'}
            </EditorText>
          </div>
        </div>
        <div className="text-[13px] flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-3 h-3">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              fill="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <EditorText
            placeholder="Edit Address"
            onHandleChange={handleChange}
            dataId="socialInfo.address">
            {data?.socialInfo?.address ?? 'User Address Here'}
          </EditorText>
        </div>
        <div className="flex items-center gap-1">
          <Img src="/mail.svg" alt="mail" className="w-3" />
          <p> <EditorText
            placeholder="Edit Email "
            onHandleChange={handleChange}
            dataId="socialInfo.email">
            {data?.socialInfo?.email ?? 'user@gmail.com'}
          </EditorText></p>
        </div>
        <div className="flex items-center gap-1">
          <Img src="/phone.svg" alt="phone" className="w-3" />
          <p> <EditorText
            placeholder="Edit phone"
            onHandleChange={handleChange}
            dataId="socialInfo.phone">
            {data?.socialInfo?.phone ?? '9998887766'}
          </EditorText></p>
        </div>
      </section>

      {/* WORK EXPERIENCE | SKILLS */}
      <div className="flex justify-between gap-10 pt-5 px-7 pb-5">
        <section className="w-1/2">
          <h1 className="w-max border-b-[3px] border-b-[#F26464] text-[#F26464] font-bold">
            WORK EXPERIENCE
          </h1>

          <div className="mt-3 flex flex-col gap-3">
            {
              data?.experience ? (
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
              ) : ("")
            }
          </div>
        </section>
        <section className="w-1/2">
          <h1 className="w-max border-b-[3px] border-b-[#F26464] text-[#F26464] font-bold">
            SKILLS
          </h1>

          <div className="mt-3">
            <ul>
              {
                data?.skills ? (
                  data?.skills?.map((skill, i) => (

                    <>
                      <li className="bg-[#2B567080] text-white text-[13px] w-max px-3 py-2 rounded-md m-2">
                        <EditorText
                          arrayKey={i}
                          placeholder="edit skill"
                          isArray={true}
                          onDelete={deleteSkill}
                          onHandleChange={handleChange}
                          dataId={`skills.${i}`}
                          key={`Skill-Design-${i}`}
                          containerClassName="w-max"
                          className="w-max text-sm capitalize">
                          {skill}
                        </EditorText>
                      </li>
                    </>
                  ))
                ) : ("")
              }
            </ul>
          </div>
        </section>
      </div>

      {/* EDUCATION |  ORGANIZATIONS | HONOR AWARDS | LANGUAGES | SUPPORTED CAUSES | INTERESTS */}
      <div className="flex justify-between gap-10 pt-5 px-7 pb-10">
        {/* EDUCATION */}
        <section className="w-1/2">
          <h1 className="w-max border-b-[3px] border-b-[#F26464] text-[#F26464] font-bold">
            EDUCATION
          </h1>

          <div className="mt-3 flex flex-col gap-3">
            {
              data?.education ? (
                data?.education?.map((ed, i) => (
                  <EducationContainer
                    onDelete={deleteEducation}
                    ed={ed}
                    handleChange={handleChange}
                    i={i}
                    key={`Education-Design-${i}`}
                  />
                ))
              ) : ("")
            }
          </div>
        </section>
      </div>
    </main>
  );
}

export default forwardRef(Template5Design);

function EducationContainer({
  ed,
  i,
  handleChange,
  onDelete,
}: {
  ed: Template5DataType['education'][0];
  i: number;
  handleChange: (name: string, value: any) => void;
  onDelete: (i: number) => void;
}) {
  const [contextMenu, setContextMenu] = useState(false);

  return (
    <div
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
          placeholder="Edit institute"
          onHandleChange={handleChange}
          dataId={`education.${i}.institute`}
          className="font-bold text-sm capitalize">
          {ed?.institute}
        </EditorText>
        <EditorText
          placeholder="Edit passing year"
          onHandleChange={handleChange}
          className="text-sm capitalize"
          dataId={`education.${i}.passingYear`}>
          {ed?.passingYear}
        </EditorText>
      </div>
      <EditorText
        placeholder="Edit certificate or degree"
        onHandleChange={handleChange}
        dataId={`education.${i}.degree`}
        className="ml-2 text-sm capitalize">
        {ed?.degree}
      </EditorText>
    </div>
  );
}

function ExperienceContainer({
  exp,
  expIdx,
  handleChange,
  onDelete,
  onExperiencePointsDelete,
}: {
  exp: Template5DataType['experience'][0];
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

      <div className="flex items-center gap-1 font-bold w-full">
        <div>
          <h6 className="font-bold">
            <EditorText
              placeholder="Edit Job title"
              onHandleChange={handleChange}
              className="text-sm capitalize"
              dataId={`experience.${expIdx}.title`}>
              {exp?.title}
            </EditorText>
          </h6>
          <p>
            <EditorText
              placeholder="Edit company"
              onHandleChange={handleChange}
              className="text-sm capitalize"
              dataId={`experience.${expIdx}.company`}>
              {exp?.company + " - " + exp?.location}
            </EditorText>
          </p>
          <p className='mb-2'>
            <EditorText
              placeholder="Edit From Date - To Date"
              onHandleChange={handleChange}
              className="text-sm capitalize"
              dataId={`experience.${expIdx}.from`}>
              {exp?.from + " - " + exp?.to}
            </EditorText>
          </p>

          <small>Key Points</small>

          <ul className="relative ml-5 list-disc mt-2">
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
        </div>
      </div>
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
  point: Template5DataType['experience'][0]['points'][0];
  expIdx: number;
  pointIdx: number;
  handleChange: (name: string, value: any) => void;
  onExperiencePointsDelete: (expIdx: number, pointIdx: number) => void;
}) {
  return (
    <>
      <li className="w-full text-gray-500 text-sm" key={`Point-Design-${pointIdx}`}>
        <EditorText
          placeholder="edit point"
          dataId={`experience.${expIdx}.points.${pointIdx}`}
          onHandleChange={handleChange}
          isArray
          className="align-text-top text-sm text-gray-500"
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
