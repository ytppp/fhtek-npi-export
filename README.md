# fhtek-npi-export

An Electron application with Vue and TypeScript

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```

### npi 规则

#### totalplay 规则

- mac:
  - 前七位: 固定D093955
  - 后五位：十六进制，每次递增8，A-F大写，需要确定开始
- sn: FTG5W2331600001
  - 前两位：固定 FT
  - 第三位：G: 光猫、R: 路由器
  - 第四位：产品编号 5代表FTG6243M
  - 第五位：代工厂编号: W代表厂商WP; Y代表厂商YM; c代表厂商: XXXX; D代表·....
  - 第六、七位：生产年份 23代表2023年
  - 第八位：生产月份: 3代表三月........A代表10月，B代表11月，C代表12月
  - 第九、十位：生产批次
  - 后五位：本批编号
- xponsn: FHTK955 + mac 后五位
- voipchip: 自己填写
- ssid: Totalplay- + sn 后四位
- ssid-key: sn 后四位 + mac 后四位 + 八位随机大小写字母数字
- ssidac: ssid + -5G
- ssidac-key: sn 后四位 + mac 后四位 + 八位随机大小写字母数字
- webpwd: 十六位随机大小写字母数字加特定字符 "!","@","#","*","+","-","_","=","~",".","?"

