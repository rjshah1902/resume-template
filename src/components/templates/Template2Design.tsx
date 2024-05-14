import React from 'react';
import Img from '../Img';

type Props = {
  isPremium?: boolean;
};

export default function Template2Design({ isPremium }: Props) {
  return (
    <main className="w-full max-w-[800px] h-max flex flex-col px-5 py-8 bg-white text-black relative">
      {isPremium && (
        <Img
          src="https://cdn-icons-png.flaticon.com/512/1478/1478930.png"
          alt="premium"
          className="w-16 absolute -top-6 -right-6"
        />
      )}
      <h1 className="text-3xl font-bold text-[#013C74]">John Smith</h1>
      <p className="opacity-90 font-medium text-[#013C74]">
        IT Project Manager
      </p>

      <section className="mt-5 grid grid-cols-2 max-w-[500px] gap-3 justify-between">
        <p className="text-[13px] space-x-1">
          <span className="font-bold">Phone</span>{' '}
          <span className="opacity-90">774-989-4009</span>
        </p>
        <p className="text-[13px] space-x-1">
          <span className="font-bold">Linkedin</span>{' '}
          <span className="opacity-90">linkedin.com/johnutw</span>
        </p>
        <p className="text-[13px] space-x-1">
          <span className="font-bold">E-mail</span>{' '}
          <span className="opacity-90">j.smith@uptowork.com</span>
        </p>
        <p className="text-[13px] space-x-1">
          <span className="font-bold">Twitter</span>{' '}
          <span className="opacity-90">@johnsmithutw</span>
        </p>
      </section>

      <p className="mt-8 text-[13px]">
        IT Professional with over 10 years of experience in IT department
        management for international logistics companies. I can implement
        effective IT strategies at local and global levels. My greatest strength
        is business awareness, which enables me to permanently streamline
        infrastructure and aplications. Striving to leverage my IT management
        skills at SanCorp Inc.
      </p>

      <section className="mt-10">
        <div className="flex items-center gap-2">
          <div className="bg-[#013C74] w-max p-1 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
          <h1 className="text-[#013C74] py-1 font-bold text-lg">Experience</h1>
        </div>
        <ul className="mt-2 flex flex-col gap-2">
          <li className="flex gap-5">
            <p className="shrink-0 flex flex-col text-[13px]">
              <span>2006-12 -</span>
              <span>present</span>
            </p>
            <div className="w-full">
              <p className="text-sm font-bold">Senior Project Manager</p>
              <p className="italic text-[12px]">Section Hospital, ME</p>

              <ul className="mt-2 flex flex-col gap-1 list-disc text-[12px] ml-5">
                <li>
                  Oversaw all major hospital IT projects for 10+ years, focus on
                  cost reduction
                </li>
                <li>
                  Responsible for creating, imporoving and developing IT project
                  strategies
                </li>
                <li>Cut costs by 32% in less than six months.</li>
                <li>
                  Reduced the costs of IT maintenance in 2015 by successfully
                  rebuilding the server infrastructure resulting in over $500000
                  of annual savings.
                </li>
              </ul>
            </div>
          </li>
          <li className="flex gap-5">
            <p className="shrink-0 flex flex-col text-[13px]">
              <span>2004-09 -</span>
              <span>2006-12</span>
            </p>
            <div className="w-full">
              <p className="text-sm font-bold">Junior Project Manager</p>
              <p className="italic text-[12px]">Seton Hospital, ME</p>

              <ul className="mt-2 flex flex-col gap-1 list-disc text-[12px] ml-5">
                <li>
                  Oversaw all major hospital IT projects for 10+ years, focus on
                  cost reduction
                </li>
                <li>
                  Responsible for creating, imporoving and developing IT project
                  strategies
                </li>
                <li>Cut costs by 32% in less than six months.</li>
                <li>
                  Reduced the costs of IT maintenance in 2015 by successfully
                  rebuilding the server infrastructure resulting in over $500000
                  of annual savings.
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </section>

      <section className="mt-5">
        <div className="flex items-center gap-2">
          <div className="bg-[#013C74] w-max p-1 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>
          </div>
          <h1 className="text-[#013C74] py-1 font-bold text-lg">Education</h1>
        </div>
        <ul className="mt-2 flex flex-col gap-2">
          <li className="flex gap-5">
            <p className="shrink-0 flex flex-col text-[13px]">
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
        </ul>
      </section>

      <section className="mt-5">
        <div className="flex items-center gap-2">
          <div className="bg-[#013C74] w-max p-1 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"
              />
            </svg>
          </div>
          <h1 className="text-[#013C74] py-1 font-bold text-lg">Skills</h1>
        </div>
        <div className="mt-2 flex gap-5">
          <p className="w-[8%] shrink-0 flex flex-col text-[13px]"></p>
          <div className="w-full">
            <ul className="flex flex-col gap-1 text-[12px]">
              <li>
                <span className="font-bold">Vendor Management</span> -{' '}
                <span>
                  proven track record of managing vendors in projects with
                  budgets of over $1000000.
                </span>
              </li>
              <li>
                <span className="font-bold">Project Scheduling</span> -{' '}
                <span>over 90% of projects led were finished in due time.</span>
              </li>
              <li>
                <span className="font-bold">Sales Analysis</span> -{' '}
                <span>
                  background in IT Sales with deep understanding of contracts.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="flex items-center gap-2">
          <div className="bg-[#013C74] w-max p-1 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
              />
            </svg>
          </div>
          <h1 className="text-[#013C74] py-1 font-bold text-lg">Software</h1>
        </div>
        <div className="mt-2 flex gap-5">
          <p className="w-[8%] shrink-0 flex flex-col text-[13px]"></p>
          <div className="w-full">
            <ul className="flex flex-col gap-1 text-[12px]">
              <li>
                <div className="flex items-center gap-5 justify-between">
                  <p className="font-medium shrink-0 text-wrap">
                    Microsoft Project, MS Windows Server, Linux/Unix
                  </p>
                  <div className="w-[200px] relative bg-[#D6D6D6] h-[8px] mt-1">
                    <div className="absolute top-0 left-0 w-full bg-[#002E5B] h-full"></div>
                  </div>
                </div>
                <p className="text-[11px] text-end mt-1">Execellent</p>
              </li>
              <li>
                <div className="flex items-center gap-5 justify-between">
                  <p className="font-medium shrink-0 text-wrap">
                    MS Windows Server
                  </p>
                  <div className="w-[200px] relative bg-[#D6D6D6] h-[8px] mt-1">
                    <div className="absolute top-0 left-0 w-[80%] bg-[#002E5B] h-full"></div>
                  </div>
                </div>
                <p className="text-[11px] text-end mt-1">Very Good</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="flex items-center gap-2">
          <div className="bg-[#013C74] w-max p-1 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
              />
            </svg>
          </div>
          <h1 className="text-[#013C74] py-1 font-bold text-lg">
            Certifications
          </h1>
        </div>
        <ul className="mt-2 flex flex-col gap-2">
          <li className="flex gap-5">
            <p className="min-w-[8%] shrink-0 flex flex-col text-[13px]">
              2010-05
            </p>
            <div className="w-full">
              <p className="text-[12px]">PMP - Project Management Institute</p>
            </div>
          </li>
          <li className="flex gap-5">
            <p className="min-w-[8%] shrink-0 flex flex-col text-[13px]">
              2007-11
            </p>
            <div className="w-full">
              <p className="text-[12px]">PRINCE2 Foundation</p>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}
