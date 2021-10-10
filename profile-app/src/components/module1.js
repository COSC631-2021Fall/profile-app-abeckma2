import {useParams} from "react-router";
function Module1({par})
{
    let{id}=useParams();
    return(
    <div>
          <h2>Module1:Git {id}</h2>
          <p>Git is a distributed version control system.</p>
          {id && <p>Git is a distributed version control system.</p>}
    </div>
    );
}
function Module5({par})
{
    let{id}=useParams();
    return(
    <div>
          <h2>Module5:Git {id}</h2>
          <p>checking to see if 2 components work in 1 js file.</p>
          {id && <p>checking to see if 2 components work in 1 js file.</p>}
    </div>
    );
}
export default Module1;
export {Module5};