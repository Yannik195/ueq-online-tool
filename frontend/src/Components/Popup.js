import React from "react";
import './Popup.scss'
import { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom"
import { useForm } from "react-hook-form";

export function Popup(props) {

  const { link_uuid } = useParams();
  const [q, setQuestionnaire] = useState({});
  const [nameedit, setNameedit] = useState({ product: '' })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  useEffect(() => {
    console.log(link_uuid);
    const editname = async () => {
      await fetch(`http://localhost:3001/api/q/fill/${link_uuid}`)
        .then(response => response.json())
        .then(data => setQuestionnaire(data));
    }
    editname();
  }, []);

  const onSubmit = (values) => {
    //event.preventDefault()
    console.log("Values", values.product);
    axios.patch(`http://localhost:3001/api/q`, {
      link_uuid: link_uuid,
      product: values.product,
    })
      .then(res => {
        //Todo Close popup window
      })
  }

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
export default Popup;