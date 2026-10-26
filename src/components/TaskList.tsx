
import type { Task } from "../types/task";
import TaskListItem from "./TaskListItem";

type TaskListProps = {
  tasks: Task[],
  onToggleTask: (id: number) => void
};

export default function TaskList({ tasks, onToggleTask }: TaskListProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-[#111827]">
      <div className="grid grid-cols-[minmax(0,1fr)_140px_80px] items-center border-b border-slate-800 px-6 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
        <span>Tarefa</span>
        <span>Status</span>
        <span className="text-right">Ações</span>
      </div>

      <div className="divide-y divide-slate-800">
        {tasks.length === 0 ? (
          <p className="px-6 py-10 text-center text-sm text-slate-500">
            Nenhuma tarefa por enquanto. Crie sua primeira tarefa!
          </p>
        ) : (
          tasks.map((task) => (
            <TaskListItem
              key={task.id}
              title={task.title}
              completed={task.completed}
            />
          ))
        )}
      </div>

      <div className="border-t border-slate-800 px-6 py-4 text-sm text-slate-500">
        Exibindo {tasks.length}{" "}
        {tasks.length === 1 ? "tarefa" : "tarefas"}
      </div>
    </div>
  );
}
