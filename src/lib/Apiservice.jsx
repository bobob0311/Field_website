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

export function NewsYearApi(category) {
  return pb.collection('News').getFullList({
    filter: `category="${category}"`,
    fields: 'year, month',
  });
}

// export function NewsApi(first, category) {
//   return pb.collection('News').getList(first, 5, {
//     filter: `category="${category}"`,
//     sort: '-created', // '-created'는 생성일 기준 내림차순 정렬을 의미합니다.
//   });
// }

// export function NewsFilterApi(year, month,category) {
//   return pb.collection('News').getList(first, 5, {
//     filter: `year="${year}" && month=${month}`,
//     sort: '-created', // '-created'는 생성일 기준 내림차순 정렬을 의미합니다.
//   });
// }

// export function NewsMonthApi(title) {
//   return pb.collection('NewsDetail').getFullList({
//     filter: `title="${title}"`,
//   });
// }

export function NewsDetailApi(id) {
  return pb.collection('NewsDetail').getFirstListItem(`id="${id}"`, {
    expand: 'contents',
  });
}

export function ReviewApi() {
  return pb.collection('Review').getFullList();
}

export function ProfileApi() {
  return pb.collection('Profile').getFullList();
}

export function DepartmentApi() {
  return pb.collection('Department').getFullList();
}

export function LoadDateData() {
  return pb.collection('Recruit').getFullList();
}
