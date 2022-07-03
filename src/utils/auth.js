// 超时时间

import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from './constant'
// 登录  超时
import Storage from './localstorage'

// 获取时间戳
export function getTimeStamp() {
  return Storage.getToken(TIME_STAMP)
}

// 设置时间戳
export function setTimeStamp() {
  Storage.setToken(TIME_STAMP, Date.now())
}

// 是否超时
export function isCheckTimeout() {
  // 当前时间戳
  const currentTime = Date.now()
  // 缓存时间戳
  const timeStamp = getTimeStamp()
  return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE
}
