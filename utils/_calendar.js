// Utilities for backfilling the calendar.

import { AsyncStorage } from 'react-native'
import { getMetricMetaInfo, timeToString, getStackMetaInfo } from './helpers'

export const CALENDAR_STORAGE_KEY = 'UdaciFitness:calendar'

function getRandomNumber (max) {
  return Math.floor(Math.random() * max) + 0
}

function setDummyData () {
  const { mood, energy, productivity, focus} = getMetricMetaInfo()
  const { caffeineTheanine, creatine, fishOil} = getStackMetaInfo()


  let dummyData = {}
  const timestamp = Date.now()

  for (let i = -183; i < 0; i++) {
    const time = timestamp + i * 24 * 60 * 60 * 1000
    const strTime = timeToString(time)
    dummyData[strTime] = getRandomNumber(3) % 2 === 0
      ? {
          mood: getRandomNumber(mood.max),
          energy: getRandomNumber(energy.max),
          productivity: getRandomNumber(productivity.max),
          focus: getRandomNumber(focus.max),
          caffeineTheanine: getRandomNumber(caffeineTheanine.max),
          creatine: getRandomNumber(creatine.max),
          fishOil: getRandomNumber(fishOil)
        }
      : null
  }

  AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(dummyData))

  return dummyData
}

function setMissingDates (dates) {
  const length = Object.keys(dates).length
  const timestamp = Date.now()

  for (let i = -183; i < 0; i++) {
    const time = timestamp + i * 24 * 60 * 60 * 1000
    const strTime = timeToString(time)

    if (typeof dates[strTime] === 'undefined') {
      dates[strTime] = null
    }
  }

  return dates
}

export function formatCalendarResults (results) {
  return results === null
    ? setDummyData()
    : setMissingDates(JSON.parse(results))
}
