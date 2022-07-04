// 路由处理

/**
 * 1. 先拿所有数据 ，循环出有chuildren的 并且 length大于0的--(获取二级路由)
 * 2. 在拿二级路由跟一级路由筛选filter，查找find  取反 通过路由的.path--(获取页面的一级路由)
 * 3. 将所有一级数据，转化为菜单数据
 *  3.1 去除 登录
 *  3.2 获取一级路由的，path、name、meta 放到一个数组里面
 *
 */

// 获取所有一级路由
const getChildrenRoutes = (routers) => {
  // console.log(routers) // 所有路由 16条数据 一级路由
  const result = []
  routers.forEach((item) => {
    //     // 判断 children  和长度大于0的
    if (item.children && item.children.length > 0) {
      // console.log(item)
      // 判断 元素的 children  和长度大于0的
      result.push(...item.children) // 拿到所有的子路由
    }
  })
  //   //   console.log(result) // 12条 二级路由
  return result
}

// 在抽取一级路由信息
export const filterRouters = (routers) => {
  // console.log('所有路由', routers)
  // console.log('子路由', getChildrenRoutes(routers))

  // 子路由 childrenRoute
  const childrenRoute = getChildrenRoutes(routers)
  // 拿所有数据 routers  跟 子路由数据  筛选
  // const data = routers.filter((route) => { //查看结果
  return routers.filter((route) => {
    // 拿所有路由数据通过查找 .path  跟所有的路由数据对比  返回没有的  取反
    return !childrenRoute.find((routeitem) => {
      return routeitem.path === route.path
    })
  })
  // console.log('data', data) // 4条数据 查看结果
}

// 检测数据是否为空对象 空数组  返回  true是有数据   false是没数据
const isNull = (data) => {
  // console.log('33', data) //  剔除 登录(是空对象) 剩下首页、文章、个人中心
  if (!data) return true // data不存在

  if (JSON.stringify(data) === '{}') return true // data是空对象
  if (JSON.stringify(data) === '[]') return true // data是空数组

  return false
}

// 拿抽离的一级数据 转成菜单数据 去除登录  没有meta和children
// export const getMenu = (routes) => {
//   // console.log('抽离的一级数据', routes)
//   const result = []
//   routes.forEach((item) => {
//     // console.log('11', item)
//     // console.log(item)
//     // isNull(item.meta) // 每一行 meta             // isNull(item.meta === {}) // 是false
//     // isNull(item.children) // 每一行 children      // isNull(item.children === []) // 是false
//     // isNull(JSON.stringify(item.meta) === '{}') // 把每一个转字符串对象      有false，有true
//     // isNull(JSON.stringify(item.children) === '[]') // 把每一个转字符串数组  有false，有true

//     // 剔除 登录
//     if (isNull(item.meta) && isNull(item.children)) return // 剔除 (是空对象) 剩下首页跟 文章
//     // console.log(item) // 剔除 登录  剩下首页、文章、个人中心

//     // 剔除
//     if (isNull(item.meta) && !isNull(item.children)) {
//       result.push(...getMenu(item.children)) // 总数据添加
//       // console.log('result', result)
//       return
//     }

//     // 获取三条路由的path
//     const routePath = item.path
//     // console.log(routePath) // 每条数据的 path

//     // 在数组中查找 符合上面三条数据的路由  没有就添加
//     let route = result.find((item) => item.path === routePath.path)
//     // console.log(route) // 返回 undefined
//     // 给 route 添加对应的 数据
//     if (!route) {
//       route = {
//         ...item,
//         path: routePath,
//         children: [] // 之后会添加子路由
//       }
//       //  console.log(route)
//       // 判断有title和icon  就给总数组 添加
//       if (item.meta.title && item.meta.icon) {
//         result.push(route)
//       }
//       // console.log('route', route)
//     }
//     // 判断有children  存到总数组
//     if (item.children) {
//       // 给 route.children 添加子路由
//       route.children.push(...getMenu(item.children, route.path))
//     }
//   })
// console.log('result', result)
//   return result
// }

// 1.循环   判断 isnull   有meta跟children  return
// 2. 声明一个空数组  保存item。path   从总数组查找。path 并保存route
// 3. 判断  route没存在  就给route 添加...item,path,children:[]
// 4. item 有 title和icon   有就存到总数组里面 result.push(route)
// 5. 在上面判断 isnull  meta 和 ！children  就是保存的 总数组push(递归 函数的。item.children) 并 return
// 6. 在 route 下 判断 item.children  有  就是保存的route.children.push(递归 函数的。item.children) 并 return
// 7. return 总数组
// export const getMenu = (routes) => {
//   const result = []
//   console.log(routes)
//   routes.forEach((item) => {
//     if (isNull(item.meta) && isNull(item.children)) return
//     if (isNull(item.meta) && !isNull(item.children)) {
//       result.push(...getMenu(item.children))
//       return
//     }
//     console.log(item)
//     const routePath = item.path
//     let route = result.find((item) => item.path === routePath.path)
//     if (!route) {
//       route = {
//         ...item,
//         path: routePath,
//         children: []
//       }
//       if (item.meta.title && item.meta.icon) {
//         result.push(route)
//       }
//     }
//     if (item.children) {
//       route.children.push(...getMenu(item.children))
//     }
//   })
//   return result
// }

export const getMenu = (routes) => {
  const result = []
  routes.forEach((item) => {
    if (isNull(item.meta) && isNull(item.children)) return

    if (isNull(item.meta) && !isNull(item.children)) {
      result.push(...getMenu(item.children))
      return
    }

    const routePath = item.path
    let route = result.find((item) => item.path === routePath.path)

    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      }

      if (item.meta.title && item.meta.icon) {
        result.push(route)
      }
    }

    if (item.children) {
      route.children.push(...getMenu(item.children))
    }
  })
  return result
}
