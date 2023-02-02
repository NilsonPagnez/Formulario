const form = document.querySelector('form')
const campos = document.querySelectorAll('.required')
const allCampos = document.querySelectorAll('.inputUser')
const spans = document.querySelectorAll('.span-required')



const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

form.addEventListener('submit', e =>{
    e.preventDefault()

    validateName()
    emailValidate ()
    cpfValidate()
    dataValidate()
    cidadeValidate()
    ufValidate()
    
    const invalids = document.querySelectorAll('.invalid')
    

    

    if(invalids.length === 0){

       
        allCamposNamesValues = [
            `${allCampos[0].name}: ${allCampos[0].value}`,
            `${allCampos[1].name}: ${allCampos[1].value}`,
            `${allCampos[2].name}: ${allCampos[2].value}`,
            `${allCampos[3].name}: ${allCampos[3].value}`,
            `${allCampos[4].name}: ${allCampos[4].value}`,
            `${allCampos[5].name}: ${allCampos[5].value}`,
            `${allCampos[6].name}: ${allCampos[6].value}`,
           
        ]


        let doc = jsPDF()

        doc.text(allCamposNamesValues, 10, 10)
        doc.save('form.pdf')
    }


})

function setError(index){
    spans[index].style.display = 'block'
    campos[index].classList.add('invalid')
    
}

function removeError(index){
    spans[index].style.display = 'none'
    campos[index].classList.remove('invalid')

}

function validateName(){ campos[0].value.length < 3 ? setError(0) : removeError(0)}

function emailValidate (){ emailRegex.test(campos[1].value) ? removeError(1) : setError(1)}

function cpfValidate(){
    
    cpf = campos[2].value
    cpf = cpf.replace(/\.|-/g, '')
    
    if(cpf.length !== 11 || isNaN(cpf) == true){
        setError(2)
    }else{
        removeError(2)
    }
    
}

function dataValidate(){campos[3].value ?removeError(3) : setError(3)}

function cidadeValidate() { campos[4].value.length == 0 ?setError(4) : removeError(4)}

function ufValidate() { campos[5].value.length < 2 ? setError(5) : removeError(5) }
   


