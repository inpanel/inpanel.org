# 自定义安装

如果您使用在线安装脚本安装失败，可以自行手动安装

首先确保系统已经安装了 Python2

## 安装依赖软件

```sh
yum -y install python26
yum install -y -q epel-release
yum install -y -q wget net-tools vim psmisc rsync libxslt-devel GeoIP GeoIP-devel gd gd-devel'
```

## 下载源码包

从如下任意链接下载源码包：

1. https://github.com/inpanel/inpanel/archive/refs/tags/v1.1.1b25.zip
2. https://github.com/inpanel/inpanel/archive/refs/tags/v1.1.1b25.tar.gz
3. https://download.inpanel.org/release/1/inpanel-1.1.1b25.tar.gz
4. https://download.inpanel.org/release/1/inpanel-1.1.1b25.zip

将下载的压缩包解压到文件夹 `/usr/local/inpanel/`

将文件 `/usr/local/inpanel/scripts/init.d/centos/inpanel` 复制到 `/etc/init.d/inpanel` ，并添加执行权限

## 添加文件执行权限

```sh
sudo chmod +x /usr/local/inpanel/config.py
sudo chmod +x /usr/local/inpanel/server.py
sudo chmod +x /etc/init.d/inpanel
```

## 设置账号和密码

```sh
python2 /usr/local/inpanel/config.py username '用户名'
python2 /usr/local/inpanel/config.py password '密码'
```

## 设置运行端口

假设使用端口 9999，如有防火墙需先添加 9999 到白名单或者关闭防火墙

```sh
python2 /usr/local/inpanel/config.py port 9999
```

## 运行

直接运行

```sh
python2 /usr/local/inpanel/server.py
```

通过服务运行

```sh
service inpanel start
```
