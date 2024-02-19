import PocketBase from 'pocketbase';

const pb = new PocketBase(import.meta.env.VITE_API_URL);

pb.autoCancellation(false);

export function CampApi() {
  return pb.collection('camp').getFullList({});
}

export function NewsApi(selectCategory) {
  return pb.collection('News').getFullList({
    filter: `category="${selectCategory}"`,
  });
}

export function NewsMonthApi(title) {
  return pb.collection('NewsDetail').getFullList({
    filter: `newsId="${title}"`,
  });
}

export function NewsDetailApi(id) {
  return pb.collection('NewsDetail').getFirstListItem(`newsId="${id}"`, {
    expand: 'contents',
  });
}
