<template lang="pug">
  #e-school
    BaseLayout
      .school-banner
      .school-header
        .school-header-content
          a.school-header-item(href="#")
            img.school-header-item-icon(src="../../../assets/images/school/school_icon1.png")
            .school-header-item-info
              .school-header-item-name 文章
              .school-header-item-des 丰富的外汇文库，满足您的学习需求
          a.school-header-item(href="#")
            img.school-header-item-icon(src="../../../assets/images/school/school_icon2.png")
            .school-header-item-info
              .school-header-item-name 视频课程
              .school-header-item-des 从外汇新手成长为高手的必备教程
          a.school-header-item(href="#")
            img.school-header-item-icon(src="../../../assets/images/school/school_icon3.png")
            .school-header-item-info
              .school-header-item-name 外汇百科
              .school-header-item-des 外汇术语解说，让您更懂外汇
      .school-container
        .school-article
          .school-content
            .school-title
              img(src="../../../assets/images/school/school_title_icon1.png")
              span 精选文章
            .article-list
              a.article-list-item(v-for="artic in articleList" :href="`/school/article/${artic.id}`")
                img(:src="artic.image")
                .article-list-item-context
                  .article-list-item-title {{artic.title}}
                  .article-list-item-des {{artic.des}}
                  .article-list-item-info
                    .article-list-item-date {{artic.date}}
                    .article-list-item-read
                      img(src="../../../assets/images/read.png")
                      span {{artic.read}}人看过
      .school-container
        .school-video
          .school-content
            .school-title
              img(src="../../../assets/images/school/school_title_icon2.png")
              span 视频课程
            VideoItem(
              :videoList="videoList"
            )
      .school-container
        .school-wiki
          .school-content
            .school-title
              img(src="../../../assets/images/school/school_title_icon3.png")
              span 外汇百科
            .wiki-list
              a.wiki-list-item(v-for="wiki in wikiList" :href="`/school/wiki/${wiki.id}`")
                .wiki-list-item-title {{wiki.title}}
                .wiki-list-item-des {{wiki.des}}
</template>

<script>
import BaseLayout from '../../layout/base_layout.vue'
import VideoItem from './video_item.vue'

import Image1 from '../../../assets/images/school/school_atricle_image1.png'
import Image2 from '../../../assets/images/school/school_atricle_image2.png'
import Image3 from '../../../assets/images/school/school_atricle_image3.png'
import Image4 from '../../../assets/images/school/school_atricle_image4.png'
import Image5 from '../../../assets/images/school/school_atricle_image5.png'
import Image6 from '../../../assets/images/school/school_atricle_image6.png'

import VideoImage1 from '../../../assets/images/school/school_video_image1.jpg'
import VideoImage2 from '../../../assets/images/school/school_video_image2.jpg'
import VideoImage3 from '../../../assets/images/school/school_video_image3.png'
import VideoImage4 from '../../../assets/images/school/school_video_image4.jpg'
import VideoImage5 from '../../../assets/images/school/school_video_image5.jpg'
import VideoImage6 from '../../../assets/images/school/school_video_image6.jpg'
import VideoImage7 from '../../../assets/images/school/school_video_image7.jpg'
import VideoImage8 from '../../../assets/images/school/school_video_image8.jpg'

