import { FcGoogle } from 'react-icons/fc';

interface GoogleLinkProps {
  link: string;
}

export const GoogleLink: React.FC<GoogleLinkProps> = ({ link }) => {
  return (
    <a href={link}>
      <FcGoogle fontSize="28px" />
    </a>
  );
};
