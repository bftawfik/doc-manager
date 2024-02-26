import { PendingIcon, RejectedIcon, VerifiedIcon } from "../svgs";

interface StatusTypeProps {
  status: string;
}
const StatusType: React.FC<StatusTypeProps> = ({ status }) => {
  const statusIcons: { [key: string]: React.ReactNode } = {
    verified: <VerifiedIcon />,
    pending: <PendingIcon />,
    rejected: <RejectedIcon />,
  };

  const selectedIcon = statusIcons[status] || statusIcons.default;

  return <>{selectedIcon}</>;
};

export default StatusType;
