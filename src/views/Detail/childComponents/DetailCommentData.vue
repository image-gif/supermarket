<template>
  <div class="comment-info"
       v-if="Object.keys(detailCommentInfo).length !== 0">
    <div class="comment-title flex">
      <div>用户评价</div>
      <div>更多</div>
    </div>
    <div v-for="(item, index) in detailCommentInfo"
         :key="index">
      <div class="comment-user-info">
        <span>
          <img :src="item.user.avatar"
               class="avatar">
        </span>
        <span>{{item.user.uname}}</span>
      </div>
      <div class="comment-text">{{item.content}}</div>
      <div class="comment-goods-info">
        <span class="comment-time">{{item.created | formatTime}}</span>&nbsp;
        <span>{{item.style}}</span>
      </div>
      <div class="flex">
        <div class="comment-info-images"
             v-for="(item_img, index_img) in item.images"
             :key="index_img">
          <img :src="item_img">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from '@/common/utils'
export default {
  name: 'DetailCommentData',
  props: {
    detailCommentInfo: {
      type: Array,
      default() {
        return []
      },
    },
  },
  filters: {
    formatTime(value) {
      // showDate(value) {
      // 	//将时间戳转换成date对象
      // 	const date = new Date(value * 1000);
      // 	//将date进行格式化
      // 	return formatDate(date, 'yyyy-MM-dd');
      // }
      const date = new Date(value * 1000)
      return formatDate(date, 'yyyy-MM-dd')
    },
  },
}
</script>

<style lang="less" scoped>
.comment-info {
  padding: 0 8px;
  font-size: 14px;
  border-bottom: 4px solid #ececec;
  .flex {
    display: flex;
  }
  .comment-title {
    justify-content: space-between;
    padding: 10px 4px;
  }
  .comment-user-info {
    padding: 10px 0;
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
      vertical-align: middle;
    }
  }
  .comment-text {
    line-height: 20px;
  }
  .comment-goods-info {
    color: #999;
    margin: 4px 0;
  }
  .comment-info-images {
    img {
      width: 60px;
      height: 60px;
      margin-right: 6px;
    }
  }
}
</style>