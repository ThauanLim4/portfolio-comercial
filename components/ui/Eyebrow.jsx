export default function Eyebrow({ children, pulse = false, className = "" }) {
  return (
    <div
      className={`text-[0.72rem] uppercase tracking-[0.15em] text-[#aeb7c7] font-bold mb-4 ${className}`}
    >
      {pulse && (
        <span
          className="inline-block w-1.5 h-1.5 rounded-full bg-accent-2 mr-1.5 shadow-[0_0_14px_rgba(35,213,171,0.7)]"
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  );
}
