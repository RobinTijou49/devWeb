<template>
  <div class="todo-container">
    <div v-if="view === 'task'">
      <h1>{{ task.title }}</h1>
      <p>{{ task.description }}</p>

      <v-btn color="primary" @click="view = 'subtasks'"> Commencer </v-btn>
    </div>

    <div v-if="view === 'subtasks'">
      <h2>Tâches</h2>

      <v-list>
        <v-list-item
          v-for="(sub, index) in task.subtasks"
          :key="index"
          @click="openSubtask(index)"
          class="subtask-item"
        >
          {{ sub.title }}
        </v-list-item>
      </v-list>

      <v-btn variant="text" @click="view = 'task'"> Retour </v-btn>
    </div>

    <div v-if="view === 'detail'">
      <h2>{{ currentSubtask.title }}</h2>
      <p>{{ currentSubtask.description }}</p>

      <div class="actions">
        <v-btn variant="text" :disabled="currentSubtaskIndex === 0" @click="prevSubtask">
          Précédent
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
          v-if="currentSubtaskIndex < task.subtasks.length - 1"
          color="primary"
          @click="nextSubtask"
        >
          Suivant
        </v-btn>

        <v-btn v-else color="success" @click="completeTask"> Terminé </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      view: 'task',
      currentSubtaskIndex: 0,

      task: {
        title: 'Créer un formulaire multi-étapes',
        description: 'Suis les étapes pour construire ton formulaire.',
        subtasks: [
          {
            title: 'Créer la structure',
            description: 'Mettre en place les composants et la base Vue.',
          },
          {
            title: 'Ajouter les champs',
            description: 'Créer les inputs et gérer les v-model.',
          },
          {
            title: 'Gérer la navigation',
            description: 'Ajouter les boutons suivant / précédent.',
          },
        ],
      },
    }
  },

  computed: {
    currentSubtask() {
      return this.task.subtasks[this.currentSubtaskIndex]
    },
  },

  methods: {
    openSubtask(index) {
      this.currentSubtaskIndex = index
      this.view = 'detail'
    },

    nextSubtask() {
      this.currentSubtaskIndex++
    },

    prevSubtask() {
      this.currentSubtaskIndex--
    },

    completeTask() {
      this.currentSubtaskIndex = 0
      this.view = 'subtasks'
    },
  },
}
</script>

<style scoped>
.todo-container {
  max-width: 700px;
  margin: auto;
  padding: 30px;
}

.subtask-item {
  cursor: pointer;
  border-radius: 10px;
  margin-bottom: 8px;
  transition: 0.2s;
}

.subtask-item:hover {
  background: rgba(0, 0, 0, 0.05);
}

.actions {
  display: flex;
  align-items: center;
  margin-top: 20px;
}
</style>
