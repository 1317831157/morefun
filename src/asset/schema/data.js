const data = {
  '10001': {
    'type': 'custom',
    'data': {
      'screenHeight': 1334,
      'screenWidth': 750,
      'data': []
    },
    'hotNum': 0,
    'imgNum': 0,
    'textNum': 0,
    'videoNum': 0,
    'containerNum': 0,
    'sliderNum': 0,
    'topNavNum': 0,
    'tabsNum': 0,
    'num': 0
  },

  '10002': {
    'data': {
      'type': 'category',
      'name': '分类页',
      'attr': {
        'navWidth': 200,
        'navMargin': 0,
        'navBgColor': '#aaaaaa'
      },
      'children': [{
        'type': 'Container',
        'name': '分类页',
        'attr': {
          'navHeight': 200
        },
        'children': [{
          'type': 'HeaderDefault',
          'name': '导航默认状态',
          'attr': {
            'backgroundColor': '#FFFFFF',
            'borderRadius': 0
          },
          'children': []
        }, {
          'type': 'HeaderSelect',
          'name': '导航选中状态',
          'attr': {
            'backgroundColor': '#FFFFFF',
            'borderRadius': 0
          },
          'children': []
        }, {
          'type': 'Body',
          'name': '分类内容',
          'attr': {
            'height': 1334,
            'opacity': 100,
            'backgroundColor': '#FFFFFF'
          },
          'children': []
        }]
      }]
    }
  },
  '10003': {
    'data': {
      'type': 'tabs',
      'name': 'tab切换',
      'attr': {
        'state': false,
        'navHeight': 200,
        'navMargin': 0,
        'navBgColor': '#aaaaaa',
        'bodyHeight': 500
      },
      'children': [{
        'type': 'Container',
        'name': 'tab切换',
        'attr': {
          'navWidth': 200
        },
        'children': [{
          'type': 'HeaderDefault',
          'name': '导航默认状态',
          'attr': {
            'backgroundColor': '#cccccc',
            'borderRadius': 0
          },
          'children': []
        }, {
          'type': 'HeaderSelect',
          'name': '导航选中状态',
          'attr': {
            'backgroundColor': '#00cccc',
            'borderRadius': 0
          },
          'children': []
        }, {
          'type': 'Body',
          'name': '分类内容',
          'attr': {
            'width': 750,
            'opacity': 1,
            'backgroundColor': '#FFFFFF'
          },
          'children': []
        }]
      }]
    }
  },

  '10004': {
    'data': {
      'type': 'topNav',
      'name': '楼层吸顶导航',
      'attr': {
        'navHeight': 200,
        'navMargin': 0,
        'navBgColor': '#aaaaaa',
      },
      'children': [{
        'type': 'Container',
        'name': '吸顶导航',
        'attr': {
          'navWidth': 200
        },
        'children': [{
          'type': 'HeaderDefault',
          'name': '导航默认状态',
          'attr': {
            'backgroundColor': '#cccccc',
            'borderRadius': 0
          },
          'children': []
        },
          {
            'type': 'HeaderSelect',
            'name': '分类导航选中状态',
            'attr': {
              'backgroundColor': '#00cccc',
              'borderRadius': 0
            },
            'children': []
          }]
      }]
    }
  },

}

export default data