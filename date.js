// new Date(): ngày giả lập
    // .getDay() hàm lấy ngày theo thời gian thật.
    // 0: là chủ nhật ; 1-6: t2-t7
    
    // var currentDay = today.getDay();
    // var day = "";
    // //Nên dùng Switch nếu có hơn 5 câu lệnh
    // switch (currentDay) {
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monday";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "Wednesday";
    //         break;
    //     case 4:
    //         day = "Thursday";
    //         break;
    //     case 5:
    //         day = "Friday";
    //         break;
    //     case 6:
    //         day = "Saturday";
    //         break;
    //     //Viết log để báo lỗi khi currentDay không ở trường hợp nào ở trên.
    //     default:
    //     console.log("Error: Current day is equal to: " + currentDay);
    // }
    //.toLocalDateString("en-US",option) : lệnh JS để lấy thứ, ngày, tháng
    function getDate() {
        let today = new Date();
    
        let option = {
        weekday : "long",
        day : "numeric",
        month : "long",
    }
    
    let day = today.toLocaleDateString("en-US",option); //https://stackoverflow.com/questions/3552461/how-do-i-format-a-date-in-javascript
    
    return day;
    }
    function getDay() {
        let today = new Date();
    
        let option = {
        weekday : "long",
    }
    
    let day = today.toLocaleDateString("en-US",option); //https://stackoverflow.com/questions/3552461/how-do-i-format-a-date-in-javascript
    
    return day;
    }
    export {getDate, getDay};
    