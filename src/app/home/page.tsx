import { Profile } from "@/widgets/profile/ui/Profile";
import { Gnb } from "@/widgets/gnb";

export default function Home() {
  return (
    <div className="grid grid-cols-4 grid-rows-3 w-full h-full">
      <Gnb />
      <Profile />
      <div className="row-span-2 col-span-3">Recent Posts Area</div>
    </div>
  );
}
