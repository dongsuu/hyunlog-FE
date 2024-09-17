"use client";
import { Post } from "@/entities/post";
import { useState } from "react";

const mockRecentPosts = [
  {
    id: 1,
    title: "9월 회고",
    subTitle: "9월 회고입니다 ~",
    createdAt: "2024-09-20",
    imageUrl:
      "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
  },
  {
    id: 2,
    title: "JavaScript 알아보기",
    subTitle: "JavaScript의 문법과 동작방법을 알아봅니다.",
    createdAt: "2024-09-12",
    imageUrl:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80",
  },
  {
    id: 3,
    title: "상태관리",
    subTitle: "상태관리 라이브러리 소개",
    createdAt: "2024-07-12",
    imageUrl:
      "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
  },
  {
    id: 4,
    title: "Next.js 톺아보기",
    subTitle: "Next.js 공식 문서를 정리한 내용입니다.",
    createdAt: "2024-06-13",
    imageUrl:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80",
  },
  {
    id: 5,
    title: "React Query",
    subTitle: "React Query 동작 방식 알아보기",
    createdAt: "2023-03-03",
    imageUrl:
      "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
  },
];

export function RecentPosts() {
  const [recentPosts, setRecentPosts] = useState(mockRecentPosts); // Todo. API Fetch
  return (
    <div className="row-span-2 col-span-3 p-8">
      <div className="text-4xl pb-8 font-sans">최근 글</div>
      {recentPosts.map((recentPost) => (
        <Post
          key={recentPost.id}
          title={recentPost.title}
          subTitle={recentPost.subTitle}
          createdAt={recentPost.createdAt}
          postImageUrl={recentPost.imageUrl}
        />
      ))}
    </div>
  );
}
