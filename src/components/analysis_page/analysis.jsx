import flow from '/FlowChart.png'
import './style.css'

function Analysis(){
    return(
      <>
        <div className="analysis">
            <h1>Flowchart</h1>
            <img src={flow}/>
        </div>
      </>  
    );
}

export default Analysis;