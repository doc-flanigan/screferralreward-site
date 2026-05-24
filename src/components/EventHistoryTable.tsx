import { REFERRAL_EVENTS } from '@/data/events';

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

const STATUS_CHIP: Record<string, string> = {
  past: 'bg-white/5 text-platinum/60 border-white/10',
  live: 'bg-green-500/15 text-green-300 border-green-500/40',
  upcoming: 'bg-gold/15 text-gold border-gold/40'
};

export default function EventHistoryTable() {
  const sorted = [...REFERRAL_EVENTS].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );
  return (
    <div className="overflow-x-auto rounded-xl border border-white/5 bg-charcoalMid">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-xs uppercase tracking-widest text-platinum/50 border-b border-white/5">
            <th className="px-4 py-3 font-medium">Event</th>
            <th className="px-4 py-3 font-medium hidden sm:table-cell">Window</th>
            <th className="px-4 py-3 font-medium">Reward</th>
            <th className="px-4 py-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((e) => (
            <tr key={e.name} className="border-b border-white/5 last:border-0 hover:bg-charcoal/50">
              <td className="px-4 py-3 align-top">
                <p className="font-display text-platinum">{e.name}</p>
                {e.note && (
                  <p className="text-xs text-platinum/50 mt-1 max-w-md">{e.note}</p>
                )}
              </td>
              <td className="px-4 py-3 align-top hidden sm:table-cell whitespace-nowrap text-platinum/70">
                {formatDate(e.startDate)} – {formatDate(e.endDate)}
              </td>
              <td className="px-4 py-3 align-top text-gold">{e.reward}</td>
              <td className="px-4 py-3 align-top">
                <span
                  className={`inline-block text-xs uppercase tracking-widest px-2 py-1 rounded border ${STATUS_CHIP[e.status]}`}
                >
                  {e.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
