import {useParams} from "react-router";
function Module2({par})
{
    let{id}=useParams();
    return(
    <div>
          <h2>Module2:Git {id}</h2>
          <p>we are using git</p>
          {id && <p>we are using git</p>}
    </div>
    );
}
export {Module2};