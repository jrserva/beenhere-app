type Props = {
  lugar: string;
  tempo: string;
  comentario: string;
  vibes: string[];
};

export function CheckinCard({ lugar, tempo, comentario, vibes }: Props) {
  return (
    <div className="border p-3 rounded-xl bg-white shadow-sm">
      <div className="flex justify-between items-center">
        <div className="font-semibold">{lugar}</div>
        <div className="text-sm text-gray-500">{tempo}</div>
      </div>
      <div className="text-sm text-gray-700 mt-1">"{comentario}"</div>
      <div className="flex gap-2 mt-2 flex-wrap">
        {vibes.map((vibe, idx) => (
          <span
            key={idx}
            className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
          >
            {vibe}
          </span>
        ))}
      </div>
    </div>
  );
}
