const button = document.querySelector('button')
const body = document.querySelector('body')

const clicker = () => {
    console.log("button clikcked")
    axios
    .get('http://swapi.dev/api/planets/?search=alderaan'
    )
    .then((res)=>{
        let residents = res.data.results[0].residents
        console.log(res.data.results[0].residents)
        
        for (let i = 0; i < residents.length; i++) {
            axios.get(residents[i])
            .then((res)=>{
                let posting = document.createElement('h2')
                posting.innerHTML= res.data.name
                body.appendChild(posting)  
            })
            
        }
    })
}

button.addEventListener("click", clicker)