import * as React from "react";
import "./student-list.scss";
import ApiService from "../../ApiService/ApiService";
import { ApiRouteConstants } from "../../ApiService/ApiRouteConstants";
import Popup from '../../Common/Components/pop-up/pop-up';
import { Record  } from "../Record/record";

export interface IListProps {
    navigate: any
}
export interface IListState {
}
export class StudentList extends React.Component<IListProps, IListState> {
  constructor(props: IListProps) {
    super(props);
    this.state = {
    };
    this.AddStudent = this.AddStudent.bind(this);
  }

  /** when component will un mount, reset all state */
  public componentWillUnmount() {
    
  }


  componentDidMount() {
    ApiService.get(ApiRouteConstants.Student.GetAll)
    .then((res)=>{
      console.log('student response : ',res);
    })
    .catch((error)=>{
      console.log('student error : ',error);
    })
  }

      
  private AddStudent(){
    this.props.navigate('/add');
  }

  // render
  public render() {

    return (
      <>
        <div className="header-record">
            <div className="add-button-div">
                <button className="add-button" onClick={()=>this.AddStudent()}>+ Add Student</button>
            </div>
            <div className="student-header">List of Students</div> 
        </div>
        <div className="student-record">
            <div className="student-coulmn-header">ID</div>
            <div className="student-coulmn-header">Student Name</div>
            <div className="student-coulmn-header">Standard</div>
            <div className="student-coulmn-header">City</div>
            <div className="student-actions">Actions</div>
        </div>
        <Record navigate={this.props.navigate}/>
      </>
    );
  }
}