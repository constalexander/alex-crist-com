/* eslint-disable-next-line */
export interface EmploymentCardProps {
  index: number;
  companyName: string;
  dateStarted: string;
  dateEnded: string;
  position: string;
}

export function EmploymentCard({
  index,
  companyName,
  dateStarted,
  dateEnded,
  position,
}: EmploymentCardProps) {
  return (
    <div>
      <p className="select-none">{index + 1}</p>
      <p className="text-xl font-bold select-none">{companyName}</p>
      <span className="select-none">{position}</span>
      <p className="select-none">
        {dateStarted} - {dateEnded}
      </p>
    </div>
  );
}

export default EmploymentCard;
