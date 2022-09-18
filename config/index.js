export const config = {
  /**
   * 公众号配置
   */

  APP_ID: "",
  APP_SECRET: "",
  TEMPLATE_ID = "3k3rSIOCL2-mdZR3jP7PsDfzEHpfg2gAUkIiRhmR-es",

  // 是否给文字设置多彩颜色, 和emoji不兼容
  // 如果您使用了微信测试号的模板中含有emoji表情，请填 false
  IS_SHOW_COLOR: false,

  // 功能开关,打开：true，关闭：false
  SWITCH: {
    /** 每日天气 */
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒
    holidaytts: true,

    /** 每日N句 */
    // 金山每日一句
    CIBA: true,
    // 每日一言
    oneTalk: false,
    // 土味情话(彩虹屁)
    earthyLoveWords: false,
    // 朋友圈文案
    momentCopyrighting: false,
    // 毒鸡汤
    poisonChickenSoup: false,
    // 古诗古文
    poetry: false,

    /** 星座运势 */
    horoscope: false,

    /** 生日消息和节日消息 */
    birthdayMessage: true,
  },

  /** 每日一言 */

  // 每日一言的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: "动画",
  

  /**
   * 接收公众号消息的微信号
   */
  USERS: [
    {
      name: "トロルちゃん", // 想要发送的人的名字
      id: "ol73p6T27itm_8SRY920z5Yas36Q", // 用户列表微信号
      useTemplateId: TEMPLATE_ID, // 模板ID
      province: "江苏", // 所在省份
      city: "南京", // 所在城市
      horoscopeDate: "06-28", // 新历生日, 仅用作获取星座运势
      horoscopeDateType: '今日', // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      openUrl: "https://riverhell-ai.github.io/", // 点击详情后跳转的页面
      // 专属节日提醒，如果你在这里填写了节日提醒，就不会执行FESTIVALS的提醒了, 和FESTIVALS的配置方法相同，可以往下查看，我这里就不重复写了
      festivals: [
        {"type": "生日", "name": "テスト", "year": "2001", "date": "06-28"}, // 阳历生日
      ],
      // 专属纪念日/倒数日，如果你在这里填写了纪念日/倒数日，就不会计算CUSTOMIZED_DATE_LIST的日子了, 和CUSTOMIZED_DATE_LIST的配置方法相同
      customizedDateList: [
        {"keyword": "love_day", date: "2022-06-18"}, // 在一起的日子
      ]
    },
  ],

  /**
   * 信息配置
   */

  /** 天气相关 */

  PROVINCE: "江苏", // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  CITY: "南京", // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, date 仅填月日即可, 请严格按照示例填写
   * type必须填！ 只能 “生日” 和 “节日” 二选一!
   * 
   * --- 阴历配置开始 ---
   * 如果日期使用阴历，请在 “生日” 或 "节日“ 前添加 * 符号
   * --- 阴历配置结束 ---
   * 
   * 生日时，name填写想要展示的名字
   * 节日时，name填写相应展示的节日
   * 
   * --- 是否展示周岁信息开始 ---
   * isShowAge: true 展示岁数, 仅type为生日生效
   * isShowAge: false 不展示岁数, 仅type为生日生效
   * 删除isShowAge属性，也会不展示岁数
   * --- 是否展示周岁信息结束 ---
   */
  FESTIVALS: [
    // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
    {"type": "*生日", "name": "テスト", "year": "2001", "date": "06-28", isShowAge: true},
    // ...
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字;
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 2,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }}
    * */
  CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    {"keyword": "love_day", date: "2022-06-18"},
  ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }}
    * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    {"keyword": "encourage_oneself", contents: "Come on!"},
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "(●ˇ∀ˇ●)",
      "(●'◡'●)",
      "ヾ(•ω•`)o",
      "（＾∀＾●）ﾉｼ",
    ]},
    // 你可以不断按格式往下增加
    // ...
  ],


}
