import { Profile } from "@/widgets/profile/ui/Profile";
import { Gnb } from "@/widgets/gnb";
import { RecentPosts } from "@/widgets/recent-posts";

export default function Home() {
  return (
    <div className="grid grid-cols-4 grid-rows-3 w-full h-full">
      <Gnb />
      <Profile />
      <RecentPosts />
    </div>
  );
}
