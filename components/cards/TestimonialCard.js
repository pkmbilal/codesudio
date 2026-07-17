export function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white border border-border rounded-card p-[26px] flex flex-col">
      <div className="font-heading text-[34px] leading-none text-brand">&ldquo;</div>
      <p className="text-base leading-[1.62] text-[#22302A] my-2 mb-5 flex-1">{testimonial.quote}</p>
      <div className="flex items-center gap-3">
        <span className="grid place-items-center w-10 h-10 rounded-[11px] bg-[linear-gradient(140deg,#57E23A,#0FA23C)] text-white font-heading font-bold text-[15px]">
          {testimonial.initials}
        </span>
        <div>
          <div className="font-semibold text-[14.5px]">{testimonial.name}</div>
          <div className="text-[12.5px] text-text-dark-6">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}
