#!/bin/bash
CUR_PATH=$(cd "$(dirname "$0")"; pwd)
DEAMON=${CUR_PATH}/bin/www   #这里需要填写你自己的Node项目的启动脚本文件
LOG=${CUR_PATH}/logs/log  #可选，日志文件目录
PID=${CUR_PATH}/pid  #必填内容，用于记录forever的进程号

export PATH=$PATH:/usr/local/bin  #在这里指定一下Node的可执行程序安装目录，我的是/usr/local/bin
export NODE_PATH=$NODE_PATH:/usr/local/lib/node_modules  #这里是Node类库的路径

#往下的内容就不用修改了

node=node
forever=forever

case "$1" in
    start)
        $forever start -l $LOG --pidFile $PID -a $DEAMON
        ;;
    stop)
        $forever stop --pidFile $PID $DEAMON
        ;;
    stopall)
        $forever stopall --pidFile $PID
        ;;
    restartall)
        $forever restartall --pidFile $PID
        ;;
    reload|restart)
        $forever restart -l $LOG --pidFile $PID -a $DEAMON
        ;;
    list)
        $forever list
        ;;
    *)
        echo "Usage: /etc.init.d/node {start|stop|restart|reload|stopall|restartall|list}"
        exit 1
        ;;
esac
