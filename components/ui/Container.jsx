export default function Container({ as: Tag = "div", className = "", children, ...rest }) {
  return (
    <Tag
      className={`w-[min(1120px,calc(100%-40px))] mx-auto max-[620px]:w-[min(100%-28px,1120px)] ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
