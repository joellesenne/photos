import { Suspense, useState } from 'react';
import Layout from "./components/Layout";
import Header from "./components/header";
import Navigation from "./components/Navigation";
import Greeting from "./components/Greeting";
import Button from "./components/Button";
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

export default  function App() {
    const [tab, setTab] = useState('all');
    return (
        <>
            <ThemeSwitch />
            <ScrollToTop title="&#10595;"/>
            <Layout>
                <Header>
                    <Greeting />
                    <Navigation>
                        <p>Select category</p>
                        <Suspense fallback={<h2>🌀 Loading...</h2>}>
                            <Button
                                isActive={tab === 'all'}
                                onClick={() => setTab('all')}
                            >
                                All
                            </Button>
                            <Button
                                isActive={tab === 'city'}
                                onClick={() => setTab('city')}
                            >
                                City
                            </Button>
                            <Button
                                isActive={tab === 'exhibition'}
                                onClick={() => setTab('exhibition')}
                            >
                                Exhibition
                            </Button>
                            <Button
                                isActive={tab === 'landscape'}
                                onClick={() => setTab('landscape')}
                            >
                                Landscape
                            </Button>
                            <Button
                                isActive={tab === 'panorama'}
                                onClick={() => setTab('panorama')}
                            >
                                Panorama
                            </Button>
                            <Button
                                isActive={tab === 'portrait'}
                                onClick={() => setTab('portrait')}
                            >
                                Portrait
                            </Button>
                            <Button
                                isActive={tab === 'street-art'}
                                onClick={() => setTab('street-art')}
                            >
                                Street Art
                            </Button>
                        </Suspense>
                    </Navigation>
                </Header>
                <Content>
                    {tab === 'all' && <AllCategory />}
                    {tab === 'city' && <CityCategory />}
                    {tab === 'exhibition' && <ExhibitionCategory />}
                    {tab === 'landscape' && <LandscapeCategory />}
                    {tab === 'panorama' && <PanoramaCategory />}
                    {tab === 'portrait' && <PortraitCategory />}
                    {tab === 'street-art' && <StreetArtCategory />}
                </Content>
                <Footer />
            </Layout>
        </>
  );
}
