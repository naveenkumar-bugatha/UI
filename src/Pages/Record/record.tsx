import * as React from "react";
import "./record.scss";
import Popup from '../../Common/Components/pop-up/pop-up';

export interface IRecordProps {
    navigate: any
}
export interface IRecordState {
    isPopupOpen: boolean,
}
export class Record extends React.Component<IRecordProps, IRecordState> {
  constructor(props: IRecordProps) {
    super(props);
    this.state = {
        isPopupOpen: false,
    };
    this.EditStudent = this.EditStudent.bind(this);
    this.openPopup = this.openPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  /** when component will un mount, reset all state */
  public componentWillUnmount() {
    
  }

  private openPopup = () => {
    this.setState({ isPopupOpen: true });
  };

  private closePopup = () => {
    this.setState({ isPopupOpen: false });
  };

  private EditStudent(){
    this.props.navigate('/edit/1');
  }

  // render
  public render() {

    return (
      <>
        <div className="student-record">
            <div className="student-coulmn">1000</div>
            <div className="student-coulmn">Naveen Kumar</div>
            <div className="student-coulmn">Grade-9</div>
            <div className="student-coulmn">Hyderabad</div>
            <div className="student-coulmn-actions">
                <button className="student-button" onClick={()=>this.EditStudent()}>Edit</button>
                <button className="student-button" onClick={()=>this.openPopup()}>Delete</button>
            </div>
        </div>
        <Popup isOpen={this.state.isPopupOpen} onClose={this.closePopup} />
      </>
    );
  }
}