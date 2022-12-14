import React from "react"
import style from "./style.js"
import {InputTextComponent, RadioButtonComponent, SelectComponent, CheckBoxComponent, ButtonComponent} from "my-lib-ui";
const FormComponent = (props) => {
    const handleSubmit = (event, data) =>{
        data.from = 'subForm';
        data.data = {};
        props.handleSubmit(event, data)
    }
    return (
        <div style={style.container}>
            <div style={style.radioArea}>
                <div style={style.company}>
                    <RadioButtonComponent text="une entreprise" />
                </div>
                <div style={style.private}>
                    <RadioButtonComponent text="un particulier" />
                </div>
            </div>
            <div style={style.lastName}>
                <InputTextComponent fieldName="Nom" />
            </div>
            <div style={style.firstName}>
                <InputTextComponent fieldName="Prénom"/>
            </div>
            <div style={style.eMail}>
                <InputTextComponent fieldName="E-mail"/>
            </div>
            <div style={style.phone}>
                <InputTextComponent fieldName="Numéro de téléphone"/>
            </div>
            <div style={style.nationality}>
                <SelectComponent nationalities={[{label:"Dutch", value: "DE"}, {label:"United Kingdom", value: "GB"}, {label:"Français", value:"FR"},]} />
            </div>
            <div style={style.driversLicense}>
                <CheckBoxComponent text="J’atteste que je possède un permis de conduire valide." />
            </div>
            <div style={style.subscribe}>
                <ButtonComponent maxWidth={true} color="danger" text="Demander mon inscription" handleSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default FormComponent;