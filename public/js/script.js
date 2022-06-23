let name = document.querySelector('input[name="name"]')
name.value = 'seif'


let btn = document.querySelector('button')
btn.onclick = (e)=>{
    e.preventDefault()
    console.log('click')
    fetch('/message', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: 'seif'})
  });
}