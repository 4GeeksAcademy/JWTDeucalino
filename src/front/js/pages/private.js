import React,{useEffect,useContext} from "react";
import {useNavigate} from "react-router-dom";
export const Private = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  useEffect(()=>{
    if(store.token){
      console.log("Go ahead.")
    }
    else {
      navigate('/login')
    }
  },[])
	return (
        <div class="container-fluid">
          <div class="card">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe1k_KkOMz8I3h2ImdtiZW1qhQ8f5QWuxkjA&usqp=CAU" class="card-img-top" alt="..."/>
             <div class="card-body">
             <h5 class="card-title">4M Likes</h5>
             <p class="card-text">This is how bored apes yacht club make flufy cats look less interesting.</p>
          </div>
        </div>
        </div>      
	);
};