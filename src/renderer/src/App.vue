<template>
  <el-config-provider :locale="locale">
    <el-form :model="form" label-width="auto">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :lg="8">
          <el-form-item label="总数">
            <el-input v-model="form.total" />
          </el-form-item>
        </el-col>
      </el-row>
      <!-- mac -->
      <fieldset>
        <legend>mac</legend>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :lg="8">
            <el-form-item label="前缀">
              <el-input v-model="form.mac.prefix" />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="8">
            <el-form-item label="起始mac后缀">
              <el-input v-model="form.mac.firstMacAppend" />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="8">
            <el-form-item label="预览起始mac">{{ firstMacText }}</el-form-item>
          </el-col>
        </el-row>
      </fieldset>
      <!-- sn -->
      <fieldset>
        <legend>sn</legend>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :lg="8">
            <el-form-item label="前缀">
              <el-input v-model="form.sn.prefix" />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="8">
            <el-form-item label="产品类型">
              <el-select v-model="form.sn.productType">
                <el-option
                  v-for="item in productTypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="8">
            <el-form-item label="产品编号">
              <el-input v-model="form.sn.productNumber" />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="8">
            <el-form-item label="代工厂编号">
              <el-input v-model="form.sn.factoryNumber" />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="8">
            <el-form-item label="生产年份">
              <el-date-picker
                v-model="form.sn.year"
                value-format="YYYY"
                format="YYYY"
                type="year"
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="8">
            <el-form-item label="生产月份">
              <el-select v-model="form.sn.month">
                <el-option
                  v-for="item in monthOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="8">
            <el-form-item label="生产批次">
              <el-input v-model="form.sn.batch" />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="8">
            <el-form-item label="起始本批编号后缀">
              <el-input v-model="form.sn.firstSnAppend" />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="8">
            <el-form-item label="预览起始sn">{{ firstSnText }}</el-form-item>
          </el-col>
        </el-row>
      </fieldset>
      <!-- xponsn -->
      <fieldset>
        <legend>xponsn</legend>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :lg="8">
            <el-form-item label="起始xponsn前缀">
              <el-input v-model="form.xponsnPrefix" />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="8">
            <el-form-item label="预览起始xponsn">{{ xponsnText }}</el-form-item>
          </el-col>
        </el-row>
      </fieldset>
      <!-- voipchip -->
      <fieldset>
        <legend>voipchip</legend>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :lg="8">
            <el-form-item label="voipchip">
              <el-input v-model="form.voipchip" />
            </el-form-item>
          </el-col>
        </el-row>
      </fieldset>
      <!-- ssid -->
      <fieldset>
        <legend>ssid</legend>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :lg="8">
            <el-form-item label="起始ssid前缀">
              <el-input v-model="form.ssidPrefix" />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="8">
            <el-form-item label="预览起始ssid">{{ ssidText }}</el-form-item>
          </el-col>
        </el-row>
      </fieldset>
      <!-- ssid-key -->
      <fieldset>
        <legend>ssid-key</legend>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :lg="8">
            <el-form-item label="预览起始ssid-key">{{ ssidkeyText }}</el-form-item>
          </el-col>
        </el-row>
      </fieldset>
      <!-- ssidac -->
      <fieldset>
        <legend>ssidac</legend>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :lg="8">
            <el-form-item label="预览起始ssidac">{{ ssidacText }}</el-form-item>
          </el-col>
        </el-row>
      </fieldset>
      <!-- ssidac-key -->
      <fieldset>
        <legend>ssidac-key</legend>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :lg="8">
            <el-form-item label="预览起始ssidac-key">{{ ssidackeyText }}</el-form-item>
          </el-col>
        </el-row>
      </fieldset>
      <!-- webpwd -->
      <fieldset>
        <legend>webpwd</legend>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :lg="8">
            <el-form-item label="生成方式">随机16位字符</el-form-item>
          </el-col>
        </el-row>
      </fieldset>
      <el-row :gutter="20" justify="center" align="middle">
        <el-col :span="24">
          <div class="operation-btn-center">
            <el-button type="primary" @click="dialogVisible = true">预览</el-button>
            <el-button>导出</el-button>
          </div>
        </el-col>
      </el-row>
    </el-form>
    <el-dialog v-model="dialogVisible" title="Tips" width="80%">
      <el-table :data="tableData">
        <el-table-column type="index" label="序号" />
        <el-table-column
          v-for="(item, index) in tableColumn"
          :key="index"
          :property="item.key"
          :label="item.title"
        />
      </el-table>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false"> Confirm </el-button>
        </span>
      </template>
    </el-dialog>
  </el-config-provider>
