const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			
			],
			token:null,
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
		
			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			verifyIfUserLoggedIn:()=>{
				const token=localStorage.getItem('token')
				if (token) setStore({token:token});
			},
			logIn: (email, password) => {
				var options = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: email, password: password })
				}
				fetch(process.env.BACKEND_URL + 'api/login', options)
				.then(response => {
					if (response.ok) return response.json()
					else throw Error('Something went wrong')
				})
				.then(data => {
					localStorage.setItem("token", data.token)
					setStore({token:data.token})
					console.log(data)
				})
				.catch(error => {
					console.log(error)
				})
			},
			signUp: (username, name, email, password) => {
				var options = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ username: username, name: name, email: email, password: password })
				}
				fetch(process.env.BACKEND_URL + 'api/registration', options)
				.then(response => {
					if (response.ok) return response.json()
					else throw Error('Something went wrong')
				})
				.then(data => {
					console.log(data)
				})
				.catch(error => {
					console.log(error)
				})
		}	,
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}		
	}
};
}

export default getState;
