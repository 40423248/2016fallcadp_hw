Title: 2016Fall Week5
Date: 2016-09-2 12:00
Category: Misc
Tags: 使用導引, 創造力, 表達能力, 協同設計
Author: 40423248

ddf Week5

## 第五週

####1.試著使用子模組來編輯

####假設有人希望 git clone 帶有子模組的倉儲, 他必須在 git clone 後執行 git submodule init, 開啟子模組, 然後利用 git submodule update 抓取下子模組中的對應版本資料 

####對應版本紀錄在 .git/modules/g100/refs/heads/master 檔案裡


2.####假如帶有子模組的倉儲管理者, 希望更新某一特定子模組的對應版本, 則必須先確定倉儲分支

####然後用cd指令退回到子模組目錄中, 再用 git pull拉下來, 然後回到上層倉儲做版本的推送

####假如想拉回所有子模組的對應版本內容, 要使用 git pull origin gh-pages --recurse-submodules, 又或著是想拉回 master 分支, 則使用 git pull origin master --recurse-submodules

####註:如果要把所有子模組的對應版本更新到最新的提交, 使用 git submodule foreach "(git checkout gh-pages; git pull)&"


3.####用前面的指令完成更新子模組的對應版本後, 要做推送資料, 將改版資料推到遠端, 之後透過 git submodule update --init --recursive 把此對應版本的子模組拉到近端, 其中因為子模組中還有子模組, 而此更新對這些新加入的子子模組沒有 --init, 所以子模組更新時, 要納入 --init


