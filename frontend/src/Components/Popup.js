import React from "react";
import './Popup.scss'
import { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom"
import { set, useForm } from "react-hook-form";
//import { post } from "../../../backend/routes/result";
//import questionnaire from "../../../backend/models/questionnaire";



export function Popup(props) {
   
 

    const { link_uuid } = useParams();
    //const [q, setQuestionnaire] = useState({});
    //let navigate = useNavigate();
    const [q, setQuestionnaire] = useState({});
    //const [prodctX, setProduct] = useState({});
    const [nameedit, setNameedit] = useState({product:''})

    const {
      register,
      setValue,
      handleSubmit,
      formState: { errors }
    } = useForm();

    useEffect(() => {
        console.log(link_uuid);
        const editname = async() => {
            //const reqdata = await fetch(`http://localhost:3001/api/q/fill/${link_uuid}`)
           await fetch(`http://localhost:3001/api/q/fill/${link_uuid}`)
          .then(response => response.json())
          .then(data => setQuestionnaire(data));
          //const res = await reqdata.json();
          //setNameedit(await res);
        }
        editname();
      }, []);

      const onSubmit = (event) => {
        //event.preventDefault()
        
        axios.patch(`http://localhost:3001/api/q`, {
          
          link_uuid: link_uuid,
          product: "ProduktName",
          
        })
          .then(res => {
            //const test = res.data;
            //this.setQuestionnaire({product})
          
            console.log(res);
            console.log(res.data);
            console.log({link_uuid})

            //console.log({})
            
            //const mydata=[...questionnaire,res.data]

          })
          
      }
      
      const handleEdit = (e) => {
        setNameedit({...nameedit, [e.target.link_uuid]:e.target.product})
          console.log(setNameedit)
      }
     
/*
      useEffect(() => {
            console.log(link_uuid);
            try {
                fetch(`http://localhost:3001/api/q/fill/${link_uuid}`) = async () => {
                const handleSubmit = (event) => {
                axios.patch(`http://localhost:3001/api/q`, {
          
                link_uuid: link_uuid,
                product: product,
              })
              .then(res => {
                const product = res.data;
                //this.setQuestionnaire({product})
                console.log(res);
                console.log(res.data);
                //const mydata=[...questionnaire,res.data]
    
              })
            }
            
            }
        } catch {

        }
        fetch();
      }, [])
*/

/*
      function handlePrdouctChange(event) {
        const value = event.target.value;
        setProduct({
          ...product,
          [event.target.name]: value
        });
      }
*/

      /*
      useEffect(() => {
        const getQuestionaire = async () => {
            const {data: res} = await axios.patch(`http://localhost:3001/api/q`);
            setQuestionnaire(res);
        };
        getQuestionaire();
      })
*/
    /* 
    const updateName = () => {
        const post = {link_uuid}
        
        console.log("Post: ")
        console.log(post)
        axios.patch(`http://localhost:3001/api/q`, post)
      }
      */


    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <h1>Name des Produkts ändern</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                
                  
                  <input
            id='product'
            placeholder={q.product}
            aria-invalid={errors.product ? "true" : "false"}
            {...register("product", {
              required: true,
              maxLength: 35,
            })}
          />
                  <h3 className="newName" id='product'>{q.product}</h3>
                  
                 <button type="submit">Speichern</button>

                </form>
           
                
                <button className="close-btn" onClick={() => props.setTrigger(false)}>Abbrechen</button>
                
              
               
                
            
                
            </div>

        </div>
    ) : "";
}
/*<input className="prodct-name" id='product' placeholder={q.product}></input>*/
/* <button className="save-btn" onClick={() => handleSubmit()}>Speichern</button>*/

//<button className="save-btn" onClick={(handleSubmit)}/*onClick={() => navigate(`/q/fill/${link_uuid}`)} type="submit"*/>Speichern</button>
//<input placeholder={link_uuid}></input>

/*<button className="save-btn" onClick={() => Update({product})} type="submit">Speichern</button>
                <button className="close-btn" onClick={() => props.setTrigger(false)}>Abbrechen</button> */
/*<button className="save-btn" onClick={updateName}>Speichern</button> */
export default Popup;