import {useParams} from "react-router";
function Module3({par})
{
    let{id}=useParams();
    return(
    <div>
          <h2>Module3:Git {id}</h2>
          <p>3rd module</p>
          {id && <h3>Git is a distributed version control system.</h3>}
    </div>
    );
}
export {Module3};