
let Click = document.getElementsByClassName("click");
let descriptions = document.getElementsByClassName("descriptions");


// /하고 싶은것 : column2를 눌렀을때 description 높이가 400으로 커지고 동시에 column3가 500px 아래로 내려감, 다시 누르면 원상태 복귀/
for (let i = 0; i < Click.length; i++) {

    Click[i].onmousedown = function(event) {
        if ( event.target.parentNode.nodeName.toLowerCase( ) != 'a' ) {
            let description = descriptions[i]

            if (description.clientHeight) {
                description.style.height = null;
                // column3[i].style.transform = "translateY(0px)";
            } else {
                description.style.height = description.scrollHeight + "px";
                // column3[i].style.transform = "translateY(500px)";

            }
        }
    }
}


let tabs = document.getElementsByClassName("tab");


function initTabs(page){
    for(let i=0; i<tabs.length; i++){
        let tab = tabs[i];
    
        tab.onmouseenter = function(e){
            for(let j=0; j < tabs.length; j++){
                if(i == j){
                    tabs[j].classList.remove('tab-hide');
                } else {
                    tabs[j].classList.add('tab-hide');
                }
            }
        }
    
        tab.onmouseleave = function(e){
            for(let j=0; j < tabs.length; j++){
                if(tabs[j].id == page){
                    tabs[j].classList.remove('tab-hide');
                } else {
                    tabs[j].classList.add('tab-hide')
                }
            }
        }
    }
}








// let column_2 = document.getElementsByClassName("column2");
// let column_3 = document.getElementsByClassName("column3");
// let column_4 = document.getElementsByClassName("column4");
// let column_5 = document.getElementsByClassName("column5");
// let bookCover = document.getElementsByClassName("bookcover");

// //index.html varriables
// const index1 = document.querySelector("#index1_works");
// const index2 = document.querySelector("#index2_about");
// const index3 = document.querySelector("#index3_contact");

// // work1.html toggle varriables
// const column2_mfhp = document.querySelector("#column2_MFHP");
// const column3_epm = document.querySelector("#column3_EPM");
// const column4_fcc = document.querySelector("#column4_FCC");
// const column5_scc = document.querySelector("#column5_SCC");
// const des_mfhp = document.querySelector("#mfhp_description");
// const des_epm = document.querySelector("#epm_description");
// const des_fcc = document.querySelector("#fcc_description");
// const des_scc = document.querySelector("#scc_description");

// // apply functions
// column2_mfhp.addEventListener("click", () => {
// 	column2_mfhp.classList.add("toggle_item");
// 	column3_epm.classList.remove("toggle_item");
// 	column4_fcc.classList.remove("toggle_item");
// 	column5_scc.classList.remove("toggle_item");
// });
// column3_epm.addEventListener("click", () => {
// 	column2_mfhp.classList.remove("toggle_item");
// 	column3_epm.classList.add("toggle_item");
// 	column4_fcc.classList.remove("toggle_item");
// 	column5_scc.classList.remove("toggle_item");
// });
// column4_fcc.addEventListener("click", () => {
// 	column2_mfhp.classList.remove("toggle_item");
// 	column3_epm.classList.remove("toggle_item");
// 	column4_fcc.classList.add("toggle_item");
// 	column5_scc.classList.remove("toggle_item");
// });
// column5_scc.addEventListener("click", () => {
// 	column2_mfhp.classList.remove("toggle_item");
// 	column3_epm.classList.remove("toggle_item");
// 	column4_fcc.classList.remove("toggle_item");
// 	column5_scc.classList.add("toggle_item");
// });




// // toggle contents function
// // for (let i = 0; i < column_2.length; i++) {
// const toggleContents = (item) => {
// 	if (item.style.height > "0") {
// 		item.style.height = null;
// 	} else {
// 		item.style.height = "50vh";
// 	}
// };

// // apply functions
// column2_mfhp.addEventListener("click", () => {
// 	toggleContents(column2_mfhp);
// });
// column3_epm.addEventListener("click", () => {
// 	toggleContents(column3_epm);
// });
// column4_fcc.addEventListener("click", () => {
// 	toggleContents(column4_fcc);
// });
// column5_scc.addEventListener("click", () => {
// 	toggleContents(column5_scc);
// });



// function onClickIndex3() {
// 	location.href = "./contact.html";
// }

// function onHoverIndex3() {
// 	index3.style.AnimationName;
// }



// // // what's this code?
// // for (let i = 0; i < column_2.length; i++) {
// // 	column_2[i].mousedown = function (event) {
// // 		let descriptions = description[i];
// // 		let column3 = column_3[i];

// // 		if (descriptions.clientHeight > 0) {
// // 			description[i].style.height = "0px";
// // 			// column3[i].style.transform = "translateY(0px)";
// // 		} else {
// // 			description[i].style.height = "400px";
// // 			// column3[i].style.transform = "translateY(500px)";
// // 		}
// // 	};
// // }


// 
// 
// 



// for (let i = 0; i < column_2.length; i++) {
//     column_2[i].onmousedown = function (event) {

//         let column3 = column_3[i]
//         // let column4 = column_4[i]

//         if (column2.clientHeight > 0) {
//             column3[i].style.transform = "translateY(0px)";
//             // column4[i].style.transform = "translateY(0px)";
//         } else {
//             column3[i].style.transform = "translateY(400px)";
//             // column4[i].style.transform = "translateY(600px)";

//         }
//     }
// }


