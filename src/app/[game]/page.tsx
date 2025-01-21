import GameNavigation from '@/components/GameNavigation/GameNavigation';
import { MainPage } from '@/pageComponents/MainPage/MainPage';
import { fakeGameData, fakeGameList } from '@/utils/fakeServerData';
import { mockFetch } from '@/utils/mockFetch';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface IGamePage {
  params: Promise<{ game: string }>;
}

export async function generateStaticParams() {
  const { data } = await mockFetch<any>(fakeGameList);

  if (!data) {
    return [];
  }

  const slugPages = data.map((page) => ({
    page: page.slug,
  }));

  return slugPages;
}

export async function generateMetadata({ params }: IGamePage): Promise<Metadata> {
  const game = (await params).game;

  const data = await mockFetch<any>(fakeGameData);

  return {
    title: data?.[game]?.name,
    description: data?.[game]?.name,
  };
}

export default async function GamePage({ params }: IGamePage) {
  const game = (await params).game;

  const data = await mockFetch<any>(fakeGameData);

  if (!data) return notFound();

  const gameData = data[game];

  return (
    <>
      <GameNavigation />
      <MainPage gameData={gameData} />
    </>
  );
}
