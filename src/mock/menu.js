const { config } = require('./common')

const { apiPrefix } = config
let database = [
  {
    id: '1',
    icon: 'dashboard',
    name: 'Dashboard',
    route: '/dashboard',
  },
  {
    id: '2',
    name: 'Users',
    icon: 'user',
    route: '/user',
  },
  {
    id: '7',
    name: 'Posts',
    icon: 'shopping-cart',
    route: '/post',
  },
  {
    id: '21',
    mpid: '-1',
    name: 'User Detail',
    route: '/user/:id',
  },
  {
    id: '3',
    name: 'Request',
    icon: 'api',
    route: '/request',
  },
  {
    id: '4',
    name: 'UI Element',
    icon: 'camera-o',
  },
  {
    id: '41',
    mpid: '4',
    name: 'IconFont',
    icon: 'heart-o',
    route: '/UIElement/iconfont',
  },
  // {
  //   id: '42',
  //   bpid: '4',
  //   mpid: '4',
  //   name: 'DataTable',
  //   icon: 'database',
  //   route: '/UIElement/dataTable',
  // },
  {
    id: '43',
    mpid: '4',
    name: 'DropOption',
    icon: 'bars',
    route: '/UIElement/dropOption',
  },
  {
    id: '44',
    mpid: '4',
    name: 'Search',
    icon: 'search',
    route: '/UIElement/search',
  },
  // {
  //   id: '45',
  //   bpid: '4',
  //   mpid: '4',
  //   name: '56pxor',
  //   icon: 'edit',
  //   route: '/UIElement/editor',
  // },
  // {
  //   id: '46',
  //   bpid: '4',
  //   mpid: '4',
  //   name: 'layer (Function)',
  //   icon: 'credit-card',
  //   route: '/UIElement/layer',
  // },
  {
    id: '5',
    name: 'Charts',
    icon: 'code-o',
  },
  {
    id: '51',
    mpid: '5',
    name: 'ECharts',
    icon: 'line-chart',
    route: '/chart/ECharts',
  },
  {
    id: '52',
    mpid: '5',
    name: 'highCharts',
    icon: 'bar-chart',
    route: '/chart/highCharts',
  },
  {
    id: '53',
    mpid: '5',
    name: 'Rechartst',
    icon: 'area-chart',
    route: '/chart/Recharts',
  },
  {
    id: '6',
    name: 'Test Navigation',
    icon: 'setting',
  },
  {
    id: '61',
    mpid: '6',
    name: 'Test Navigation1',
    route: '/navigation/navigation1',
  },
  {
    id: '62',
    mpid: '6',
    name: 'Test Navigation2',
    route: '/navigation/navigation2',
  },
  {
    id: '621',
    mpid: '62',
    name: 'Test Navigation21',
    route: '/navigation/navigation2/navigation1',
  },
  {
    id: '622',
    mpid: '62',
    name: 'Test Navigation22',
    route: '/navigation/navigation2/navigation2',
  },
]

module.exports = {

  [`GET ${apiPrefix}/menus`] (req, res) {
    res.status(200).json(database)
  },
}
