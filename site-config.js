/**
 * 站点配置 —— 以后加攻略、加下载文件，只改这个文件就行，不用动 index.html。
 */
window.SITE = {
  // Cloudflare Worker 的地址（部署后填，末尾不要带 /）。
  // 例：'https://api.example.com' 或 'https://yuu-site.你的账号.workers.dev'
  // 留空时：留言板显示"暂未开放"，下载区里托管在 Worker 的文件不可用。
  apiBase: 'https://yuu-site.yuurepo.workers.dev',

  // （可选）Cloudflare Turnstile 的 Site Key，填了之后留言前会出现人机验证。
  // 需要和 Worker 里的 TURNSTILE_SECRET 配套使用。
  turnstileSiteKey: '',

  // ===== 我做的攻略网站 =====
  // cover: 封面图（可不填，不填会用冷灰蓝底色）
  guides: [
    {
      title: '学园祭的王子们 攻略',
      desc: '根据小红书博主「仓鼠大王」的攻略笔记制作，会同步更新仓鼠大王老师的攻略内容。',
      url: 'https://princegameguide.netlify.app/',
      cover: 'images/The Prince of Tennis Sweet School Festival/prince.jpg',
      tags: ['攻略', '乙女', 'SWITCH'],
    },
    // 以后再加一个，复制上面整块、改内容即可：
    // { title: '', desc: '', url: '', cover: '', tags: [] },
  ],

  // ===== 下载区 =====
  // 两种写法任选其一：
  //   file: 'xxx.zip'    文件放在 Cloudflare R2 的 public/ 目录下（大文件用这个，点击即下载）
  //   url:  '...'        任意链接（站内相对路径如 'files/xxx.zip'，或网盘链接）
  // 若是网盘/外链，加上 external: true，按钮会显示"前往下载"并新窗口打开。
  downloads: [
    {
      title: 'BUSTAFELLOWS PROM 朗读剧 · 中文字幕',
      desc: '机翻字幕，正确率约 90%。需要提供正版购买记录后，我会私信发你提取密码。',
      url: 'https://yuurepo.lanzouq.com/iElPQ47knfqb',
      external: true,
      size: '',
      updated: '2026.09.09',
      tags: ['字幕'],
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
