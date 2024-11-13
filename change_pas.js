const change = document.getElementById("change")

function change_all(){
    if (document.getElementsByTagName('div')[3].innerText==='Pestova'){

        document.getElementsByTagName('div')[3].innerText='Пестова';
        document.getElementsByTagName('div')[4].innerText='Алёна';
        document.getElementsByTagName('div')[5].innerText='Сергеевна';
    }
    else{
        if (document.getElementsByTagName('div')[3].innerText==='Пестова'){

            document.getElementsByTagName('div')[3].innerText='Pestova';
            document.getElementsByTagName('div')[4].innerText='Alyona';
            document.getElementsByTagName('div')[5].innerText='Sergeevna';
        }
    }

}
change.addEventListener("click",change_all)
