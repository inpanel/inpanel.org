---
sidebar: auto
---

# Installation

## Requirement

1. System: CentOS / RedHat 5.4+, 32-bit or 64 bit system. CentOS 6.2 64 bit or above is recommended.
2. Memory: minimum 30MB memory.
3. 请使用现代浏览器访问面板（IE8+、Firefox 14+、Chrome 21+），推荐使用 Chrome。

## Installation steps

使用 SSH 连接工具，如 PuTTY、XShell、SecureCRT 等，连接到您的 Linux 服务器。

执行以下命令开始安装：

Download the installation script from [GitHub](https://github.com/inpanel/inpanel)

```shell
wget https://raw.githubusercontent.com/inpanel/inpanel/master/install.py
```

Download the installation script from [Gitee](https://gitee.com/inpanel/inpanel)

```shell
wget https://gitee.com/inpanel/inpanel/raw/master/install.py
```

Perform installation

```shell
python install.py
```

如下图所示：

<img src="/images/install/1.png" alt="download script and install">

安装完成后请设置管理员用户名和密码，如果直接回车，则使用默认的用户名 `admin` 和密码 `admin` 。

设置完后，打开给定的链接地址即可访问您的 InPanel 面板。

如下图所示：

<img src="/images/install/2.png" alt="set username and password">

## Installation of development version

```shell
wget https://raw.githubusercontent.com/inpanel/inpanel/dev/install.py
python install.py --dev
```

## Others

请查看 [使用手册](manual.html)。
