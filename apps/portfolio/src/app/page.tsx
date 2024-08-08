import { EmploymentExperience } from '@alex/ui/organisms/EmploymentExperience';
import { JobTitleRandomizer } from '@alex/ui/organisms/JobTitleRandomizer';

export default function Page() {
  return (
    <div className="">
      <p className="text-stone-200 text-center text-base leading-5 pt-8 pb-12">
        Versatile and innovative <br /> <JobTitleRandomizer /> <br /> creating
        bespoke user interfaces <br /> using modern technologies <br />
        and best practices.
      </p>

      <EmploymentExperience />
    </div>
  );
}
