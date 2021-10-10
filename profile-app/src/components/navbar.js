

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
        },
        {
            url:"module3",
            name:"Mod3"
        }
    ];
    let menu=links.map((path)=>{
        return(
        <span>
            <a href={path.url}>{path.name}</a>&nbsp;
        </span>
        );
    }
    );
    return(
    <div>
        {menu}
        </div>
    );
}
export default Navbar;
