## 第一週主線作業

第一週我們介紹了如何實作關注點分離，小明從好友那邊拿到一份 Todo 工具，但打開一看發現 Todo 工具邏輯有些混亂，並且要新增功能異常困難，請協助小明來修復這份版型。

![](https://i.imgur.com/uin7dNI.png)

- 範例版型(非關注點分離)：https://codepen.io/hsiangfeng/pen/mdVyLmJ
- 官方範例解答：https://codepen.io/hsiangfeng/pen/ExPaLZd
- gh-page：https://hexschool.github.io/js-training-task/index.html
- GitHub：https://github.com/hexschool/js-training-task/tree/master/week1
- 
### 使用者故事

- 用戶可以新增 Todo，新增後移除 input 的項目
- 用戶可以刪除、完成 Todo
- 用戶可以一鍵刪除所有任務

### 任務說明：
- 將範例程式碼改為「關注點分離的形式」

課程任務均有提供完整範例程式碼，如果開發上不是很順利可以參考範例程式碼來撰寫。
使用範例程式碼注意事項：
- **禁止直接使用範例程式碼提交**
- 如欲參考範例程式碼，請避免複製貼上，請自行重新撰寫
- 參考範例程式碼，請在繳交作業時附註：「本作業有參考範例程式碼」
- 參考範例程式碼，請在原始碼內補上註解，讓自己加深學習印象
```js
// 當判斷式接收到 sayYouLoveMe() 回傳 true 的結果時，則會運行接下來的陳述片段
if (sayYouLoveMe()) { console.log('說你愛我') };
```

### 提交難度挑戰：
- LV1：參考範例程式碼，並重新撰寫及補上註解（禁止複製範例程式碼）
- LV2：僅使用課程版型，並重新撰寫 Todo List 功能
- LV3：不使用課程版型完成此功能

# 第二週主線任務

第二週開始要接觸到課程的 API，是**非常重要的一個章節**，這份 API 會一直跟到直播班結束，同學們可用此份 API 建立屬於自己的電商資料，請務必在本週的時間內完成。

- 課程 API 相關網址：
    - 註冊連結：https://course-ec-api.hexschool.io/
    - 測試管理平台：https://course-ec-api.hexschool.io/dashboard
    - API 文件：https://course-ec-api.hexschool.io/document#products
- 課程 API 完整說明（長度 40mins）：https://courses.hexschool.com/courses/924133/lectures/21092725
- 使用第二週介紹的物件模組概念，讀取個人的資料 API（必須使用 this 運行）並以列表呈現
範例原始碼：https://codepen.io/hsiangfeng/pen/BajWqjJ


### 使用者故事

- 讀取遠端資料，並以列表呈現

### 任務說明：
- 請參閱[課程 API 介紹影片](https://courses.hexschool.com/courses/924133/lectures/21092725)，建立屬於自己的資料列表

課程任務均有提供完整範例程式碼，如果開發上不是很順利可以參考範例程式碼來撰寫。
範例程式碼：https://codepen.io/hsiangfeng/pen/BajWqjJ

使用範例程式碼注意事項：
- 禁止直接使用範例程式碼提交
- 如欲參考範例程式碼，請避免複製貼上，請自己一個字一個字重新撰寫
- 使用範例程式碼，請在繳交作業時附註：「本作業有使用範例程式碼」
- 使用範例程式碼，請在原始碼內補上註解，讓自己加深學習印象
- 此章節 API **請取得前台的資料即可，不需要使用後台的驗證 API**（請不要將個人 Token 提交）
```js
// 當判斷式接收到 sayYouLoveMe() 回傳 true 的結果時，則會運行接下來的陳述片段
if (sayYouLoveMe()) { console.log('說你愛我') };
```

### 提交難度挑戰：
- LV1：建立自己的資料內容，並且前端可取得資料即算完成（僅需要使用 `console.log` 呈現）
- LV2：使用課程版型，並且完整呈現列表
- LV3：依據自己的主題，建立合適的列表版型