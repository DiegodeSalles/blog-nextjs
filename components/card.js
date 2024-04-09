export default function Card({ className, children }) {
  return (
    <div className={`border rounded-md border-gray-600 p-4 ${className}`}>
      {children}
    </div>
  );
}