export default {
  data() {
    return {
      articleList: [
        {
          id: '1',
          title: '告诉你这么做外汇交易，超过一半的胜算已到手！',
          des: '汇商君经常会在后来收到粉丝们提的一些关于外汇操作的问题，如何根据国家的宏观经济、地缘政治、军事等因素分析货币对的走势？如何以MACD\布林带等技术指标来分析支撑位、阻力位？如何摸清规律后的汇价做预测？等等诸如此类的问题。还有不少人认为交易就是赌博，甚至把交易的亏损归结于自己的赌运差。',
          image: Image1,
          date: '2020-05-01',
          read: '2134'
        },
        {
          id: '2',
          title: '外汇平台搭建 | 搭建外汇平台哪些坑害死你',
          des: '今天笔者和大家分享一下从业多年来的经验，笔者一直从事外汇后台方面的工作，曾经服务过百家的券商的软件后台，看到一些搭建方技术的低劣和业余程度，笔者想写一篇经验贴给想搭建外汇平台的朋友，希望可以起到提示的作用。',
          image: Image2,
          date: '2019-12-21',
          read: '2434'
        },
        {
          id: '3',
          title: '数汇学院 | 选择值得信赖的外汇经纪商，这5个细节不可忽视！',
          des: '外汇市场作为全球最大的金融市场，吸引着越来越多的投资者参与其中，各类外汇经纪商也如春笋般涌现。对于刚踏入外汇市场的交易者来说，选择一个适合自己的经纪商是相当重要的一件事。今天小编就和大家聊聊外汇经纪商。',
          image: Image3,
          date: '2019-12-21',
          read: '5433'
        },
        {
          id: '4',
          title: '普及外汇知识之：一千多家外汇经纪商，应该如何选择？',
          des: '中国大陆是全球主要外汇经纪商竞相追逐的“大市场”，粗略统计目前国内有一千多家外汇经纪商。因为目前国内没有监管，甚至没有任何限制门槛，无论何时何地，只要有资金，都可以开展业务，导致国内经纪商的质量参差不齐。如何在众多的经纪商中选择一家最优经纪商成为了困扰投资者的一个难题。',
          image: Image4,
          date: '2019-12-21',
          read: '965'
        },
        {
          id: '5',
          title: '美国外汇保证金当年是怎么去杠杆的？',
          des: '美国次贷危机引发的全球金融危机之后，欧美各国的金融机构遭受巨大损失和面临破产威胁，美国的金融机构尤为严重。迫使美国政府出台各项政策限制金融业。过度使用高杠杆、资产负债表过度膨胀是造成此次危机的主要原因。于是去杠杆化成为应对金融危机的核心内容。',
          image: Image5,
          date: '2019-12-21',
          read: '4533'
        },
        {
          id: '6',
          title: '对周线与日线的一些见解',
          des: '日线是金价每天波动的反映，因此要从更长的周期把握股价的走势，还得应用周线图来观察。一般来说，在周线图上，我们可通过观察周线与日线的共振、二次金叉、阻力位、背离等几个现象寻找买卖点。',
          image: Image6,
          date: '2019-12-21',
          read: '3231'
        }
      ],
        videoList: [
            {
                id: '1',
                title: '日内交易',
                tag: '高手必备',
                image: VideoImage1,
                count: '14',
                read: '1204'
            },
            {
                id: '2',
                title: '外汇交易介绍',
                tag: '新手入门',
                image: VideoImage2,
                count: '6',
                read: '2763'
            },
            {
                id: '3',
                title: '用价格行为来进行交易',
                tag: '中级攻略',
                image: VideoImage3,
                count: '5',
                read: '2209'
            },
            {
                id: '4',
                title: '用双布林带进行交易',
                tag: '中级攻略',
                image: VideoImage4,
                count: '5',
                read: '1843'
            },
            {
                id: '5',
                title: '斐波那契回归线',
                tag: '新手入门',
                image: VideoImage5,
                count: '3',
                read: '1657'
            },
            {
                id: '6',
                title: '高级支撑阻力和趋势线',
                tag: '新手入门',
                image: VideoImage6,
                count: '5',
                read: '1917'
            },
            {
                id: '7',
                title: '移动均线交叉和动量',
                tag: '中级攻略',
                image: VideoImage7,
                count: '3',
                read: '2034'
            },
            {
                id: '8',
                title: '外汇基本面简述',
                tag: '新手入门',
                image: VideoImage8,
                count: '2',
                read: '1381'
            },
        ],
      wikiList: [
        {
          id: '1',
          title: '自动交易系统',
          des: '自动化交易系统能让电脑执行并监管交易，因此很多交易者和投资者开始使用自动化交易系统，以更精准的执行入场和出场，并设置资金管理规则。自动化交易系统最吸引人的特色之一，就是它不像人那样具有情绪，只要达到了一定的标准，交易就会自动执行。不过，市场上对自动化交易系统褒贬不一。'
        },
        {
          id: '2',
          title: '剥头皮',
          des: '剥头皮交易，一般是指快进快出的一种交易。在很多人眼里，这种交易方式一直非常神秘，但也有许多交易者认为它是一种比日内交易更能快速盈利的高级交易方式。那么剥头皮交易到底有何秘诀呢？为什么众多交易平台对其也讳莫如深呢？'
        },
        {
          id: '3',
          title: 'A-Book',
          des: '所谓A-Book，指的是经纪商将客户的单子抛出去，抛给银行或者流动性供应商等等。然后通过收取点差或者佣金的方式来获取盈利。我们平时说的STP/ECN/DMA模式等订单模式，都属于A-Book范畴。'
        },
        {
          id: '4',
          title: '白标',
          des: '白标是指一家交易商向另一家希望成为交易商的公司提供IT服务，使其拥有自己的LOGO标识并以自有商标面向客户报价，成为交易商。白标提供商帮助银行将现有的黄金、外汇交易服务，加上OTC在线交易模式通过互联网，扩张到全球各地。使得银行并不一定需要在世界各地开设有关经营方面的办事处。白标提供商将帮助现有的证券期货经纪商从撮合交易模式业务扩张到询价交易模式。白标提供商为现有的一些外汇工具（如图表，分析，软件）提供商和信息服务商提供稳定的后台支持，使得他们具备向客户提供网上外汇交易报价的能力。'
        },
        {
          id: '5',
          title: '外汇返佣刷单',
          des: '什么是刷单？可能被大众所熟知的就是店家刷单，店家付款请人假扮顾客，用以假乱真的购物方式提高网店的排名和销量获取销量及好评吸引顾客。'
        },
        {
          id: '6',
          title: '澳大利亚证券和投资委员会（ASIC）',
          des: '成立于2001年，是澳大利亚金融服务和市场的法定监管机构，也是一个独立的联邦政府机构，依法对全澳大利亚金融体系、各金融机构和专业从业人员行使金融监管的职能。致力于确保澳大利亚金融市场公平与透明，以此来保障澳大利亚经济的名誉及健康。'
        },
        {
          id: '7',
          title: '外汇VPS',
          des: '伴随着国内EA智能交易的兴起，VPS技术在外汇零售交易领域的应用也在逐渐扩大，那么什么是VPS技术？它又能带给交易者怎样的好处，我们今天和大家聊聊这个话题。'
        },
        {
          id: '8',
          title: '渡边太太',
          des: '上个世纪80年代末90年代初，日本人均GDP超过美国，家庭财富总额逾1500万亿日元（约17万亿美元），其中超过55%为现金及银行存款，被认为是世界上最大的可投资资产。'
        },
        {
          id: '9',
          title: '避险货币',
          des: '避险货币也叫保值货币，指不易受政治、战争、市场波动等因素影响，最大限度地避开上述风险，比较稳定，不易贬值的货币。'
        }
      ]
    }
  },
  components: {
    BaseLayout,
    VideoItem
  }
}
</script>

