/* eslint-disable-next-line */
export interface EmploymentCardProps {
  index: number;
}

export async function EmploymentCard(props: EmploymentCardProps) {
  return (
    <div>
      <span className="text-2xl font-semibold cursor-default select-none">
        {props.index}
      </span>
    </div>
  );
}

export default EmploymentCard;
