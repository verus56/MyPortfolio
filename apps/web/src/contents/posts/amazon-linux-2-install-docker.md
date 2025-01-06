---
title: "AWS: 如何在 AWS EC2 Amazon Linux 2 上安裝 Docker"
category: DevOps
publishedAt: '2024-04-11'
summary: "在我們需要做 DevOps 時，我們常常會需要用到 Containerization 技術，而 Docker 是目前最為廣泛使用的 Containerization 技術之一。同時我們也可能會用到雲端的算力來幫助我們完成這些工作，因此我們今天將會介紹如何在 Amazon Linux 2 上安裝 Docker。"
tags: 
  - Docker
  - AWS
  - EC2
  - Amazon Linux 2
banner: /images/banner/posts/amazon-linux-2-install-docker.webp
alt: "AWS: 如何在 AWS EC2 Amazon Linux 2 上安裝 Docker"
---

在我們需要做 DevOps 時，我們常常會需要用到 Containerization 技術，而 Docker 是目前最為廣泛使用的 Containerization 技術之一。同時我們也可能會用到雲端的算力來幫助我們完成這些工作，因此我們今天將會介紹如何在 Amazon Linux 2 上安裝 Docker。

![AWS: 如何在 AWS EC2 Amazon Linux 2 上安裝 Docker](/images/banner/posts/amazon-linux-2-install-docker.webp)

### 連線到 EC2

我們會需要透過 SSH 連線到 EC2，當然我們也可以直接透過 Console 連線到 Shell 來操作，我們將會以 SSH 的方式連線到 EC2 來操作，畢竟可以本地連上去操作會更加順手。

```bash
# 把 <ec2-public-ip> 換成你的 EC2 的 Public IP
$ ssh -i "your.pem" ec2-user@<ec2-public-ip>.compute-1.amazonaws.com
   ,     #_
   ~\_  ######_        Amazon Linux 2
  ~~  \_#######\
  ~~     \####|       AL2 End of Life is 2025-06-30.
  ~~       \#/ ___
   ~~       V~' '->
    ~~~         /    A newer version of Amazon Linux is available!
      ~~._.   _/
         _/ _/       Amazon Linux 2023, GA and supported until 2028-03-15.
       _/m/'           https://aws.amazon.com/linux/amazon-linux-2023/

[ec2-user]@your-ip ~ $
```

### 檢查安裝所需的 [yum](https://en.wikipedia.org/wiki/Yum_(software))

