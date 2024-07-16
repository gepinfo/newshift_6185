import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./employee.scss";
import  {service}   from './employee.service';

class Employee extends React.Component<any, any> {
    test = new service ("");
    constructor(props:any){
    super(props);
    this.state={
    employee : {
    name: '',
    age: '',
    },
    
    rowData :[]
    } }


    handlechange = (e: any) => {
    if(e?.target){
    this.setState({ employee: { ...this.state.employee, [e.target.name]: e.target.value } })
    }
    }


    componentDidMount() {
    this.state.employee.created_by = sessionStorage.getItem('email')||'{}';
    }

    render(){
    return(
    <>
        <h2 className="screen-align">employee</h2>
        <div id="template-ie1e" className="gjs-row"></div>
    </>
    );
    };
    };

    export default Employee;