const path = require("path")
const rootpath = path.dirname(__dirname) //执行一次dirname将目录定位到docs目录
const utils = require('./utils/index.js');
const filehelper = require('./utils/initPage.js');

module.exports = {
    title: 'leetcode-js', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    base: '/leetcode-js/',
    description: '算法记录', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],  //浏览器的标签栏的网页图标
    ],
    markdown: {
        lineNumbers: true
    },
    serviceWorker: true,
    themeConfig: {
        logo: '/logo.png',
        // base: '/leetcode-js/',
        lastUpdated: 'lastUpdate', // string | boolean
        nav: [
            { text: '首页', link: '/' },
            { text: '简单难度', link: '/pages/easy/e-01.html' },
            { text: '面试', link: '/pages/interview/itv-01.html' },
            { text: 'Github', link: 'https://github.com/abswill/leetcode-js' },
        ],
        sidebar: {
            '/pages/easy/': utils.genSidebar('简单难度', filehelper.getFileName(rootpath+"/pages/easy/"), false),
            '/pages/interview/': utils.genSidebar('面试', filehelper.getFileName(rootpath+"/pages/interview/"), false)
        }
    }
}