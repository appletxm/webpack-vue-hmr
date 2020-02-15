<template>
  <section :class="[$store.state.appPrefix + '-p-home']">
    <h1>Congratulations!</h1>
    Hey man you did it successful! {{ provideVal.val }}
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

    <div id="test-compile-render"></div>

    <render-component
      txm="true"
      placehoder="请输入"
      :columns="columns"
    >
      <template
        slot="top"
      >
        <div slot="top">
          render top
        </div>
      </template>

      <span>render content</span>

      <div slot="foot">
        render foot
      </div>
    </render-component>

    <render-jsx
      txm1="111"
      txm2="2222"
      @my-click="handleMyClick"
    >
      <template
        slot="header"
      >
        <h2>render jsx second header</h2>
        render jsx content
      </template>
    </render-jsx>

    <custom-model
      v-model="testCustomModel"
      @input="handleInput"
    ></custom-model>

    <observer-component />
    <Observer-component-appy />

    <custom-slot
      v-my-directive="8"
      :object="objTest"
    >
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
        <p>
          Here's some contact info {{ footer.name }} <button @click="$pluginMethod">
            click
          </button>
        </p>
      </template>
    </custom-slot>

    <div id="props-data-test"></div>

    <div id="render-error-test"></div>

    <button @click="handleClick">
      mixins/extends click
    </button>

    <provide-component />
  </section>
</template>

<script>
import messager from 'common/messager'
import eventQueue from 'common/event-queue'
import { checkUserLogin } from 'common/auth'
import focus from 'directives/focus'
import CustomModel from 'components/custom-model'
import CustomSlot from 'components/custom-slot'
import compileRender from 'components/compile-render'
import RenderComponent from 'components/render-component'
import RenderJsx from 'components/render-jsx'
import ObserverComponent from 'components/observer-component'
import ObserverComponentAppy from 'components/observer-component/apply'
import propsDataVm from 'components/component-props-data'
import renderError from 'components/render-error'
import ProvideComponent from 'components/provide-component'
import mixinsTest from 'mixins/test'
import extendsTest from 'extends'
import models from './models'
import columns from './columns'

export default {
  components: {
    CustomModel,
    CustomSlot,
    RenderComponent,
    RenderJsx,
    ObserverComponent,
    ObserverComponentAppy,
    ProvideComponent
  },
  directives: {
    focus
  },
  extends: extendsTest,
  mixins: [mixinsTest],
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
  inject: [
    'provideVal'
  ],
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
    console.info('=====home page created====', this.mm)
  },

  mounted() {
    // console.info('====home page mounted=====', this.$children, this.$root, this.$parent)
    // setInterval(() => {
    //   this.dynatic = this.dynatic + 1
    // }, 1000)
    // console.info('=====', Vue.myGlobalMethod)
    // console.info('compileRender:', compileRender, document.querySelector('#test-compile-render'))
    compileRender.$mount('#test-compile-render')
    propsDataVm.$mount('#props-data-test')
    renderError.$mount('#render-error-test')
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
    },
    handleClick() {
      console.info('*******home page click')
    },

    handleMyClick() {
      console.info('*******render component event my click')
    }

    // handleInput() {
    //   debugger
    // }
  }
}
</script>
