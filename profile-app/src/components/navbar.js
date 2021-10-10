

function Navbar()
{
    let links=
    [
        {
            url:"/module1"
        },
        {
            url:"module2"
        }
    ];
    let menu=links.map((path)=>{
        return(
        <span>
            <a href={path.url}>{path.url}</a>&nbsp;
        </span>
        );
    }
    );
    return(
    <div>
        {links}
        </div>
    );
}
export default Navbar;
