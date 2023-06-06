import React, { Component } from 'react';
import './pop-up.scss';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface PopupState {
  // Define any state variables you need for the popup
}

class Popup extends Component<PopupProps, PopupState> {
  constructor(props: PopupProps) {
    super(props);
    this.state = {
      // Initialize the state variables
    };
  }

  // Handle any necessary logic when the component mounts
  componentDidMount() {
    // Add event listeners or perform any setup here
  }

  // Handle any necessary cleanup when the component unmounts
  componentWillUnmount() {
    // Remove event listeners or perform any cleanup here
  }

  render() {
    const { isOpen, onClose } = this.props;

    if (!isOpen) {
      return null; // Don't render anything if the popup is closed
    }

    return (
      <div className="popup-container">
        <div className="popup-content">
          {/* Add your popup content here */}
          <div>
            <p style={{float:'right',marginLeft:'30px', cursor:'pointer'}} onClick={onClose}>X</p>
            <h2 style={{marginTop: '15px'}}>Delete Student</h2>
          </div>
          <hr/>
          <p className='pop-warning-message'>Are you sure to delete the student record?</p>
          <button className='pop-button' style={{float:'right', marginRight:'20px'}} onClick={onClose}>Delete</button>
        </div>
      </div>
    );
  }
}

export default Popup;
