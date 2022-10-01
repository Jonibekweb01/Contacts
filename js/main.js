{
    // let users = [{
    //     name: "Jonibek",
    //     surname: "Qodirov"
    // },
    // {
    //     name: "Alibek",
    //     surname: "Qodirov"
    // },
    // {
    //     name: "Parviz",
    //     surname: "Qodirov"
    // }];

    // // users.forEach((el) => {
    // //     console.log(el.name);
    // // })


    // console.log(
    //     users.map((el) => {
    //         return el.name;
    //     }));


    const users = [
        {
            name: 'Jonibek',
            debt: 10000,
        },
        {
            name: 'Asadbek',
            debt: 30000,
        },
        {
            name: 'Ravshanjon',
            debt: 50000,
        },
        {
            name: 'Otabek aka',
            debt: 1000,
        },
        {
            name: 'Muhammad Ali',
            debt: 100000,
        },
        {
            name: 'Jaloliddin aka',
            debt: 5000,
        },
    ];

    // let count = 0;

    // let forEachs = users.forEach((el) => {
    //     count += el.debt;
    // });
    // console.log(count);


    // let result = users.reduce((count, el) => {
    //     return count += el.debt;
    // }, 0)

    // console.log(result);



    // let array = [1, 2, 3, 4, 5];

    // console.log(
    //     array.reduce((array, el) => {
    //         array.push(el * 10);
    //         return array;
    //     }, [])
    // );

    // let array = [1, 2, 3, 4, 5];

    // let res = array.reduce((count, el) => {
    //     return count += el * 10;
    // }, 0)

    // console.log(res);


    // let array = [1, 2, undefined, true, false, null, "56"];

    // let res = array.filter((el) => typeof el == "number").reduce((a, b) => (a + b), 0)
    // console.log(res);

    // let array = [true, false, true, false, false];

    // let res = array.filter((el) => !el);
    // console.log(res.length);
}






let elForm = document.querySelector(".js-form");
let elNameInp = document.querySelector(".js-name");
let elGmailInp = document.querySelector(".js-gmail");
let elPhoneInp = document.querySelector(".js-tel");


let elList = document.querySelector(".js-list");


let clients = [];
elForm.addEventListener('submit', function (e) {
    e.preventDefault();

    //   GETTING  VALUE 

    let nameValue = (elNameInp.value).trim();
    let gmailValue = (elGmailInp.value).trim();
    let phoneValue = (elPhoneInp.value).trim();

    // CREATING Object
    clients.push({
        Name: nameValue,
        Gmail: gmailValue,
        Tel: phoneValue
    })
    console.log(clients);

    // CREATING Element

    let item = document.createElement("li");
    let title = document.createElement("h2");
    let gmail = document.createElement("a");
    let telephone = document.createElement("a");

    // TEXT_CONTENTS

    title.textContent = nameValue;
    gmail.textContent = gmailValue;
    telephone.textContent = phoneValue;

    // APPENDING

    elList.appendChild(item);
    item.appendChild(title);
    item.appendChild(gmail);
    item.appendChild(telephone);

    // ADDING ATRIBUTES

    gmail.href = `mailto:${gmailValue}`;
    telephone.href = `tel:${nameValue}`;

    // STYLY to JS Element
    
    gmail.style.display = 'block';

    gmail.classList.add("gmail");
    telephone.classList.add("tel");

    elNameInp.value = "";
})  
