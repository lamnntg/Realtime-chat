# Note lại sau còn đọc.

source : https://www.djamware.com/post/5f2a1d9d9c794f177fd7b527/react-js-tutorial-building-firebase-chat-app-react-hooksB!

**Rút ra**

Firebase 9 thay đổi khá nhiều về cú pháp cũng về hàm.


+ B1 : init project , use realtime database of firebase
+ B2 : config connect to firebase 
    - sử dụng provider trong context Api để dùng chung user state cho tất cả các component con mà không cần kết nối trực tiếp (có khác gì redux ko ??)
+ B3 : tạo một services firebase để chưa các phương thức giao tiếp với db 
+ B4 : sử dụng firebase emulator để tránh việc tốn tài nguyên trong quá trình làm việc 


**Use Antd & antd logo**
- install node-sass
- import css of antd to App.scss || index.js || index.css 

# Bug và chú ý trong quá trình làm 
- lỗi login facebook 
    +Facebook đã phát hiện realtime-chat không sử dụng kết nối bảo mật để truyền thông tin.
    +Nguyên nhân : do không có ssl ở localhost nên sinh ra lỗi này 
    +Fix tạm : thêm chuyển câu lệnh start thành -> "start": "set HTTPS=true&&react-scripts start",
    +Install mkcert (trên window phải cài thông qua chocolatey)
    Để hết bão lỗi install thêm ứng dụng chạy ssl

- Lỗi chưa publish query of fireStore ( fix ez )
- Chú ý về cách Promise All và async function có nhiều await 

