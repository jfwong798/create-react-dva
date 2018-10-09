const langOptions = ['en_US', 'zh_HK', 'zh_CN']

const menuGlobal = [
  {
    id: 'aaa',
    pid: '0',
    name: 'aaa页',
    icon: 'user',
    path: '/aaa',
    models: () => [import('../models/aaa')], //models可多个
    component: () => import('../routes/AAA'),
  },
  {
    id: 'bbb',
    pid: '0',
    name: 'bbb页',
    icon: 'user',
    path: '/aaa/bbb',
    models: () => [import('../models/bbb')], //models可多个
    component: () => import('../routes/BBB'),
  },
  {
    id: 'ccc',
    pid: '0',
    name: 'ccc页',
    icon: 'user',
    path: '/ccc',
    models: () => [import('../models/ccc')], //models可多个
    component: () => import('../routes/CCC'),
  },
]

export default {
  menuGlobal,
  langOptions,
}
