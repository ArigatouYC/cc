<template>
    <div>
        <div>
            <input type="text" placeholder="id" v-model="studentId">
        </div>
        <div>
            <input type="text" placeholder="name" v-model="studentName">
        </div>
        <div>
            <button @click="addStudent(studentId, studentName)">点击添加一个学生</button>
        </div>
        studentsList:
        <div v-for="item in studentsList">
            <h3>id:{{ item.id }}-name:{{ item.name }}</h3>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStudentsStore } from "../store/students";
let StudentsStore = useStudentsStore()
let studentsList = StudentsStore.studentsList

let studentId = ref('')
let studentName = ref('')

let addStudent = function(id:string, name:string){
    StudentsStore.addStudent(id,name)
}

</script>

<style scoped></style>