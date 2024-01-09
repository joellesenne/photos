import { lazy, Suspense, useState } from 'react';
import CookieConsent from "react-cookie-consent";
import Layout from "./components/Layout";
import Header from "./components/header";
import Navigation from "./components/Navigation";
import Greeting from "./components/Greeting";
// import Button from "./components/Button";
import Content from "./components/content";
import AllCategory from "./pages/AllCategory";
import CityCategory from "./pages/CityCategory";
import ExhibitionCategory from "./pages/ExhibitionCategory";
import LandscapeCategory from "./pages/LandscapeCategory";
import PanoramaCategory from "./pages/PanoramaCategory";
import PortraitCategory from "./pages/PortraitCategory";
import StreetArtCategory from "./pages/StreetArtCategory";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ThemeSwitch from "./components/ThemeSwitch";
import TravelCategory from "./pages/TravelCategory";
import WildlifeCategory from "./pages/WildlifeCategory";
import Progress from "./components/Progress";
import Loading from "./components/Loading";

const Button = lazy(() => import('./components/Button'));

export default  function App() {
    const [tab, setTab] = useState('all');
    const tabData = [
        {
            name: "All",
            value: "all",
            tab: <AllCategory/>
        },
        {
            name: "Travel",
            value: "travel",
            tab: <TravelCategory/>
        },
        {
            name: "City",
            value: "city",
            tab: <CityCategory/>
        },
        {
            name: "Landscape",
            value: "landscape",
            tab: <LandscapeCategory/>
        },
        {
            name: "Street Art",
            value: "street-art",
            tab: <StreetArtCategory/>
        },
        {
            name: "Panorama",
            value: "panorama",
            tab: <PanoramaCategory/>
        },
        {
            name: "Portrait",
            value: "portrait",
            tab: <PortraitCategory/>
        },
        {
            name: "Exhibition",
            value: "exhibition",
            tab: <ExhibitionCategory/>
        },
        {
            name: "Wildlife",
            value: "wildlife",
            tab: <WildlifeCategory/>
        }
    ]
    return (
        <>
            <Progress/>
            <ThemeSwitch/>
            <ScrollToTop title="&#10595;"/>
            <Layout>
                <Header>
                    <Greeting/>
                    <Navigation>
                        <p>Select category :</p>
                        <div className="flex items-center justify-center flex-wrap">
                            <Suspense fallback={Loading}>
                                {tabData && tabData
                                    .map((items, index) =>(
                                        <span key={index}>
                                        <Button
                                            isActive={tab === items.value}
                                            onClick={() => setTab(items.value)}
                                        >
                                        {items.name}
                                    </Button>
                                </span>
                                    ))}
                            </Suspense>
                        </div>
                    </Navigation>
                </Header>
                <Content>
                    {tabData && tabData
                        .map((items, index) => (
                            <article key={index}>
                                {tab === items.value && items.tab}
                            </article>
                        ))
                    }
                </Content>
                <Footer/>
            </Layout>
            <CookieConsent
                location="bottom"
                buttonText="Sure man!!"
                cookieName="myAwesomeCookieName2"
                style={{color: "var(--bg-color)",textShadow: "none",background: "var(--text-color)"}}
                buttonStyle={{color: "var(--bg-link-btn-hover)",textShadow: "none" , background: "var(--bg-link-btn)", border: "solid 3px var(--bg-link-btn-hover)", borderRadius: "0.25em"}}
                expires={150}
            >
                This website uses cookies to enhance the user experience.
            </CookieConsent>
        </>
    );
}
