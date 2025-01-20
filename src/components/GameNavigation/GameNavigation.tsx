import React from 'react';
import { mockFetch } from '@/utils/mockFetch';
import { fakeGameList } from '@/utils/fakeServerData';
import { ClientGameNavigation } from './ClientGameNavigation/ClientGameNavigation';

export default async function GameNavigation() {
  const data = await mockFetch<any>(fakeGameList);

  if (!data) return null;

  return <ClientGameNavigation data={data} />;
}