</template>

<script setup lang="ts">
import { reactive, computed, ref } from 'vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { stepAddMac } from 'src/util/util.ts'

const locale = zhCn
const ProductType = {
  g: 'G',
  r: 'R'
}
const ProductTypeText = {
  [ProductType.g]: '光猫',
  [ProductType.r]: '路由器'
}
const productTypeOptions = [
  {
    value: ProductType.g,
    label: ProductTypeText[ProductType.g]
  },
  {
    value: ProductType.r,
    label: ProductTypeText[ProductType.r]
  }
]
const monthOptions = [
  {
    value: 1,
    label: '一月'
  },
  {
    value: 2,
    label: '二月'
  },
  {
    value: 3,
    label: '三月'
  },
  {
    value: 4,
    label: '四月'
  },
  {
    value: 5,
    label: '五月'
  },
  {
    value: 6,
    label: '六月'
  },
  {
    value: 7,
    label: '七月'
  },
  {
    value: 8,
    label: '八月'
  },
  {
    value: 9,
    label: '九月'
  },
  {
    value: 'A',
    label: '十月'
  },
  {
    value: 'B',
    label: '十一月'
  },
  {
    value: 'C',
    label: '十二月'
  }
]
const dialogVisible = ref(false)
const form = reactive({
  total: 10,
  mac: {
    prefix: 'D093955',
    firstMacAppend: '00001'
  },
  sn: {
    prefix: 'FT',
    productType: ProductType.g,
    productNumber: 5,
    factoryNumber: 'W',
    year: `${new Date().getFullYear()}`,
    month: 1,
    batch: '01',
    firstSnAppend: '00001'
  },
  xponsnPrefix: 'FHTK955',
  voipchip: 'SI32280',
  ssidPrefix: 'Totalplay'
})
const tableData = []
const tableColumn = [
  {
    key: 'mac',
    title: 'mac'
  },
  {
    key: 'mac',
    title: 'mac'
  },
  {
    key: 'sn',
    title: 'sn'
  },
  {
    key: 'xponsn',
    title: 'xponsn'
  },
  {
    key: 'voipchip',
    title: 'voipchip'
  },
  {
    key: 'ssid',
    title: 'ssid'
  },
  {
    key: 'ssid-key',
    title: 'ssid-key'
  },
  {
    key: 'ssidac',
    title: 'ssidac-key'
  },
  {
    key: 'voipchip',
    title: 'voipchip'
  },
  {
    key: 'webpwd',
    title: 'webpwd'
  }
]
const pwdTip = '随机8位字符'
const sidacAppend = '-5G'
const firstMacText = computed(() => `${form.mac.prefix}${form.mac.firstMacAppend}`)
const snYearText = computed(() => `${form.sn.year.slice(-2)}`)
const firstSnText = computed(
  () =>
    `${form.sn.prefix}${form.sn.productType}${form.sn.productNumber}${form.sn.factoryNumber}${snYearText.value}${form.sn.month}${form.sn.batch}${form.sn.firstSnAppend}`
)
const xponsnText = computed(() => `${form.xponsnPrefix}${firstMacText.value.slice(-5)}`)
const ssidText = computed(() => `${form.ssidPrefix}-${firstSnText.value.slice(-4)}`)
const ssidacText = computed(() => `${ssidText.value}${sidacAppend}`)
const macSnComposed = computed(
  () => `${firstSnText.value.slice(-4)}${firstMacText.value.slice(-4)}`
)
const ssidkeyText = computed(() => `${macSnComposed.value}+${pwdTip}`)
const ssidackeyText = computed(() => `${macSnComposed.value}+${pwdTip}`)
const generateTableData = () => {
  const tableItem = {
    mac: ''
  }
  let lastMac = ''
  for (let i = 0; i < form.total; i++) {
    tableItem.mac = `${form.mac.prefix}${form.mac.firstMacAppend}`
    lastMac = stepAddMac(form.mac.firstMacAppend)
  }
  tableData.push(tableItem)
}
</script>

<style>
.operation-btn-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}
legend {
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: 18px;
  font-size: 21px;
  color: #606266;
  border-bottom: 1px solid #dcdfe6;
}
.el-select,
.el-date-editor {
  width: 100% !important;
}
/* .el-form-item__label {
  white-space: nowrap;
} */
</style>
