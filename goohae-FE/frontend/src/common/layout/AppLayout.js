import Footer from "../Footer";
import Header from "../Header";


export default function AppLayout({ children }) {
    return (
        <>
            <Header />

            {children}

            <Footer />
        </>
    );
}