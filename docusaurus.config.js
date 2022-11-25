// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "李美丽的官方网站",
    tagline: "李美丽很美丽",
    url: "https://lilichao.github.io/",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "lilichao", // Usually your GitHub org/user name.
    projectName: "lilichao.github.io", // Usually your repo name.

    // 上传代码时，两个注意事项
    // deploymentBranch 来指定分支！
    // 还需要配置一个环境变量：GIT_USER:github的用户名
    deploymentBranch: "gh-pages",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "zh",
        locales: ["zh"]
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: "https://github.com/lilichao/lilichao.github.io/"
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: "https://github.com/lilichao/lilichao.github.io/"
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css")
                }
            })
        ]
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: "My Site",
                logo: {
                    alt: "My Site Logo",
                    src: "img/logo.svg"
                },
                items: [
                    {
                        type: "doc",
                        docId: "intro",
                        position: "left",
                        label: "指南"
                    },
                    { to: "/blog", label: "博客", position: "left" },
                  
                ]
            },
            footer: {
                style: "dark",
                // links: [
                //     {
                //         title: "Docs",
                //         items: [
                //             {
                //                 label: "Tutorial",
                //                 to: "/docs/intro"
                //             }
                //         ]
                //     },
                //     {
                //         title: "Community",
                //         items: [
                //             {
                //                 label: "Stack Overflow",
                //                 href: "https://stackoverflow.com/questions/tagged/docusaurus"
                //             },
                //             {
                //                 label: "Discord",
                //                 href: "https://discordapp.com/invite/docusaurus"
                //             },
                //             {
                //                 label: "Twitter",
                //                 href: "https://twitter.com/docusaurus"
                //             }
                //         ]
                //     },
                //     {
                //         title: "More",
                //         items: [
                //             {
                //                 label: "Blog",
                //                 to: "/blog"
                //             },
                //             {
                //                 label: "GitHub",
                //                 href: "https://github.com/facebook/docusaurus"
                //             }
                //         ]
                //     }
                // ],
                copyright: `Copyright © ${new Date().getFullYear()} lilichao.github.io. Built with Docusaurus.`
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme
            }
        })
}

module.exports = config
