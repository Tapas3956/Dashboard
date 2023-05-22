import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faDollarSign, faClipboardList, faComments } from '@fortawesome/free-solid-svg-icons'
import ProgressBar from 'react-bootstrap/ProgressBar';
const CardSection = () => {
  return (
    <>

        <div className="row">
    
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    Earnings (Monthly)</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                            </div>
                            <div className="col-auto">
                                <FontAwesomeIcon icon={faCalendar} className="fa-2x text-gray-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                    Earnings (Annual)</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                            </div>
                            <div className="col-auto">
                                <FontAwesomeIcon icon={faDollarSign} className="fa-2x text-gray-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-info shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                                </div>
                                <div className="row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                    </div>
                                    <div className="col progress-sm">
                                        {/* <div class="progress progress-sm mr-2">
                                        <div class="progress-bar bg-info" role="progressbar"
                                            style={{width:'50%'}} aria-valuenow="50" aria-valuemin="0"
                                            aria-valuemax="100"></div>
                                        </div> */}

                                        <ProgressBar variant="info" now={50} animated  />
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <FontAwesomeIcon icon={faClipboardList} className="fa-2x text-gray-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                    Pending Requests</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                            </div>
                            <div className="col-auto">
                                <FontAwesomeIcon icon={faComments} className="fa-2x text-gray-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      
    </>
  )
}

export default CardSection
