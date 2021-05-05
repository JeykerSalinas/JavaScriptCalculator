
function App(){
    
    const [expression, setExpression] = React.useState("")
    const [answer, setAnswer] = React.useState(0)
    
    const display = (symbol)=>{
        setExpression(prev=> prev + symbol)
        if(expression[expression.length-1] == "="){
            if(/[0-9,]/.test(symbol)){
                setExpression(symbol)
            } else {
                setExpression(answer+symbol)
            }
        }
    }
    const calculate = () => {
        setAnswer(eval(expression))
        setExpression((prev)=> prev + "=")
    }
    const allClear = () => {
        setExpression(0);
        setAnswer(0);
    }
    const clear = () => {
        setExpression((prev)=> 
        prev
            .split("")
            .slice(0, prev.length-1)
            .join("")
        )

        setAnswer(0)
    }
        
    return (
        <div className="container">
            <div className="grid">
                <div className="dis" ><input type="text" value={expression} placeholder="0" disabled id="display"/>
                <div className="total">{answer}</div>
                </div>
                <div onClick={allClear} className="padButton AC erase" id="clear">AC</div>
                <div onClick={clear} className="padButton C erase" >C</div>
                <div onClick={()=> display("/")} className="padButton div" id="divide">/</div>
                <div onClick={()=> display("*")} className="padButton time" id="multiply">X</div>
                <div onClick={()=> display("7")} className="padButton seven dark-button" id="seven">7</div>
                <div onClick={()=> display("8")} className="padButton eigth dark-button" id="eight">8</div>
                <div onClick={()=> display("9")} className="padButton nine dark-button" id="nine">9</div>
                <div onClick={()=> display("-")} className="padButton minus" id="subtract">-</div>
                <div onClick={()=> display("4")} className="padButton four dark-button" id="four">4</div>
                <div onClick={()=> display("5")} className="padButton five dark-button" id="five">5</div>
                <div onClick={()=> display("6")} className="padButton six dark-button" id="six">6</div>
                <div onClick={()=> display("+")} className="padButton plus" id="add">+</div>
                <div onClick={()=> display("1")} className="padButton one dark-button" id="one">1</div>
                <div onClick={()=> display("2")} className="padButton two dark-button" id="two">2</div>
                <div onClick={()=> display("3")} className="padButton three dark-button" id="three">3</div>
                <div onClick={calculate} className="padButton equal blue" id="equals">=</div>
                <div onClick={()=> display("0")} className="padButton zero dark-button" id="zero"> 0</div>
                <div onClick={()=> display(".")} className="padButton dot dark-button" id="decimal">.</div> 
            </div>
        </div>
    )
}
ReactDOM.render(<App/>,document.getElementById("root"))

