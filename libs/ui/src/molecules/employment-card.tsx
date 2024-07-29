/* eslint-disable-next-line */
export interface EmploymentCardProps {
  companyName: string;
  dateStarted: string;
  dateEnded: string;
  position: string;
}

export function EmploymentCard({ companyName, dateStarted, dateEnded, position }: EmploymentCardProps) {
  return (
    <div>
      <h2 className="text-xl font-bold">{companyName}</h2>
      <p>{position}</p>
      <p>{dateStarted} - {dateEnded}</p>
    </div>
  );
}

export default EmploymentCard;

