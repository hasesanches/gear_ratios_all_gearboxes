<script setup>
import presets from './presets.js'
import Char from './components/Char.vue'
import { onMounted, watch, ref, computed } from 'vue'
import chartOptions from "./chartOptions.js";
import {generateContrastColor, generateDataset} from "@/helper.js";

const rpmOptions = Array.from({ length: 30 }, (_, i) => (i + 1) * 250)
const widthOptions = [205, 215, 225, 235, 245, 255, 265, 275, 285]
const aspectOptions = [30, 35, 40, 45, 50, 55, 60, 65]
const rimOptions = [15, 16, 17, 18, 19, 20, 21]

const STORAGE_KEY = 'transmission-chart:v1'
const selectedPresetId = ref(presets[0].id)
const transmissions = ref([])

/* =======================
   Добавление КПП
======================= */
function addTransmission() {
  const preset = presets.find(p => p.id === selectedPresetId.value)
  if (!preset) return

  const usedColors = transmissions.value.map(t => t.color)

  transmissions.value.push({
    id: crypto.randomUUID(),
    label: preset.label,
    // color: preset.color,
    color: generateContrastColor(usedColors),

    main: preset.main,
    gears: [...preset.gears],
    redline: preset.redline,
    tire: { ...preset.tire },

    enabled: true,
    editable: true
  })
}

/* =======================
   Удаление КПП
======================= */
function removeTransmission(id) {
  transmissions.value = transmissions.value.filter(t => t.id !== id)
}

/* =======================
   Chart.js data и options
======================= */
const chartData = computed(() => ({
  datasets: transmissions.value.filter(t => t.enabled).map(generateDataset)
}))

/* =======================
   Сохраняем изменения в localStorage
======================= */
watch(
    transmissions,
    (newVal) => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newVal))
      } catch (e) {
        console.warn('Ошибка сохранения в localStorage', e)
      }
    },
    { deep: true }
)

/* =======================
   Загружаем сохранённые КПП из localStorage
======================= */
onMounted(() => {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (!saved) return

  try {
    const parsed = JSON.parse(saved)
    if (Array.isArray(parsed)) {
      transmissions.value = parsed.map(t => ({
        ...t,
        id: t.id ?? crypto.randomUUID()
      }))
    }
  } catch (e) {
    console.warn('Ошибка загрузки КПП из localStorage', e)
  }
})
</script>

<template>
  <Char :chart-data="chartData" :chart-options="chartOptions" />

  <div class="control" style="margin: 1em 0;">
    <select v-model="selectedPresetId">
      <option v-for="p in presets" :key="p.id" :value="p.id">{{ p.label }} (ГП: {{ p.main }}, передаточные {{ p.gears.join(', ') }})</option>
    </select>
    <button @click="addTransmission" style="margin-left: 0.5em;">Добавить КПП</button>
  </div>

  <div class="gear-info" v-if="transmissions.length">
    <div
        v-for="t in transmissions"
        :key="t.id"
        class="gear-info-item"
        :style="{ borderColor: t.color }"
    >
      <h3>
        <input v-model="t.label" style="font-weight: bold; font-size: 1.1em; width: 380px" />
        <button @click="removeTransmission(t.id)" style="color: red; margin-left: 1em;">✕</button>
      </h3>

      <div style="margin-top: 0.5em;">
        <label>
          Отсечка:
          <select style="margin-left: 1.1em;" v-model.number="t.redline">
            <option v-for="r in rpmOptions" :key="r" :value="r">{{ r }}</option>
          </select>
        </label>

        <label>
          Главная пара:
          <input type="text" v-model.number="t.main" />
        </label>

        <label >
          Цвет:
          <input type="color" v-model="t.color" />
        </label>
      </div>

      <div style="margin-top: 0.5em;">
        Передачи:
        <input
            v-for="(_, i) in t.gears"
            :key="i"
            type="text"
            v-model.number="t.gears[i]"
            style="margin-left: 0.3em;"
        />
      </div>

      <div style="margin-top: 0.5em;">
        Шины:
        <select style="margin-left: 2.3em;" v-model.number="t.tire.width">
          <option v-for="w in widthOptions" :key="w" :value="w">{{ w }}</option>
        </select>
        <select style="margin-left: 0.3em;" v-model.number="t.tire.aspect">
          <option v-for="a in aspectOptions" :key="a" :value="a">{{ a }}</option>
        </select>
        <select style="margin-left: 0.3em;" v-model.number="t.tire.rim">
          <option v-for="r in rimOptions" :key="r" :value="r">{{ r }}</option>
        </select>

        <label style="margin-left: 0.3em;">
          <input type="checkbox" v-model="t.enabled" />
          Показывать на графике
        </label>
      </div>
    </div>
  </div>
</template>

