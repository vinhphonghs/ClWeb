
let year = prompt("Nhập vào số năm?")
    
    // function leapYear(year)
    // {
    //     if(year%100!=0 && year%4==0 || year%400==0)
    //         alert("Đây là Năm nhuận")
    //         else
    //         alert("Đây là năm không nhuận")        
    // }
    let can = ""
    let chi = ""

function tinhCan(year)
{
    switch (year % 10) {
        case 0:
             can = "CANH";
            break;
        case 1:
            can = "TÂN";
            break;
        case 2:
            can = "NHÂM";
            break;
        case 3:
            can = "QUÝ";
            break;
        case 4:
            can = "GIÁP";
            break;
        case 5:
            can = "ẤT";
            break;
        case 6:
            can = "BÍNH";
            break;
        case 7:
            can = "ĐINH";
            break;
        case 8:
            can = "MẬU";
            break;
        case 9:
            can = "KỶ";
            break;
    }
    return can;
}
function tinhChi(year)
{
    switch(year % 12){
        case 0:
             chi="THÂN";
            break;
        case 1:
            chi="DẬU";
            break;
        case 2:
            chi="TUẤT";
            break;
        case 3:
            chi="HỢI";
            break;
        case 4:
            chi="TÝ";
            break;
        case 5:
            chi="SỬU";
            break;
        case 6:
            chi="DẦN";
            break;
        case 7:
            chi="MÃO";
            break;
        case 8:
            chi="THÌN";
            break;
        case 9:
            chi="TỴ";
            break;
        case 10:
            chi="NGỌ";
            break;
        case 11:
            chi="MÙI";
            break;
    }
    return chi;
}
alert(`Nam ${year} ${tinhCan(year)} ${tinhChi(year)}`)
// console.log(leapYear(year))