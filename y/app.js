//Function that will run only when all the html in the page has successfully loaded
document.addEventListener("DOMContentLoaded", () =>{
    //Generating the firestore database query
    const db = firebase.firestore();
    //Setting up a timestamp
    const { serverTimestamp } = firebase.firestore.FieldValue;

    
    const request_loan = document.querySelector("#loaner");
    
    request_loan.addEventListener('submit', (e) => {
        e.preventDefault();
        const red = document.getElementById("type").value;
        let con_amount = document.getElementById("final").innerHTML;
    
        if(red == "Emergency Loan"){
                document.getElementById("send_cash").value = con_amount;
        }
        else if(red == "Short Loan"){
                const calc = parseFloat(con_amount) * 2;
                document.getElementById("send_cash").value = calc;
        }
        else if(red == "Normal Loan"){
                const calc_new = parseFloat(con_amount) * 3;
                document.getElementById("send_cash").value = calc_new;
        }
        else if(red == "Development Loan"){
                const calc_old = parseFloat(con_amount) * 5;
                document.getElementById("send_cash").value = calc_old;
        }
       const five = document.getElementById("send_cash").value;
       let six = document.getElementById("sent_cash").value;
        const ref_mad = document.getElementById("fji").innerHTML;
        // if(parseFloat(ref_mad) >= parseFloat(six)){
            const checker = document.getElementById("ctimes").innerHTML;
            // if(parseFloat(checker) >= 6){
            //     if(parseFloat(six) <= parseFloat(five)){
           const see = document.getElementById("type").value;
           let useid = document.getElementById("dig").value;
           switch(see){
           case "Emergency Loan":
                    let one_next = (parseFloat(six) * 0.003 * 12);
                    let one_end = (parseFloat(one_next) + parseFloat(six));
                    let see_next = (parseFloat(one_end) / 12);
                    document.getElementById("pick_cash").value = one_end;
                    document.getElementById("interest_cash").value = one_next;
                    document.getElementById("deposit_cash").value = see_next;
                break;
            case "Short Loan":
                let one_Next = (parseFloat(six) * 0.006 * 24);
                let one_End = (parseFloat(one_Next) + parseFloat(six));
                let see_Next = (parseFloat(one_End) / 24);
                    document.getElementById("pick_cash").value = one_End;
                    document.getElementById("interest_cash").value = one_Next;
                    document.getElementById("deposit_cash").value = see_Next;
                break;
            case "Normal Loan":
                let One_next = (parseFloat(six) * 0.01 * 36);
                let One_end = (parseFloat(One_next) + parseFloat(six));
                let See_next = (parseFloat(One_end) / 36);
                    document.getElementById("pick_cash").value = One_end;
                    document.getElementById("interest_cash").value = One_next;
                    document.getElementById("deposit_cash").value = See_next;
                break;
            case "Development Loan":
                let oneNext = (parseFloat(six) * 0.014 * 48);
                let oneEnd = (parseFloat(oneNext) + parseFloat(six));
                let seeNext = (parseFloat(oneEnd) / 48);
                    document.getElementById("pick_cash").value = oneEnd;
                    document.getElementById("interest_cash").value = oneNext;
                    document.getElementById("deposit_cash").value = seeNext;
                break;
           }
           const int = document.getElementById("interest_cash").value;
           const tot = document.getElementById("pick_cash").value;
           const mnth = document.getElementById("deposit_cash").value;
           db.collection("Contribution").doc(useid).update({
               type_of_loan: see,
               amount_of_loan: six,
               time_of_request: serverTimestamp(),
               interest_of_loan: int,
               total_to_be_payed: tot,
               monthly_payment: mnth
           })
           
           
    //    }
    //    else{
    //     alert("The amount to borrow should be sh: " + five + " or less than sh: " + five);
    //    }
    //         }
    //         else{
    //             alert("You need to have contributed for at least six times or more");
    //         }
            
    //     }
    //     else{
    //         alert("The amount of money in the group is insuficcent for you to borrow a loan");
    //     }
       
    })




    const update_form = document.querySelector("#contribns");

    update_form.addEventListener('submit', (e) => {
        let james = document.getElementById("final").innerHTML;
        let web = james.length;
        
        let new_date = new Date();
        let new_months = new_date.getMonth();
        let new_day = new_date.getDate();
        let new_year = new_date.getFullYear();
        let new_hour = new_date.getHours();
        let new_minute = new_date.getMinutes();
        let new_seconds = new_date.getSeconds();
        let final_date = new_months + " " + new_day + ", " + new_year + " " + new_hour + ":" + new_minute + ":" + new_seconds;

        let reference_time = document.getElementById("nexter").innerHTML;
        let guard_time = document.getElementById("warn").innerHTML;
        let ref_date = 26;
        let setter = ref_date - new_day;
        
            if(web > 0){
            e.preventDefault();
            const dataset = document.getElementById("num").value;
            const jet = (parseFloat(james) + parseFloat(dataset));
            const namer = document.getElementById("dig").value;
            let number = document.getElementById("ctimes").innerHTML;
            number ++;
            
            if(final_date == reference_time || final_date == guard_time && setter <= 5 && new_months == new_month){
                db.collection("Contribution").doc(namer).update({
                    amount: jet,
                    timestamp: serverTimestamp(),
                    times: number
                });
                const song = new Audio("tone.mp3");
                song.play();
                document.getElementById("see").innerHTML = "Please log in again to view your details";
        }
        else{
            alert("You can't contribute till the next month!!");
        }
        
        }
        else{
            alert("You are required to have made a contribution before in order to proceed");
        };
        



        
    });
    
    const contribution_form = document.querySelector("#contribs");

    contribution_form.addEventListener('submit', (e) => {
        let swan = document.getElementById("cash").innerHTML;
        let been = swan.length;

        if(been > 0){
            e.preventDefault();
            const ged = document.getElementById("two").innerHTML;
            let dsa = document.getElementById("nums").value;
            if(dsa > 500){
                db.collection("Contribution").add({
                name: ged,
                amount: dsa,
                timestamp: serverTimestamp(),
                times: 1
            });
            const song = new Audio("tone.mp3");
            song.play();
            document.getElementById("plea").innerHTML = "Please log in again to view your details";
            }
            else{
                alert("The amount should be more than 500 shillings");
            }
            
        }
        else{
            alert("You must be a registered member in order to make a contribution");
        }
    });
    



    //Getting the form
    const form = document.querySelector('#fixer');
//Function to fetch data from the form and save the data to firestore
    form.addEventListener('submit', (e) => {
        const ged = document.getElementById("two").innerHTML;
        //Setting up a condtion that will monitor a user's login status and allow operations to run if logged in
    const her = ged.length;
    if(her > 0){
    e.preventDefault();
    let vaer = document.getElementById("money").value;
    //Ensuring that the amount entered by the user is only a thousand shillings and not less or more
    //If correct then information can be sent to the database
    if(vaer == 1000){
        let username =  document.getElementById("username").value = ged;
        //Saving the data to firestore
        db.collection("Registration")
        .add({
            user: username,
            amount: vaer,
            timestamp: serverTimestamp()
        });
        //To ensure that the changes that the user has made get reflected on the website
        const song = new Audio("tone.mp3");
        song.play();
        document.getElementById("please").innerHTML = "Please log in again to view your details";
    }
    else{
        //Form guard to track the exact amount needed
        alert("The registration amount should be 1,000 Shillings");
    }
}
else{
    //Reminder that a user has to log in before registration
    alert("You must be logged in first!!!");
}
});
    
});
//Function to log in the user to the site
function Login(){
    //Provisioning Google to do user authentication
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(result => {
        const user = result.user;
        const be =  document.getElementById("two").innerHTML = user.email;
        const db = firebase.firestore();
        // Firestore data modelling with queries
        //Reading specific data from firestore according to the user's login information
        db.collection("Registration")
        .where("user", "==", be)
        .get()
        .then((snapshot) => {
        snapshot.docs.forEach(doc => {
            //Displaying the data of the current logged in user only and not any other user
            const man = document.getElementById("cash").innerHTML = "Shillings: " + doc.data().amount;
            
            const villa = man.length;

                var a = new Date(doc.data().timestamp * 1000);
                var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                var year = a.getFullYear() - 1969;
                var month = months[a.getMonth()];
                var date = a.getDate();
                var hour = a.getHours();
                var min = a.getMinutes();
                var sec = a.getSeconds();
                var time = month + ' ' + date + ', ' + year + ' ' + hour + ':' + min + ':' + sec ;
           



            document.getElementById("status").innerHTML = "Registered: " + time;
        if(villa > 0){
            //Removing the fields if the user is successfully logged in and has already registered 
            //This is to prevent submission of new information that already exists which would flood the database
            //However, if a user has not yet been registered, he or she will be able to see the form
            const grind = document.getElementById("fixer");
            grind.style.display = "none";
            grind.style.pointerEvents = "none";
            const nir = document.getElementById("nir");
            nir.style.display = "none";
            nir.style.pointerEvents = "none";
            const fer =  document.getElementById("please");
            fer.style.display = "none";
            fer.style.pointerEvents = "none";
        };

        });
        


        db.collection("Contribution").where("name", "==", be).get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                const tab = document.querySelector("#loan_stats");

                let table_row = document.createElement('tr');
                let loan_type = document.createElement('td');
                let borrowed_amount = document.createElement('td');
                let time_borrowed = document.createElement('td');
                let interest_charged = document.createElement('td');
                let amount_payable = document.createElement('td');
                let monthly_pay = document.createElement('td');

                table_row.setAttribute('data-id', doc.id);
                loan_type.textContent = doc.data().type_of_loan;
                borrowed_amount.textContent = doc.data().amount_of_loan;
                interest_charged.textContent = doc.data().interest_of_loan;
                amount_payable.textContent = doc.data().total_to_be_payed;
                monthly_pay.textContent = doc.data().monthly_payment;

                var a = new Date(doc.data().time_of_request * 1000);
                var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                var year = a.getFullYear() - 1969;
                var month = months[a.getMonth()];
                var date = a.getDate();
                var hour = a.getHours();
                var min = a.getMinutes();
                var sec = a.getSeconds();
                var time = month + ' ' + date + ', ' + year + ' ' + hour + ':' + min + ':' + sec ;

                time_borrowed.textContent = time;

                table_row.appendChild(loan_type);
                table_row.appendChild(borrowed_amount);
                table_row.appendChild(time_borrowed);
                table_row.appendChild(interest_charged);
                table_row.appendChild(amount_payable);
                table_row.appendChild(monthly_pay);
                tab.appendChild(table_row);

            
                document.getElementById("dig").value = doc.id;
                document.getElementById("ctimes").innerHTML = doc.data().times;
                

                var a = new Date(doc.data().timestamp * 1000);
                var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                var year = a.getFullYear() - 1969;
                var month = months[a.getMonth()];
                var date = a.getDate();
                var hour = a.getHours();
                var min = a.getMinutes();
                var sec = a.getSeconds();
                var time = month + ' ' + date + ', ' + year + ' ' + hour + ':' + min + ':' + sec ;
                document.getElementById("current").innerHTML = "You contributed: " + time;

                let year_now = new Date().getFullYear();
                let year_next;
                let new_month;
                let new_date;
                
                switch(month){
                    case month = months[0]:
                        new_month = months[1];
                        document.getElementById("nexter").innerHTML = new_month + " " + date + ", " + year_now + " " + hour + ":" + min + ":" + sec;
                        break;
                    case month = months[1]:
                        new_month = months[2];
                        document.getElementById("nexter").innerHTML = new_month + " " + date + ", " + year_now + " " + hour + ":" + min + ":" + sec;
                        break;
                    case month = months[2]:
                        new_month = months[3];
                        document.getElementById("nexter").innerHTML = new_month + " " + date + ", " + year_now + " " + hour + ":" + min + ":" + sec;
                        break;
                    case month = months[3]:
                        new_month = months[4];
                        document.getElementById("nexter").innerHTML = new_month + " " + date + ", " + year_now + " " + hour + ":" + min + ":" + sec;
                        break;
                    case month = months[4]:
                        new_month = months[5];
                        document.getElementById("nexter").innerHTML = new_month + " " + date + ", " + year_now + " " + hour + ":" + min + ":" + sec;
                        break;
                    case month = months[5]:
                        new_month = months[6];
                        document.getElementById("nexter").innerHTML = new_month + " " + date + ", " + year_now + " " + hour + ":" + min + ":" + sec;
                        break;
                    case month = months[6]:
                        new_month = months[7];
                        document.getElementById("nexter").innerHTML = new_month + " " + date + ", " + year_now + " " + hour + ":" + min + ":" + sec;
                        break;
                    case month = months[7]:
                        new_month = months[8];
                        document.getElementById("nexter").innerHTML = new_month + " " + date + ", " + year_now + " " + hour + ":" + min + ":" + sec;
                        break;
                    case month = months[8]:
                        new_month = months[9];
                        document.getElementById("nexter").innerHTML = new_month + " " + date + ", " + year_now + " " + hour + ":" + min + ":" + sec;
                        break;
                    case month = months[9]:
                        new_month = months[10];
                        document.getElementById("nexter").innerHTML = new_month + " " + date + ", " + year_now + " " + hour + ":" + min + ":" + sec;
                        break;
                    case month = months[10]:
                        new_month = months[11];
                        document.getElementById("nexter").innerHTML = new_month + " " + date + ", " + year_now + " " + hour + ":" + min + ":" + sec;
                        break;
                    case month = months[11]:
                        new_month = months[0];
                        year_next = year_now + 1;
                        document.getElementById("nexter").innerHTML = new_month + " " + date + ", " + year_next + " " + hour + ":" + min + ":" + sec;
                        break;
                }



                switch(month){
                    case month = months[0]:
                        new_month = months[1];
                        new_date = date + 5;
                        document.getElementById("warn").innerHTML = new_month + " " + new_date + ", " + year_now + " " + hour + ":" + min + ":" + sec;
                        break;
                    case month = months[1]:
                        new_month = months[2];
                        new_date = date + 5;
                        document.getElementById("warn").innerHTML = new_month + " " + new_date + ", " + year_now + " " + hour + ":" + min + ":" + sec;
                        break;
                    case month = months[2]:
                        new_month = months[3];
                        new_date = date + 5;
                        document.getElementById("warn").innerHTML = new_month + " " + new_date + ", " + year_now + " " + hour + ":" + min + ":" + sec;
                        break;
                    case month = months[3]:
                        new_month = months[4];
                        new_date = date + 5;
                        document.getElementById("warn").innerHTML = new_month + " " + new_date + ", " + year_now + " " + hour + ":" + min + ":" + sec;
                        break;
                    case month = months[4]:
                        new_month = months[5];
                        new_date = date + 5;
                        document.getElementById("warn").innerHTML = new_month + " " + new_date + ", " + year_now + " " + hour + ":" + min + ":" + sec;
                        break;
                    case month = months[5]:
                        new_month = months[6];
                        new_date = date + 5;
                        document.getElementById("warn").innerHTML = new_month + " " + new_date + ", " + year_now + " " + hour + ":" + min + ":" + sec;
                        break;
                    case month = months[6]:
                        new_month = months[7];
                        new_date = date + 5;
                        document.getElementById("warn").innerHTML = new_month + " " + new_date + ", " + year_now + " " + hour + ":" + min + ":" + sec;
                        break;
                    case month = months[7]:
                        new_month = months[8];
                        new_date = date + 5;
                        document.getElementById("warn").innerHTML = new_month + " " + new_date + ", " + year_now + " " + hour + ":" + min + ":" + sec;
                        break;
                    case month = months[8]:
                        new_month = months[9];
                        new_date = date + 5;
                        document.getElementById("warn").innerHTML = new_month + " " + new_date + ", " + year_now + " " + hour + ":" + min + ":" + sec;
                        break;
                    case month = months[9]:
                        new_month = months[10];
                        new_date = date + 5;
                        document.getElementById("warn").innerHTML = new_month + " " + new_date + ", " + year_now + " " + hour + ":" + min + ":" + sec;
                        break;
                    case month = months[10]:
                        new_month = months[11];
                        new_date = date + 5;
                        document.getElementById("warn").innerHTML = new_month + " " + new_date + ", " + year_now + " " + hour + ":" + min + ":" + sec;
                        break;
                    case month = months[11]:
                        new_month = months[0];
                        year_next = year_now + 1;
                        new_date = date + 5;
                        document.getElementById("warn").innerHTML = new_month + " " + new_date + ", " + year_next + " " + hour + ":" + min + ":" + sec;
                        break;
                }

                
                let ams = document.getElementById("final").innerHTML = doc.data().amount;
                if(parseFloat(ams) > 0){
                    const ger = document.getElementById("plea");
                    ger.style.display = "none";
                    ger.style.pointerEvents = "none";
                    const ght = document.getElementById("cont");
                    ght.style.display = "none";
                    ght.style.pointerEvents = "none";
                }
            })
        })
        const tables = document.querySelector("#tables");
        

        function renderList(doc){
            let tr = document.createElement('tr');
            let names = document.createElement('td');
            let amounts = document.createElement('td');
            amounts.className = "fire";
            let times = document.createElement('td');
            let multiple = document.createElement('td');

            tr.setAttribute('data-id', doc.id);
            names.textContent = doc.data().name;
            amounts.textContent = doc.data().amount;
            multiple.textContent = doc.data().times;

            var a = new Date(doc.data().timestamp * 1000);
                var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                var year = a.getFullYear() - 1969;
                var month = months[a.getMonth()];
                var date = a.getDate();
                var hour = a.getHours();
                var min = a.getMinutes();
                var sec = a.getSeconds();
                var time = month + ' ' + date + ', ' + year + ' ' + hour + ':' + min + ':' + sec ;

            times.textContent = time;

            tr.appendChild(names);
            tr.appendChild(amounts);
            tr.appendChild(times);
            tr.appendChild(multiple);
            tables.appendChild(tr);
            
        }

        db.collection("Contribution").get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                renderList(doc);
                const listItems = [].slice.call(document.querySelectorAll('#tables .fire'));

                const sumOf = listItems.reduce(function(sumOf, el) {
                    return sumOf + parseFloat(el.innerText)
                }, 0)

                document.getElementById("fji").innerHTML = sumOf;

               
                    var rowCount = 0;
                    var table = document.getElementById("tables");
                    var rows = table.getElementsByTagName("tr")
                    for (var i = 0; i < rows.length; i++) {
                        if (rows[i].getElementsByTagName("td").length > 0) {
                            rowCount++;
                        }
                    }
                    document.getElementById("wad").innerHTML = rowCount;
            })
        })

    });
    })
    .catch(console.log);
    
};

