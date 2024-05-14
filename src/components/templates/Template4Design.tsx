import React from 'react';

import { Puritan } from 'next/font/google';
import Img from '../Img';

const font = Puritan({
  weight: ['400', '700'],
  subsets: ['latin'],
});

type Props = {
  isPremium?: boolean;
};

export default function Template4Design({ isPremium }: Props) {
  return (
    <main
      className={`${font.className} w-full max-w-[800px] h-max flex flex-col p-5 bg-[#FDF8F1] text-black relative`}>
      {isPremium && (
        <Img
          src="https://cdn-icons-png.flaticon.com/512/1478/1478930.png"
          alt="premium"
          className="w-16 absolute -top-6 -right-6"
        />
      )}
      {/* wrapper */}
      <div className="w-full h-full border-[3px] rounded-2xl border-[#BF1E00] px-10 py-12">
        {/* INFO */}
        <section className="flex gap-8 w-full">
          {/* PROFILE IMAGE */}
          <div className="shrink-0 w-[150px] h-[150px] rounded-full border-[3px] border-[#BF1E00]"></div>

          {/* PROFILE INFO */}
          <div className="flex flex-col w-full">
            <h1 className="text-[48px]/[50px] text-[#BF1E00]">
              ZURAIDE ELORRIAGA
            </h1>
            <div className="flex flex-wrap items-center gap-1 text-[15px] text-[#BF1E00]">
              <p>Boston, MA</p>
              <p>|</p>
              <p>916.555.0123</p>
              <p>|</p>
              <p>zuraide@example.com</p>
              <p>|</p>
              <p>greatsiteaddress.com</p>
            </div>
            <p className="mt-2 text-[13px] text-wrap">
              Licensed pharmacist with over 7 years of experience in retail and
              clinical pharmacy settings. Strong expertise in dispensing
              medications, providing patient counseling, and collaborating with
              healthcare providers to optimize patient care.
            </p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="mt-10">
          <h1 className="text-3xl text-[#BF1E00]">EXPERIENCE</h1>
          <ul className="mt-5 flex flex-col">
            <li className="flex gap-10">
              <p className="w-[8%] shrink-0 text-[#BF1E00] flex flex-col text-[13px]">
                <span>JAN 20XX-</span>
                <span>AUG 20XX</span>
              </p>
              <div className="mt-3 relative shrink-0 w-[4px] bg-[#BF1E00]">
                <div className="absolute top-[-10px] -translate-x-1/2 left-1/2 w-4 h-4 rounded-full border-4 border-[#BF1E00] bg-white"></div>
              </div>
              <div>
                <p className="text-lg text-[#BF1E00]">
                  PHARMACIST, LAMIERE LABS
                </p>
                <p className="text-[13px] mb-2">
                  Dispense medications accurately and efficiently, ensuring
                  compliance with state and federal laws. Provide patient
                  education on medication therapy, side effects, and drug
                  interactions.
                </p>
              </div>
            </li>
            <li className="flex gap-10">
              <p className="w-[8%] shrink-0 text-[#BF1E00] flex flex-col text-[13px]">
                <span>MAR 20XX-</span>
                <span>JAN 20XX</span>
              </p>
              <div className="mt-3 relative shrink-0 w-[4px] bg-[#BF1E00]">
                <div className="absolute top-[-10px] -translate-x-1/2 left-1/2 w-4 h-4 rounded-full border-4 border-[#BF1E00] bg-white"></div>
              </div>
              <div>
                <p className="text-lg text-[#BF1E00]">
                  PHARMACIST, TREY RESEARCH
                </p>
                <p className="text-[13px] mb-2">
                  Coordinated with insurance companies to process claims and
                  resolve issues. Trained and supervised pharmacy technicians in
                  daily operations and customer service.
                </p>
              </div>
            </li>
          </ul>
        </section>

        {/* EDUCATION */}
        <section className="mt-10">
          <h1 className="text-3xl text-[#BF1E00]">EDUCATION</h1>
          <ul className="mt-5 flex flex-col">
            <li className="flex gap-10">
              <p className="w-[8%] shrink-0 text-[#BF1E00] flex flex-col text-[13px]">
                JUNE 20XX
              </p>
              <div className="mt-3 relative shrink-0 w-[4px] bg-[#BF1E00]">
                <div className="absolute top-[-10px] -translate-x-1/2 left-1/2 w-4 h-4 rounded-full border-4 border-[#BF1E00] bg-white"></div>
              </div>
              <div>
                <p className="text-lg text-[#BF1E00]">
                  DOCTOR OF PHARMACY, JASPER UNIVERSITY
                </p>
                <p className="text-[13px] mb-2">
                  Received the Dean&apos;s List award for maintaining a high
                  grade point average and academic excellence.
                </p>
              </div>
            </li>
            <li className="flex gap-10">
              <p className="w-[8%] shrink-0 text-[#BF1E00] flex flex-col text-[13px]">
                MAY 20XX
              </p>
              <div className="mt-3 relative shrink-0 w-[4px] bg-[#BF1E00]">
                <div className="absolute top-[-10px] -translate-x-1/2 left-1/2 w-4 h-4 rounded-full border-4 border-[#BF1E00] bg-white"></div>
              </div>
              <div>
                <p className="text-lg text-[#BF1E00]">
                  BACHELOR OF SCIENCE IN BIOLOGY, BELLOWS COLLEGE
                </p>
                <p className="text-[13px] mb-2">
                  The student was recognized as the Most Outstanding Pharmacy
                  Student of the Year.
                </p>
              </div>
            </li>
          </ul>
        </section>

        {/* Below */}
        <div className="flex justify-between mt-10 gap-10">
          {/* SKILLS */}
          <section className="w-1/2">
            <h1 className="text-3xl text-[#BF1E00]">SKILLS</h1>
            <ul className="ml-5 mt-5 flex flex-col text-[13px] list-disc marker:text-[#BF1E00]">
              <li>
                Strong knowledge of medication therapy, drug interactions, and
                side effects
              </li>
              <li>Excellent communication skills, both verbal and written</li>
              <li>
                Attention to detail and accuracy in medication dispensing and
                record-keeping
              </li>
              <li>
                Ability to collaborate effectively with healthcare providers and
                other team members
              </li>
            </ul>
          </section>
          {/* ACTIVITIES */}
          <section className="w-1/2">
            <h1 className="text-3xl text-[#BF1E00]">ACTIVITIES</h1>
            <p className="text-[13px] mt-8">
              Active member of the National Association of Pharmacy
              Professionals (NAPP) and participated in various volunteer and
              networking events aimed at promoting the role of pharmacists in
              healthcare.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
