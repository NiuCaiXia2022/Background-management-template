// 处理菜单数据

// 删除多余的空的数据  children
const getMenu = (menu) => {
  // console.log(menu)
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].children && menu[i].children.length <= 0) {
      delete menu[i].children
    }
    if (menu[i].children && menu[i].children.length > 0) {
      getMenu(menu[i].children)
    }
  }
  return menu
}

// 导出
export const filterMenuDate = (data) => {
  // console.log(data)
  const menuList = getMenu(data)
  return menuList
}
