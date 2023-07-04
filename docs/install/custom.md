# Custom Installation

If the installation fails using the online installation script, you can install it manually yourself

First make sure that your system already has Python 2 installed

## Install Dependent Software

```sh
yum -y install python26
yum install -y -q epel-release
yum install -y -q wget net-tools vim psmisc rsync libxslt-devel GeoIP GeoIP-devel gd gd-devel
```

## Download source package

Download the source package from any of the following links:

```
1. https://github.com/inpanel/inpanel/archive/refs/tags/v1.1.1b25.zip
2. https://github.com/inpanel/inpanel/archive/refs/tags/v1.1.1b25.tar.gz
3. https://download.inpanel.org/release/1/inpanel-1.1.1b25.tar.gz
4. https://download.inpanel.org/release/1/inpanel-1.1.1b25.zip
```

Extract the downloaded package to a folder `/usr/local/inpanel/`

Copy the file `/usr/local/inpanel/scripts/init.d/centos/inpanel` to `/etc/init.d/inpanel` , and add execute permissions

## Set Permissions

```sh
sudo chmod +x /usr/local/inpanel/config.py
sudo chmod +x /usr/local/inpanel/server.py
sudo chmod +x /etc/init.d/inpanel
```

## Set Account and Password

```sh
python2 /usr/local/inpanel/config.py username 'your-username'
python2 /usr/local/inpanel/config.py password 'your-password'
```

## Set Port

Assuming to use port 9999, you need to add 9999 to the whitelist or turn off the firewall

```sh
python2 /usr/local/inpanel/config.py port 9999
```

## Run Service

Run directly

```sh
python2 /usr/local/inpanel/server.py
```

Run through the service

```sh
service inpanel start
```
