const users = []
const showlogin=()=>{
    let str=`
    <div class="App-container">
    <p><div id="dvMsg"></div></p>
    <h1>Login Form</h1>
    <p><input type="text" id="TxtEmail"></p>
    <p><input type="password" id="TxtPass"></p>
    <p><button onclick='showhome()'>Log In</button></p>
    <p><button onclick='showregister()'>create Account </p>
    
    </div>
    
    `
    root.innerHTML=str
}
const showregister=()=>{
    let str=`
    <h1>Register Form</h1>
    <p><input type="text" id="TxtName"></p>
    <p><input type="text" id="TxtEmail"></p>
    <p><input type="password" id="TxtPass"></p>
    <p><button onclick='adduser()'> Register </button>
    <p><button onclick='showlogin()'> Already have an account </button>
    `
    root.innerHTML=str
}
const showhome=()=>{
    let str=`
    <div class="App-container">
    <h1>WELCOME</h1>
    <p> you are successfully logged in.</p>
    </div>
    `
    root.innerHTML=str
}
const adduser=()=>{
    const user= {
        name:document.getElementById("TxtName").value,
        email:document.getElementById("TxtEmail").value,
        password:document.getElementById("TxtPass").value

   }
   users.push(user)
   console.log(users)
   showlogin()

}

const validateuser=()=> {
    let email=document.getElementById("TxtEmail").value;
    let password=document.getElementById("TxtPass").value;
    const found=users.find(user=>user.email === email && user.password === password)
    if(found) {
        showhome();
    }
    else{
        dvMsg.innerHTML="Access denied";
    }
};             