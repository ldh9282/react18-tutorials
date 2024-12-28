import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    if (error.status === 404) {
        return (
            <main className="grid min-h-[100vh] place-items-center px-8">
                <div className="text-center">
                    <p className="text-9xl font-semibold text-primary">404</p>
                    {error.message && (
                        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                            ${error.message}
                        </h1>
                    )}
                    <p className="mt-6 text-lg leading-7">
                        해당 페이지를 찾을 수 없습니다.
                    </p>
                    <div className="mt-10">
                        <Link to="/" className="btn btn-secondary">
                            홈페이지로 가기
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="grid min-h-[100vh] place-items-center px-8">
            <div className="text-center">
                <p className="text-9xl font-semibold text-primary">500</p>
                {error.message && (
                    <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                        ${error.message}
                    </h1>
                )}
                <p className="mt-6 text-lg leading-7">잠시후 시도해주세요</p>
                <div className="mt-10">
                    <Link to="/" className="btn btn-secondary">
                        홈페이지로 가기
                    </Link>
                </div>
            </div>
        </main>
    );
};
export default Error;
