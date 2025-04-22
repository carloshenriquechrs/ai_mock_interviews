'use client';

import { logout } from '@/lib/actions/general.action';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/sign-in');
  };

  return <Button className='btn-primary' onClick={handleLogout}>Logout</Button>;
}