透過 [yum](https://en.wikipedia.org/wiki/Yum_(software)) 來檢查我們的版本，並且我們也會用作安裝 Docker 的套件。

```bash
# 檢查 yum 的版本
$ sudo yum update
Loaded plugins: extras_suggestions, langpacks, priorities, update-motd
No packages marked for update
```


透過 yum 來搜尋 Docker 的套件，並且查看 Docker 的資訊。

```bash
# 搜尋 Docker 的套件
$ sudo yum search docker
Loaded plugins: extras_suggestions, langpacks, priorities, update-motd
===================================================== N/S matched: docker =====================================================
pcp-pmda-docker.x86_64 : Performance Co-Pilot (PCP) metrics from the Docker daemon
...
...
```

使用 `yum info docker` 來查看 Docker 的資訊。

```bash
$ sudo yum info docker
Loaded plugins: extras_suggestions, langpacks, priorities, update-motd
Available Packages
Name        : docker
...
...
```


### 安裝 Docker 以及啟動 Docker 服務

在查看完 Docker 的資訊後，我們可以透過 yum 來安裝 Docker。

```bash
$ sudo yum install docker
...
Installed:
  docker.x86_64 0:20.10.25-1.amzn2.0.4

Dependency Installed:
  containerd.x86_64 0:1.7.11-1.amzn2.0.1        libcgroup.x86_64 0:0.41-21.amzn2        pigz.x86_64 0:2.3.4-1.amzn2.0.1
  runc.x86_64 0:1.1.11-1.amzn2

Complete!
```

檢查一下我們的 Docker 是否有安裝成功吧！

```bash
$ sudo docker version
Client:
 Version:           20.10.25
 ...

Server:
 Engine:
  Version:          20.10.25
  ...
```


啟動我們的 Docker 服務。

```bash
$ sudo service docker start
Redirecting to /bin/systemctl start docker.service

$ sudo systemctl enable docker.service
Created symlink from /etc/systemd/system/multi-user.target.wants/docker.service to /usr/lib/systemd/system/docker.service.
```

我們可以透過 systemctl 來檢查 Docker 服務的狀態，當我們看到 `Active: active (running)` 時，就代表我們的 Docker 服務已經成功啟動。

```bash
$ sudo systemctl status docker.service
● docker.service - Docker Application Container Engine
   Loaded: loaded (/usr/lib/systemd/system/docker.service; enabled; vendor preset: disabled)
   Active: active (running) since Wed 2024-04-10 02:29:53 UTC; 1min 13s ago
     Docs: https://docs.docker.com
 Main PID: 3529 (dockerd)
   CGroup: /system.slice/docker.service
           └─3529 /usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock --default-ulimit nofile=32768:65536...
...
```

我們可以把 ec2-user 加入到 docker 群組中，這樣我們就不需要每次都要用 sudo 來執行 Docker 的指令。

```bash
$ sudo usermod -a -G docker ec2-user

$ id ec2-user
uid=1000(ec2-user) gid=1000(ec2-user) groups=1000(ec2-user),4(adm),10(wheel),190(systemd-journal),992(docker)

$ newgrp docker
```

### 安裝 `docker-compose`

我們需要安裝 `docker-compose` 來幫助我們管理 Docker 的 Container，我們可以透過 pip3 來安裝 `docker-compose`。

```bash
# 1. Get pip3
$ sudo yum install python3-pip
Loaded plugins: extras_suggestions, langpacks, priorities, update-motd
amzn2-core                                                                                              | 3.6 kB  00:00:00
Package python3-pip-20.2.2-1.amzn2.0.5.noarch already installed and latest version
Nothing to do

# 2. Then run any one of the following
$ pip3 install --user docker-compose
Collecting docker-compose
  Downloading docker_compose-1.29.2-py2.py3-none-any.whl (114 kB)
...
...
Successfully installed ... docker-compose-1.29.2 ...
```

> **⚠️ 注意**
> 如果在安裝 `docker-compose` 時出現錯誤，可能是因為 `urllib3` 的版本支援問題，我們可以透過 `pip3 install urllib3==1.26.15` 來安裝特定版本的 `urllib3`。
> 
> 可以參考 [Persisting spaCy import error: NotOpenSSLWarning: urllib3 v2.0 only supports OpenSSL 1.1.1+ #12750](https://github.com/explosion/spaCy/discussions/12750) 來排除
> 
> 我們也可以使用 `wget` 來下載 `docker-compose` 並且安裝。

```bash
$ wget https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) 
$ sudo mv docker-compose-$(uname -s)-$(uname -m) /usr/local/bin/docker-compose
$ sudo chmod -v +x /usr/local/bin/docker-compose
```

我們可以透過 `docker-compose --version` 來檢查 `docker-compose` 是否有安裝成功。

```bash
$ docker-compose version
docker-compose version 1.29.2, build unknown
docker-py version: <module 'docker.version' from '/home/ec2-user/.local/lib/python3.7/site-packages/docker/version.py'>
CPython version: 3.7.16
OpenSSL version: OpenSSL 1.0.2k-fips  26 Jan 2017
```


這時我們就可以開始使用 Docker 來做 Containerization 的工作了。

最後附上一些在使用 Docker 時可能會用到的指令。祝福大家都能順利使用 Docker 來完成自己的工作。

```bash
# start the service
$ sudo systemctl start docker.service
# stop the service
$ sudo systemctl stop docker.service
# restart the service
$ sudo systemctl restart docker.service
# get the service status
$ sudo systemctl status docker.service
```


### Reference

- [How to install Docker on Amazon Linux 2](https://www.cyberciti.biz/faq/how-to-install-docker-on-amazon-linux-2/)
- [How to install Docker on Amazon Linux 2](https://swapnasagarpradhan.medium.com/how-to-install-docker-on-amazon-linux-2-8e5161ac5464)
