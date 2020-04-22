/*-------------- Question 01 ------------------------
function checaIdade(idade) {
    return new Promise((resolve, rejecte) => {
        setTimeout(() => {
            idade >= 18 ? resolve() : rejecte();
        }, 2000);
    });
};

checaIdade(29)
    .then(function(){
        console.log('Maior de idade');
    })
    .catch(function(){
        console.log('Menor de idade')
    });
    */


   var inputElement = document.getElementById("user");
   var ulElement = document.querySelector("ul");

   const getUserRepo = name => {
        var user = inputElement.value;
        if (!user) {
            renderError();
            alert("Preencha o campo");
        }
        renderLoading();

        axios.get(`https://api.github.com/users/${user}/repos`)
            .then(response => {
                fillList(response.data);
            })
            .catch(error => {
                alert("Não foi possível efetuar a busca!");
                renderError(error);
            });
    };
   
   function renderLoading(loading) {
        ulElement.innerHTML = "";
        var textElement = document.createTextNode("Carregando...");
        var loadingElement = document.createElement("li");

        loadingElement.appendChild(textElement);
        ulElement.appendChild(loadingElement);
   }
   
   function renderError(loading) {
        ulElement.innerHTML = "";
        var user = inputElement.value;
        var msgUserEmpty = !user ? "Preencha o usuário" : "Erro ao efetuar busca";
    
        var textElement = document.createTextNode(msgUserEmpty);
        var errorElement = document.createElement("li");
        
        errorElement.style.color = "#F00";
        
        errorElement.appendChild(textElement);
        ulElement.appendChild(errorElement);
   }
   
   const fillList = repositorios => {
        console.log("TCL: repositorios", repositorios);
        ulElement.innerHTML = "";
    
            for (repo of repositorios) {
                const reponame = document.createTextNode(repo.name);
                const repoItem = document.createElement("li");
            
                repoItem.appendChild(reponame);
                ulElement.appendChild(repoItem);
            }
   };    