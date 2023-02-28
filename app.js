// jshint esversion:6
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import {fileURLToPath} from "url";
import {getDate, getDay} from "./date.js";


const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let items = ["Buy Food", "Cook Food", "Eat Food"];
let WorkItem = [];
let StudyItem = [];

app.set('view engine', 'ejs'); //Dòng mã này cho ứng dụng của chúng ta biết ứng dụng được tạo bằng Express để sử dụng EJS làm công cụ xem của nó

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    let day = getDate();
    
    res.render("list", {listTitle: day, newListItem:items}); //render(kết xuất) 1 tệp được gọi là danh sách(list) và chúng ta sẽ chuyển tệp đó thành 1 biến có tên là kindOfDay và giá trị sẽ bằng bất kỳ giá trị nào của biến hiện tại của chúng ta là ngày.Chúng ta đang tạo phản hồi của mình bằng cách render  1 tiệp có tên là List(trong thư mục views) xem nó có phải phần mở rộng không?. Sau đó vào file List -> truyền một biến duy nhất kindOfDay và giá trí cung cấp cho nó là giá trị biến day.
});
app.get("/Work", (req,res) => {
    res.render("list", {listTitle: "WorkList", newListItem: WorkItem});
});

app.get("/Study", (req,res) => {
    res.render("list", {listTitle: "StudyList", newListItem: StudyItem})
});

app.get("/about",(req,res) => {
    res.render("about");
});

app.post("/", (req,res) => {
    let item = req.body.newItem;
    if (req.body.list === "WorkList") {
        WorkItem.push(item);
        res.redirect("/work");
    } else if (req.body.list === "StudyList") {
        StudyItem.push(item);
        res.redirect("/Study");
    } else {
        items.push(item);
        res.redirect("/");
    }
   
});


app.listen(3000, () => {
    console.log("Server is starting on port 3000");
});