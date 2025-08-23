// Sending email via fetch api

let submitBtn = document.getElementById('form-btn');

submitBtn.addEventListener('click', ()=>{
    event.preventDefault();

    let email = document.getElementById('email-input').value;

    let formMessege = {
        Email: email
    };

        let postUrl = "enter-url-from-backend-developer"; //enter your backend form handling url

            let sendPost = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(formMessege)

    };

      async function sendData() { 
        try { 

            let postResponce = await fetch(postUrl, sendPost);
            let postedData = await postResponce.json(); 
            console.log(postedData);
            console.log(postedData.Email);
            

        } catch (error) {
            console.log(error);

        };

    };

    sendData(); 


});