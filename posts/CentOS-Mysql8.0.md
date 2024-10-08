---
outline: deep
title: Centos7 Yum安装MYSQL8.0详细安装步骤
date: 2024-02-22
imgURL: '/img_1.jpg'
---

[[toc]]

### 0、更换yum源

### 1、打开 mirrors.aliyun.com，选择centos的系统，点击帮助

### 2、执行命令：
```
yum install wget -y
```
### 3、改变某些文件的名称
```
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
```
### 4、执行更换yum源的命令
```
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
```
### 5、更新本地缓存
```
yum clean all
yum makecache
```

### 6、查看系统中是否自带安装mysql
```
yum list installed | grep mysql
```
### 7、删除系统自带的mysql及其依赖（防止冲突）
```
yum -y remove mysql-libs.x86_64
```
### 8、安装wget命令
```
yum install wget -y
```
### 9、给CentOS添加rpm源，并且选择较新的源
```
wget -i -c https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm
```
### 10、安装下载好的rpm文件
```
yum install mysql80-community-release-el7-3.noarch.rpm -y
```
### 11、使用yum安装mysql
```
yum install mysql-community-server -y
```
#### 11.1、安装中遇到错误解决方式
```
错误：
mysql-community-libs-8.0.32-1.el7.x86_64.rpm 的公钥尚未安装
失败的软件包是：mysql-community-libs-8.0.32-1.el7.x86_64
GPG 密钥配置为：file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql
```
解决办法：
执行如下命令后再次安装：
```
rpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql-2022
```
### 12、启动mysql服务
```
#启动mysql服务，查看启动状态及是否开机启动
systemctl start mysqld.service
systemctl status mysqld.service
systemctl list-unit-files | grep enabled
```
### 13、获取mysql的临时密码
```
grep "password" /var/log/mysqld.log
```
### 14、使用临时密码登录
```
mysql -uroot -p
#输入密码
```
### 15、修改密码
```
#密码要符合mysql安全规则，否则修改不成功
ALTER USER 'root'@'localhost' IDENTIFIED BY '密码';
```
### 16、设置字符集为utf-8
```
#在[mysqld]部分添加：
character-set-server=utf8
#在文件末尾新增[client]段，并在[client]段添加：
default-character-set=utf8
```
