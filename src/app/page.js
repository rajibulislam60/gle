import Bannar from "@/components/home/Bannar";
import CompetitionsTitle from "@/components/home/CompetitionsTitle";
import CoursesTitle from "@/components/home/CoursesTitle";
import Details from "@/components/home/Details";

export default function Home() {
  return (
    <div>
      <main>
        <div>
          <Bannar />
          <CoursesTitle />
          <CompetitionsTitle />
          <Details />
        </div>
      </main>
    </div>
  );
}
