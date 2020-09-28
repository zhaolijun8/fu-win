<template lang="pug">
  #e-quantization
    BaseLayout
      .quant-header
      .quant-container
        .quant-container-title
          h1 机器人
          p 全智能机器人自动交易，0成本进入AI时代
        .quant-content
          .quant-item(v-for="(robot, index) in robots")
            .quant-item-context
              img.quant-item-robot(:src="robot.image")
              .quant-item-info
                .quant-item-info-name {{robot.name}}
                .quant-item-info-list
                  .quant-item-info-list-group
                    .quant-item-info-list-name 最少资金：
                    .quant-item-info-list-value {{robot.fund}}
                  .quant-item-info-list-group
                    .quant-item-info-list-name 最低杠杆：
                    .quant-item-info-list-value {{robot.lever}}倍
                  .quant-item-info-list-group
                    .quant-item-info-list-name 最小交易：
                    .quant-item-info-list-value {{robot.min}}手
                .quant-item-info-list
                  .quant-item-info-list-group
                    .quant-item-info-list-name 年化收益：
                    .quant-item-info-list-value {{robot.income}}
                  .quant-item-info-list-group
                    .quant-item-info-list-name 最大回撤：
                    .quant-item-info-list-value {{robot.retreat}}
                  .quant-item-info-list-group
                    .quant-item-info-list-name 最大交易：
                    .quant-item-info-list-value {{robot.max}}手
                .quant-item-info-platform
                  span 支持平台：
                  span(v-for="(plat, i) in robot.platform" :class="(robot.show || i < 6) ? null : 'none'") {{plat}}{{i < robot.platform.length - 1 ? '、' : null}}
                  span.more(@click="target(index)") {{robot.show ? '<< 收起' : '更多 >>'}}
              .quant-item-button
            .quant-item-des {{robot.des}}
      .quant-pagination
        .quant-pagination-first 首页
        .quant-pagination-item.active 1
        .quant-pagination-item 2
        .quant-pagination-item 3
        .quant-pagination-item 4
        .quant-pagination-item 5
        .quant-pagination-last 尾页
</template>

<script>
import BaseLayout from '../../layout/base_layout.vue'

import robotImage1 from '../../../assets/images/robot/robot_1.png'
import robotImage2 from '../../../assets/images/robot/robot_2.png'
import robotImage3 from '../../../assets/images/robot/robot_3.png'
import robotImage4 from '../../../assets/images/robot/robot_4.png'
import robotImage5 from '../../../assets/images/robot/robot_5.png'
import robotImage6 from '../../../assets/images/robot/robot_6.png'
import robotImage7 from '../../../assets/images/robot/robot_7.png'
import robotImage8 from '../../../assets/images/robot/robot_8.png'
import robotImage9 from '../../../assets/images/robot/robot_9.png'

