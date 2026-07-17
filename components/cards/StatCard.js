export function StatCard({ stat }) {
  return (
    <div className="bg-white border border-border rounded-2xl p-[22px]">
      <div className="font-heading font-bold text-[30px] tracking-[-0.02em] text-ink">{stat.value}</div>
      <div className="text-[14.5px] text-[#5b6a61] mt-1">{stat.label}</div>
    </div>
  );
}
