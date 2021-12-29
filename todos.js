const firebaseConfig = {
    apiKey: "AIzaSyCGwXGjIt_g2pLCXGgLh7AFXMMBnWNIElE",
    authDomain: "jihun-momentum.firebaseapp.com",
    projectId: "jihun-momentum",
    storageBucket: "jihun-momentum.appspot.com",
    messagingSenderId: "447026995278",
    appId: "1:447026995278:web:5965ea7c7d5af9faa5231f"
  };

firebase.initializeApp(firebaseConfig);
const dbService = firebase.firestore()

// dbService.collection("todos").doc("10102938").set({

//     todos: "할일"
// })


// ctrl+k+c, ctrl+k+u //


dbService.collection("todos").doc("10102938").delete()


const todosForm = document.querySelector("#todos-form")
console.log(todosForm)
const todosInput = todosForm.querySelector("#todos-input")
console.log(todosInput)




function todosSubmit(event){
    event.preventDefault()//새로고침 막아줌

}

todosForm.addEventListener("submit", todosSubmit)