export default {
  data() {
    return {
      robots: [
        {
          name: '稳健Ⅰ型',
          image: robotImage1,
          fund: '10000',
          income: '50%-100%',
          lever: '100',
          min: '0.01',
          max: '0.05',
          retreat: '30%',
          des: '交易品种：直盘货币对； 仓位控制：最小交易 0.01手，最大交易0.05手; 账号要求：账户资金1万美元起，杠杆100倍起； 账号收益：年化收益50%-100%; 交易手数：月交易10-20手 账号风控：五层风控双重止损，最大回撤30%； 交易策略：多策略混合，智能风控，智能交易，无人工干预，每天24小时全天候交易。',
          platform: [
            '121Clearing',
            'ActivTrades',
            'ACY稀万',
            'ADSS达汇',
            'AGMBroker',
            'AIMS欧力',
            'Alpari艾福瑞',
            'Amana阿曼那资本',
            'ANB Group',
            'Anzo Capital昂首资本',
            'APJFX',
            'ArgusFX',
            'Asyusyoji',
            'ATCBrokers',
            'ATFX',
            'Atom Markets',
            'Atom8',
            'AUS澳汇',
            'AVATrade'
          ],
          show: false
        },
        {
          name: '稳健II型',
          image: robotImage2,
          fund: '10000',
          income: '50%-100%',
          lever: '100',
          min: '0.05',
          max: '0.25',
          retreat: '30%',
          des: '交易品种：欧美； 仓位控制：最小交易 0.05手，最大交易0.25手; 账号要求：账户资金1万美元起，杠杆100倍起； 账号收益：年化收益50%-100%; 交易手数：月交易5-10手 账号风控：五层风控双重止损，最大回撤30%； 交易策略：多策略混合，智能风控，智能交易，无人工干预，每天24小时全天候交易。',
          platform: [
            'ACY稀万',
            'ADSS达汇',
            'AIMS欧力',
            'Anzo Capital昂首资本',
            'ATFX',
            'AUS澳汇',
            'AVATrade',
            'Blackwell博威',
            'Capstone凯石',
            'CPT',
            'EXNESS优汇',
            'GMI乐伯',
            'GOMarkets高汇',
            'Hantec亨达',
              'ICMarkets',
            'KVB昆仑国际',
            'MEX大通金融',
            'Pepperstone激石',
            'SecondView',
            'ThinkMarkets智汇',
              'Tickmill',
              'TradeMax',
              'USG联准国际',
              'VantageFX万致',
              'Windsor温莎',
              'Wiston威石资本',
              'World世汇',
              'XM'
          ],
          show: false
        },
        {
          name: '激进I型',
            image: robotImage3,
          fund: '10000',
          income: '80%-150%',
          lever: '100',
          min: '0.05',
          max: '0.25',
          retreat: '30%',
          des: '交易品种：镑系货币对； 仓位控制：最小交易 0.01手，最大交易0.05手; 账号要求：账户资金1万美元起，杠杆100倍起； 账号收益：年化收益80%-150%; 交易手数：月交易15-30手 账号风控：五层风控双重止损，最大回撤30%； 交易策略：多策略混合，智能风控，智能交易，无人工干预，每天24小时全天候交易。',
          platform: [
            '121Clearing',
            'ActivTrades',
            'ACY稀万',
            'ADSS达汇',
            'AGMBroker',
            'AIMS欧力',
            'Alpari艾福瑞',
            'Amana阿曼那资本',
            'ANB Group',
            'Anzo Capital昂首资本',
            'APJFX',
            'ArgusFX',
            'Asyusyoji',
            'ATCBrokers',
            'ATFX',
            'Atom Markets',
            'Atom8',
            'AUS澳汇',
            'AVATrade',
              'AxCap247',
              'AXIS阿克斯',
              'AxiTrader',
              'BeneForex宝富国际',
              'Berndale Capital',
              'BHC赢磐国际',
              'Capstone凯石',
              'Deltastock',
              'ETO',
              'EZINVEST',
              'FXOpen',
              'GMI乐伯',
              'Goldwell',
              'GOMarkets高汇',
              'IFM',
              'INFINOX英诺',
              'InstaForex',
              'MEX大通金融',
              'Pepperstone激石',
              'TeraFX特汇',
              'Tradeview',
              'VantageFX万致',
              'ZFX山海证券'
          ],
          show: false
        },
        {
          name: '激进II型',
            image: robotImage4,
          fund: '30000',
          income: '100%-150%',
          lever: '100',
          min: '0.01',
          max: '0.05',
          retreat: '30%',
          des: '交易品种：28个外汇货币对； 仓位控制：最小交易 0.01手，最大交易0.05手; 账号要求：账户资金3万美元起，杠杆100倍起； 账号收益：年化收益100%-150%; 交易手数：月交易30-50手 账号风控：五层风控双重止损，最大回撤30%； 交易策略：多策略混合，智能风控，智能交易，无人工干预，每天24小时全天候交易。',
          platform: [
              '121Clearing',
              'ActivTrades',
              'ACY稀万',
              'ADSS达汇',
              'AGMBroker',
              'AIMS欧力',
              'Alpari艾福瑞',
              'Amana阿曼那资本',
              'ANB Group',
              'Anzo Capital昂首资本',
              'APJFX',
              'ArgusFX',
              'Asyusyoji',
              'ATCBrokers',
              'ATFX',
              'Atom Markets',
              'Atom8',
              'AUS澳汇',
              'AVATrade',
              'AxCap247',
              'AXIS阿克斯',
              'AxiTrader',
              'BeneForex宝富国际',
              'Berndale Capital',
              'BHC赢磐国际',
              'Capstone凯石',
              'Deltastock',
              'ETO',
              'EZINVEST',
              'FXOpen',
              'GMI乐伯',
              'Goldwell',
              'GOMarkets高汇',
              'IFM',
              'INFINOX英诺',
              'InstaForex',
              'MEX大通金融',
              'Pepperstone激石',
              'TeraFX特汇',
              'Tradeview',
              'VantageFX万致',
              'ZFX山海证券'
          ],
          show: false
        },
        {
          name: '5000-1型',
            image: robotImage5,
          fund: '5000',
          income: '50%-100%',
          lever: '200',
          min: '0.02',
          max: '0.5',
          retreat: '30%',
          des: '交易品种：EURUSD； 仓位控制：最小交易 0.02手，最大交易0.5手; 账号要求：账户资金5000美元起，杠杆200倍起； 账号收益：年化收益50%-100%; 交易手数：月交易3-5手 账号风控：五层风控双重止损，最大回撤50%； 交易策略：多策略混合，智能风控，智能交易，无人工干预，每天24小时全天候交易。',
          platform: [
              '121Clearing',
              'ActivTrades',
              'ACY稀万',
              'ADSS达汇',
              'AGMBroker',
              'AIMS欧力',
              'Alpari艾福瑞',
              'Amana阿曼那资本',
              'ANB Group',
              'Anzo Capital昂首资本',
              'APJFX',
              'ArgusFX',
              'Asyusyoji',
              'ATCBrokers',
              'ATFX',
              'Atom Markets',
              'Atom8',
              'AUS澳汇',
              'AVATrade',
              'AxCap247',
              'AXIS阿克斯',
              'AxiTrader',
              'BeneForex宝富国际',
              'Berndale Capital',
              'BHC赢磐国际',
              'Capstone凯石',
              'Deltastock',
              'ETO',
              'EZINVEST',
              'FXOpen',
              'GMI乐伯',
              'Goldwell',
              'GOMarkets高汇',
              'IFM',
              'INFINOX英诺',
              'InstaForex',
              'MEX大通金融',
              'Pepperstone激石',
              'TeraFX特汇',
              'Tradeview',
              'VantageFX万致',
              'ZFX山海证券'
          ],
          show: false
        },
          {
              name: '3000-1型',
              image: robotImage6,
              fund: '1000',
              income: '50%-100%',
              lever: '100',
              min: '0.01',
              max: '0.05',
              retreat: '30%',
              des: '交易品种：XAUUSD； 仓位控制：最小交易 0.01手，最大交易0.05手; 账号要求：账户资金3000美元起，杠杆100倍起； 账号收益：年化收益50%-100%; 交易手数：月交易2-3手 账号风控：五层风控双重止损，最大回撤50%； 交易策略：多策略混合，智能风控，智能交易，无人工干预，每天24小时全天候交易。',
              platform: [
                  '121Clearing',
                  'ActivTrades',
                  'ACY稀万',
                  'ADSS达汇',
                  'AGMBroker',
                  'AIMS欧力',
                  'Alpari艾福瑞',
                  'Amana阿曼那资本',
                  'ANB Group',
                  'Anzo Capital昂首资本',
                  'APJFX',
                  'ArgusFX',
                  'Asyusyoji',
                  'ATCBrokers',
                  'ATFX',
                  'Atom Markets',
                  'Atom8',
                  'AUS澳汇',
                  'AVATrade',
                  'AxCap247',
                  'AXIS阿克斯',
                  'AxiTrader',
                  'BeneForex宝富国际',
                  'Berndale Capital',
                  'BHC赢磐国际',
                  'Capstone凯石',
                  'Deltastock',
                  'ETO',
                  'EZINVEST',
                  'FXOpen',
                  'GMI乐伯',
                  'Goldwell',
                  'GOMarkets高汇',
                  'IFM',
                  'INFINOX英诺',
                  'InstaForex',
                  'MEX大通金融',
                  'Pepperstone激石',
                  'TeraFX特汇',
                  'Tradeview',
                  'VantageFX万致',
                  'ZFX山海证券'
              ],
              show: false
          },
          {
              name: '1000-1型',
              image: robotImage7,
              fund: '1000',
              income: '50%-100%',
              lever: '500',
              min: '0.01',
              max: '0.05',
              retreat: '50%',
              des: '此机器人针对特殊人群开放，请大家不要绑定账号，可以跟销售人员拿观察密码！',
              platform: [
                  'ACY稀万',
                  'ADSS达汇',
                  'AIMS欧力',
                  'Anzo Capital昂首资本',
                  'ATFX',
                  'AUS澳汇',
                  'AVATrade',
                  'Blackwell博威',
                  'Capstone凯石',
                  'CPT',
                  'EXNESS优汇',
                  'GMI乐伯',
                  'GOMarkets高汇',
                  'Hantec亨达',
                  'ICMarkets',
                  'KVB昆仑国际',
                  'MEX大通金融',
                  'Pepperstone激石',
                  'SecondView',
                  'ThinkMarkets智汇',
                  'Tickmill',
                  'TradeMax',
                  'USG联准国际',
                  'VantageFX万致',
                  'Windsor温莎',
                  'Wiston威石资本',
                  'World世汇',
                  'XM'
              ],
              show: false
          },
          {
              name: '暴力Ⅰ型',
              image: robotImage8,
              fund: '10000',
              income: '200%-300%',
              lever: '100',
              min: '0.01',
              max: '0.05',
              retreat: '50%',
              des: '交易品种：28货币对； 仓位控制：最小交易 0.01手，最大交易0.05手; 账号要求：账户资金1万美元起，杠杆500倍起； 账号收益：年化收益200%-300%; 交易手数：月交易50-80手 账号风控：五层风控双重止损，最大回撤50%； 交易策略：多策略混合，智能风控，智能交易，无人工干预，每天24小时全天候交易。1440-1440',
              platform: [
                  '121Clearing',
                  'ActivTrades',
                  'ACY稀万',
                  'ADSS达汇',
                  'AGMBroker',
                  'AIMS欧力',
                  'Alpari艾福瑞',
                  'Amana阿曼那资本',
                  'ANB Group',
                  'Anzo Capital昂首资本',
                  'APJFX',
                  'ArgusFX',
                  'Asyusyoji',
                  'ATCBrokers',
                  'ATFX',
                  'Atom Markets',
                  'Atom8',
                  'AUS澳汇',
                  'AVATrade',
                  'AxCap247',
                  'AXIS阿克斯',
                  'AxiTrader',
                  'BeneForex宝富国际',
                  'Berndale Capital',
                  'BHC赢磐国际',
                  'Capstone凯石',
                  'Deltastock',
                  'ETO',
                  'EZINVEST',
                  'FXOpen',
                  'GMI乐伯',
                  'Goldwell',
                  'GOMarkets高汇',
                  'IFM',
                  'INFINOX英诺',
                  'InstaForex',
                  'MEX大通金融',
                  'Pepperstone激石',
                  'TeraFX特汇',
                  'Tradeview',
                  'VantageFX万致',
                  'ZFX山海证券'
              ],
              show: false
          },
          {
              name: '暴力II型',
              image: robotImage9,
              fund: '10000',
              income: '100%-200%',
              lever: '100',
              min: '0.01',
              max: '0.05',
              retreat: '30%',
              des: '交易品种：28货币对； 仓位控制：最小交易 0.01手，最大交易0.05手; 账号要求：账户资金1万美元起，杠杆200倍起； 账号收益：年化收益100%-200%; 交易手数：月交易50-80手 账号风控：五层风控双重止损，最大回撤50%； 交易策略：多策略混合，智能风控，智能交易，无人工干预，每天24小时全天候交易。',
              platform: [
                  'ACY稀万',
                  'ADSS达汇',
                  'AIMS欧力',
                  'Anzo Capital昂首资本',
                  'ATFX',
                  'AUS澳汇',
                  'AVATrade',
                  'Blackwell博威',
                  'Capstone凯石',
                  'CPT',
                  'EXNESS优汇',
                  'GMI乐伯',
                  'GOMarkets高汇',
                  'Hantec亨达',
                  'ICMarkets',
                  'KVB昆仑国际',
                  'MEX大通金融',
                  'Pepperstone激石',
                  'SecondView',
                  'ThinkMarkets智汇',
                  'Tickmill',
                  'TradeMax',
                  'USG联准国际',
                  'VantageFX万致',
                  'Windsor温莎',
                  'Wiston威石资本',
                  'World世汇',
                  'XM'
              ],
              show: false
          }
      ]
    }
  },
  components: {
    BaseLayout
  },
  methods: {
    target(i) {
      this.robots[i].show = !this.robots[i].show
    }
  }
}
</script>

