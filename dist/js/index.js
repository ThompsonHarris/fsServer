const root =  document.getElementById('root')

fetch('http://localhost:3000/api/data')
.then(response => {
  return response.json()})
.then(data => root.innerHTML= data.data)
.catch(err=>{
  console.error(err)
})
