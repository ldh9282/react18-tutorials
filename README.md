# vscode 실행방법

패키지 설치 및 개발서버 구동

```bash
npm install & npm run dev
```

# 기본문법

## 1. useState

```js
const [people, setPeople] = useState(data);
const [count, setCount] = useState(0);
```

## 2. useEffect

DependencyList

-   기본값일때 매번 랜더링
-   빈 배열일때 한번만 랜더링
-   value 값이 change 될때

```js
useEffect(() => {
    console.log("hello from first useEffect");
}, [value]);
```

## 3. useRef

```js
const refContainer = useRef(null);

<input type="text" id="name" className="form-input" ref={refContainer} />;

const handleSubmit = (e) => {
    e.preventDefault();
    if (isDebugEnabled) {
        console.log(refContainer.current);
        console.log(refContainer.current.value);
    }
};
```

## 4. createContext

context.jsx 에서 globalState 로 오브젝트 반환 (전역상태관리)

```js

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    ... 생략

    // globalState 로 오브젝트 반환
     return (
        <AppContext.Provider
            value={{
                isSidebarOpen: isSidebarOpen,
                isModalOpen: isModalOpen,
                openSidebar: openSidebar,
                closeSidebar: closeSidebar,
                openModal: openModal,
                closeModal: closeModal,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};
```

App.jsx 에서 사용대상 묶어줌

```js
<AppProvider>
    <App />
</AppProvider>
```

각종 컴포넌트에서 useGlobalContext 으로 globalState 로 오브젝트 사용

```js
const { isSidebarOpen, closeSidebar } = useGlobalContext();
```

## 5-1 리액트쿼리 useQuery (GET METHOD)

reactQueryCustomHooks.jsx 에서

데이터 조회 및 캐싱무효화 쿼리키 지정 (비동기로 캐싱무효화하면 다시 요청보냄)

```js
export const useFetchTasks = () => {
    const { isLoading, data, error, isError } = useQuery({
        queryKey: ["tasks"],
        queryFn: async () => {
            const { data } = await customFetch.get("/");

            return data;
        },
    });
    return { isLoading, data, error, isError };
};
```

Items.jsx 에서

```js
const { isLoading, data, error, isError } = useFetchTasks();
```

## 5-2 리액트쿼리 useMutation (POST, DELETE, PATCH METHOD)

reactQueryCustomHooks.jsx 에서

데이터 등록 후 콜백으로 캐싱무효화 쿼리키 사용

```js
export const useCreateTask = () => {
    const queryClient = useQueryClient();
    const { mutate: createTask, isLoading: createTaskLoading } = useMutation({
        mutationFn: (taskTitle) => customFetch.post("/", { title: taskTitle }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tasks"] });
            toast.success("success!");
        },
        onError: (error) => {
            toast.error(error.response.data.msg);
        },
    });

    return { createTask, createTaskLoading };
};
```

Form.jsx 에서

사용하는 지점에서 콜백도 필요하면 가능

```js
const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newItemName, {
        onSuccess: () => {
            setNewItemName("");
        },
    });
};
```
