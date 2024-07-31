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
      <h2 className="text-xl font-bold select-none">{companyName}</h2>
      <p className="select-none">{position}</p>
      <p className="select-none">
        {dateStarted} - {dateEnded}
      </p>
    </div>
  );
}

export default EmploymentCard;
