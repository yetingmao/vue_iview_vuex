export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'Login - 登录',
  },
  component: () => import('@/pages/login'),
};

export const page404 = {
  path: '/*',
  name: 'error-404',
  meta: {
    title: '404-页面不存在',
  },
  component: () => import('@/pages/404'),
};

export const page403 = {
  path: '/403',
  meta: {
    title: '403-权限不足',
  },
  name: 'error-403',
  component: () => import('@/pages/403'),
};

export const page500 = {
  path: '/500',
  meta: {
    title: '500-服务端错误',
  },
  name: 'error-500',
  component: () => import('@/pages/500'),
};
