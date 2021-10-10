import {useParams} from "react-router";
function Module2({par})
{
    let{id}=useParams();
    return
      (<div>
          <h2>Module2:Git{id}</h2>
          {id&&<p>Gitisadistributedversioncontrolsystem.</p>}
       </div>);
}
export default Module2;