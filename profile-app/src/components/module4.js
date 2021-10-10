import {useParams} from "react-router";
function Module4()
{
    return(
    <div>
        <p>my email is abeckma2@emich.edu</p>
          <h2>Module4:Git {id}</h2>
          {id && <p>my email is abeckma2@emich.edu</p>}
    </div>
    );
}
function lastModule()
{
    return(
    <div>
        <p>This is done through EMU </p>
    </div>
    );
}
export default Module4;
export {lastModule};