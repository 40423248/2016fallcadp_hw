var tipuesearch = {"pages":[{"title":"About","text":"2016Fall 修課成員網誌","url":"./pages/about/","tags":"misc"},{"title":"2016Fall Week1","text":"cdt Week1 第一週 登入既有的Github倉儲,並Fork(https://github.com/mdecourse/2016fallcadp) 建立 2016fallcadp_hw 倉儲, 將分支設為 gh-pages 再建立一個名稱為(帳號).github.io的倉儲, 並在裡面建立 index.html 就可以用 https://帳號.github.io 連結到 index.html 自選組員, 確定各組組長學號, 組長再設為[課程倉儲] (https://github.com/mdecourse/2016fallcadp) 的協同者, 負責協助管理這個倉儲, 並管理組員對倉儲的 pull requests","url":"./2016fall-week1.html","tags":"Misc"},{"title":"2016Fall Week10","text":"fgh","url":"./2016fall-week10.html","tags":"Misc"},{"title":"2016Fall Week11","text":"zxc","url":"./2016fall-week11.html","tags":"Misc"},{"title":"2016Fall Week12","text":"uio","url":"./2016fall-week12.html","tags":"Misc"},{"title":"2016Fall Week13","text":"","url":"./2016fall-week13.html","tags":"Misc"},{"title":"2016Fall Week2","text":"gh-pages Week2 第二週 如何使用ShareX來錄製影片還有截圖 先去ShareX官方網站下載軟體 選軟體的Task settings裡的Screen recorder,再選Screen recording設定錄影畫面及錄音型式 到軟體的Application settings中的path來設定存檔內容 按Shift+Print Scrn可以選擇錄影範圍 再按下Shift+Print Scrn可以停止錄影","url":"./2016fall-week2.html","tags":"Misc"},{"title":"2016Fall Week3","text":"NG Week3 第三週 1.如何讓自己的個人課程倉儲能顯示基本架構: 先從Github拉下自己的倉儲 去班級倉儲把班級倉儲也拉下來 把課程倉儲的基礎架構複製並覆蓋掉個人倉儲,但要住意有幾個檔案不能蓋到,可能會讓倉儲毀損 把覆蓋好的倉儲推上遠端取代原有的倉儲 2.如何讓自己的index有基本架構: 到scrum-3的倉儲裡的index複製程式碼 將程式碼複製到個人網頁的index","url":"./2016fall-week3.html","tags":"Misc"},{"title":"2016Fall Week4","text":"111 Week4 第四週 建立分組倉儲並把組員加入子模組來共同編輯 由組長建立分組倉儲，倉儲名稱為2016fallcp_ag(組別) 複製更新過的倉儲基本架構到自己組別的倉儲中 再來組長將組員納為子模組成員 子模組指令: git submodule add -b gh-pages https://github.com/scrum-1/2016fallcp_ag100 g100","url":"./2016fall-week4.html","tags":"Misc"},{"title":"2016Fall Week5","text":"ddf Week5 第五週 1.試著使用子模組來編輯 假設有人希望 git clone 帶有子模組的倉儲, 他必須在 git clone 後執行 git submodule init, 開啟子模組, 然後利用 git submodule update 抓取下子模組中的對應版本資料 對應版本紀錄在 .git/modules/g100/refs/heads/master 檔案裡 2.####假如帶有子模組的倉儲管理者, 希望更新某一特定子模組的對應版本, 則必須先確定倉儲分支 然後用cd指令退回到子模組目錄中, 再用 git pull拉下來, 然後回到上層倉儲做版本的推送 假如想拉回所有子模組的對應版本內容, 要使用 git pull origin gh-pages --recurse-submodules, 又或著是想拉回 master 分支, 則使用 git pull origin master --recurse-submodules 註:如果要把所有子模組的對應版本更新到最新的提交, 使用 git submodule foreach \"(git checkout gh-pages; git pull)&\" 3.####用前面的指令完成更新子模組的對應版本後, 要做推送資料, 將改版資料推到遠端, 之後透過 git submodule update --init --recursive 把此對應版本的子模組拉到近端, 其中因為子模組中還有子模組, 而此更新對這些新加入的子子模組沒有 --init, 所以子模組更新時, 要納入 --init","url":"./2016fall-week5.html","tags":"Misc"},{"title":"2016Fall Week6","text":"tye Week6 第六週 用onshape跟Solvespace來畫指定的圖 Onshape部分: 用學校信箱帳號創立一個免費的Onshape帳號 Solvespace部分: 去課程倉儲的上課筆記下載Solvespace","url":"./2016fall-week6.html","tags":"Misc"},{"title":"2016Fall Week7","text":"qwe","url":"./2016fall-week7.html","tags":"Misc"},{"title":"2016Fall Week8","text":"asd","url":"./2016fall-week8.html","tags":"Misc"},{"title":"2016Fall Week9","text":"rty","url":"./2016fall-week9.html","tags":"Misc"}]};