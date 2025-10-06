import { vNode, View } from "@ocdla/view";
import Legal from "@ocdla/global-components/src/Legal";
import Sitemap from "@ocdla/global-components/src/Sitemap";
import SitemapCategory from "@ocdla/global-components/src/SitemapCategory";
import Social from "@ocdla/global-components/src/Social";
import Contacts from "@ocdla/global-components/src/Contacts";
import Logo from "@ocdla/global-components/src/Logo";
import GoogleMaps from "@ocdla/global-components/src/GoogleMaps";




export default function Footer() {


    return (
        <footer class="container mx-auto border border-b-0 p-4 pb-16 lg:p-8 lg:pb-32">

            <ul id="ul-depth-1" class="flex flex-col gap-4">
                <li>

                    <ul class="flex flex-col gap-4 lg:flex-row lg:gap-8">
                        <li>

                            <ul id="ul-depth-2" class="flex flex-col gap-1">
                                <li>

                                    <ul id="ul-depth-3" class="flex items-center gap-1">
                                        <li class=""><a class="" href="/">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mP8z8BQz0AEYBxVSF+FABJADveWkH6oAAAAAElFTkSuQmCC" alt="Red Square" className="phone:w-[50px] desktop:w-[65px]" style={{ display: "inline-block", verticalAlign: "middle" }} />
                                        </a></li>
                                        <li><a class="hover:opacity-[67.5%]" href="https://facebook.com/OregonCriminalDefenseLawyersAssociation"><img class="w-8" src="/images/logo_facebook.png" alt="Facebook logo" /></a></li>
                                        <li><a class="hover:opacity-[67.5%]" href="https://x.com/oregondefense"><img class="w-8" src="/images/logo_twitter.png" alt="Twitter logo" /></a></li>
                                        <li></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>

            </ul>
        </footer>
    );
}

