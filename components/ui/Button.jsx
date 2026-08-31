const VARIANTS = {
  default:
    "bg-ink text-[#0a0c10] px-5 py-3.5 text-[0.92rem] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(255,255,255,0.12)]",
  small:
    "bg-ink text-[#0a0c10] px-4 py-2.5 text-[0.82rem] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(255,255,255,0.12)]",
  ghost:
    "bg-transparent text-ink border-line px-5 py-3.5 text-[0.92rem]",
  light:
    "bg-white text-[#080a0f] px-5 py-3.5 text-[0.92rem]",
};

export default function Button({
  href,
  children,
  variant = "default",
  target,
  rel,
  className = "",
  ...rest
}) {
  const classes = `inline-flex items-center gap-2.5 rounded-xl font-bold transition duration-200 cursor-pointer border border-transparent ${
    VARIANTS[variant] || VARIANTS.default
  } ${className}`.trim();

  return (
    <a href={href} className={classes} target={target} rel={rel} {...rest}>
      {children}
    </a>
  );
}
