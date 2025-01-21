import { ProfilePage } from '@/pageComponents/ProfilePage/ProfilePage';
import { fakeProfileData } from '@/utils/fakeServerData';
import { mockFetch } from '@/utils/mockFetch';
import { notFound } from 'next/navigation';

export default async function Profile() {
  const data = await mockFetch<any>(fakeProfileData);

  if (!data) return notFound();

  return <ProfilePage data={data} />;
}
