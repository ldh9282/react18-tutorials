import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <div>test</div>
            <section className="align-element py-20">
                <Outlet />
            </section>
        </>
    );
};
export default MainLayout;
