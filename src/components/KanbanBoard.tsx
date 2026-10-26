import KanbanColumn from "./KanbanColumn";

export default function KanbanBoard() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <KanbanColumn
        title="A fazer"
        count={2}
        variant="todo"
        tasks={[
          {
            title: "Construir interface do DevTask",
            description: "Finalizar os componentes principais",
            priority: "Média",
          },
          {
            title: "Adicionar testes ao frontend",
            description: "Preparar os primeiros testes da aplicação",
            priority: "Baixa",
          },
        ]}
      />

      <KanbanColumn
        title="Em andamento"
        count={2}
        variant="progress"
        tasks={[
          {
            title: "Implementar autenticação",
            description: "Criar o fluxo de login e cadastro",
            priority: "Alta",
          },
          {
            title: "Estudar React e TypeScript",
            description: "Praticar componentes e tipagem",
            priority: "Média",
          },
        ]}
      />

      <KanbanColumn
        title="Concluída"
        count={1}
        variant="done"
        tasks={[
          {
            title: "Configurar o banco de dados",
            description: "Preparar a estrutura inicial do PostgreSQL",
            priority: "Baixa",
          },
        ]}
      />
    </div>
  );
}