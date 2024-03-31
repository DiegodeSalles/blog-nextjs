export default function Card({ link, className, children }) {
  return (
    <div className="border rounded-md border-gray-600 p-4">
      <a href={link} className={className}>{children}</a>
    </div>
  );
}