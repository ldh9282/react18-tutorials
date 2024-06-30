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
 - 기본값일때 매번 랜더링
 - 빈 배열일때 한번만 랜더링
 - value 값이 change 될때

```js
useEffect(() => {
	console.log("hello from first useEffect");
}, [value]);
```


## 3. useRef

```js
const refContainer = useRef(null);

<input
	type="text"
	id="name"
	className="form-input"
	ref={refContainer}
/>

const handleSubmit = (e) => {
	e.preventDefault();
	if (isDebugEnabled) {
		console.log(refContainer.current);
		console.log(refContainer.current.value);
	}
};
```
