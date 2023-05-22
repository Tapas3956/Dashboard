import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

const ProjectsProgress = () => {
  return (
    <>

        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
            </div>
            <div className="card-body">
                <h4 className="small font-weight-bold">Server Migration <span
                        className="float-right">20%</span></h4>
                <div className="progress1 mb-4">
                    <ProgressBar variant="danger" now={20} animated />
                </div>
                
                <h4 className="small font-weight-bold">Sales Tracking <span
                        className="float-right">40%</span></h4>
                <div className="progress1 mb-4">
                    <ProgressBar variant="warning" now={40} animated />
                </div>
                <h4 className="small font-weight-bold">Customer Database <span
                        className="float-right">60%</span></h4>
                <div className="progress1 mb-4">
                    <ProgressBar variant="primary" now={60} animated />
                </div>
                <h4 className="small font-weight-bold">Payout Details <span
                        className="float-right">80%</span></h4>
                <div className="progress1 mb-4">
                    <ProgressBar variant="info" now={80} animated />
                </div>
                <h4 className="small font-weight-bold">Account Setup <span
                        className="float-right">Complete!</span></h4>
                <div className="progress1 mb-4">
                    <ProgressBar variant="success" now={100} animated />
                </div>
            </div>
        </div>

    
        <div className="row">
            <div className="col-lg-6 mb-4">
                <div className="card bg-primary text-white shadow">
                    <div className="card-body">
                        Primary
                        <div className="text-white-50 small">#4e73df</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mb-4">
                <div className="card bg-success text-white shadow">
                    <div className="card-body">
                        Success
                        <div className="text-white-50 small">#1cc88a</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mb-4">
                <div className="card bg-info text-white shadow">
                    <div className="card-body">
                        Info
                        <div className="text-white-50 small">#36b9cc</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mb-4">
                <div className="card bg-warning text-white shadow">
                    <div className="card-body">
                        Warning
                        <div className="text-white-50 small">#f6c23e</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mb-4">
                <div className="card bg-danger text-white shadow">
                    <div className="card-body">
                        Danger
                        <div className="text-white-50 small">#e74a3b</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mb-4">
                <div className="card bg-secondary text-white shadow">
                    <div className="card-body">
                        Secondary
                        <div className="text-white-50 small">#858796</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mb-4">
                <div className="card bg-light text-black shadow">
                    <div className="card-body">
                        Light
                        <div className="text-black-50 small">#f8f9fc</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                    <div className="card-body">
                        Dark
                        <div className="text-white-50 small">#5a5c69</div>
                    </div>
                </div>
            </div>
        </div>
      
    </>
  )
}

export default ProjectsProgress
