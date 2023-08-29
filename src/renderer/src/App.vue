<template>
  <el-config-provider :locale="locale">
    <el-form
      ref="formRef"
      :model="form"
      :rules="formRules"
      label-width="auto"
      :hide-required-asterisk="true"
    >
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :lg="8">
          <el-form-item label="总数" prop="total">
            <el-input v-model="form.total" />
          </el-form-item>
        </el-col>
      </el-row>
      <!-- mac -->
      <fieldset>
        <legend>mac</legend>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :lg="8">
            <el-form-item label="前缀" prop="mac.prefix">
              <el-input v-model="form.mac.prefix" />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="8">
            <el-form-item label="起始mac后缀" prop="mac.firstMacAppend">
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
            <el-form-item label="前缀" prop="sn.prefix">
              <el-input v-model="form.sn.prefix" />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="8">
            <el-form-item label="产品类型">
              <el-select v-model="form.sn.productType" prop="sn.productType">
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
            <el-form-item label="产品编号" prop="sn.productNumber">
              <el-input v-model="form.sn.productNumber" />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="8">
            <el-form-item label="代工厂编号" prop="sn.factoryNumber">
              <el-input v-model="form.sn.factoryNumber" />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="8">
            <el-form-item label="生产年份" prop="sn.year">
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
              <el-select v-model="form.sn.month" prop="sn.month">
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
            <el-form-item label="生产批次" prop="sn.batch">
              <el-input v-model="form.sn.batch" />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="8">
            <el-form-item label="起始本批编号" prop="sn.firstSnAppend">
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
            <el-form-item label="xponsn前缀" prop="xponsn.prefix">
              <el-input v-model="form.xponsn.prefix" />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="8">
            <el-form-item label="预览起始xponsn">
              {{ xponsnText }}
            </el-form-item>
          </el-col>
        </el-row>
      </fieldset>
      <!-- voipchip -->
      <fieldset>
        <legend>voipchip</legend>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :lg="8">
            <el-form-item label="voipchip" prop="voipchip">
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
            <el-form-item label="ssid前缀" prop="ssidPrefix">
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
            <el-form-item label="预览起始ssid-key">{{ macSnComposedText }}</el-form-item>
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
            <el-form-item label="预览起始ssidac-key">{{ macSnComposedText }}</el-form-item>
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
            <el-button @click="previewTable">预览</el-button>
            <el-button type="primary" @click="closeDialogThenExportExcel">导出</el-button>
          </div>
        </el-col>
      </el-row>
    </el-form>
    <el-dialog v-model="dialogVisible" title="数据预览" width="95%" top="5vh">
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
          <el-button type="primary" @click="closeDialogThenExportExcel">导出</el-button>
          <el-button @click="dialogVisible = false">关闭</el-button>
        </span>
      </template>
    </el-dialog>
  </el-config-provider>
</template>

