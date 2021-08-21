---
sidebar: auto
---

# 使用手册

## 安装

安装步骤请查看 [安装说明](install.md)。

## 更新

在 InPanel 面板中选择“设置”-“版本升级”进行版本更新。

## 修改端口

途径一：在 InPanel 面板中选择“设置”-“服务设置”-“绑定端口”进行端口修改。

途径二：在服务器上运行以下命令：

```shell
/usr/local/inpanel/config.py port '端口号'
```

## 卸载

在服务器上运行以下命令即可完成卸载：

```shell
service inpanel stop
rm -rf /usr/local/inpanel
rm -f /etc/init.d/inpanel
```

卸载不会影响除 InPanel 面板外的其它数据、已有服务及配置等。

## 忘记用户名或密码

在服务器上运行以下命令即可重置管理员用户名密码：

```shell
/usr/local/inpanel/config.py username '用户名'
/usr/local/inpanel/config.py password '密码'
```
