import React from "react";
import './Popup.scss'
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";


function Popup(props) {
  const { link_uuid } = useParams();
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();


  //Update Name
  const onSubmit = (values) => {
    axios.patch(`http://localhost:3001/api/q`, {
      link_uuid: link_uuid,
      product: values.product,
    })
      .then(res => {
        //Navigate to new URL
        navigate(`/q/fill/${res.data.link_uuid}`)
        //Close Popup
        props.setVisible(false)
      })
  }

  return (props.visible) ? (
    <div className="popup">
      <div className="popup-inner">
        <h1>Name des Produkts ändern</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            id='product'
            placeholder={props.questionnaire.product}
            aria-invalid={errors.product ? "true" : "false"}
            {...register("product", {
              required: true,
              maxLength: 35,
            })}
          />
          <button className="save-btn" type="submit">Speichern</button>
        </form>
        <button className="close-btn" onClick={() => props.setVisible(false)}>Abbrechen</button>
      </div>
    </div>
  ) : "";
}

export default Popup;