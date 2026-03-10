<template>
  <div class="min-h-screen flex items-center justify-center p-4 selection:bg-indigo-500/30">
    <div class="w-full max-w-md">
      <!-- Card Container -->
      <div class="bg-slate-800/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-700/50">
        <!-- Header -->
        <div class="mb-8">
          <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Tasks
          </h1>
          <p class="text-slate-400 text-sm font-medium">Manage your daily goals</p>
        </div>
        
        <!-- Input Section -->
        <div class="space-y-4">
          <div class="relative">
            <input 
              type="text" 
              v-model="newTodo" 
              @keyup.enter="addTodo"
              placeholder="What needs to be done?"
              class="w-full pl-4 pr-12 py-3.5 bg-slate-900/50 border border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 text-slate-200 placeholder-slate-500 transition-all duration-200"
            >
            <!-- Show live preview only when typing -->
            <AddButton 
              @add="addTodo"
              :disabled="!newTodo.trim()" 
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
              </svg>
            </AddButton>
          </div>
        </div>

        <!-- Task List -->
        <div class="mt-8 space-y-3">
          <TransitionGroup name="list" tag="ul" class="space-y-3 relative">
            <li 
              v-for="todo in todos" 
              :key="todo.id"
              class="group flex items-center justify-between p-4 bg-slate-700/30 border border-slate-600/30 rounded-2xl hover:bg-slate-700/50 hover:border-slate-500/50 transition-all duration-200"
            >
              <div class="flex items-center gap-3 overflow-hidden">
                <div class="w-2 h-2 rounded-full bg-indigo-400"></div>
                <span class="text-slate-200 font-medium truncate">{{ todo.text }}</span>
              </div>
              <button 
                @click="deleteTodo(todo.id)"
                class="text-slate-500 hover:text-rose-400 hover:bg-rose-400/10 p-2 rounded-xl opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-200"
                aria-label="Delete task"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
              </button>
            </li>
          </TransitionGroup>

          <!-- Empty State -->
          <div v-if="todos.length === 0" class="text-center py-8">
            <p class="text-slate-500 text-sm">You're all caught up!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddButton from './components/AddButton.vue'

export default {
  components: {
    AddButton
  },
  data() {
    return {
      newTodo: '',
      todos: [
        { id: 1, text: 'Learn Vue 3' },
        { id: 2, text: 'Master Tailwind CSS' },
        { id: 3, text: 'Build a Next-Gen App' }
      ],
      nextId: 4
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== '') {
        this.todos.push({
          id: this.nextId++,
          text: this.newTodo.trim()
        })
        this.newTodo = ''
      }
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    }
  }
}
</script>

<style>
/* Vue Transitions for the list */
.list-enter-active,
.list-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.list-enter-from {
  opacity: 0;
  transform: translateY(15px) scale(0.95);
}
.list-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
.list-leave-active {
  position: absolute;
  width: 100%;
}
.list-move {
  transition: transform 0.4s ease;
}
</style>
