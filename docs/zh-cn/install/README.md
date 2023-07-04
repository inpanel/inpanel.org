# 安装说明

## 安装需求

1. 操作系统：CentOS/RedHat 5.4 或 5.4 以上版本，32 位或 64 位系统，推荐使用 CentOS 6.2 64 位及以上版本。
2. 内存大小：运行时占用约 30MB 左右的服务器内存。
3. 请使用现代浏览器访问面板（IE8+、Firefox 14+、Chrome 21+），推荐使用 Chrome。

## 在线安装步骤

使用 SSH 连接工具，如 PuTTY、XShell、SecureCRT 等，连接到您的 Linux 服务器。

执行以下命令开始安装：

从 GitHub 下载安装脚本

```shell
wget https://raw.githubusercontent.com/inpanel/inpanel/master/install.py
```

或者从 码云 下载安装脚本

```shell
wget https://gitee.com/inpanel/inpanel/raw/master/install.py
```

安装

```shell
python install.py
```

如下图所示：

<img src="/images/install/1.png" alt="download script and install">

安装完成后请设置管理员用户名和密码，如果直接回车，则使用默认的用户名 `admin` 和密码 `admin` 。

设置完后，打开给定的链接地址即可访问您的 InPanel 面板。

如下图所示：

<img src="/images/install/2.png" alt="set username and password">

## 开发版的安装

```shell
wget https://raw.githubusercontent.com/inpanel/inpanel/dev/install.py
python install.py --dev
```

## 后续操作

请查看 [使用手册](../manual.md)。
