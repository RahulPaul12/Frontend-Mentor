const load =()=>{
    // const btn = document.getElementById('svg');
    // btn.addEventListener('click',()=>{
    //     window.location.reload();
    //     fetch('https://api.adviceslip.com/advice')
    //     .then(response=>response.json())
    //     .then(data=>console.log(data.slip.advice))

    // })
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.getElementById('advice').innerHTML = `
            <p class='advice-no'>Advice #${data.slip.id}</p>
            <h1 class='advice-text'>"${data.slip.advice}"</h1>
        `
    })
    
}


load()
