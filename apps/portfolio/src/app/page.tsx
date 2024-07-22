import { EmploymentExperience } from '@alex/ui/organisms/employment-experience';
import { JobTitleRandomizer } from '@alex/ui/organisms/job-title-randomizer';

export default function Page() {
  return (
    <div className="">
      <p className="text-stone-200 text-center text-base leading-5 pb-8">
        Versatile and innovative <br /> <JobTitleRandomizer /> <br /> creating
        bespoke user interfaces <br /> using modern technologies <br />
        and best practices.
      </p>

      <EmploymentExperience />
    </div>
  );
}
