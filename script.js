const submitButton = document.getElementById('submit')
const main1 = document.getElementById('main1')
const main2 = document.getElementById('main2')
const at = document.getElementById('at')

submitButton.addEventListener('click', ()=>{
    main1.style.display = "none"
   
    main2.style.display = "flex"
})