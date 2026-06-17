interface Props {
  backgroundClass?: string;
  aside: number;
  down: number;
}

export default function DotDecoration({
  backgroundClass = "bg-primary-soft",
  aside,
  down,
}: Props) {
  return (
    <div className="flex flex-col gap-5">
      {Array.from({ length: down }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex gap-5">
          {Array.from({ length: aside }).map((_, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`w-1 h-1 rounded-full ${backgroundClass}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
