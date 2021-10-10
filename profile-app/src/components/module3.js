import {useParams} from "react-router";
export function Module3({par})
{
    let{id}=useParams();
    return(
    <div>
          <h2>Module3:Git {id}</h2>
          {id && <p>Git is a distributed version control system.</p>}
    </div>
    );
}
export default Module3;