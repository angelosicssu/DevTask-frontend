import type { FormHTMLAttributes, SyntheticEvent } from "react";

type TaskFormProps = {
  title: string,
  onTitleChange: (value: string) => void;
  onSubmit: (event: SyntheticEvent<HTMLFormElement>) => void,
  onCancel?: () => void;
};

export default function TaskForm({ title, onTitleChange, onSubmit, onCancel }: TaskFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-2xl rounded-2xl border border-slate-800 bg-[#111827] p-6 shadow-xl shadow-black/10 sm:p-8"
    >
      {/* Cabeçalho */}
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-100">
            Nova tarefa
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            Preencha os detalhes da tarefa que deseja criar.
          </p>
        </div>

        <button
          type="button"
          aria-label="Fechar formulário"
          onClick={onCancel}
          className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-800 hover:text-slate-200"
        >
          ✕
        </button>
      </div>

      <div className="space-y-5">
        {/* Título */}
        <div>
          <label
            htmlFor="task-title"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Título <span className="text-red-400">*</span>
          </label>

          <input
            id="task-title"
            type="text"
            value={title}
            onChange={(event) => onTitleChange(event.target.value)}
            placeholder="Ex.: Implementar autenticação"
            className="w-full rounded-lg border border-slate-700 bg-[#0B0F19] px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
          />
        </div>

        {/* Descrição */}
        <div>
          <label
            htmlFor="task-description"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Descrição
          </label>

          <textarea
            id="task-description"
            rows={4}
            placeholder="Descreva o que precisa ser feito..."
            className="w-full resize-y rounded-lg border border-slate-700 bg-[#0B0F19] px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
          />
        </div>

        {/* Prioridade e status */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="task-priority"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Prioridade
            </label>

            <select
              id="task-priority"
              defaultValue="medium"
              className="w-full rounded-lg border border-slate-700 bg-[#0B0F19] px-4 py-3 text-sm text-slate-200 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
            >
              <option value="low">Baixa</option>
              <option value="medium">Média</option>
              <option value="high">Alta</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="task-status"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Status
            </label>

            <select
              id="task-status"
              defaultValue="todo"
              className="w-full rounded-lg border border-slate-700 bg-[#0B0F19] px-4 py-3 text-sm text-slate-200 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
            >
              <option value="todo">A fazer</option>
              <option value="in-progress">Em andamento</option>
              <option value="done">Concluída</option>
            </select>
          </div>
        </div>
      </div>

      {/* Ações */}
      <div className="mt-8 flex flex-col-reverse gap-3 border-t border-slate-800 pt-5 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800"
        >
          Cancelar
        </button>

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-500"
        >
          + Criar tarefa
        </button>
      </div>
    </form>
  );
}