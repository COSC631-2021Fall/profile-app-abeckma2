import {useParams} from "react-router";
export function Module3({par})
{
    let{id}=useParams();
    return(
    <div>
          <h2>Module3:Git {id}</h2>
          {id && <h3>Git is a distributed version control system.</h3>}
    </div>
    );
}
export default Module3;