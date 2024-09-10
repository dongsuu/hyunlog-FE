import * as Avatar from "@radix-ui/react-avatar";

interface Props {
  url: string;
  alt: string;
}

export function ProfileAvatar({ url, alt }: Props) {
  return (
    <Avatar.Root className="inline-flex items-center justify-center">
      <Avatar.Image
        width={120}
        height={120}
        src={url}
        alt={alt}
        className="rounded-full"
      />
      <Avatar.Fallback delayMs={600}>Loading...</Avatar.Fallback>
    </Avatar.Root>
  );
}
