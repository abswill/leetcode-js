module.exports = {
    title: 'leetcode-js', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: '算法记录', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/FE.png' }],  //浏览器的标签栏的网页图标
    ],
    markdown: {
        lineNumbers: true
    },
    serviceWorker: true,
    themeConfig: {
        logo: '/FE.png',
        base: '/leetcode-js/',
        lastUpdated: 'lastUpdate', // string | boolean
        nav: [
            { text: '首页', link: '/' },
            { text: 'Github', link: 'https://github.com/abswill/leetcode-js' },
        ],
        sidebar: {
            '/pages/easy/':[
                {
                    title: '简单难度',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['test1.md', '子菜单1'],
                        // ['test3.md', '子菜单2']
                    ]
                }
            ],
        }
    }
}