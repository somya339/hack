let hover = 0;
let stack = [0, 0, 0,0];
document.addEventListener("DOMContentLoaded", (e) => {
    if (localStorage.getItem("access") === null) {
        document.querySelector("#submit").addEventListener("click", (e) => {
            localStorage.setItem("access", "1");
        })
    } else if (localStorage.getItem("access") === "1") {
        console.log("success");
        localStorage.removeItem("access");
        add_button();
        popusp();
        if (hover == 0) {
            display_alerts();
            hover++;
        }
    }

})

function display_alerts() {
    document.querySelector(".cautions").style.border = "2px solid red"
    document.querySelector(".cautions").addEventListener("mouseover", message_btn);
    document.querySelector(".policy").style.border = "2px solid red"
    document.querySelector(".policy").addEventListener("mouseover", message);
    document.querySelector("#form").style.border = "2px solid red";
    document.querySelector("#form").addEventListener("mouseover", message_form);
    document.querySelector(".info-center").style.border = "2px solid red";
    document.querySelector("#form").addEventListener("mouseover", message_links);

}

function add_button() {
    let li = document.createElement("li");
    li.innerHTML = `<form action="http://localhost:3400/admin-orig" method="get" class="form">
    <button type="submit" class="btn btn-dis cautions">Original Site</button> 
    </form>`
    document.querySelector("#links").appendChild(li);
}

function message_btn() {
    alert("Click This Button After Viewing All red Boxes , The To See The Differences Between An Original Site And A fake One");
    document.querySelector(".cautions").removeEventListener("mouseover", message_btn);
    document.querySelector(".cautions").style.border = "2px solid #3498db";
    stack[0] = 1;
    active_btn();

}
function message_links() {
    alert("All These Links Are Disabled And Have No real Significance ");
    document.querySelector(".info-center").removeEventListener("mouseover", message_links);
    document.querySelector(".info-center").style.border = "2px solid #3498db";
    stack[3] = 1;
    active_btn();

}

function message() {
    alert("Click This Button After Viewing All red Boxes , The To See The Differences Between An Original Site And A fake One");
    document.querySelector(".policy").removeEventListener("mouseover", message);
    document.querySelector(".policy").style.border = "2px solid #3498db";
    stack[1] = 1;
    active_btn();
}

function message_form() {
    alert("Click This Button After Viewing All red Boxes , The To See The Differences Between An Original Site And A fake One");
    document.querySelector("#form").removeEventListener("mouseover", message_form);
    document.querySelector("#form").style.border = "2px solid #3498db";
    stack[2] = 1;
    active_btn();
}

function popusp() {
    alert("Now Hover The red Boxes They Are The Points That You Have Ignored Previously ");
    alert("The Form You Just Submitted Was Not Secure. Your Details Were Passed To The Server Without Being Encrypted This May Lead Some Third Person To Extract Your Data");
    alert("The Address Of The Webpage Contains A Lot Of Useful Data");
    alert("Now, You Can See That The Address Is In Appropriate And This Point Can Be Used To Determine The Difference ");
}

function active_btn() {
    if (stack[0] !== 1 || stack[1] !== 1 || stack[2] !== 1  || stack[3] !== 1) {
        return;
    }

    btn_active();
}

function btn_active() {
    // document.querySelector('.cautions').disabled = "false"
    let classes = document.querySelector('.cautions').classList
    classes.remove("btn-dis")
    console.log(classes.value);
    classes.value += " btn-suc";
}