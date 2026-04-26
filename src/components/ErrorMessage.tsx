export function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-4 text-red-400 text-sm flex items-center gap-2">
      <span>⚠️</span>
      <span>{message}</span>
    </div>
  )
}
