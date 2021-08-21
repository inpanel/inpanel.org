---
sidebar: auto
---

# User Manual

## Installation

[Installation instructions](install.md).

## Update

在 InPanel 面板中选择“设置”-“版本升级”进行版本更新。

## Custom port

途径一：在 InPanel 面板中选择“设置”-“服务设置”-“绑定端口”进行端口修改。

途径二：在服务器上运行以下命令：

```shell
/usr/local/inpanel/config.py port '端口号'
```

## Uninstall

在服务器上运行以下命令即可完成卸载：

```shell
service inpanel stop
rm -rf /usr/local/inpanel
rm -f /etc/init.d/inpanel
```

卸载不会影响除 InPanel 面板外的其它数据、已有服务及配置等。

## Forgot user name or password

在服务器上运行以下命令即可重置管理员用户名密码：

```shell
/usr/local/inpanel/config.py username '用户名'
/usr/local/inpanel/config.py password '密码'
```
