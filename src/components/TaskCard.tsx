type TaskCardProps = {
  title: string;
  description: string;
  priority: "Alta" | "Média" | "Baixa";
};

export default function TaskCard({
  title,
  description,
  priority,
}: TaskCardProps) {
  const priorityStyles = {
    Alta: "bg-red-500/10 text-red-400",
    Média: "bg-amber-500/10 text-amber-400",
    Baixa: "bg-slate-700/40 text-slate-400",
  };

  return (
    <article className="rounded-xl border border-slate-800 bg-[#111827] p-4 transition-colors hover:border-slate-700">
      <div className="mb-3 flex items-center justify-between">
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium ${priorityStyles[priority]}`}
        >
          {priority}
        </span>

        <button
          type="button"
          aria-label={`Mais opções para ${title}`}
          className="rounded-md px-2 py-1 text-slate-500 transition-colors hover:bg-slate-800 hover:text-slate-200"
        >
          ⋯
        </button>
      </div>

      <h3 className="text-sm font-semibold text-slate-200">{title}</h3>

      <p className="mt-2 text-xs leading-5 text-slate-500">
        {description}
      </p>

      <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-3">
        <span className="text-xs text-slate-500">DevTask</span>

        <div className="flex size-7 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10 text-xs font-semibold text-blue-400">
          A
        </div>
      </div>
    </article>
  );
}