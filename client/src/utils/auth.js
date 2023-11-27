export const checkLogin = async()=>{
    const user = JSON.parse(localStorage.getItem("user")) || null;

    if(!user)
    {
      alert("Please Login First !");
      window.location.href= "/login";

}
}

