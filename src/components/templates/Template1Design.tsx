import React from 'react';
import Img from '../Img';

type Props = {
  isPremium?: boolean;
};

export default function Template1Design({ isPremium = true }: Props) {
  return (
    <main className="w-full max-w-[800px] h-max bg-[#013C74] flex text-black relative">
      {isPremium && (
        <Img
          src="https://cdn-icons-png.flaticon.com/512/1478/1478930.png"
          alt="premium"
          className="w-16 absolute -top-6 -right-6"
        />
      )}
      <section className="text-white w-[30%] h-full pt-2 pb-10">
        <div className="px-3">
          <h1 className="text-3xl font-semibold">John Smith</h1>
          <p className="opacity-80">IT Project Manager</p>
        </div>

        {/* Personal Info */}
        <section className="mt-3">
          <h1 className="text-[15px] py-1 px-3 bg-[#002E58] font-medium">
            Personal Info
          </h1>
          <ul className="mt-2 px-3 max-w-[70%] flex flex-col gap-2">
            <li className="text-[13px]">
              <span className="font-medium">Address</span>
              <p className="text-[12px] opacity-80 mt-1">
                134 Rightward Way Portland, ME, 04019
              </p>
            </li>
            <li className="text-[13px]">
              <span className="font-medium">Phone</span>
              <p className="text-[12px] mt-1">774-987-4009</p>
            </li>
            <li className="text-[13px]">
              <span className="font-medium">E-mail</span>
              <p className="text-[12px] opacity-80 mt-1">
                j.smith@uptowork.com
              </p>
            </li>
            <li className="text-[13px]">
              <span className="font-medium">Linkedin</span>
              <p className="text-[12px] opacity-80 mt-1">
                linkedin.com/johnutw
              </p>
            </li>
          </ul>
        </section>

        {/* Skills */}
        <section className="mt-3">
          <h1 className="text-[15px] py-1 px-3 bg-[#002E58] font-medium">
            Skills
          </h1>
          <ul className="mt-2 px-3 flex flex-col gap-2">
            <li className="text-[12px] opacity-80">
              <p>Business Process Improvement</p>
            </li>
            <li className="text-[12px] opacity-80">
              <p>Vendor Management</p>
            </li>
            <li className="text-[12px] opacity-80">
              <p>Project Schedulign</p>
            </li>
            <li className="text-[12px] opacity-80">
              <p>Sales Analysis</p>
            </li>
            <li className="text-[12px] opacity-80">
              <p>Strategic Planning</p>
            </li>
            <li className="text-[12px] opacity-80">
              <p>Communication Skills</p>
            </li>
          </ul>
        </section>

        {/* Software */}
        <section className="mt-3">
          <h1 className="text-[15px] py-1 px-3 bg-[#002E58] font-medium">
            Software
          </h1>
          <ul className="mt-2 px-3 flex flex-col gap-2">
            <li className="text-[12px] opacity-80">
              <p className="font-medium">Microsoft Project</p>
              <div className="relative w-full bg-[#002E5B] h-[8px] mt-1">
                <div className="absolute top-0 left-0 w-full bg-white h-full"></div>
              </div>
              <p className="text-[11px] text-end mt-1">Execellent</p>
            </li>
            <li className="text-[12px] opacity-80">
              <p className="font-medium">MS Windows Server</p>
              <div className="relative w-full bg-[#002E5B] h-[8px] mt-1">
                <div className="absolute top-0 left-0 w-[80%] bg-white h-full"></div>
              </div>
              <p className="text-[11px] text-end mt-1">Very Good</p>
            </li>
            <li className="text-[12px] opacity-80">
              <p className="font-medium">Linux/Unix</p>
              <div className="relative w-full bg-[#002E5B] h-[8px] mt-1">
                <div className="absolute top-0 left-0 w-[80%] bg-white h-full"></div>
              </div>
              <p className="text-[11px] text-end mt-1">Very Good</p>
            </li>
            <li className="text-[12px] opacity-80">
              <p className="font-medium">Microsoft Excel</p>
              <div className="relative w-full bg-[#002E5B] h-[8px] mt-1">
                <div className="absolute top-0 left-0 w-[60%] bg-white h-full"></div>
              </div>
              <p className="text-[11px] text-end mt-1">Good</p>
            </li>
          </ul>
        </section>

        {/* Languages */}
        <section className="mt-3">
          <h1 className="text-[15px] py-1 px-3 bg-[#002E58] font-medium">
            Languages
          </h1>
          <ul className="mt-2 px-3 flex flex-col gap-2">
            <li className="text-[12px] opacity-80">
              <p className="font-medium">French</p>
              <div className="relative w-full bg-[#002E5B] h-[8px] mt-1">
                <div className="absolute top-0 left-0 w-[60%] bg-white h-full"></div>
              </div>
              <p className="text-[11px] text-end mt-1">Intermediate</p>
            </li>
            <li className="text-[12px] opacity-80">
              <p className="font-medium">German</p>
              <div className="relative w-full bg-[#002E5B] h-[8px] mt-1">
                <div className="absolute top-0 left-0 w-[30%] bg-white h-full"></div>
              </div>
              <p className="text-[11px] text-end mt-1">Basic</p>
            </li>
          </ul>
        </section>
      </section>
      <aside className="w-[70%] flex flex-col px-3 pt-5 bg-white text-black h-full pb-20">
        <p className="text-[13px]">
          IT Professional with over 10 years of experience in IT department
          management for international logistics companies. I can implement
          effective IT strategies at local and global levels. My greatest
          strength is business awareness, which enables me to permanently
          streamline infrastructure and aplications. Striving to leverage my IT
          management skills at SanCorp Inc.
        </p>

        <section className="mt-3">
          <h1 className="text-[#013C74] py-1 border-t border-b font-bold text-lg">
            Experience
          </h1>
          <ul className="mt-2 flex flex-col gap-2">
            <li className="flex gap-5">
              <p className="w-[20%] flex flex-col text-[13px]">
                <span>2006-12 -</span>
                <span>present</span>
              </p>
              <div className="w-full">
                <p className="text-sm font-bold">Senior Project Manager</p>
                <p className="italic text-[12px]">Section Hospital, ME</p>

                <ul className="mt-2 flex flex-col gap-1 list-disc text-[12px] ml-5">
                  <li>
                    Oversaw all major hospital IT projects for 10+ years, focus
                    on cost reduction
                  </li>
                  <li>
                    Responsible for creating, imporoving and developing IT
                    project strategies
                  </li>
                  <li>Cut costs by 32% in less than six months.</li>
                  <li>
                    Reduced the costs of IT maintenance in 2015 by successfully
                    rebuilding the server infrastructure resulting in over
                    $500000 of annual savings.
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex gap-5">
              <p className="w-[20%] flex flex-col text-[13px]">
                <span>2004-09 -</span>
                <span>2006-12</span>
              </p>
              <div className="w-full">
                <p className="text-sm font-bold">Junior Project Manager</p>
                <p className="italic text-[12px]">Seton Hospital, ME</p>

                <ul className="mt-2 flex flex-col gap-1 list-disc text-[12px] ml-5">
                  <li>
                    Oversaw all major hospital IT projects for 10+ years, focus
                    on cost reduction
                  </li>
                  <li>
                    Responsible for creating, imporoving and developing IT
                    project strategies
                  </li>
                  <li>Cut costs by 32% in less than six months.</li>
                  <li>
                    Reduced the costs of IT maintenance in 2015 by successfully
                    rebuilding the server infrastructure resulting in over
                    $500000 of annual savings.
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex gap-5">
              <p className="w-[20%] flex flex-col text-[13px]">
                <span>2002-08 -</span>
                <span>2004-09</span>
              </p>
              <div className="w-full">
                <p className="text-sm font-bold">IT Support Officer</p>
                <p className="italic text-[12px]">Section Hospital, ME</p>

                <ul className="mt-2 flex flex-col gap-1 list-disc text-[12px] ml-5">
                  <li>
                    Oversaw all major hospital IT projects for 10+ years, focus
                    on cost reduction
                  </li>
                  <li>
                    Responsible for creating, imporoving and developing IT
                    project strategies
                  </li>
                  <li>Cut costs by 32% in less than six months.</li>
                  <li>
                    Reduced the costs of IT maintenance in 2015 by successfully
                    rebuilding the server infrastructure resulting in over
                    $500000 of annual savings.
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </section>

        <section className="mt-3">
          <h1 className="text-[#013C74] py-1 border-t border-b font-bold text-lg">
            Education
          </h1>
          <ul className="mt-2 flex flex-col gap-2">
            <li className="flex gap-5">
              <p className="w-[20%] flex flex-col text-[13px]">
                <span>1999-09 -</span>
                <span>2001-05</span>
              </p>
              <div className="w-full">
                <p className="text-sm font-bold">
                  Master of Computer Science, University of Maryland
                </p>
                <ul className="mt-2 flex flex-col gap-1 list-disc text-[12px] ml-5">
                  <li>Graduated Summa Cum Laude.</li>
                  <li>Member of Student Association of Project Management</li>
                  <li>
                    Managemed a student project to develop a weekly IT News
                    podcast.
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex gap-5">
              <p className="w-[20%] flex flex-col text-[13px]">
                <span>1996-09 -</span>
                <span>1999-06</span>
              </p>
              <div className="w-full">
                <p className="text-sm font-bold">
                  Bachelor of Computer Science, Unversity of Maryland
                </p>

                <ul className="mt-2 flex flex-col gap-1 list-disc text-[12px] ml-5">
                  <li>Graduated Summa Cum Laude.</li>
                  <li>Member of Student Association of Project Management</li>
                  <li>
                    Managemed a student project to develop a weekly IT News
                    podcast.
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </section>

        <section className="mt-3">
          <h1 className="text-[#013C74] py-1 border-t border-b font-bold text-lg">
            Certifications
          </h1>
          <ul className="mt-2 flex flex-col gap-2">
            <li className="flex gap-5">
              <p className="w-[20%] flex flex-col text-[13px]">2010-05</p>
              <div className="w-full">
                <p className="text-[12px]">
                  PMP - Project Management Institute
                </p>
              </div>
            </li>
            <li className="flex gap-5">
              <p className="w-[20%] flex flex-col text-[13px]">2007-11</p>
              <div className="w-full">
                <p className="text-[12px]">
                  CAPM - Project Management Institute
                </p>
              </div>
            </li>
          </ul>
        </section>

        <section className="mt-3">
          <h1 className="text-[#013C74] py-1 border-t border-b font-bold text-lg">
            Interests
          </h1>
          <ul className="mt-2 flex flex-col gap-2">
            <li className="flex gap-5">
              <p className="w-[20%] flex flex-col text-[13px]"></p>
              <div className="w-full">
                <p className="text-[12px]">
                  Avid cross country skier and cyclist.
                </p>
              </div>
            </li>
            <li className="flex gap-5">
              <p className="w-[20%] flex flex-col text-[13px]"></p>
              <div className="w-full">
                <p className="text-[12px]">
                  Member of the Parent Teacher Association
                </p>
              </div>
            </li>
          </ul>
        </section>
      </aside>
    </main>
  );
}
