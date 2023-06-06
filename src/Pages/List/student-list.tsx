import * as React from "react";
import "./student-list.scss";

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
    this.EditStudent = this.EditStudent.bind(this);
  }

  /** when component will un mount, reset all state */
  public componentWillUnmount() {
    
  }

      
  private AddStudent(){
    this.props.navigate('/add');
  }

  private EditStudent(){
    this.props.navigate('/edit/1');
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
        <div className="student-record">
            <div className="student-coulmn">1000</div>
            <div className="student-coulmn">Naveen Kumar</div>
            <div className="student-coulmn">Grade-9</div>
            <div className="student-coulmn">Hyderabad</div>
            <div className="student-coulmn-actions">
                <button className="student-button" onClick={()=>this.EditStudent()}>Edit</button>
                <button className="student-button">Delete</button>
            </div>
        </div>
      </>
    );
  }
}