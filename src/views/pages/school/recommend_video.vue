<template lang="pug">
  #e-recommend-video.recommend-video
    .recommend-video-title.e-flex
      img(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABtElEQVQ4T6XTMWgUQRgF4Pf+2aBYKBLvVlREsbERQQs7K8FCsLMRbi+gthcLGwtTWVmkEwRR7yagfSBgYRlRsVICNjYWxswGFBUxR3bnye55lyAHcmTK+Wc+Zv43Q+xwcNx+AVSWvgB0ZlDnR0Id+vzVv+vHA61mKxJPAPYBFAD2AlhxPpz6L6CZY7sVf3+QdMSIs/T5+zJrfgG4z/mwZyygduN8IeeqolGXETEL4pHz4UY1V7abnyE0DHaxBqR1LoSV+nJqpeci9RJgDfwdv2xTJ/gsD1sADw2LBPqC7jmfz9WAiGUAb2hYjhEdQH3n8/3DDWX74C3E2BicEIxgB8CU88GNABnuu264WWbpV0DcDmy/d5VQzNKfADacDwcmB2amT8aYvDNykb21KxMDRZZeJ/DQiDvshbsTA2UrnQcxaxYvsbv+fGIgZulbQaet6Kd8+v3bFgA8sGLXXEw2PlXRV03U1aOjJOpGJqUJxaqAVefD8dE7qGJU1V5DKWEK0A+juyCVr0GWwxQkkJKR9PTh2gDIpg8LSbeKePRQiIBNu60kPh732SI5n/TWlmpgh78ZfwBqLusRciODHwAAAABJRU5ErkJggg==")
      span 推荐课程
    .recommend-video-content
      a.recommend-video-item.e-flex(
        v-for="video in recommendList"
        :href="`/school/video/${video.id}`"
      )
        img.recommend-video-item-image(:src="video.image")
        .recommend-video-item-context.e-flex
          .recommend-video-item-name {{video.title}}
          .recommend-video-item-info.e-flex
            .recommend-video-item-count {{`共计${video.count}节`}}
            .recommend-video-item-watch.e-flex
              img(src="../../../assets/images/read.png")
              span {{video.read}}人看过
</template>

<script>
import VideoImage1 from '../../../assets/images/school/school_video_image1.jpg'
import VideoImage2 from '../../../assets/images/school/school_video_image2.jpg'
import VideoImage3 from '../../../assets/images/school/school_video_image3.png'
import VideoImage4 from "../../../assets/images/school/school_video_image4.jpg";

export default {
  data() {
    return {
      recommendList: [
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
          }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.recommend-video
  flex: 1
  background-color: #fff

  &-title
    align-items: center
    height: 56px
    line-height: 56px
    border-bottom: 1px solid #F0F0F0
    padding-left: 20px

    img
      margin-right: 10px

  &-item
    padding: 20px 0
    margin: 0 20px
    border-bottom: 1px solid #F0F0F0

    &:last-child
      border-bottom: none

    &-image
      display: block
      width: 120px
      height: 66px

    &-context
      flex-direction: column
      justify-content: space-around
      padding-left: 20px

    &-count
      margin-right: 20px

    &-watch

      img
        margin-right: 6px
</style>