<style lang="sass" scoped>
.school

  &-banner
    height: 400px
    margin-top: 60px
    background: url('../../../assets/images/school/school_banner3.jpg') no-repeat center center
    background-size: cover

  &-header
    width: 1200px
    margin: 80px auto 0
    padding-bottom: 20px

    &-banner
      height: 350px
      margin-bottom: 20px

    &-content
      display: flex
      justify-content: space-between

    &-item
      width: 33.33%
      padding: 34px 20px
      display: flex
      cursor: pointer

      &:hover
        box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.05)

        .school-header-item-name
          color: #E74B3A

      &-icon
        margin-right: 20px

      &-name
        font-size: 20px
        font-weight: 600
        color: #333
        margin-bottom: 10px

      &-des
        font-size: 16px
        color: #333
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap

  &-article,
  &-wiki
    background-color: #F8F8F8

  &-video
    background-color: #fff

  &-content
    width: 1200px
    margin: 0 auto
    padding: 60px 0

  &-title
    display: flex
    font-size: 20px
    font-weight: 600
    color: #333
    align-items: center
    margin-bottom: 20px

    img
      width: 20px
      height: 20px
      margin-right: 10px

// 文章
.article

  &-list
    display: flex
    flex-wrap: wrap

    &-item
      width: calc(( 100% - 20px ) / 2)
      display: flex
      margin-top: 20px
      cursor: pointer

      &:nth-child(odd)
        margin-right: 20px

      &:nth-child(-n+2)
        margin-top: 0

      &:hover

        .article-list-item-title
          color: #E74B3A

      img
        width: 140px
        height: 140px

      &-context
        flex: 1
        height: 140px
        padding: 20px
        background-color: #fff

      &-title
        margin-bottom: 10px
        font-size: 16px
        font-weight: 600
        color: #333

      &-des
        color: #666
        display: -webkit-box
        overflow: hidden
        text-overflow: ellipsis
        word-break: break-all
        -webkit-box-orient: vertical
        -webkit-line-clamp: 2
        margin-bottom: 10px

      &-info
        display: flex
        color: #999

      &-date
        margin-right: 20px

      &-read
        display: flex
        align-items: center

        img
          width: 16px
          height: 16px
          margin-right: 6px

// 百科
.wiki

  &-list
    display: flex
    flex-wrap: wrap

    &-item
      width: calc(( 100% - 40px ) / 3)
      margin-right: 20px
      margin-top: 20px
      height: 140px
      padding: 20px
      background: url('../../../assets/images/school/school_bg.png') no-repeat center center
      box-sizing: border-box
      color: #333

      &:nth-child(3n)
        margin-right: 0

      &:nth-child(-n+3)
        margin-top: 0

      &:hover
        box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.05)

        .wiki-list-item-title
          color: #E74B3A

      &-title
        font-size: 20px
        margin-bottom: 15px

      &-des
        display: -webkit-box
        overflow: hidden
        text-overflow: ellipsis
        word-break: break-all
        -webkit-box-orient: vertical
        -webkit-line-clamp: 3
</style>
