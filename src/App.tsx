import { useState, type SyntheticEvent } from 'react'
import './App.css'
import type { Task } from './types/task';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  function handleSubmit(event: SyntheticEvent<HTMLFormElement>) { // receives a form
    event.preventDefault();

    if(!title.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      title: title.trim(),
      completed: false
    }

    setTasks((currentTasks) => [...currentTasks, newTask]);
    setTitle('');
    setIsVisible(false);
  }

  function handleToggleTask(id: number) {
    setTasks((currentTasks) => 
      currentTasks.map((task) => task.id === id ? {...task, completed: !task.completed} : task)
    );
  }

  return (
    <main className="min-h-screen bg-[#0B0F19] text-slate-100">
      <div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-12">

        {/* Header */}
        <header className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
              D
            </div>
            <div>
              <h1 className="text-xl font-semibold tracking-tight">
                DevTask
              </h1>
              <p className="text-xs text-slate-500">
                Workspace pessoal
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-sm text-slate-400">
              Task management
            </span>
          </div>
        </header>

        {/* Page heading */}
        <section className="mb-8">
          <p className="mb-2 text-sm font-medium text-blue-400">
            WORKSPACE / TASKS
          </p>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Minhas tarefas
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                Organize seu trabalho e acompanhe seu progresso.
              </p>
            </div>

            <button
              type="button"
              className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500"
              onClick={() => setIsVisible(true)}
            >
              + Nova tarefa
            </button>
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-[#111827] p-5">
            <p className="text-sm text-slate-400">Total de tarefas</p>
            <p className="mt-3 text-3xl font-semibold">{tasks.length}</p>
            <p className="mt-2 text-xs text-slate-500">
              Tarefas no workspace
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-[#111827] p-5">
            <p className="text-sm text-slate-400">Em andamento</p>
            <p className="mt-3 text-3xl font-semibold text-blue-400">{tasks.filter((task) => !task.completed).length}</p>
            <p className="mt-2 text-xs text-slate-500">
              Trabalho em progresso
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-[#111827] p-5">
            <p className="text-sm text-slate-400">Concluídas</p>
            <p className="mt-3 text-3xl font-semibold text-emerald-400">{tasks.filter((task) => task.completed).length}</p>
            <p className="mt-2 text-xs text-slate-500">
              Tarefas finalizadas
            </p>
          </div>
        </section>

        {isVisible && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-4 backdrop-blur-sm">
            <TaskForm
              title={title}
              onTitleChange={setTitle}
              onSubmit={handleSubmit}
              onCancel={() => setIsVisible(false)}
            />
          </div>
        )}
        

        {/* Task workspace */}
        <section className="overflow-hidden rounded-xl border border-slate-800 bg-[#111827]">

          {/* Toolbar */}
          <div className="flex flex-col gap-4 border-b border-slate-800 p-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm font-medium text-white"
              >
                ☰ Lista
              </button>

              <button
                type="button"
                className="rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-white"
              >
                ▦ Kanban
              </button>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Buscar tarefas..."
                className="w-full rounded-lg border border-slate-700 bg-[#0B0F19] px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-500 sm:w-56"
              />

              <button
                type="button"
                className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800"
              >
                Todos os status
              </button>
            </div>
          </div>

          {/* List heading */}
          <TaskList tasks={tasks} onToggleTask={handleToggleTask}/>
        </section>
      </div>
    </main>
  )
}

export default App
