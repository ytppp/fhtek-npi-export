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
              <el-input v-model="form.xponsn.prefix" />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="8">
            <el-form-item label="起始xponsn后缀">
              <el-input v-model="form.xponsn.firstXponsnAppend" />
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
            <el-button type="primary" @click="previewTable">预览</el-button>
            <el-button @click="exportExcel">导出</el-button>
          </div>
        </el-col>
      </el-row>
    </el-form>
    <el-dialog v-model="dialogVisible" title="预览" width="95%" top="5vh">
      <el-table :data="tableData">
        <el-table-column type="index" label="序号" width="60" />
        <el-table-column
          v-for="(item, index) in tableColumn"
          :key="index"
          :property="item.key"
          :label="item.title"
        />
      </el-table>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">确认</el-button>
          <el-button @click="dialogVisible = false">取消</el-button>
        </span>
      </template>
    </el-dialog>
  </el-config-provider>
</template>

<script setup lang="ts">
import { reactive, computed, ref } from 'vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { stepAddStr, stepAddBaseString, generateRandomPassword } from './util/tool'
import XLSX from 'xlsx-js-style'

const locale = zhCn

interface ITableItem {
  mac: string
  sn: string
  xponsn: string
  voipchip: string
  ssid: string
  ssidKey: string
  ssidac: string
  ssidacKey: string
  webpwd: string
}
interface IMonthItem {
  value: string
  label: string
}
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
const monthOptions: IMonthItem[] = []
for (let i = 1; i < 13; i++) {
  monthOptions.push({
    value: `${stepAddBaseString(`${i}`, 0, 10, 16)}`,
    label: `${i}月`
  })
}
const dialogVisible = ref(false)
const form = reactive({
  total: 10,
  mac: {
    // 这里的mac地址字符串不需要添加“-”或“.”
    prefix: 'D093955',
    firstMacAppend: '00140'
  },
  sn: {
    prefix: 'FT',
    productType: ProductType.g,
    productNumber: 5,
    factoryNumber: 'W',
    year: `${new Date().getFullYear()}`,
    month: monthOptions[2].value,
    batch: '16',
    firstSnAppend: '00001'
  },
  xponsn: {
    prefix: 'FHTK955',
    firstXponsnAppend: '00140'
  },
  voipchip: 'SI32280',
  ssidPrefix: 'Totalplay'
})
let tableData: ITableItem[] = []
const tableColumn = [
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
    key: 'ssidKey',
    title: 'ssid-key'
  },
  {
    key: 'ssidac',
    title: 'ssidac'
  },
  {
    key: 'ssidacKey',
    title: 'ssidac-key'
  },
  {
    key: 'webpwd',
    title: 'webpwd'
  }
]
const pwdTip = '随机8位字符'
const sidacAppend = '5G'
const firstMacText = computed(() => `${form.mac.prefix}${form.mac.firstMacAppend}`)
const snYearText = computed(() => `${form.sn.year.slice(-2)}`)
const snPrefix = computed(
  () =>
    `${form.sn.prefix}${form.sn.productType}${form.sn.productNumber}${form.sn.factoryNumber}${snYearText.value}${form.sn.month}${form.sn.batch}`
)
const firstSnText = computed(() => `${snPrefix.value}${form.sn.firstSnAppend}`)
const xponsnText = computed(() => `${form.xponsn.prefix}${form.xponsn.firstXponsnAppend}`)
const ssidText = computed(() => `${form.ssidPrefix}-${firstSnText.value.slice(-4)}`)
const ssidacText = computed(() => `${ssidText.value}-${sidacAppend}`)
const macSnComposed = computed(
  () => `${firstSnText.value.slice(-4)}${firstMacText.value.slice(-4)}`
)
const ssidkeyText = computed(() => `${macSnComposed.value}+${pwdTip}`)
const ssidackeyText = computed(() => `${macSnComposed.value}+${pwdTip}`)
const generateTableData = () => {
  tableData = []
  let lastMac = form.mac.firstMacAppend
  let lastSn = form.sn.firstSnAppend
  let lastXponsn = form.xponsn.firstXponsnAppend
  for (let i = 0; i < form.total; i++) {
    const macItem = `${form.mac.prefix}${lastMac}`
    const snItem = `${snPrefix.value}${lastSn}`
    const macSnComposedItem = `${snItem.slice(-4)}${macItem.slice(-4)}`
    const ssidItem = `${form.ssidPrefix}-${snItem.slice(-4)}`
    const ssidRandomPwd = generateRandomPassword(8)
    tableData.push({
      mac: macItem,
      sn: snItem,
      xponsn: `${form.xponsn.prefix}${lastXponsn}`,
      voipchip: form.voipchip,
      ssid: ssidItem,
      ssidKey: `${macSnComposedItem}${ssidRandomPwd}`,
      ssidac: `${ssidItem}-${sidacAppend}`,
      ssidacKey: `${macSnComposedItem}${ssidRandomPwd}`,
      webpwd: `${generateRandomPassword(16, true)}`
    })
    lastMac = stepAddStr(lastMac)
    lastSn = stepAddStr(lastSn, 1, 10)
    lastXponsn = stepAddStr(lastXponsn, 1, 10)
  }
  return tableData
}
const previewTable = () => {
  generateTableData()
  dialogVisible.value = true
}
const exportExcel = () => {
  // 创建一个工作簿
  const workbook = XLSX.utils.book_new()

  // 创建工作表数据
  if (!tableData.length) {
    generateTableData()
  }
  const excelData: any[] = []
  tableData.forEach((item, i) => {
    excelData.push({
      序号: i + 1,
      mac: item.mac,
      sn: item.sn,
      xponsn: item.xponsn,
      voipchip: item.voipchip,
      ssid: item.ssid,
      'ssid-key': item.ssidKey,
      ssidac: item.ssidac,
      'ssidac-key': item.ssidacKey,
      webpwd: item.webpwd
    })
  })
  // 将数据转换为工作表
  const worksheet = XLSX.utils.json_to_sheet(excelData)

  // 定义列宽度
  worksheet['!cols'] = [
    { wch: 10 },
    { wch: 25 },
    { wch: 25 },
    { wch: 25 },
    { wch: 25 },
    { wch: 25 },
    { wch: 25 },
    { wch: 25 },
    { wch: 25 },
    { wch: 25 }
  ]
  const firstRowStyle = {
    font: { name: 'Microsoft YaHei', size: 11, bold: true },
    alignment: { horizontal: 'center', vertical: 'center' }
  }
  const otherRowStyle = {
    font: { name: 'Microsoft YaHei', size: 10 },
    alignment: { horizontal: 'center', vertical: 'center' }
  }
  // 定义表头
  worksheet['!rows'] = [{ hpx: 22.5 }]
  worksheet['A1'] = {
    v: '序号',
    s: firstRowStyle
  }
  worksheet['B1'] = {
    v: 'mac',
    s: firstRowStyle
  }
  worksheet['C1'] = {
    v: 'sn',
    s: firstRowStyle
  }
  worksheet['D1'] = {
    v: 'xponsn',
    s: firstRowStyle
  }
  worksheet['E1'] = {
    v: 'voipchip',
    s: firstRowStyle
  }
  worksheet['F1'] = {
    v: 'ssid',
    s: firstRowStyle
  }
  worksheet['G1'] = {
    v: 'ssid-key',
    s: firstRowStyle
  }
  worksheet['H1'] = {
    v: 'ssidac',
    s: firstRowStyle
  }
  worksheet['I1'] = {
    v: 'ssidac-key',
    s: firstRowStyle
  }
  worksheet['J1'] = {
    v: 'webpwd',
    s: firstRowStyle
  }
  // 定义内容
  excelData.forEach((item, i) => {
    const j = i + 2
    worksheet['!rows']?.push({ hpx: 22.5 })
    worksheet[`A${j}`] = {
      v: item['序号'],
      s: otherRowStyle
    }
    worksheet[`B${j}`] = {
      v: item['mac'],
      s: otherRowStyle
    }
    worksheet[`C${j}`] = {
      v: item['sn'],
      s: otherRowStyle
    }
    worksheet[`D${j}`] = {
      v: item['xponsn'],
      s: otherRowStyle
    }
    worksheet[`E${j}`] = {
      v: item['voipchip'],
      s: otherRowStyle
    }
    worksheet[`F${j}`] = {
      v: item['ssid'],
      s: otherRowStyle
    }
    worksheet[`G${j}`] = {
      v: item['ssid-key'],
      s: otherRowStyle
    }
    worksheet[`H${j}`] = {
      v: item['ssidac'],
      s: otherRowStyle
    }
    worksheet[`I${j}`] = {
      v: item['ssidac-key'],
      s: otherRowStyle
    }
    worksheet[`J${j}`] = {
      v: item['webpwd'],
      s: otherRowStyle
    }
  })

  // 将工作表添加到工作簿
  XLSX.utils.book_append_sheet(workbook, worksheet, '个参值')

  // 将工作簿保存为文件
  const filePath = 'output.xlsx'
  XLSX.writeFile(workbook, filePath)
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
./util/tool.js
