var tipuesearch = {"pages": [{'title': '關於', 'text': 'https://github.com/mdecycu/cmsite \n \xa0 \n 歡迎來到冠霖的網站1 \n', 'tags': '', 'url': '關於.html'}, {'title': '上課進度', 'text': '', 'tags': '', 'url': '上課進度.html'}, {'title': 'w4-w5', 'text': '本課程所謂個人網站, 即 github帳號.github.io, 可由使用者自行設定內容, 建議長期維護後可用於研究所推甄, 或求職時使用. \n 本課程所謂評分網站, 即 github帳號.github.io/cad2023, 內容及維護歴程資料將用於課程評分 \n 評分網站與倉儲: \n 2a cad2023 學員網站與倉儲連結 \n 2b cad2023 學員網站與倉儲連結 \n 學員展示用 IPv6 位址: \n 2a 學員展示用 IPv6 位址: 2001:288:6004:17:2023:cada:: 班級名單序號 \n 2b 學員展示用 IPv6 位址: 2001:288:6004:17:2023:cadb:: 班級名單序號 \n', 'tags': '', 'url': 'w4-w5.html'}, {'title': 'w11', 'text': '有關永動機運動模擬玩具 (perpetual motion simulator toy): \n CAD 零組件繪圖 \n 原型製作前的系統模擬與製程規劃 \n 如何學習 CoppeliaSim: \n 透過閱讀\xa0 https://mde.tw/pjcopsim \xa0中的 tutorial 與相關指令說明後, 實際操作測試並在個人網頁中記錄各項功能的使用方法. \n 進入 CoppeliaSim \xa0 Forum , 搜尋相關討論或發問. \n Arduino code to CoppeliaSim \xa0 展示. ( Horosim , \xa0 備份 ), 更早的 討論 . 虛實整合: \xa0 1 , \xa0 2 , \xa0 3 . \n 從既有討論串中學習: \xa0 1 , \n 了解與磁場模擬有關的研究: \xa0 1 \xa0 (需要下載密碼), \xa0 2 , \xa0 3 . \n 從 案例 中學習. \n 有關鋼球平衡台 (steel ball balancing platform): \n 有關虛實整合彈珠台 (cyber-physical pinball table) \n', 'tags': '', 'url': 'w11.html'}, {'title': 'w12', 'text': '\n \n 從 這裡 可以取得支援 IPv6 網路協定的 \xa0 CoppeliaSim 與 ZMQ remote API Python 程式範例 , 請利用 Wink 製作執行此一範例程式的 操作影片檔 後, 放入個人網站中的 w12 頁面中 \n \n \n 從上列程式範例, 已知 \xa0 simAddForceAndTorque \xa0 可 對場景中物體的質心施力與施轉矩 , 而 \xa0 simAddForce \xa0 則可對場景中的物體 任一位置施力 , 此外利用 \xa0 simGetObjectPosition \xa0 可以在特定時間點取得物件位置, 請根據上列鋼球永動模擬器的場景與 ZMQ remote API Python 程式, 以 platform \xa0 圓孔上緣作為參考原點座標 , 延伸出一個足夠大小的 平面範圍 , 測試利用上述兩種施力函式, 在鋼球通過感測器時, 對鋼球施以不同大小的力或轉矩後, 進行鋼球在目標平面上的落點分析, 並設法依此 落點實驗, 找出能讓鋼球正好落在 platform 範圍的施力或轉矩大小 \n \n \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w13', 'text': '利用 ChatGPT 對話所完成的 2a 座位排序程式 \n', 'tags': '', 'url': 'w13.html'}, {'title': '布萊頓', 'text': 'https://en.wikipedia.org/wiki/Python_（程式語言） \n 例子： \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python教學： \n https://docs.python.org/3/tutorial/ \n Python 的非正式介紹 \n 縮排（Python 採用 4 個 Spaces 縮排，以介面執行範圍） \n 變數（ Python 關鍵字 ） \n 註（#單行註解、三單標註或三雙標註標註多行註解） \n 數 (整數 int(), 浮點數 float()) \n 字符串 （字串） \n print (Python 內建函數,  print() 函式) \n Python是控制流程工具 \n 為了 \n 如果 \n 範圍 \n 打開 \n 讀 \n 清單 \n 元組 \n 字典 \n 功能 \n 嘗試...除了 \n 休息 \n 經過 \n 類別 \n 此頁面示範如何在同一頁面下納入多個線上Ace編輯器與執行按鈕（ practice_html.txt 動態頁面超檔案）。 \n Practice_html.txt 動態頁面超檔案應該可以在啟動 Brython 時，設定會將 .py 檔案放入 downloads/py 目錄中引用。 \n 也即將所有對應的 html 也使用 Brython 產生，然後編寫為 類別 後，在範例匯入時透過 實例 引用。 \n <!-- 啟動 Brython --> \n<腳本> \n視窗.onload=函數(){ \nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']}); \n} \n</腳本> \n 從1累加到100： \n 1 加到100 \n 將 iterable 與 iterator 相關說明 ，利用 Brython 與 Ace Editor 整理在此頁面。 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n 檔案名稱： .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n 跑步   輸出   明確輸出區 清晰的繪圖區 重新載入 \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從1累加到100第2部分： \n 1 加到100 cango_三_齒輪 BS蛇 人工智慧俄羅斯方塊 旋轉塊 \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n 檔案名稱： .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n 跑步   輸出   明確輸出區 清晰的繪圖區 重新載入 \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': '布萊頓.html'}]};