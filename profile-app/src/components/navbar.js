

function Navbar()
{
    let links=
    [
        {
            url:"/module1",
            name:"Mod1"
        },
        {
            url:"module2",
            name:"Mod2"
        }
    ];
    let menu=links.map((path)=>{
        return(
        <span>
            <a href={link["url"]}>{path.name}</a>&nbsp;
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
