function SendMail(){
    var params={
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        email_phone: document.getElementById("phone").value,
        email_userType: document.getElementById("userType").value,
        message: document.getElementById("message").value
    }
    if(params.from_name!="" && params.email_id!="" && params.email_phone!="" && params.email_userType!="" && params.message!=""){
        alert("Into If condition");
        emailjs.send("service_832wb3q", "template_f6ta80w", params).then(function (res){
            alert("Success! "+res.status);
        })
    }
    else{
        alert("Error Occured!");
    }
}