<style lang="sass" scoped>
.quant

  &-header
    height: 400px
    margin-top: 60px
    background: url('../../../assets/images/robot/robot_banner3.jpg') no-repeat center center
    background-size: cover

  &-container
    width: 1200px
    margin: 0 auto

    &-title
      margin-top: 70px

      h1
        font-size: 28px
        font-weight: 600

      p
        color: #666
        font-size: 14px
        margin-top: 15px

  &-item
    font-size: 16px
    color: #333
    border-radius: 10px
    box-shadow: 0 0 10px #d0e4f7
    padding: 20px 40px
    margin: 20px 0

    &-context
      display: flex
      border-bottom: 1px solid #ccc

    &-robot
      width: 135px
      height: 135px

    &-info
      flex: 1

      &-name
        font-size: 18px
        color: #3887dd
        font-weight: 600
        line-height: 45px
        border-bottom: 1px solid #ccc

      &-list
        display: flex
        border-bottom: 1px dashed #ccc
        font-size: 14px

        &-group
          display: flex
          width: 33.33%
          line-height: 50px
          color: #666
          font-weight: 600

      &-platform
        display: flex
        flex-wrap: wrap
        line-height: 50px
        font-weight: 600

        &-item
          height: 30px
          line-height: 40px
          font-weight: 600

        .none
          display: none

        .more
          color: #3887dd
          cursor: pointer
          margin-left: 10px

    &-button
      width: 135px

    &-des
      padding: 20px 0 8px
      color: #666
      font-size: 14px

  &-pagination
    display: flex
    justify-content: center
    margin-bottom: 20px

    &-first,
    &-last,
    &-item
      padding: 0 10px
      margin: 5px
      border: 1px solid #ccc
      cursor: pointer
      height: 32px
      line-height: 32px

      &.active
        background-color: #3E81E6
        border: 1px solid #3E81E6
        color: #fff

      &:hover
        background-color: #3E81E6
        border: 1px solid #3E81E6
        color: #fff
</style>
