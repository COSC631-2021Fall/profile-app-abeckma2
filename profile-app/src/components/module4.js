import {useParams} from "react-router";
function Module4({par})
{
    let{id}=useParams();
    return(
    <div>
          <h2>Module4:Git {id}</h2>
          {id && <p>my email is abeckma2@emich.edu</p>}
    </div>
    );
}
export {Module4};