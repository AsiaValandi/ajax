  
//   $(document).ready(function () {

//     let a = $('input[type="button"]');
    
//     for (let i = 0; i < a.length; i++) {
//         console.log(a[i]);
//         $("#" + (a[i].id).toString()).click(function(){
//             let data = JSON.stringify({value : $("#text" + parseInt(a[i].id.replace(/\D+/g," "))).val()});
//             console.log(data);
//             $.ajax
//             ({
//                 type: "POST",
//                 data: data,
//                 contentType: 'application/json',
//                 url: '/data',
//                 success: function(serverData) {
//                     let responseServ = JSON.stringify(serverData);
//                     console.log(responseServ);
//                 },
//                 error: function(e) {
//                     console.log("Eror");
//                 }
//             });
//         });
//     }
    
// });



