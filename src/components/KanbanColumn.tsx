import TaskCard from "./TaskCard";

type KanbanColumnProps = {
  title: string;
  count: number;
  variant: "todo" | "progress" | "done";
  tasks: {
    title: string;
    description: string;
    priority: "Alta" | "Média" | "Baixa";
  }[];
};

export default function KanbanColumn({
  title,
  count,
  variant,
  tasks,
}: KanbanColumnProps) {
  const indicatorStyles = {
    todo: "bg-slate-500",
    progress: "bg-blue-400",
    done: "bg-emerald-400",
  };

  return (
    <section className="min-w-0 rounded-xl border border-slate-800/80 bg-[#0E1420] p-3">
      <header className="mb-4 flex items-center justify-between px-1 py-2">
        <div className="flex items-center gap-2.5">
          <span className={`size-2 rounded-full ${indicatorStyles[variant]}`} />

          <h2 className="text-sm font-semibold text-slate-200">{title}</h2>

          <span className="flex size-6 items-center justify-center rounded-md bg-slate-800 text-xs text-slate-400">
            {count}
          </span>
        </div>

        <button
          type="button"
          aria-label={`Adicionar tarefa em ${title}`}
          className="rounded-lg px-2 py-1 text-lg leading-none text-slate-500 transition-colors hover:bg-slate-800 hover:text-slate-200"
        >
          +
        </button>
      </header>

      <div className="flex flex-col gap-3">
        {tasks.map((task, index) => (
          <TaskCard
            key={`${task.title}-${index}`}
            title={task.title}
            description={task.description}
            priority={task.priority}
          />
        ))}
      </div>

      <button
        type="button"
        className="mt-3 w-full rounded-lg border border-dashed border-slate-800 py-2.5 text-sm text-slate-500 transition-colors hover:border-slate-700 hover:text-slate-300"
      >
        + Adicionar tarefa
      </button>
    </section>
  );
}