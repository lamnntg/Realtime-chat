# Note lại sau còn đọc. 
- source : https://www.djamware.com/post/5f2a1d9d9c794f177fd7b527/react-js-tutorial-building-firebase-chat-app-react-hooksB!

+ B1 : init project , use realtime database of firebase
+ B2 : config connect to firebase 

**Use Antd & antd logo**
- install node-sass
- import css of antd to App.scss || index.js || index.css 

# Bug trong quá trình làm 
- lỗi login facebook 
    Facebook đã phát hiện realtime-chat không sử dụng kết nối bảo mật để truyền thông tin.
    Nguyên nhân : do không có ssl ở localhost nên sinh ra lỗi này 
    Fix tạm : thêm chuyển câu lệnh start thành -> "start": "set HTTPS=true&&react-scripts start",
    Để hết bão lỗi install thêm ứng dụng chạy ssl

