import request from '@/utils/request'

export function upgradeFront() {
  return request.get('/system/upgrade/front')
}

export function upgradeBackend() {
  return request.get('/system/upgrade/backend')
}
