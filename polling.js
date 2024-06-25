
const options = [
    {id:"option1",text:"JavaScript",votes:0},
    {id:"option2",text:"Python",votes:0},
    {id:"option3",text:"Java",votes:0},
    {id:"option4",text:"C++",votes:0}

]

function SubmitVote(){

    const selectedOption = document.querySelector('input[name="poll"]:checked'); //checked attributes make us choose the optionand display the same 
    //id checked not written then only option 1 displayed in console
    // console.log(selectedOption.value);
    if(!selectedOption){
        alert("Please SELECT an option.");
        return;
    }

    const optionId = selectedOption.value;
    const selectedOptionObj = options.find((option)=> option.id ===optionId);
    // console.log(selectedOptionObj);
    if(selectedOptionObj){
//upadtion in votes
        selectedOptionObj.votes++;
        // console.log(selectedOptionObj);
        displayResult();

    }

}
function displayResult(){
    const result = document.getElementById('result');
    result.innerHTML = "";
    options.forEach((option)=>{
        const percentage = ((option.votes/ getTotalVotes())*100).toFixed(2) ||0;
        const barwidth = percentage >0? percentage+'%' : "0%";
        const optionResult = document.createElement("div");
        optionResult.className = "option-result";
        optionResult.innerHTML = `
            <span class = "option-text">${option.text}</span>
            <div class = "bar-container">
                <div class = "bar" style="width: ${barwidth};"></div>
            </div>
            <span class = "percentage">${percentage}</span>

            `;
             
        result.appendChild(optionResult);

    })
}

function getTotalVotes(){
    return options.reduce((total,option)=> total + option.votes,0);

}
// displayResult();