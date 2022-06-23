


let btn = document.querySelector('button')
btn.onclick = (e)=>{
    e.preventDefault()
    // get all value
    let name = document.querySelector('input[name="name"]').value
    let email = document.querySelector('input[name="email"]').value
    let subject = document.querySelector('input[name="subject"]').value
    let message = document.querySelector('form textarea').value
    // form validation
    let check = name == "" || email == "" || subject == "" || message == ""
    if (check){
        console.log('empty')
        return
    }

    let obj = {name, email, subject, message}
    // console.log(obj)

    fetch('/message', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  })
  .then(res => {
    console.log(res)
    if(res.redirected){
      location.assign(res.url)
    }
  });
}