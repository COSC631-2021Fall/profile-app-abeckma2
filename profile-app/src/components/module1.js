import {useParams} from "react-router";
function Module1({par})
{
    let{id}=useParams();
    return
      (<div>
          <h2>Module1:Git{id}</h2>
          {id&&<p>Gitisadistributedversioncontrolsystem.</p>}
          </div>);
}
export default Module1;