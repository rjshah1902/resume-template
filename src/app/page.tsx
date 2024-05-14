import Link from 'next/link';
import { templatesIds } from '../helpers/getTemplate';
import Navbar from '../components/shared/layout/Navbar';

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col">
      <Navbar />
      <main className="h-full flex flex-col gap-5 pb-20">
        <div className="flex gap-5 p-24">
          {templatesIds.map((id) => (
            <Link
              key={id}
              className="text-white h-max border px-5 py-6 rounded-lg hover:-translate-y-[4px] transition-transform active:translate-y-[8px]"
              href={`/resume-templates/${id}`}>
              Visit Template {id}
            </Link>
          ))}
        </div>
        <div className="pb-14">
          <h1 className="text-center text-5xl font-bold">Magical Resume</h1>
          <p className="text-center">Coming Soon</p>
        </div>
      </main>
    </div>
  );
}