<script setup lang="ts">
import { reactive, computed, ref } from 'vue'
import { ElNotification, ElLoading, type FormInstance, type FormRules } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import {
  stepAddStr,
  stepAddBaseString,
  generateRandomPassword,
  isValidInteger,
  isValidNumStr
} from './util/tool'
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
interface IExcelData {
  序号: number
  mac: string
  sn: string
  xponsn: string
  voipchip: string
  ssid: string
  'ssid-key': string
  ssidac: string
  'ssidac-key': string
  webpwd: string
}
interface IMonthItem {
  value: string
  label: string
}
interface IForm {
  total: number
  mac: {
    prefix: string
    firstMacAppend: string
  }
  sn: {
    prefix: string
    productType: string
    productNumber: number
    factoryNumber: string
    year: string
    month: string
    batch: string
    firstSnAppend: string
  }
  xponsn: {
    prefix: string
  }
  voipchip: string
  ssidPrefix: string
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
const formRef = ref<FormInstance>()
const form = reactive<IForm>({
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
    prefix: 'FHTK955'
  },
  voipchip: 'SI32280',
  ssidPrefix: 'Totalplay'
})
const formRules = reactive<FormRules<IForm>>({
  total: [
    {
      validator: (_rule: any, value: any, callback: any) => {
        const val = `${value}`
        if (!val.trim().length) {
          callback(new Error('请输入总数'))
        }
        if (!isValidInteger(val, 1, 9999)) {
          callback(new Error(`总数范围：${1}-${9999}`))
        }
        callback()
      },
      trigger: 'blur'
    }
  ],
  'mac.prefix': [{ required: true, message: '请输入mac前缀', trigger: 'blur' }],
  'mac.firstMacAppend': [
    {
      validator: (_rule: any, value: any, callback: any) => {
        if (!value.trim().length) {
          callback(new Error('请输入起始mac后缀'))
        }
        if (!isValidNumStr(value)) {
          callback(new Error('起始mac后缀是一个5位的16进制字符串'))
        }
        callback()
      },
      trigger: 'blur'
    }
  ],
  'sn.prefix': [{ required: true, message: '请输入sn前缀', trigger: 'blur' }],
  'sn.productType': [{ required: true, message: '请选择产品类型', trigger: 'change' }],
  'sn.productNumber': [{ required: true, message: '请输入产品编号', trigger: 'blur' }],
  'sn.factoryNumber': [{ required: true, message: '请输入代工厂编号', trigger: 'blur' }],
  'sn.year': [{ required: true, message: '请选择生产年份', trigger: 'change' }],
  'sn.month': [{ required: true, message: '请选择生产月份', trigger: 'change' }],
  'sn.batch': [{ required: true, message: '请输入生产批次', trigger: 'blur' }],
  'sn.firstSnAppend': [
    {
      validator: (_rule: any, value: any, callback: any) => {
        if (!value.trim().length) {
          callback(new Error('请输入起始本批编号'))
        }
        if (!isValidNumStr(value, 'dec')) {
          callback(new Error('起始本批编号是一个5位的10进制字符串'))
        }
        callback()
      },
      trigger: 'blur'
    }
  ],
  'xponsn.prefix': [{ required: true, message: '请输入xponsn前缀', trigger: 'blur' }],
  voipchip: [{ required: true, message: '请输入voipchip', trigger: 'blur' }],
  ssidPrefix: [{ required: true, message: '请输入ssid前缀', trigger: 'blur' }]
})
const tableData = ref<ITableItem[]>([])
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
const getMac = (macPrefix, macAppend) => `${macPrefix}${macAppend}`
const getSn = (snPrefix, snAppend) => `${snPrefix}${snAppend}`
const getXponsn = (xponsnPrefix, mac) => `${xponsnPrefix}${mac.slice(-5)}`
const getSsid = (ssidPrefix, sn, isAc = false) => {
  const sidacAppend = '5G'
  return `${ssidPrefix}-${sn.slice(-4)}${isAc ? `-${sidacAppend}` : ''}`
}
const getMacSnComposed = (sn, mac, appendType: 'pwd' | 'tip' = 'tip') => {
  let text = `${sn.slice(-4)}${mac.slice(-4)}`
  if (appendType === 'pwd') {
    text += generateRandomPassword(8)
  } else {
    const pwdTip = '随机8位字符'
    text += `+${pwdTip}`
  }
  return text
}
const firstMacText = computed(() => getMac(form.mac.prefix, form.mac.firstMacAppend))
const snYearText = computed(() => `${form.sn.year.slice(-2)}`)
const snPrefix = computed(
  () =>
    `${form.sn.prefix}${form.sn.productType}${form.sn.productNumber}${form.sn.factoryNumber}${snYearText.value}${form.sn.month}${form.sn.batch}`
)
const firstSnText = computed(() => getSn(snPrefix.value, form.sn.firstSnAppend))
const xponsnText = computed(() => getXponsn(form.xponsn.prefix, firstMacText.value))
const ssidText = computed(() => getSsid(form.ssidPrefix, firstSnText.value))
const ssidacText = computed(() => getSsid(form.ssidPrefix, firstSnText.value, true))
const macSnComposedText = computed(() => getMacSnComposed(firstSnText.value, firstMacText.value))
const generateTableData = () => {
  const loading = ElLoading.service({
    lock: true,
    text: '正在生成数据，请稍后',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  const data: ITableItem[] = []
  let lastMac = form.mac.firstMacAppend
  let lastSn = form.sn.firstSnAppend
  for (let i = 0; i < form.total; i++) {
    const macItem = getMac(form.mac.prefix, lastMac)
    const snItem = getSn(snPrefix.value, lastSn)
    const macSnComposedItem = getMacSnComposed(snItem, macItem, 'pwd')
    data.push({
      mac: macItem,
      sn: snItem,
      xponsn: getXponsn(form.xponsn.prefix, lastMac),
      voipchip: form.voipchip,
      ssid: getSsid(form.ssidPrefix, snItem),
      ssidKey: macSnComposedItem,
      ssidac: getSsid(form.ssidPrefix, snItem, true),
      ssidacKey: macSnComposedItem,
      webpwd: `${generateRandomPassword(16, true)}`
    })
    lastMac = stepAddStr(lastMac)
    lastSn = stepAddStr(lastSn, 1, 10)
  }
  tableData.value = data
  loading.close()
}
const submitForm = (next) => {
  if (!formRef.value) {
    return
  }
  formRef.value.validate((valid) => {
    if (valid) {
      next()
    } else {
      ElNotification({
        message: '表单验证未通过',
        type: 'error'
      })
    }
  })
}
const previewTable = () => {
  submitForm(() => {
    generateTableData()
    dialogVisible.value = true
  })
}
const closeDialogThenExportExcel = () => {
  submitForm(() => {
    dialogVisible.value = false
    exportExcel()
  })
}
const exportExcel = () => {
  const loading = ElLoading.service({
    lock: true,
    text: '正在导出数据，请稍后',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  generateTableData()
  // 创建一个工作簿
  const workbook = XLSX.utils.book_new()
  // 创建工作表数据
  const excelData: IExcelData[] = []
  tableData.value.forEach((item, i) => {
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
    { wch: 20 },
    { wch: 25 },
    { wch: 30 },
    { wch: 30 },
    { wch: 30 },
    { wch: 30 }
  ]
  // 定义表头样式
  const firstRowStyle = {
    font: { name: 'Microsoft YaHei', size: 11, bold: true },
    alignment: { horizontal: 'center', vertical: 'center' }
  }
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
  // 定义表内容样式
  const otherRowStyle = {
    font: { name: 'Microsoft YaHei', size: 10 },
    alignment: { horizontal: 'center', vertical: 'center' }
  }
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
  const filePath = '个参值.xlsx'
  XLSX.writeFile(workbook, filePath)
  loading.close()
}
</script>

<style>
body {
  padding: 0 20px; /* 解决 el-row 出现横向滚动条 */
}
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
