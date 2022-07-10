// 完成下面的过程，'name'变量全部字母为大写，输出：''HELLO''。 
var nam = 'hello';
// TODO 在这里写下你的代码... 

nam=nam.toUpperCase();
console.log(nam);


// 完成以下过程，将可变句子中的所有单词大写并打印：'Good Afternoon, Mr Mike.' 
var sentence = 'good afternoon, mr mike.';
//TODO 在这里写下你的代码... 
function titleCase3(s) {  
    return s.toLowerCase().split(/\s+/).map(function(item, index) {  
        return item.slice(0, 1).toUpperCase() + item.slice(1);  
    }).join(' ');  
}  
console.log(titleCase3(sentence));


// 完成以下过程提取金额变量，输出：20。 
var money = '￥20';
//TODO 在这里写下你的代码... 
money=money.slice(1);
console.log(money);



