/* eslint-disable-next-line */
export interface EmploymentCardProps {
  index: number;
  companyName: string;
  dateStarted: string;
  dateEnded: string;
  position: string;
  responsibilities: string[];
}

export function EmploymentCard({
  index,
  companyName,
  dateStarted,
  dateEnded,
  position,
  responsibilities,
}: EmploymentCardProps) {
  return (
    <div className="text-center min-w-[300px] w-full min-h-[300px] p-5">
      <span className="select-none float-right relative -top-[20px] left-[40px] hidden">
        {index + 1}
      </span>
      <span className="select-none text-lg text-stone-400 font-bold tracking-wider">
        {companyName}
      </span>
      <span className="select-none text-base italic block">{position}</span>
      <span className="select-none text-sm mt-1">
        {dateStarted} - {dateEnded}
      </span>
      <span>
        <ul className="list-disc list-inside text-left mt-[20px]">
          {responsibilities.map((responsibility, idx) => (
            <li key={idx} className="select-none">{responsibility}</li>
          ))}
        </ul>
      </span>
    </div>
  );
}

export default EmploymentCard;

