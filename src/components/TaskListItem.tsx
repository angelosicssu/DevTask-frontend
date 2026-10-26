type TaskListItemProps = {
  title: string;
  description: string;
  status: "A fazer" | "Em andamento" | "Concluída";
  priority: "Alta" | "Média" | "Baixa";
};

export default function TaskListItem({
  title,
  description,
  status,
  priority,
}: TaskListItemProps) {
  const statusStyles = {
    "A fazer": "bg-slate-700/40 text-slate-300",
    "Em andamento": "bg-blue-500/10 text-blue-400",
    "Concluída": "bg-emerald-500/10 text-emerald-400",
  };

  const priorityStyles = {
    Alta: "bg-red-500/10 text-red-400",
    Média: "bg-amber-500/10 text-amber-400",
    Baixa: "bg-slate-700/40 text-slate-400",
  };

  return (
    <div className="grid grid-cols-[minmax(0,1fr)_140px_120px_80px] items-center gap-4 px-6 py-5 transition-colors hover:bg-slate-800/30">
      {/* Informações da tarefa */}
      <div className="flex min-w-0 items-center gap-3">
        <div
          className={`flex size-5 shrink-0 items-center justify-center rounded-md border ${
            status === "Concluída"
              ? "border-emerald-500 bg-emerald-500 text-[#0B0F19]"
              : "border-slate-600"
          }`}
        >
          {status === "Concluída" && (
            <span className="text-xs font-bold">✓</span>
          )}
        </div>

        <div className="min-w-0">
          <p
            className={`truncate text-sm font-medium ${
              status === "Concluída"
                ? "text-slate-500 line-through"
                : "text-slate-200"
            }`}
          >
            {title}
          </p>

          <p className="mt-1 truncate text-xs text-slate-500">
            {description}
          </p>
        </div>
      </div>

      {/* Status */}
      <div>
        <span
          className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>

      {/* Prioridade */}
      <div>
        <span
          className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${priorityStyles[priority]}`}
        >
          {priority}
        </span>
      </div>

      {/* Ações visuais */}
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