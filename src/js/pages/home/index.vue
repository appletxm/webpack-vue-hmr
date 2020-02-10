<template>
  <section :class="[$store.state.appPrefix + '-p-home']">
    <h1>Congratulations!</h1>
    Hey man you did it successful!
    <el-table
      :data="dataList"
      style="width: 100%"
    >
      <el-table-column
        v-for="column in columns"
        :key="column.field"
        :prop="column.field"
        :label="column.label"
      />
    </el-table>

    <input
      v-focus:[dynatic].txm="objTest"
      data-set-list="datalist"
      class="test-v-focus"
      value=""
    />

    <custom-model
      v-model="testCustomModel"
      @input="handleInput"
    ></custom-model>

    <custom-slot :object="objTest">
      <template
        slot="header"
        slot-scope="scope"
      >
        <h1>
          Here might be a page title {{ scope.scopeObject.a }}
        </h1>
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template
        slot="footer"
        slot-scope="{footer}"
      >
        <p>Here's some contact info {{ footer.name }}</p>
      </template>
    </custom-slot>
  </section>
</template>

<script>
import messager from 'common/messager'
import eventQueue from 'common/event-queue'
import { checkUserLogin } from 'common/auth'
import focus from 'directives/focus'
import CustomModel from 'components/custom-model'
import CustomSlot from 'components/custom-slot'
import models from './models'
import columns from './columns'

export default {
  components: {
    CustomModel,
    CustomSlot
  },
  directives: {
    focus
  },
  data() {
    return {
      columns,
      dataList: [],
      pageSize: 10,
      currentPage: 1,
      total: 0,
      dynatic: 1,
      objTest: { a: 123, b: { c: 5, d: 9 } },
      testCustomModel: 9
    }
  },
  computed: {},

  watch: {},

  created() {
    if (checkUserLogin()) {
      this.$getAnnouncementList()
    }
    eventQueue.pushEvent({
      key: 'home-page-get-announcement-list',
      event: this.$getAnnouncementList,
      params: [],
      context: this,
      needKeep: true,
      triggerUrl: ['/', '/home']
    })
  },

  mounted() {
    // setInterval(() => {
    //   this.dynatic = this.dynatic + 1
    // }, 1000)
  },

  updated() {
    console.info('home page updated:', this.testCustomModel)
  },

  methods: {
    async $getAnnouncementList() {
      messager.showLoading()
      const res = await models.getAnnouncement({
        pageSize: this.pageSize,
        pageNo: this.currentPage
      })
      messager.closeLoading()

      const { data: { list, pagination } } = res
      this.dataList = list
      this.total = pagination.total
    }

    // handleInput() {
    //   debugger
    // }
  }
}
</script>
