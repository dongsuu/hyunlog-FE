import Image from "next/image";

interface Props {
  title: string;
  subTitle: string;
  createdAt: string;
  postImageUrl: string;
}

export function Post({ title, subTitle, createdAt, postImageUrl }: Props) {
  return (
    <div className="flex flex-row gap-6 p-6 cursor-pointer">
      <Image
        width={140}
        height={120}
        src={postImageUrl}
        alt="title"
        style={{ objectFit: "cover" }}
        className="rounded-lg"
      />
      <div className="flex flex-col">
        <div className="text-2xl pb-2">{title}</div>
        <div className="text-lg pb-12">{subTitle}</div>
        <div className="text-sm font">{createdAt}</div>
      </div>
    </div>
  );
}
