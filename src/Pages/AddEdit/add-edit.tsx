import * as React from "react";
import "./add-edit.scss";

export interface IAddEditProps {
    navigate: any;
    location: any;
}
export interface IAddEditState {
    name: string;
    grade: string;
    isAdd: boolean;
}

export class AddEdit extends React.Component<IAddEditProps, IAddEditState> {
  constructor(props: IAddEditProps) {
    super(props);
    this.state = {
        name : '',
        grade : '',
        isAdd : true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleGrade = this.handleGrade.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  /** when component did mount, reset all state */
  public componentDidMount() {
    const id  = this.props.location.pathname.split('/').pop() as string;
    this.setState({
        isAdd : id === "add"? true : false
    });
  }

  private handleSubmit(){
    if(this.state.isAdd)
        alert(this.state.name + "Added");
    else
        alert(this.state.name + "Updated");
  }

  private handleName(e: any){
    this.setState({
        name : e.target.value
    });
  }

  private handleCancel(){
    this.props.navigate("/list");
  }

  private handleGrade(e: any){
    this.setState({
        grade : e.target.value
    });
  }

  // render
  public render() {
    return (
      <>
        <div className="add-edit-container">
            <div className="add-edit-header">{this.state.isAdd? "Add":"Edit"} Employee</div>
                <table style={{margin: "0 auto"}} className="form-container">
                    <th></th>
                    <tr className="form-row">
                        <td className="form-label">
                            <label> Name:</label>    
                        </td>
                        <td>
                            <input type="text" name="name" className="form-input"
                            value={this.state.name} onChange={(e)=>this.handleName(e)} />
                        </td>
                    </tr>
                    <tr className="form-row">
                        <td className="form-label">
                            <label> Grade:</label>    
                        </td>
                        <td>
                            <input type="text" name="grade" className="form-input"
                            value={this.state.grade} onChange={(e)=>this.handleGrade(e)} />
                        </td>
                    </tr>
                </table>
                <button name="cancel" onClick={()=>this.handleCancel()} className="form-cancel">Cancel</button>
                <button name="submit" onClick={()=>this.handleSubmit()} className="form-submit">{this.state.isAdd? "Add":"Edit"}</button>
        </div>
      </>
    );
  }
}