interface Props {
  icon: React.ElementType;
  name: string;
  onClick: () => void;
}

export function Category({ icon: Icon, name, onClick }: Props) {
  return (
    <button className="flex flex-col gap-1 items-center" onClick={onClick}>
      <Icon />
      <div>{name}</div>
    </button>
  );
}
