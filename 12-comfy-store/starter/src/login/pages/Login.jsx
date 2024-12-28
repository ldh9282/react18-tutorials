import { Form, Link, useNavigate } from "react-router-dom";
import { Button, FormInput, Submit } from "../../cmmn/components";

const Login = () => {
    const navigate = useNavigate();
    return (
        <section className="h-screen grid place-items-center">
            <Form
                method="post"
                className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
            >
                <h4 className="text-center text-3xl font-bold">로그인</h4>
                <FormInput
                    type="email"
                    label="이메일"
                    name="identifier"
                    placeholder="test@test.com"
                />
                <FormInput
                    type="password"
                    label="비밀번호"
                    name="password"
                    defaultValue=""
                />
                <div className="mt-4">
                    <Submit className="btn-primary btn-block" text="로그인" />
                </div>
                <div className="mt-2">
                    <Button
                        className="btn-secondary btn-block"
                        text="익명으로 사용"
                        onClick={() => console.log(1)}
                        isLoading={true}
                    />
                </div>
                <div className="mt-2 text-center">
                    계정이 없으신가요?
                    <Link
                        to="/register"
                        className="ml-2 link link-hover link-primary capitalize"
                    >
                        회원가입
                    </Link>
                </div>
            </Form>
        </section>
    );
};
export default Login;
