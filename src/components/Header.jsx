
import MenuTop from "./navigation/MenuTop";
import MenuMobile from "./navigation/MenuMobile";
import Hamburger from "./navigation/Hamburger";


export default function Header({ loggedIn = false }) {



    let items = [
        {
            url: "/",
            label: "home"
        },
        {
            url: "/settings",
            label: "settings",
            hidden: true
        }
    ];

    let loginItem = {
        url: "/login",
        label: "login",
        hidden: true,
        // loggedIn: loggedIn
    };

    let logoutItem = {
        url: "/logout",
        label: "logout",
        hidden: true,
        // loggedIn: loggedIn
    };

    if (loggedIn) {
        console.log("User is logged in");
        items.push(logoutItem);
    } else {
        console.log("User is NOT logged in");
        items.push(loginItem);
    }

    // 

    return (
        <header className="w-full mb-0 py-1 sticky top-0 bg-default-background z-50">
            <nav>

                <ul className="text-zinc-100 inline-block" style={{ width: "100%" }}>

                    <li style={{ verticalAlign: "middle" }} className="inline-block">
                        <a href="/">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mP8z8BQz0AEYBxVSF+FABJADveWkH6oAAAAAElFTkSuQmCC" alt="Red Square" className="phone:w-[50px] desktop:w-[65px]" style={{ display: "inline-block", verticalAlign: "middle" }} />
                        </a>
                    </li>

                    <MenuTop items={items} />

                    <li style={{ float: "right" }} className={`hidden phone:hidden tablet:inline-block`}>
                        <Hamburger />
                    </li>
                </ul>

                <ul id="mobile-menu" className="text-slate-50 block hidden min-h-[100vh] pt-[15vh]">
                    <MenuMobile items={items} />
                </ul>
            </nav>

        </header>
    );
}
