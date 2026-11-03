/**
 * 站点配置 —— 以后加攻略、加下载文件，只改这个文件就行，不用动 index.html。
 */
window.SITE = {
  // Cloudflare Worker 的地址（部署后填，末尾不要带 /）。
  // 例：'https://api.yuuna.online'
  // 留空时：留言板显示"暂未开放"，下载区里托管在 Worker 的文件不可用。
  apiBase: 'https://api.yuuna.online',

  // （可选）Cloudflare Turnstile 的 Site Key，填了之后留言前会出现人机验证。
  // 需要和 Worker 里的 TURNSTILE_SECRET 配套使用。
  turnstileSiteKey: '',

  guides: [
    {
      title: '学园祭的王子们 攻略',
      desc: '38位王子加1位DLC王子攻略已全。',
      url: 'https://princegameguide.yuuna.online/',
      cover: 'images/The Prince of Tennis Sweet School Festival/prince.jpg',
      tags: ['攻略', '乙女', 'SWITCH'],
    },
    {
      title: 'BUSTAFELLOWS Season2 攻略',
      desc: 'Steam全线路中英对照攻略，点击立绘进入对应线路，包含推荐攻略顺序与序章选择说明。',
      url: 'https://bfseason2.yuuna.online/',
      cover: 'images/BUSTAFELLOWS SEASON 2/bf.png', 
      tags: ['攻略', '乙女', '中英对照','STEAM'],
    },

  ],

  // ===== 下载区 =====
  // 两种写法任选其一：
  //   file: 'xxx.zip'    文件放在 Cloudflare R2 的 public/ 目录下（大文件用这个，点击即下载）
  //   url:  '...'        任意链接（站内相对路径如 'files/xxx.zip'，或网盘链接）
  // 若是网盘/外链，加上 external: true，按钮会显示"前往下载"并新窗口打开。
  downloads: [
    {
      title: 'BUSTAFELLOWS PROM 朗读剧 中文字幕',
      desc: '机翻字幕，正确率约90%。需要提供正版购买记录后，联系邮箱或者微博，我会私发你提取密码。',
      file: 'BUSTAFELLOWS PROM机翻中文字幕.zip',
      size: '170.01 KB',
      updated: '2026.09.09',
      tags: ['字幕'],
      // 网盘备用下载：填入链接后显示按钮，留空则不显示
      altUrl: 'https://yuurepo.lanzouq.com/iElPQ47knfqb',
      altLabel: '网盘下载',
    },
    {
      title: 'BUSTAFELLOWS Season2 Steam版英文汉化补丁下载',
      desc: '适用于BUSTAFELLOWS Season2中文补丁下的攻略',
      file: 'BF2汉化补丁v1.0.1.zip',
      size: '195.86 MB',
      updated: '2026.11.02',
      tags: ['汉化补丁'],
      // 网盘备用下载：把链接填到下面，留空则不显示按钮。altLabel 可改按钮文字（如“百度网盘”）
      altUrl: 'https://www.icloud.com.cn/iclouddrive/0f00N9wbdS1Moh043SdumRg4g',
      altLabel: '网盘下载',
      // 显示在这个补丁卡片下方的详细内容（补丁计划）。不需要就删掉整个 detail。
      // status 可选：done（已完成）/ doing（进行中）/ todo（计划中）。以下为示例，请改成你的实际计划。
      detail: {
        title: '补丁计划',
        desc: '后续更新安排',
        updated: '2026.11.03',
        steps: [
          { status: 'done',  text: 'v1.0.1 已发布' },
          { status: 'doing', text: '修正错字与漏译' },
          { status: 'todo',  text: '有空的时候会更新一版由日文翻译的补丁' },
        ],
      },
    },
    // 例：托管在 R2 的文件（先把文件上传到 R2 的 public/ 目录）
    // {
    //   title: '学园祭的王子们 攻略 PDF',
    //   desc: '离线版，方便没网时查看。',
    //   file: 'prince-guide.pdf',
    //   size: '3.2 MB',
    //   updated: '2026.11.02',
    //   tags: ['PDF'],
    // },
  ],
};
