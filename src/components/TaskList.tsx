import TaskListItem from "./TaskListItem";

export default function TaskList() {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-[#111827]">
      {/* Cabeçalho da lista */}
      <div className="grid grid-cols-[minmax(0,1fr)_140px_120px_80px] items-center border-b border-slate-800 px-6 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
        <span>Tarefa</span>
        <span>Status</span>
        <span>Prioridade</span>
        <span className="text-right">Ações</span>
      </div>

      {/* Tarefas de exemplo */}
      <div className="divide-y divide-slate-800">
        <TaskListItem
          title="Implementar autenticação"
          description="Criar o fluxo de login e cadastro"
          status="Em andamento"
          priority="Alta"
        />

        <TaskListItem
          title="Construir interface do DevTask"
          description="Finalizar os componentes principais"
          status="A fazer"
          priority="Média"
        />

        <TaskListItem
          title="Configurar o banco de dados"
          description="Preparar a estrutura inicial do PostgreSQL"
          status="Concluída"
          priority="Baixa"
        />
      </div>

      {/* Rodapé */}
      <div className="border-t border-slate-800 px-6 py-4 text-sm text-slate-500">
        Exibindo 3 tarefas de exemplo
      </div>
    </div>
  );
}