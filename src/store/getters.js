const getters = {
  sidebar: state => state.app.sidebar,
  visitedViews: state => state.app.visitedViews,

  chineseName: state => state.user.chineseName,
  userId: state => state.user.userId,
  photoURL: state => state.user.photoURL,
  role: state => state.user.role,
  menus: state => state.user.menus,
  permissions: state => state.user.permissions,

  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters
}
export default getters
