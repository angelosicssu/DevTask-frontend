
type TaskListItemProps = {
  title: string;
  completed: boolean;
};

export default function TaskListItem({
  title,
  completed,
}: TaskListItemProps) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_140px_80px] items-center gap-4 px-6 py-5 transition-colors hover:bg-slate-800/30">
      <div className="flex min-w-0 items-center gap-3">
        <div
          className={`flex size-5 shrink-0 items-center justify-center rounded-md border ${
            completed
              ? "border-emerald-500 bg-emerald-500 text-[#0B0F19]"
              : "border-slate-600"
          }`}
        >
          {completed && <span className="text-xs font-bold">✓</span>}
        </div>

        <p
          className={`truncate text-sm font-medium ${
            completed
              ? "text-slate-500 line-through"
              : "text-slate-200"
          }`}
        >
          {title}
        </p>
      </div>

      <div>
        <span
          className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
            completed
              ? "bg-emerald-500/10 text-emerald-400"
              : "bg-slate-700/40 text-slate-300"
          }`}
        >
          {completed ? "Concluída" : "A fazer"}
        </span>
      </div>

      <div className="flex justify-end gap-1">
        <button
          type="button"
          aria-label={`Editar ${title}`}
          className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-700 hover:text-slate-200"
        >
          ✎
        </button>

        <button
          type="button"
          aria-label={`Excluir ${title}`}
          className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-red-500/10 hover:text-red-400"
        >
          ⋯
        </button>
      </div>
    </div>
  );
}
