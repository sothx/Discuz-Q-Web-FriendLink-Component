<template>
  <div
    v-if="friendlyLinkList.length"
    v-loading="loading"
    class="friendly-link-container"
  >
    <div class="friendly-link-title">{{ $t('home.friendlyLink') }}</div>
    <div v-show="!loading" class="friendly-link-list">
      <el-card 
        v-for="(item,index) in friendlyLinkList"
        :key="index"
        class="friendly-link-item"
        :body-style="{ padding: '0px' }"
        @click="clickLink(item.href)"
      >
        <el-image
          class="item-img"
          fit="cover"
          :src="item.image"
        />
        <div style="padding: 5px;">
          <span>{{ item.name }}</span>
          <div class="bottom clearfix">
            <span class="note">{{ item.desc }}</span>
          </div>
        </div>
      </el-card>
      <div v-if="friendlyLinkList.length === 0" class="no-more">{{ $t('discuzq.list.noData') }}</div>
    </div>
    <div v-if="friendlyLinkList.length === 2" class="refresh" @click="refresh">
      <svg-icon type="refresh" class="icon" />
      {{ $t('home.refresh') }}
    </div>
  </div>
</template>
<script>
import handleError from '@/mixin/handleError';
import friendlyLinkConfig from '@/utils/friendlyLinkConfig';
import * as tools from '@/utils/tools';
export default {
  name: 'FriendlyLink',
  mixins: [handleError],
  data() {
    return {
      friendlyLinkList: [],
      loading: false
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    // 跳转到友情链接
    clickLink(url) {
      window.open(url, '_blank');
    },
    // 获取友情链接列表
    async getList() {
      this.friendlyLinkList = [];
      this.loading = true;
      try {
        this.friendlyLinkList = await Promise.resolve(tools.randomArrayNum(friendlyLinkConfig, 2));
        this.loading = false;
      } catch (e) {
        this.handleError(e);
      }
    },
    // 刷新
    refresh() {
      this.getList();
    }
  }
};
</script>
<style lang="scss" scoped>
@import '@/assets/css/variable/color.scss';
/*IFTRUE_pay*/
@import '@/assets/css/variable/color_pay.scss';
/*FITRUE_pay*/
.friendly-link-container{
  padding: 20px;
  margin-bottom:20px;
  @media screen and ( max-width: 1005px ) {
    padding: 14px;
  }
  .friendly-link-title{
    color:#6D6D6D;
    margin-bottom: 8px;
    font-size: 16px;
  }
  .friendly-link-list{
    margin-top:10px;
    .friendly-link-item{
      border-bottom: 1px solid #f5f5f5;
      margin-top:15px;
      display:block;
      cursor:pointer;
      .item-img{
        width: 260px;
        height: 80px;
        border:1px solid #f5f5f5;
      }
    }
  }
  .refresh{
    padding: 10px 0 0;
    color: #8590A6;
    cursor: pointer;
    display: inline-flex;
    &:hover{
      color:$color-blue-base;
    }
    .icon{
      margin-right: 6px;
      font-size: 20px;
    }
  }
  .note {
    font-size: 13px;
    color: #999;
    line-height: 23px;
  }
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
}
</style>
