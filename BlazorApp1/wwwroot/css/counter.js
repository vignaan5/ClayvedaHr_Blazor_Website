
export function Correct_ans(id) {

    var btn = document.getElementById(id);

    btn.addEventListener('click', () => { btn.style.backgroundColor = "lightgreen"; });

}


export function Wrong_ans(id) {

    var btn = document.getElementById(id);

    btn.addEventListener('click', () => { btn.style.backgroundColor = "red"; });


}



export function add_ans2() {
    let x = document.getElementsByTagName('h1');

    for (let i = 1; i <= x[x.length - 1].className; i++) {
        let btns = document.getElementsByClassName(i);
        console.log(btns.length);
        let ans_btn = null;
        for (let j = 0; j < btns.length; j++) {
            if (btns[j].name == "ans") {

                ans_btn = btns[j];
                console.log(ans_btn.innerText);
            }

        }

        for (let k = 0; k < btns.length; k++) {
            if (btns[k].tagName.toLocaleLowerCase() == "button") {
                console.log(btns[k].innerText);
                btns[k].addEventListener('click', () => {

                    btns[k].style.backgroundColor = "red";

                    ans_btn.style.backgroundColor = "lightgreen";

                });
            }
        }


    }

}



export function add_ans()
{
    let btnarr = document.getElementsByName("ans");

    for (let i = 0; i < btnarr.length; i++)
    {
        btnarr[i].addEventListener('click', () => {

            btnarr[i].style.backgroundColor = "lightgreen";

        });
    }



    let btnarr2 = document.getElementsByName("noans");

    for (let i = 0; i < btnarr2.length; i++)
    {
        btnarr2[i].addEventListener('click', () => {

            btnarr2[i].style.backgroundColor = "red";

        });
    }


}