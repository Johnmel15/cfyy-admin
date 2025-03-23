export default function ForbiddenPage() {
  return (
    <div className="flex flex-col justify-center items-center h-[-webkit-fill-available] text-center">
      <h1 className="text-5xl font-bold text-primary">403 - Forbidden</h1>
      <p className="text-gray-600 mt-2">
        Oops! You are not authorize to access this page.
      </p>
    </div>
  );
}
