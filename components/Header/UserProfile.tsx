import Image from 'next/image';
import Link from 'next/link';
import { useRole } from '@/context/RoleContext';
import UserOne from '@/public/images/user.png';

const UserProfile = () => {
  const { role } = useRole();
  return (
    <Link className="flex items-center gap-4" href="https://github.com/AttigH/role-based-dash">
      <span className="text-right block">
        <span className="block text-sm font-medium text-black dark:text-white">Hamza Attig</span>
        <span className="block text-xs">{role!.charAt(0).toUpperCase() + role!.slice(1)}</span>
      </span>

      <span className="h-12 w-12 rounded-full">
        <Image src={UserOne} alt="User" />
      </span>
    </Link>
  );
};

export default UserProfile;
